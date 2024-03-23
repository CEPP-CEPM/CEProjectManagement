"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// icon
import { MdOutlineAssignment } from "react-icons/md";
import axios from "axios";

const AssignmentCard = (props) => {
  const router = useRouter();

  const session = useSession()
  const [token, setToken] = useState()
  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    const fetchAssignment = async () => {
      const assignment = await axios.get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${props.subject ? 'subject/'+props.subject : ''}`,
        {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
          },
        }
      ).then((res) => res.data);
      setAssignment(assignment);
    };
    if (session.status === "authenticated") {
        setToken(session.data.accessToken)
        fetchAssignment()
    }
  }, [session, props.subject]);

  console.log(assignment);

  return (
    <div>
      {assignment.length > 0 && assignment.map((data) => {
        return (
          <div key={data.id}>
            <div className="px-1 py-4">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => router.push(`/advisor/dashboard/${data.id}`)}
              >
                <div className="flex items-center">
                  <MdOutlineAssignment className=" text-[#BDBEC2] w-10 h-10 md:w-14 md:h-14 px-1 text-[25px] border-[3px] rounded-full mx-3" />
                  <div className="text-[18px]">{data.title}</div>
                </div>
                <div className="text-[14px]">{data.createAt.slice(0, 10)}</div>
              </button>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AssignmentCard;
