'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios'

const CreateSubject = () => {

    const [open, setOpen] = useState(false);
    const [subject, SetSubject] = useState('')
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async () => {
        await axios.post(
            `${process.env.NEXT_PUBLIC_ENDPOINT}/subjects`,{
                subject: subject,
            },
        )
        handleClose()
    }

    return (
        <div className="flex">
            <button className="border-[#BDBEC2] border-[1px] py-2 text-[#BDBEC2] rounded-md w-[150px] hover:bg-[#BDBEC2] hover:text-white mr-3"
                    onClick={handleOpen}>
                Create Subject
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
                    <div className='bg-white left-[12.5%] md:left-[35%] top-[30%] absolute w-[75%] md:w-[30%] h-[27%] rounded-md px-[2.5%] py-[2.5%]'>
                        <div className='text-[25px] font-bold mb-4'>Create Subject</div>
                        <input
                            type='subject'
                            className='createSubject'
                            placeholder='วิชา'
                            onChange={(e) => SetSubject(e.target.value)}
                            value={subject}
                        />
                        <div className='flex justify-end mt-5'>
                            <button className="border-[#FF6E2F] border-[1px] py-2 px-3 text-[#FF6E2F] rounded-md hover:bg-[#FF6E2F] hover:text-white right-0"
                                    onClick={() => handleSubmit()}>
                                    Create
                            </button>
                        </div>
                    </div>
                </Fade>
            </ Modal>
        </div>
    )
}

export default CreateSubject