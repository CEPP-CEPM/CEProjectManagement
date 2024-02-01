'use client'

const BtnJoin = () =>{
    return(
        <div>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Join Group</button>
        <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg mb-5">Code</h3>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <div className="modal-action">
            <form method="dialog">
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        </div>
    )
}

export default BtnJoin