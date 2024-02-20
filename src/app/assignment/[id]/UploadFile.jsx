"use client";
import React, { useState, useRef } from "react";

const UploadFile = () => {
  const [file, setFile] = useState([]);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    setFile(Array.from(fileUploaded));
    handleFile(Array.from(fileUploaded))
  };

  const handleFile = (file) => {
    file.map((f) => console.log(f));
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
      {file.map((f) => {
        return <div className="">{f.name}</div>;
      })}
    </div>
  );
};

export default UploadFile;
