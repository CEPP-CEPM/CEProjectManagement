"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Group = () => {
  const session = useSession();
  const [token, setToken] = useState("");
  const [group, setGroup] = useState();
  const [checkJoin, setCheckJoin] = useState();

  const fetch = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/member`, {
        headers: {
          Authorization: `Bearer ${session.data.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGroup(res.data);
      });

    await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/check`, {
        headers: {
          Authorization: `Bearer ${session.data.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCheckJoin(res.data);
      });
  };

  useEffect(() => {
    if (session.status == "authenticated") {
      setToken(session.data.accessToken);
      fetch();
    }
  }, [session.status]);

  const acceptgroup = async () => {
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/invite`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) fetch();
      });
  };

  const rejectgroup = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/invite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="text-KMITL font-bold text-[40px] my-10">My Group</div>
        {group?  <div className="w-[500px] bg-[#F5F3F3] shadow-lg rounded-lg px-5 py-3">
          <div>หัวข้อโครงงาน : {group.topic}</div>
          <div>
            อาจารย์ที่ปรึกษา : {group.Users.name} {group?.Users.lastname}
          </div>
          <div>รายชื่อสมาชิก : </div>
          {group.UserGroups.map((member) => {
            return (
              <div key={member.id}>
                {member.Users.name} {member.Users.lastname}
              </div>
            );
          })}
          {!checkJoin && (
            <div className="flex justify-end gap-5 mt-3">
              <button className="btn btn-error" onClick={rejectgroup}>
                Reject
              </button>
              <button className="btn btn-success" onClick={acceptgroup}>
                Accept
              </button>
            </div>
          )}
        </div>: ''}
       
      </div>
    </div>
  );
  
};

export default Group;
