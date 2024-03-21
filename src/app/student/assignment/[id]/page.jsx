"use client";
import Detail from "@/components/Detail";
import UploadFile from "@/components/UploadFile";
import axios from "axios";
import BtnSubmit from "./BtnSubmit";
import BtnCancel from "./BtnCancel";
import ShowFileSubmit from "./ShowfileSubmit";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Assignment = ({ params }) => {
  const session = useSession();
  const [data, setData] = useState();
  const [assignmentSubmit, setAssignmentSubmit] = useState();
  const [files, setFiles] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetch = async (token) => {
      const assign = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data);
      setData(assign);
    };
    if (session.status === "authenticated") {
      fetch(session.data.accessToken)
    }
  }, [session]);

  const fetch = async () => {
    const assignsubmit = await axios
      .get(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/student/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
          },
        }
      )
      .then((res) => {
        setAssignmentSubmit(res.data);
        console.log(res.data);
      });
  };

  if (session.status === "authenticated" && token == "") {
    setToken(session.data.accessToken);
    fetch();
  }

  const submitassign = async () => {
    const formdata = new FormData();
    formdata.append("assignmentId", params.id);
    if (files) {
      files.map((f) => {
        formdata.append("files", f);
      });
    }
    try {
      for (const value of formdata.values()) {
        console.log(value);
      }
      axios
        .post(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit`,
          formdata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        // .then((res) => console.log(res));
    } catch (error) {}
  };

  const cancelassign = async () => {
    console.log(assignmentSubmit);
    try {
      axios
        .delete(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/student/${assignmentSubmit.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res));
    } catch (error) {}
  };

  return (
    <>
      {data && (
        <div>
          <Detail data={data} type="Assignment" />
          <div className="text-KMITL p-7">My work</div>
          {assignmentSubmit ? (
            <div className="px-7">
              {assignmentSubmit.AssignmentSubmitFiles && assignmentSubmit.AssignmentSubmitFiles.map( (f) => {
              return <ShowFileSubmit files={f} key={f.id}/>
              })}
              <BtnCancel cancelassign={cancelassign} />
            </div>
          ) : (
            <div>
              <UploadFile setFiles={setFiles} files={files} />
              <BtnSubmit submitassign={submitassign} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Assignment;
