'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const AnnounceCard = (props) => {

    const session = useSession()
    const router = useRouter()

    const [announceData, setAnnounceData] = useState([])
    const [token, setToken] = useState("");

    useEffect(() => {
        const fetchPost = async (token, subjectId) => {
            const subject = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/subjects/${subjectId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            const announce = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement/subject/${subject.subjectName}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            const assignment = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/subject/${subject.subjectName}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            if (props.type == 'Assignment') {
                const data = [...assignment].sort((a, b) => {
                    return (a.createAt < b.createAt) ? 1 : ((a.createAt > b.createAt) ? -1 : 0);
                });
                setAnnounceData(data)
            } else if (props.type == 'Announcement') {
                const data = [...announce].sort((a, b) => {
                    return (a.createAt < b.createAt) ? 1 : ((a.createAt > b.createAt) ? -1 : 0);
                });
                setAnnounceData(data)
            } else {
                const data = [...announce, ...assignment].sort((a, b) => {
                    return (a.createAt < b.createAt) ? 1 : ((a.createAt > b.createAt) ? -1 : 0);
                });
                setAnnounceData(data)
            }
        }
        if (session.status === "authenticated") {
            setToken(session.data.accessToken)
            fetchPost(session.data.accessToken, session.data.user.subjectId)
        }
    },[props.type,session])

    const handleRouter = (data) => {
        if (data.dueAt) {
            router.push(`advisor/assignment/${data.id}`)
        } else {
            router.push(`advisor/announcement/${data.id}`)
        }
    }
    
    const display = announceData?.slice(10*(props.page-1), 10*props.page)
    props.setDatacount(announceData.length)

    return (
        <div>
            {display?.map((data) => {
                let date = new Date(data.createAt?.slice(0, 19))
                if (date.getHours() > 16) {
                    date.setDate(date.getDate()+1)
                }
                date.setHours((date.getHours()+7)%24)
                date = date.toDateString()
                return (
                    <div key={data.id} className={`bg-[#F5F5F5] py-[0.6rem] px-5 text-[#595959]`}>
                        <button className='flex justify-between w-full' onClick={() => handleRouter(data)}>
                            <div>{data.title}</div>
                            <div className="hidden md:block">{date}</div>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default AnnounceCard