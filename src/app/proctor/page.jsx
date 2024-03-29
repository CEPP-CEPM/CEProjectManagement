'use client'
import { useState } from "react"
import AnnounceCard from "./AnnounceCard"
import FilterType from "../student/FilterType"
import Paginate from "../student/Paginate"
import CreatePost from "./CreatePost"
import AddUser from "./AddUser"
import CreateSubject from "./CreateSubject"
import DeleteSubject from "./DeleteSubject"
import SelectSubject from "./SelectSubject"

const Student = () => {

    const [type, setType] = useState(null)
    const [subject, setSubject] = useState(null)

    //paginate
    const [datacount, setDatacount] = useState(2)
    const [page, setPage] = useState(1);
    console.log(`endpoint : ${process.env.NEXT_PUBLIC_ENDPOINT}`)
    return (
        <div className="px-7 md:px-40 py-6">
            
            <div className="flex justify-between items-center mb-6 mt-1">
                <div className="flex">
                    <CreateSubject />
                    <DeleteSubject />
                    <SelectSubject subject={subject} setSubject={setSubject}/>
                    <AddUser subject={subject}/> 
                </div>
                <div className="flex">
                    <CreatePost subject={subject}/>
                    <FilterType setType={setType}/>
                </div>
            </div>
            <div className=" shadow-md rounded-xl">
                <div className=" bg-[#FF6E2F] rounded-t-xl py-[0.6rem] px-5 font-bold text-white">{type ? type : 'ทั้งหมด'}</div>
                <div className="flex justify-between bg-[#F5F5F5] py-[0.6rem] px-5 font-bold text-[#595959]">
                    <div>หัวข้อ</div>
                    <div>วันที่ประกาศ</div>
                </div>
                <AnnounceCard setDatacount={setDatacount} page={page} type={type} subject={subject}/>
            </div>
            <Paginate datacount={Math.ceil(datacount/10)} page={page} setPage={setPage}/>
        </div>
    )
}

export default Student
