'use client'
import React, { useState } from 'react';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // You can perform further actions with the selected file, such as uploading it to a server.
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Perform additional actions, such as sending the file to a server.
    } else {
      console.log('No file selectedss');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Add File</button>
    </div>
  );
};

export default UploadFile
