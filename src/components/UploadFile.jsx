"use client";
import React, { useState, useRef } from "react";

const UploadFile = (props) => {

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    const newfile = Array.from(fileUploaded)
    if (!props.files) {
      props.setFiles(newfile)
    }else{
      props.setFiles([...props.files,...newfile])
    }
  };

  const removeFile = (files) => {
    const newFiles = [...props.files];
    newFiles.splice(newFiles.indexOf(files), 1);
    props.setFiles(newFiles);
  };


  return (
    <div className="px-10">
      <button className="button-upload" onClick={handleClick}>
        + Add file
      </button>
      <input
        type="file"
        multiple
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      {props.files && props.files.map((f) => {
        return <div className="bg-[#D2D2D2] h-[40px] flex items-center justify-between px-5 w-[50%] mt-5 rounded-lg" key={f.name}>
          <div>{f.name}</div>
          <button onClick={()=>removeFile(f)}>X</button>
          </div>;
      })}
    </div>
  );
};

export default UploadFile;
