'use client'
import GroupLists from "./GroupLists";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios'

//icon
import { IoIosArrowBack } from "react-icons/io";

const page = ({params}) => {

    const router = useRouter()

    const [groupLists, setGroupLists] = useState()

    useEffect(() => {
        const fetch = async () => {
            const group = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/`)
        }
        // fetch()
    }, [])

    return (
        <div className="px-7 md:px-24 lg:px-40 py-6">
            <div className="flex items-center">
                <button onClick={() => router.back()}><IoIosArrowBack className="text-[30px] text-[#FF6E2F] hover:text-black"/></button>
                <h1 className="text-[30px] font-bold text-[#FF6E2F]">{params.assignmentId}</h1>
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