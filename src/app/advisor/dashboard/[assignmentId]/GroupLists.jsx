"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useSession } from "next-auth/react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

// icon
import { RiGroupLine } from "react-icons/ri";

const GroupLists = ({ assignId }) => {
  const session = useSession();
  const [data, setData] = useState();
  const [token, setToken] = useState("");
  const [showMember, setShowMember] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetch = async () => {
      const groupSubmit = await axios
        .get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/advisor/${assignId}`,
          {
            headers: {
              Authorization: `Bearer ${session.data.accessToken}`,
            },
          }
        )
        .then((res) => res.data);
      setData(groupSubmit);
    };
    if (session.status === "authenticated") {
      setToken(session.data.accessToken);
      fetch();
    }
  }, [session.status]);

  // const fetch = async () => {
  //   const groupSubmit = await axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/advisor/${assignId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${session.data.accessToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setData(res.data);
  //       console.log(res.data);
  //     });
  // };

  // if (session.status === "authenticated" && token == "") {
  //   setToken(session.data.accessToken);
  //   fetch();
  // }

  const handleShowMember = async (groupId, index) => {
    if (showMember != index + 1) {
      setShowMember(index + 1);
    } else {
      setShowMember(0);
    }
    await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/student/${groupId}`)
      .then((res) => {
        setStudents(res.data);
        // console.log(res.data)
      });
  };

  const handleReject = (assignSubmitId) => {
    Swal.fire({
      title: "Do you want to reject this work?",
      showDenyButton: true,
      confirmButtonText: "Reject",
      confirmButtonColor: "Red",
      denyButtonText: "cancel",
      denyButtonColor: "gray",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/advisor/${assignSubmitId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        Swal.fire("Reject!", "", "success");
      }
    });
  };

  const handleAccept = (assignSubmitId) => {
    Swal.fire({
      title: "Do you want to accept this work?",
      showDenyButton: true,
      confirmButtonText: "confirm",
      confirmButtonColor: "green",
      denyButtonText: "cancel",
      denyButtonColor: "gray",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/advisor/${assignSubmitId}`, {}, {headers:{Authorization: `Bearer ${token}`}}
        );
        Swal.fire("Accept!", "", "success");
      }
    });
  };

  return (
    <div>
      {data &&
        data.map((data, index) => {
          return (
            <div key={data.id}>
              <div className="md:flex justify-between items-center px-1 py-4">
                <div className="flex items-center w-full">
                  <RiGroupLine className=" text-[#BDBEC2] w-14 h-14 px-3 text-[25px] border-[3px] rounded-full mx-3" />
                  <div className="text-[18px]">{data.Groups.topic}</div>
                </div>
                <div className="flex pr-4 mt-3 md:">
                  <button
                    className="mr-4 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-800"
                    onClick={() => handleReject(data.id)}
                  >
                    Reject
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-800"
                    onClick={() => handleAccept(data.id)}
                  >
                    Accept
                  </button>
                  <label className="px-2 swap swap-rotate">
                    <input
                      type="checkbox"
                      onClick={() => {
                        handleShowMember(data.Groups.id, index);
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
                      {students &&
                        students.map((student) => {
                          return (
                            <li key={student.id}>
                              {student.name} {student.lastname} รหัสนักศึกษา
                            </li>
                          );
                        })}
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
