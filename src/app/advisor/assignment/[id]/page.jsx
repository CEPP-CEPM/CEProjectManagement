'use client'
import Detail from "@/components/Detail";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Swal from 'sweetalert2'

const Assignment = ({ params }) => {

    const session = useSession()
    const router = useRouter()

    const [data, setData] = useState()

    useEffect(() => {
        const fetch = async (token) => {
            const assign = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => res.data)
            setData(assign)
        }
        if (session.status === "authenticated") {
            fetch(session.data.accessToken)
        }
    }, [session])

    return (
        <>
            {data && <Detail data={data} type='Assignment'/>}
        </>
    )
}

export default Assignment