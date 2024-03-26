"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const ShowGroup = () => {
  const session = useSession();
  const [token, setToken] = useState("");
  const [show, setShow] = useState(null);
  const [data, setData] = useState();
  const [students, setStudents] = useState();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/advisor/1`, {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
          },
        })
        .then((res) => setData(res.data));
    };
    if (session.status === "authenticated") {
      setToken(session.data.accessToken);
      fetch();
    }
  }, [session, token]);

  const handleShowMember = async (groupId, index) => {
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
        setStudents(res.data);
      });
  };

  return (
    <div className="flex flex-col gap-5 w-[500px] h-[400px]">
      {data &&
        data.map((d, index) => {
          return (
            <div>
              <div
                className="bg-KMITL text-white px-5 py-3 rounded-md"
                onClick={() => handleShowMember(d.id, index)}
              >
                {d.topic}
              </div>
              <div
                className={`${
                  show == index + 1 ? "" : "hidden"
                } px-5 py-3 bg-[#F5F5F5]`}
              >
                <div>สมาชิก</div>
                <ul className="ml-10">
                  {students &&
                    students.UserGroups.map((student) => {
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
        })}
    </div>
  );
};

export default ShowGroup;
