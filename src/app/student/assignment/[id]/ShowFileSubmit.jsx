
const ShowFileSubmit = ({files}) =>{
    console.log(`loaclhost:9000/${files.bucket}/${files.name}`)
    return(
        <div>
                <a href={`http://localhost:9000/assignment-submit/${files.name}`}>{files.originalName}</a>
            {/* {files[0].id} */}
        </div>
    )
}

export default ShowFileSubmit