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

    const handleDelete = async () => {
        Swal.fire({
            title: "Do you want to delete post?",
            showDenyButton: true,
            confirmButtonText: "Delete",
            confirmButtonColor: "Red",
            denyButtonText: "cancel",
            denyButtonColor: "gray"
        }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`)
            .then((res) => {
                console.log(`Deleted post with ID ${params.id}`);
            })
            router.back()
        }
        });
    }

    console.log(data);

    return (
        <>
            {data && 
            <>
                <Detail data={data} type='Assignment'/>
                <div className="flex justify-end">
                    <button className="mr-7 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-800"
                            onClick={() => handleDelete()}>
                                Delete
                    </button>
                </div>
            </>
            }
        </>
    )
}

export default Assignment