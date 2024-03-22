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
        return <div className="" key={f.name}>{f.name}</div>;
      })}
    </div>
  );
};

export default UploadFile;
