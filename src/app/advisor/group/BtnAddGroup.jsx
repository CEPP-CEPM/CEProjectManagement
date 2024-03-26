"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useSession } from "next-auth/react";
import axios from "axios";

const BtnAddGroup = () => {
  const [member, setMember] = useState([]);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const session = useSession();

  const addGroup = async (data) => {
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/group`,
          {
            topic: data.topic,
            tag: data.tag,
            userGroup: data.userGroup,
          },
          {
            headers: {
              Authorization: `Bearer ${session.data.accessToken}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            handleClose();
          }
        });
    } catch (error) {}
  };

  const addMember = async (e) => {
    let arrMember = [];
    for (let i = 0; i < e.target.value; i++) {
      arrMember.push("userGroup." + `${i}`);
    }
    setMember(arrMember);
  };

  return (
    <div>
      <button
        className="border-[#BDBEC2] border-[1px] py-2 text-[#BDBEC2] rounded-md w-[100px] hover:bg-[#BDBEC2] hover:text-white mr-3"
        onClick={handleOpen}
      >
        +
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{
          backdrop: {
            timeout: 200,
          },
        }}
      >
        <Fade in={open}>
          <div className="bg-white left-[12.5%] md:left-[25%] top-[30%] absolute w-[75%] md:w-[50%] rounded-lg">
            <form onSubmit={handleSubmit((data) => addGroup(data))}>
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
                  <select className="border-2 rounded-md" {...register("tag")}>
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
                  {member.map((m, index) => {
                    return (
                      <div className="flex gap-5 items-center" key={index}>
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
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default BtnAddGroup;
