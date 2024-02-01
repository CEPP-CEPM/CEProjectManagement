import Detail from "@/components/Detail";
import UploadFile from "./UploadFile";


const Assignment = () => {
    return (
        <div>
            <Detail head={"head"} name={"Nutchapon Tripat"} date={"17/1/2024 1:00:01 AM"}/>
            <div className="text-KMITL p-7">My work</div>
            <UploadFile/>
        </div>
    )
}

export default Assignment