'use client'
import Detail from "@/components/Detail";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import CreatePost from "../../CreatePost";
import Swal from 'sweetalert2'

const Assignment = ({ params }) => {

    const session = useSession()
    const router = useRouter()

    const [data, setData] = useState()
    const [edit, setEdit] = useState(true)

    useEffect(() => {
        const fetch = async (token) => {
            const assign = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => {
                setData(res.data)
            })
        }
        if (session.status === "authenticated") {
            fetch(session.data.accessToken)
        }
        setEdit(true)
    }, [session,edit])

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
            axios.delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`,{
                headers: {
                    Authorization: `Bearer ${session.data.accessToken}`,
                },
            })
            .then((res) => {
                console.log(`Deleted post with ID ${params.id}`);
            })
            router.back()
        }
        });
    }

    return (
        <>
            {data && 
            <>
                <Detail data={data} type='Assignment'/>
                <div className="flex justify-end">
                    <CreatePost edit={edit} setEdit={setEdit} title={data[0].title} description={data[0].description} dueAt={data[0].dueAt} type={0} assignmentId={params.id}/>
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