'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ShowGroup = ({groupData}) => {

  const [show, setShow] = useState(null);
  const [member, setMember] = useState();
  const showMember = async (groupId, index) => {
    console.log(groupId);
    if (show != index + 1) {
      setShow(index + 1);
    } else {
      setShow(0);
    }
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/group/proctor/student/${groupId}`
      )
      .then((res) => {
        setMember(res.data);
      });
    };

  return (
    <div className='flex flex-col gap-5 w-[500px] h-[400px]'>
      {groupData ? (
        groupData.map((d, index) => {
          return (
            <div key={d.id}>
              <div
                className="bg-KMITL text-white px-5 py-3 rounded-md"
                onClick={() => showMember(d.id,index)}
              >
                {d.topic}
              </div>
              <div
                className={`${
                  show == index +1 ? "" : "hidden"
                } px-5 py-3 bg-[#F5F5F5] rounded-b-md`}
              >
                <div>สมาชิก</div>
                <ul className="ml-10">
                  {member &&
                    member.UserGroups.map((student) => {
                      return (
                        <li key={student.id}>
                          {student.Users.name} {student.Users.lastname}{" "}
                          รหัสนักศึกษา
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <div>test</div>
      )}
    </div>
  );
};

export default ShowGroup;
