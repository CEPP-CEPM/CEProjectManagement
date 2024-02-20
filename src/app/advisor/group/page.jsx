import BtnAddGroup from "./btnAddGroup"

const Group = () =>{
    return(
        <div className="flex flex-col items-center">
            <div>
                <div className="flex justify-between">
                    <div>Manage Group</div>
                    <BtnAddGroup/>
                </div>
                <div className="w-[500px] h-[400px] border-2">
                </div>
            </div>
        </div>
    )
}

export default Group