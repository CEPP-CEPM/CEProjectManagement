'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

// icon
import { MdOutlineAssignment } from "react-icons/md";

const AssignmentCard = () => {
    const router = useRouter()

    const [assignment, setAssignment] = useState([{id:1, topic:'Assignment 1'},{id:2, topic:'Assignment 2'},{id:3, topic:'Assignment 3'}])

    return (
        <div>
            {assignment.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="px-1 py-4">
                            <button className="flex items-center w-full" onClick={() => router.push(`/proctor/dashboard/${data.id}`)}>
                                <MdOutlineAssignment className=" text-[#BDBEC2] w-14 h-14 px-1 text-[25px] border-[3px] rounded-full mx-3"/>
                                <div className="text-[18px]">{data.topic}</div>
                            </button>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default AssignmentCard