"use client";
import Detail from "@/components/Detail";
import UploadFile from "@/components/UploadFile";
import axios from "axios";
import BtnSubmit from "./BtnSubmit";
import { useState, useEffect } from "react";
import { useSession } from 'next-auth/react';

const Assignment = ({ params }) => {
  const session = useSession();
  const [data, setData] = useState();
  const [files, setFiles] = useState();
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const assign = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/assignment/${params.id}`)
        .then((res) => res.data);
      setData(assign);
    };
    fetch();
  }, []);


  const submitassign = async () => {
    setToken(session.data.accessToken);
    const formdata = new FormData();
    formdata.append("assignmentId", params.id);
    files.map( (f) =>{
      formdata.append("files", f)
    })
    try {
      axios.post(
        `${process.env.NEXT_PUBLIC_ENDPOINT}/assignment-submit`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${session.data.accessToken}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      ).then( (res) => console.log(res))
    } catch (error) {}
  };

  return (
    <>
      {data && (
        <div>
          <Detail data={data} type="Assignment" />
          <div className="text-KMITL p-7">My work</div>
          <UploadFile setFiles={setFiles} files={files} />
          <BtnSubmit submitassign={submitassign}/>
        </div>
      )}
    </>
  );
};

export default Assignment;
