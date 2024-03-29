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
        const fetchPost = async (token) => {
            const announce = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            const assignment = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            if (props.type == 'Assignment') {
                setAnnounceData([...assignment])
            } else if (props.type == 'Announcement') {
                setAnnounceData([...announce])
            } else {
                setAnnounceData([...announce, ...assignment])
            }
        }
        if (session.status === "authenticated") {
            setToken(session.data.accessToken)
            fetchPost(session.data.accessToken)
        }
    },[props.type,session])

    const handleRouter = (data) => {
        if (data.dueAt) {
            router.push(`student/assignment/${data.id}`)
        } else {
            router.push(`student/announcement/${data.id}`)
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