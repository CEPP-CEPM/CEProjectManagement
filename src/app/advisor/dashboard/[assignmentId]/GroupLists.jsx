'use client'
import { useState } from "react";
import Swal from 'sweetalert2'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

// icon
import { RiGroupLine } from "react-icons/ri";

const GroupLists = () => {

    const [students, setStudents] = useState([{id:1, group:'group 1'},{id:2, group:'group 2'},{id:3, group:'group 3'}])

    const handleReject = () => {
        Swal.fire({
            title: "Do you want to reject this work?",
            showDenyButton: true,
            confirmButtonText: "Reject",
            confirmButtonColor: "Red",
            denyButtonText: "cancel",
            denyButtonColor: "gray"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Reject!", "", "success");
        }
        });
    }

    const handleAccept = () => {
        Swal.fire({
            title: "Do you want to accept this work?",
            showDenyButton: true,
            confirmButtonText: "confirm",
            confirmButtonColor: "green",
            denyButtonText: "cancel",
            denyButtonColor: "gray"
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Accept!", "", "success");
        }
        });
    }

    return (
        <div>
            {students.map((data) => {
                const [expanded, setExpanded] = useState(false)

                return (
                    <div key={data.id}>
                        <div className="md:flex justify-between items-center px-1 py-4">
                            <div className="flex items-center w-full">
                                <RiGroupLine className=" text-[#BDBEC2] w-14 h-14 px-3 text-[25px] border-[3px] rounded-full mx-3"/>
                                <div className="text-[18px]">{data.group}</div>
                            </div>
                            <div className="flex pr-4 mt-3 md:">
                                <button className="mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-800"
                                        onClick={() => handleReject()}>
                                            Reject
                                </button>
                                <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-800"
                                        onClick={() => handleAccept()}>
                                            Accept
                                </button>
                                <label className="px-2 swap swap-rotate">
                                    <input
                                    type="checkbox"
                                    onClick={() => {
                                        setExpanded(!expanded)
                                    }}
                                    />
                                    <MdExpandMore className="swap-off text-2xl font-semibold" />
                                    <MdExpandLess className="swap-on text-2xl font-semibold" />
                                </label>
                            </div>
                        </div>
                        {expanded && 
                            <div className="flex justify-between mx-5 px-1 pb-4">
                                <div>
                                    สมาชิกกลุ่ม:
                                    <ul className="ml-10">
                                        <li>ชื่อ นามสกุล รหัสนักศึกษา</li>
                                        <li>ชื่อ นามสกุล รหัสนักศึกษา</li>
                                        <li>ชื่อ นามสกุล รหัสนักศึกษา</li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}

export default GroupLists