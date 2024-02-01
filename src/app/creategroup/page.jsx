import { HiUserGroup } from "react-icons/hi";
import DetailGroup from "./DetailGroup";
import BtnCreateGroup from "./BtnCreateGroup";
import BtnJoin from "./BtnJoin";


const CreateGroup = () =>{
    return(
        <div className=" p-7">
            <div className="text-KMITL text-[24px] font-semibold mb-5">กลุ่มโครงงาน</div>
            <div className=" shadow-xl h-[700px] border-2 flex flex-col gap-5 items-center justify-center">
                    <HiUserGroup className="text-[#8F9095] text-[150px]" />
                    <p>คุณยังไม่ได้เข้าร่วมกลุ่มใดๆ</p>
                    <div className="flex gap-3">
                    <BtnCreateGroup/>
                    <BtnJoin/>
                    </div>
            </div>
            {/* <DetailGroup/> */}
        </div>
    )
}

export default CreateGroup