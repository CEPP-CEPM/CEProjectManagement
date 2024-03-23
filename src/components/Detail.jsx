'use client'
import { MdArrowBackIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import ShowFile from "./ShowFile";

const Detail = (props) =>{
    const router = useRouter()

    return(
        <div className=" p-7">
            <div className="text-KMITL flex">
                <button onClick={() => router.back()}>
                    <MdArrowBackIos className="self-center font-bold" />
                </button>
                Back 
            </div>
            <div className="flex justify-between items-center my-6">
                <div className="text-[40px]">{props.data[0].title}</div>
                <div className="bg-KMITL text-white p-5 rounded-[10px]">{props.type}</div>
            </div>
            <div className=" flex gap-20 mb-5">
                <div>create By : {props.data[1].name}</div>
                <div>Date : {date.toDateString()}</div>
                {props.type==='Assignment' ? (
                    <div>Due-Date : {dueAt}</div>
                ): null}
            </div>
            <div className="w-[75%]">{props.data.description}</div>
        </div>
    )
}

export default Detail