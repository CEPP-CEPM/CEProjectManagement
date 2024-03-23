"use client";
import React, { useState, useRef } from "react";

const UploadFile = (props) => {

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    props.setFiles(Array.from(fileUploaded))
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
        return <div className="">{f.name}</div>;
      })}
    </div>
  );
};

export default UploadFile;
