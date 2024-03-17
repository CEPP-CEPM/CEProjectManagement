'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const AnnounceCard = (props) => {
    const router = useRouter()

    const [announceData, setAnnounceData] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const announce = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement`)
                .then((res) => res.data)
            const assignment = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment`)
                .then((res) => res.data)
            if (props.type == 'Assignment') {
                setAnnounceData([...assignment])
            } else if (props.type == 'Announcement') {
                setAnnounceData([...announce])
            } else {
                setAnnounceData([...announce, ...assignment])
            }
        }
        fetchPost()
    },[props.type])

    const handleRouter = (data) => {
        if (data.dueAt) {
            router.push(`proctor/assignment/${data.id}`)
        } else {
            router.push(`proctor/announcement/${data.id}`)
        }
    }
    
    const display = announceData.slice(10*(props.page-1), 10*props.page)
    props.setDatacount(announceData.length)

    return (
        <div>
            {display.map((data) => {
                return (
                    <div key={data.id} className={`bg-[#F5F5F5] py-[0.6rem] px-5 text-[#595959]`}>
                        <button className='flex justify-between w-full' onClick={() => handleRouter(data)}>
                            <div>{data.title}</div>
                            <div className="hidden md:block">{data.createAt.slice(0, 10)}</div>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default AnnounceCard