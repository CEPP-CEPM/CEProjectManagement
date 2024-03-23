const ShowFileSubmit = ({ files }) => {
  return (
    <div>
      <a href={`http://localhost:9000/assignment-submit/${files.name}`}>
        {files.originalName}
      </a>
    </div>
  );
};

export default ShowFileSubmit;
