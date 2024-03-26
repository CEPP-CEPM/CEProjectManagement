'use client'
import { useState} from "react"
import AssignmentList from "./AssignmentList"
import SelectSubject from "../SelectSubject"

const Page = () => {

    const [subject, setSubject] = useState(null)

    return (
        <div className="px-7 md:px-24 lg:px-40 py-6">
            <h1 className="text-[30px] font-bold text-[#FF6E2F]">Dashboard</h1>
            <SelectSubject subject={subject} setSubject={setSubject}/>
            <AssignmentList subject={subject}/>
        </div>
    )
}

export default Page