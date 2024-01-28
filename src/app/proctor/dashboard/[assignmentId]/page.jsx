'use client'
import { useState } from "react";
import GroupLists from "./GroupLists";


const page = ({params}) => {

    return (
        <div className="px-40 py-6">
            <h1 className="text-[30px] font-bold text-[#FF6E2F]">Assignment {params.assignmentId}</h1>
            <div className=" mt-8 px-28">
                <div className="font-bold text-[20px] mb-1">Group name</div>
                <hr/>
                <GroupLists />
            </div>
        </div>
    )
}

export default page