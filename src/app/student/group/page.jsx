"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Group = () => {
  const session = useSession();
  const [token, setToken] = useState("");
  const [group, setGroup] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/member/1`, {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setGroup(res.data);
        });
    };
    if (session.status == "authenticated") {
      setToken(session.data.accessToken);
      fetch();
    }
  }, [session.status]);

  const acceptgroup =  async() =>{
    await axios.patch(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/join`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data)

      )
  }

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="text-KMITL font-bold text-[40px] my-10">My Group</div>
        <div className="w-[500px] bg-[#F5F3F3] shadow-lg rounded-lg px-5 py-3">
          <div>หัวข้อโครงงาน : {group?.topic}</div>
          <div>
            อาจารย์ที่ปรึกษา : {group?.Users.name} {group?.Users.lastname}
          </div>
          <div>รายชื่อสมาชิก : </div>
          {group?.UserGroups.map((member) => {
            return (
              <div key={member.id}>
                {member.Users.name} {member.Users.lastname}
              </div>
            );
          })}
          <div>
            <button className="btn btn-error">Reject</button>
            <button className="btn btn-success" onClick={acceptgroup}>Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
