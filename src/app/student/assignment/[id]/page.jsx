"use client";
import Detail from "@/components/Detail";
import UploadFile from "@/components/UploadFile";
import axios from "axios";
import BtnSubmit from "./BtnSubmit";
import BtnCancel from "./BtnCancel";
import ShowFileSubmit from "./ShowfileSubmit";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import BtnApprove from "./BtnApprove";

const Assignment = ({ params }) => {
  const session = useSession();
  const [data, setData] = useState();
  const [assignmentSubmit, setAssignmentSubmit] = useState();
  const [files, setFiles] = useState();
  const [token, setToken] = useState("");

  const fetch = async () => {
    const assign = await axios
      .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${session.data.accessToken}`,
        },
      })
      .then((res) => res.data);
    setData(assign);
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
    });
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      setToken(session.data.accessToken)
      fetch()
    }
  }, [session]);

  // const fetch = async () => {
  //   console.log(session.data.accessToken);
  //   const assign = await axios
  //     .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`)
  //     .then((res) => res.data);
  //   setData(assign);
  //   const assignsubmit = await axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit/student/${params.id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${session.data.accessToken}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setAssignmentSubmit(res.data);
  //     });
  // };

  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     setToken(session.data.accessToken);
  //     fetch();
  //   }
  // }, [session.status]);

  const submitassign = async () => {
    const formdata = new FormData();
    formdata.append("assignmentId", params.id);
    if (files) {
      files.map((f) => {
        formdata.append("files", f);
      });
    }
    try {
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
        .then((res) => {
          if (res.status === 201) {
            fetch();
          }
        });
    } catch (error) {}
  };

  const cancelassign = async () => {
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
        .then((res) => {
          if (res.status === 200) {
            fetch();
          }
        });
    } catch (error) {}
  };
  // console.log(data);

  return (
    <>
      {data && (
        <div>
          <Detail data={data} type="Assignment" />
          <div className="text-KMITL p-7">My work</div>
          {assignmentSubmit ? (
            <div className="px-7">
              {assignmentSubmit.AssignmentSubmitFiles &&
                assignmentSubmit.AssignmentSubmitFiles.map((f) => {
                  return <ShowFileSubmit files={f} key={f.id} />;
                })}
              {assignmentSubmit.status == "APPROVE" ? (
                <BtnApprove />
              ) : (
                <BtnCancel cancelassign={cancelassign} />
              )}
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
