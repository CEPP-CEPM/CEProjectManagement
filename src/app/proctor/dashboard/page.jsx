import AssignmentList from "./AssignmentList"

const page = () => {
    return (
        <div className="px-40 py-6">
            <h1 className="text-[30px] font-bold text-[#FF6E2F]">Dashboard</h1>
            <AssignmentList />
        </div>
    )
}

export default page