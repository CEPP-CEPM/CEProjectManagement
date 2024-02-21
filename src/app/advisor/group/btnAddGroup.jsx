"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BtnAddGroup = () => {
  const [member, setMember] = useState([]);
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const addGroup = (data) =>{
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_ENDPOINT}`.concat('/creategroup'),
        {
          topic: data.topic,
          member: data.member
        }
      )
    } catch (error) {
      
    }
  }

  const addMember = async (e) => {
    let arrMember = [];
    for (let i = 0; i < e.target.value; i++) {
      arrMember.push("member." + `${i}`);
      // setMember([])
      // console.log(i)
      // setMember()
    }
    setMember(arrMember);
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
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="bg-KMITL px-3 py-3 text-white font-semibold rounded-t-lg">
              รายละเอียดกลุ่ม
            </div>
            <div className="bg-white p-5 flex flex-col gap-5 rounded-b-lg">
              <div className="flex gap-5 items-center">
                <div>ชื่อหัวข้อ :</div>
                <input
                  {...register("topic")}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-[80%] "
                />
              </div>
              <div className="flex gap-5">
                <div>Tag :</div>
                <select
                  className="border-2 rounded-md"
                  {...register("tag")}
                >
                  <option value="0">select</option>
                  <option value="SW">SW</option>
                  <option value="HW">HW</option>
                  <option value="NW">NW</option>
                </select>
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
                        {...register(m)}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-[80%] "
                      />
                    </div>
                  );
                })}
              </div>
              <input type="submit" />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BtnAddGroup;
