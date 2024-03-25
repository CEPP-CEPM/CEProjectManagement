"use client";
import axios from "axios";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, useEffect } from "react";

// icon
import { RiGroupLine } from "react-icons/ri";

const GroupLists = ({ id }) => {
  const [listGroup, setListGroup] = useState();
  const [showMember, setShowMember] = useState();
  const [group, setGroup] = useState();

  useEffect(() => {
    const fetch = async (token) => {
      const group = await axios
        .get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/proctor/${id}`
        )
        .then((res) => setListGroup(res.data));
    };
    fetch();
    // }
  }, []);

  const handleShowMember = async (groupId, index) => {
    if (showMember != index + 1) {
      setShowMember(index + 1);
    } else {
      setShowMember(0);
    }
    await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/proctor/student/${groupId}`)
      .then((res) => {
        setGroup(res.data);
      });
  };

  return (
    <div>
      {listGroup?.map((data, index) => {

        return (
          <div key={data.id}>
            <div className="md:flex justify-between items-center px-1 py-4">
              <div className="flex items-center w-full">
                <RiGroupLine className=" text-[#BDBEC2] w-14 h-14 px-3 text-[25px] border-[3px] rounded-full mx-3" />
                <div className="text-[18px]">{data.Groups.topic}</div>
              </div>
              <div className="flex pr-4 mt-3 md:">
                <label className="px-2 swap swap-rotate">
                  <input
                    type="checkbox"
                    onClick={() => {
                        handleShowMember(data.groupId, index);
                      }}
                  />
                  <MdExpandMore className="swap-off text-2xl font-semibold" />
                  <MdExpandLess className="swap-on text-2xl font-semibold" />
                </label>
              </div>
            </div>
            {showMember == index + 1 && (
              <div className="flex justify-between mx-5 px-1 pb-4">
                <div>
                  สมาชิกกลุ่ม:
                  <ul className="ml-10">
                  {group &&
                        group.UserGroups.map((student) => {
                          return (
                            <li key={student.id}>
                              {student.Users.name} {student.Users.lastname} รหัสนักศึกษา
                            </li>
                          );
                        })}
                  </ul>
                </div>
                <div className=" mr-20">
                  อาจารย์ที่ปรึกษา:
                  <ul className="ml-10">
                    <li>{group?.Users.name} {group?.Users.lastname}</li>
                  </ul>
                </div>
              </div>
            )}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default GroupLists;