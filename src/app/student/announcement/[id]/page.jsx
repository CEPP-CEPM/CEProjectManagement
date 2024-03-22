'use client'
import Detail from "@/components/Detail";
import { useState, useEffect } from "react";
import axios from 'axios'

const Announcement = ({ params }) => {

    const [data, setData] = useState()

    useEffect(() => {
        const fetch = async () => {
            const announce = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement/${params.id}`)
                .then((res) => res.data)
            console.log(announce);
            setData(announce)
        }
        fetch()
    }, [])

    return (
        <div>
            {data && <Detail data={data} type='announcement'/>}
        </div>
    )
}

export default Announcement