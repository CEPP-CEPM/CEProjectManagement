import AssignmentCard from "./AssignmentCard"

const AssignmentList = (props) => {
    return (
        <div className=" mt-8 px-3 md:px-10 lg:px-28">
            <div className="font-bold text-[24px] mb-1">Assignment</div>
            {/* <div className="flex justify-between pl-20 font-bold text-[18px]">
                <div>title</div> */}
            <div className="flex justify-end">Create Date</div>
            {/* </div> */}
            <hr/>
            <AssignmentCard subject={props.subject}/>
        </div>
    )
}

export default AssignmentList