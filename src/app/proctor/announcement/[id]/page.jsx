'use client'
import Detail from "@/components/Detail";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2'
import { useSession } from "next-auth/react";
import CreatePost from "../../CreatePost";

const Announcement = ({ params }) => {

    const session = useSession()
    const router = useRouter()

    const [data, setData] = useState()
    const [edit, setEdit] = useState(true)

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
        setEdit(true)
    }, [session, edit])

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
            axios.delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/announcement/${params.id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
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
                    <Detail data={data} type='announcement'/>
                    <div className="flex justify-end">
                    <CreatePost edit={edit} setEdit={setEdit} title={data[0].title} description={data[0].description} type={1} announcementId={params.id}/>
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

export default Announcement