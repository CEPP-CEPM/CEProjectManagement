const ShowFile = ({ file }) => {
  return (
    <div>
      <a href={`http://localhost:9000/${file.bucket}/${file.name}`}>
        {file.originalName}
      </a>
    </div>
  );
};

export default ShowFile;
