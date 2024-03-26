const ShowFile = ({ file }) => {
  return (
    <div className="bg-[#D2D2D2] h-[40px] flex items-center justify-between px-5 w-[50%] mt-5 rounded-lg">
      <a href={`${process.env.MINIO_ENDPOINT}/${file.bucket}/${file.name}`}>
        {file.originalName}
      </a>
    </div>
  );
};

export default ShowFile;
