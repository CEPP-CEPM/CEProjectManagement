'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios'

const DeleteSubject = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setDeleteSubject(null)
        setDisableButton(true)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const [deleteSubject, setDeleteSubject] = useState(null)
    const [disableButton, setDisableButton] = useState(true)

    const [subject, setSubject] = useState(['2565', '2566', '2567', '2568', '2569', '2570', '2571', '2572', '2570', '2571', '2572'])

    const handleSubmit = async () => {
        console.log(1);
        handleClose()
    }

    return (
        <div className="flex">
            <button className="border-[#FF5555] border-[1px] py-2 text-[#FF5555] rounded-md w-[150px] hover:bg-[#FF5555] hover:text-white mr-3"
                    onClick={handleOpen}>
                Delete Subject
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
                    <div className='bg-white left-[12.5%] md:left-[25%] top-[25%] absolute w-[75%] md:w-[50%] h-[50%] rounded-md px-[2.5%] py-[2.5%]'>
                        <div className='text-[25px] font-bold mb-4'>Delete Subject</div>
                        <div className='h-[63%] border-[2px] border-[#BDBEC2] rounded-md overflow-scroll'>
                            <div className='grid grid-cols-3 gap-3 justify-between my-3 mx-3'>
                                {subject.map((subject, index) => {
                                    return (
                                        <button key={index} className={`flex items-center justify-center py-3 ${subject===deleteSubject ? 'border-[#FF5555] bg-[#FF5555] text-white' : 'border-[#BDBEC2]'} border-[1px] rounded-md hover:border-[#FF5555] hover:text-white hover:bg-[#FF5555]`}
                                                onClick={() => {
                                                    setDisableButton(false)
                                                    {subject === deleteSubject ? setDeleteSubject(null) : setDeleteSubject(subject)}
                                                }}>
                                            {subject}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button className={`border-[#FF5555] border-[1px] py-2 px-3 text-[#FF5555] rounded-md right-0 ${disableButton ? 'opacity-50' : 'opacity-100 hover:bg-[#FF5555] hover:text-white'}`}
                                    disabled={disableButton}
                                    onClick={() => handleSubmit()}>
                                    Delete
                            </button>
                        </div>
                    </div>
                </Fade>
            </ Modal>
        </div>
    )
}

export default DeleteSubject