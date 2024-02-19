'use client'

const BtnCreateGroup = () =>{
    return(
        <div>
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Create Group</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="w-[50%] rounded-lg">
            <div className="bg-KMITL px-3 py-3 text-white font-semibold rounded-t-lg">รายละเอียดกลุ่ม</div>
            <div className="bg-white p-5 flex flex-col gap-5 rounded-b-lg">
                <div className="flex gap-5 items-center">
                    <div>ชื่อกลุ่ม :</div>
                    <input type="text" placeholder="Name" className="input input-bordered w-[80%] " />
                </div>
                <div className="flex gap-5 items-center">
                    <div>ปีการศึกษา :</div>
                    <input type="text" placeholder="year" className="input input-bordered w-[80%] " />
                </div>
                <div className="flex gap-5">
                    <div>จำนวนสมาชิก :</div>
                    <select className="border-2 rounded-md">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div className="flex gap-5">
                    <div>สถานะกลุ่ม :</div>
                    <div>ยังไม่มีหัวข้อ</div>
                </div>
                <div className="flex gap-5">
                    <div>การร้องขอทำโครงงาน :</div>
                    <div className="flex flex-col gap-3">
                        <select className="border-2 rounded-md">
                            <option value="2">ชื่ออาจารย์1</option>
                            <option value="3">ชื่ออาจารย์2</option>
                            <option value="4">ชื่ออาจารย์3</option>
                        </select>
                        <select className="border-2 rounded-md">
                            <option value="2">ชื่อโปรเจด1</option>
                            <option value="3">ชื่อโปรเจด2</option>
                            <option value="4">ชื่อโปรเจด3</option>
                        </select>
                    </div>
                </div>
            <div className="modal-action">
                <form method="dialog">
                    <button className="btn">Close</button>
                </form>
            </div>
            </div>
        </div>
        </dialog>
        </div>
    )
}

export default BtnCreateGroup