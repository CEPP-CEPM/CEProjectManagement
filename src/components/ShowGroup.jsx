'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ShowGroup = ({groupData}) => {

  const [show, setShow] = useState(null);
  const [member, setMember] = useState(null);

  const showMember = async (index,groupId) =>{
    setShow(index)
    const resMember = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/${groupId}`)
        .then((res) => res.data);
      setMember(resMember);
  }

  return (
    <div className='flex flex-col gap-5 w-[500px] h-[400px]'>
      {groupData ? (
        groupData.map((d, index) => {
          return (
            <div key={d.id}>
              <div
                className="bg-KMITL text-white px-5 py-3"
                onClick={() => showMember(index,d.id)}
              >
                {d.topic}
              </div>
              <div
                className={`${
                  show == index ? "" : "hidden"
                } px-5 py-3 bg-[#F5F5F5]`}
              >
                <div>สมาชิก</div>
                {member ? member.map((m) =>{
                  return <div key={m.id}>64011109 {m.name} {m.lastname}</div>
                }) : <div>555</div>}
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
