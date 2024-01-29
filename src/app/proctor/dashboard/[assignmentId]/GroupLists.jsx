'use client'
import { useState } from "react";

// icon
import { RiGroupLine } from "react-icons/ri";

const GroupLists = () => {

    const [students, setStudents] = useState([{id:1, group:'group 1'},{id:2, group:'group 2'},{id:3, group:'group 3'}])

    return (
        <div>
            {students.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="md:flex justify-between items-center px-1 py-4">
                            <div className="flex items-center w-full">
                                <RiGroupLine className=" text-[#BDBEC2] w-14 h-14 px-3 text-[25px] border-[3px] rounded-full mx-3"/>
                                <div className="text-[18px]">{data.group}</div>
                            </div>
                            <div className="flex pr-4 mt-3 md:">
                                <button className="mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-800">Reject</button>
                                <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-800">Accept</button>
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default GroupLists