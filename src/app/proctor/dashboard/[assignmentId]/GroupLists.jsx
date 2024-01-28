'use client'
import { useState } from "react";

// icon
import { MdOutlineAssignment } from "react-icons/md";

const GroupLists = () => {

    const [students, setStudents] = useState([{id:1, group:'group 1'},{id:2, group:'group 2'},{id:3, group:'group 3'}])

    return (
        <div>
            {students.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="px-1 py-4">
                            <button className="flex items-center w-full">
                                <MdOutlineAssignment className=" text-[#BDBEC2] w-14 h-14 px-1 text-[25px] border-[3px] rounded-full mx-3"/>
                                <div className="text-[18px]">{data.group}</div>
                            </button>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default GroupLists