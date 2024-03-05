'use client'
import Detail from "@/components/Detail";
import axios from 'axios'
import { useState, useEffect } from "react";

const Assignment = ({ params }) => {

    const [data, setData] = useState()

    useEffect(() => {
        const fetch = async () => {
            const assign = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`)
                .then((res) => res.data)
            setData(assign)
        }
        fetch()
    }, [])

    return (
        <>
            {data && <Detail data={data} type='Assignment'/>}
        </>
    )
}

export default Assignment