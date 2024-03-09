'use client'
import { useState } from "react"
import AnnounceCard from "./AnnounceCard"
import FilterType from "../student/FilterType"
import Paginate from "../student/Paginate"
import CreatePost from "./CreatePost"
import AddUser from "./AddUser"

const Student = () => {

    const [type, setType] = useState(null)

    //paginate
    const [datacount, setDatacount] = useState(2)
    const [page, setPage] = useState(1);

    return (
        <div className="px-7 md:px-40 py-6">
            <div className="flex justify-between items-center mb-6 mt-1">
                <AddUser />
                <div className="flex">
                    <CreatePost />
                    <FilterType setType={setType}/>
                </div>
            </div>
            <div className=" shadow-md rounded-xl">
                <div className=" bg-[#FF6E2F] rounded-t-xl py-[0.6rem] px-5 font-bold text-white">{type ? type : 'ทั้งหมด'}</div>
                <div className="flex justify-between bg-[#F5F5F5] py-[0.6rem] px-5 font-bold text-[#595959]">
                    <div>หัวข้อ</div>
                    <div>วันที่ประกาศ</div>
                </div>
                <AnnounceCard setDatacount={setDatacount} page={page} type={type}/>
            </div>
            <Paginate datacount={Math.ceil(datacount/10)} page={page} setPage={setPage}/>
        </div>
    )
}

export default Student
