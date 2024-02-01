import { MdArrowBackIos } from "react-icons/md";

const Detail = (props) =>{
    return(
        <div className=" p-7">
            <div className="text-KMITL flex">
            <MdArrowBackIos className="self-center font-bold" />
            Back
            </div>
            <div className="flex justify-between items-center my-6">
                <div className="text-[40px]">{props.head}</div>
                <div className="bg-KMITL text-white p-5 rounded-[10px]">{props.type}</div>
            </div>
            <div className=" flex gap-20 mb-5">
                <div>{props.name}</div>
                <div>{props.date}</div>
            </div>
            <div className="w-[75%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ipsam nobis dolorem quaerat sunt maiores enim. Cupiditate placeat, tenetur distinctio, id odio sint dolore vitae laudantium, esse nam sunt.</div>
        </div>
    )
}

export default Detail