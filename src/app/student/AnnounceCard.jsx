'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

const AnnounceCard = (props) => {
    const [announceData, setAnnounceData] = useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const announce = await axios.get('http://localhost:3001/announcement')
                .then((res) => res.data)
            const assignment = await axios.get('http://localhost:3001/assignment')
                .then((res) => res.data)
                setAnnounceData([...announce, ...assignment])
        }
        fetchPost()
    },[])
    
    const display = announceData.slice(10*(props.page-1), 10*props.page)
    // console.log(display);

    props.setDatacount(announceData.length)

    return (
        <div>
            {display.map((data) => {
                return (
                    <div key={data.id} className={`flex justify-between bg-[${data.id%2 ? '#FFFFFF' : '#F5F5F5'}] py-[0.6rem] px-5 text-[#595959]`}>
                        <div>{data.title}</div>
                        <div className="hidden md:block">{data.createAt.slice(0, 10)}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default AnnounceCard