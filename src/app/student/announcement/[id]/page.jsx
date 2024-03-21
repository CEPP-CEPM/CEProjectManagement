'use client'
import Detail from "@/components/Detail";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from 'axios'

const Announcement = ({ params }) => {

    const session = useSession()

    const [data, setData] = useState()

    useEffect(() => {
        const fetch = async (token) => {
            const announce = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement/${params.id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            setData(announce)
        }
        if (session.status === "authenticated") {
            fetch(session.data.accessToken)
        }
    }, [session])

    return (
        <div>
            {data && <Detail data={data} type='announcement'/>}
        </div>
    )
}

export default Announcement