"use client";
import { useState } from "react";

const BtnAddGroup = () => {
  const [member, setMember] = useState([]);

  const addMember = async (e) => {
    let arrMember = [];
    for (let i = 0; i < e.target.value; i++) {
      arrMember.push("");
      // setMember([])
      // console.log(i)
      // setMember()
    }
    setMember(arrMember);
    console.log(member);
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        +
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="w-[60%] rounded-lg">
          <div className="bg-KMITL px-3 py-3 text-white font-semibold rounded-t-lg">
            รายละเอียดกลุ่ม
          </div>
          <div className="bg-white p-5 flex flex-col gap-5 rounded-b-lg">
            <div className="flex gap-5 items-center">
              <div>ชื่อหัวข้อ :</div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-[80%] "
              />
            </div>
            <div className="flex gap-5">
              <div>จำนวนสมาชิก :</div>
              <select
                className="border-2 rounded-md"
                onChange={(e) => addMember(e)}
              >
                <option value="0">select</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="flex flex-col gap-5">
              {member.map((m) => {
                return (
                  <div className="flex gap-5 items-center">
                    <div>รหัสนักศึกษา :</div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered w-[80%] "
                    />
                  </div>
                );
              })}
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
  );
};

export default BtnAddGroup;
