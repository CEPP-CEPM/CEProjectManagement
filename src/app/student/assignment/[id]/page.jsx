'use client'
import Detail from "@/components/Detail";
import UploadFile from "@/components/UploadFile";
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
            {data && 
                <div>
                    <Detail data={data} type='Assignment'/>
                    <div className="text-KMITL p-7">My work</div>
                    <UploadFile/>
                </div>
            
            }
        </>
    )
}

export default Assignment