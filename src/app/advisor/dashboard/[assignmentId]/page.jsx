'use client'
import GroupLists from "./GroupLists";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from 'axios'

//icon
import { IoIosArrowBack } from "react-icons/io";

const page = ({params}) => {

    const router = useRouter()
    const session = useSession()

    const [assignment, setAssignment] = useState(null)

    useEffect(() => {
        const fetch = async (token) => {
            const fetchAssign = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.assignmentId}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((res) => {setAssignment(res.data[0].title)})
        }
        if (session.status === "authenticated") {
            fetch(session.data.accessToken)
        }
    }, [session])

    console.log(assignment);

    return (
        <div className="px-7 md:px-24 lg:px-40 py-6">
            <div className="flex items-center">
                <button onClick={() => router.back()}><IoIosArrowBack className="text-[30px] text-[#FF6E2F] hover:text-black"/></button>
                <h1 className="text-[30px] font-bold text-[#FF6E2F]">{assignment}</h1>
            </div>
            <div className=" mt-8 px-3 md:px-10 lg:px-28">
                <div className="font-bold text-[20px] mb-1">Group name</div>
                <hr/>
                <GroupLists assignId={params.assignmentId} />
            </div>
        </div>
    )
}

export default page