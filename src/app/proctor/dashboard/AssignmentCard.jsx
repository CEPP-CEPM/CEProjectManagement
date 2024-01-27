// icon
import { MdOutlineAssignment } from "react-icons/md";

const AssignmentCard = () => {
    return (
        <div>
            <div className="px-1 py-4">
                <button className="flex items-center w-full">
                    <a href="">
                        <MdOutlineAssignment className=" text-[#BDBEC2] w-14 h-14 px-1 text-[25px] border-[3px] rounded-full mx-3"/>
                        <div className="text-[18px]">Assignment 1</div>
                    </a>
                </button>
            </div>
            <hr/>
        </div>
    )
}

export default AssignmentCard