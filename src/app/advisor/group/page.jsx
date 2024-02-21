import BtnAddGroup from "./BtnAddGroup"
import ShowGroup from "./ShowGroup"

const Group = () =>{


    return(
        <div className="flex flex-col items-center">
            <div>
                <div className="flex items-center justify-between my-5">
                    <div>Manage Group</div>
                    <BtnAddGroup/>
                </div>
                <ShowGroup/>
            </div>
        </div>
    )
}

export default Group