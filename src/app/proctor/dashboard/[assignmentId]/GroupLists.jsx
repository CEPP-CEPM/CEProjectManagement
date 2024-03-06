'use client'
import { useState } from "react";
import { MdExpandMore, MdExpandLess } from 'react-icons/md'

// icon
import { RiGroupLine } from "react-icons/ri";

const GroupLists = () => {

    const [students, setStudents] = useState([{id:1, group:'group 1'},{id:2, group:'group 2'},{id:3, group:'group 3'}])

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
                                <div className=" mr-20">
                                    อาจารย์ที่ปรึกษา:
                                    <ul className="ml-10">
                                        <li>ชื่อ นามสกุล</li>
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