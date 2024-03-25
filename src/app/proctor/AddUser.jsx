'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import UploadFile from '@/components/UploadFile';
import axios from 'axios'

const AddUser = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [files, setFiles] = useState([])

    const handleSubmit = async () => {
        const formdata = new FormData()
        for (let i = 0; i < files.length; i++) {
            formdata.append('files',files[i])
        }
        formdata.append('subjectName',props.subject)
        await axios.post(
            `${process.env.NEXT_PUBLIC_ENDPOINT}/users`,
            formdata
        )
        handleClose()
    }

    return (
        <div>
            <button className="border-[#BDBEC2] border-[1px] py-2 text-[#BDBEC2] rounded-md w-[100px] hover:bg-[#BDBEC2] hover:text-white mr-3"
                    onClick={handleOpen}>
                Add Users
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slotProps={{
                    backdrop: {
                        timeout: 200,
                    },
                }}>
                <Fade in={open}>
                    <div className='bg-white left-[12.5%] md:left-[25%] top-[30%] absolute w-[75%] md:w-[50%] rounded-md px-[2.5%] py-[2.5%]'>
                        <div className='text-[25px] font-bold mb-4'>Add Users</div>
                            <UploadFile setFiles={setFiles} files={files} typefile={"(.csv only)"}/>
                        <div className='flex justify-end mt-5'>
                            <button className="border-[#FF6E2F] border-[1px] py-2 px-3 text-[#FF6E2F] rounded-md hover:bg-[#FF6E2F] hover:text-white mr-3 right-0"
                                    onClick={() => handleSubmit()}>
                                    Upload
                            </button>
                        </div>
                    </div>
                </Fade>
            </ Modal>
        </div>
    )
}

export default AddUser