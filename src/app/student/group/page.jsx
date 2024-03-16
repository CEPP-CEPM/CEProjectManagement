"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Group = () => {
  const session = useSession();
  const [token, setToken] = useState("");
  const [group, setGroup] = useState()

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
            setGroup(res.data)});
    };
    if (session.status == "authenticated") {
      setToken(session.data.accessToken);
      fetch();
    }
  }, [session.status]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <div>My Group</div>
        <div className="w-[500px] h-[400px] border-2">
          <div>{group?.topic}</div>
          <div>{group?.Users.name} {group?.Users.lastname}</div>
          {group?.UserGroups.map((member)=>{
                return<div key={member.id}>{member.Users.name} {member.Users.lastname}</div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Group;
