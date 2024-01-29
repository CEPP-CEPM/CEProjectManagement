import AssignmentCard from "./AssignmentCard"

const AssignmentList = () => {
    return (
        <div className=" mt-8 px-3 md:px-10 lg:px-28">
            <div className="font-bold text-[20px] mb-1">Assignment</div>
            <hr/>
            <AssignmentCard />
        </div>
    )
}

export default AssignmentList