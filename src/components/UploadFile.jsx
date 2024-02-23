"use client";
import React, { useState, useRef } from "react";

const UploadFile = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded);
  };

  const handleFile = (file) => {
    props.setFiles(file)
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
    </div>
  );
};

export default UploadFile;
