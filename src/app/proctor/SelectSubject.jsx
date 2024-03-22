'use client'
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios'

const DeleteSubject = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setDisableButton(true)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    const [selectSubject, setSelectSubject] = useState(null)
    const [disableButton, setDisableButton] = useState(true)

    const [subject, setSubject] = useState(['2565', '2566', '2567', '2568', '2569', '2570', '2571', '2572', '2570', '2571', '2572'])

    const handleSubmit = async () => {
        console.log(selectSubject);
        props.setSubject(selectSubject)
        handleClose()
    }

    useEffect(() => {

    }, [])

    return (
        <div className="flex">
            <button className="border-[#BDBEC2] border-[1px] py-2 px-5 text-[#BDBEC2] rounded-md hover:bg-[#BDBEC2] hover:text-white mr-3"
                    onClick={handleOpen}>
                {props.subject === null ? 'Select Subject' : props.subject}
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
                        <div className='text-[25px] font-bold mb-4'>Select Subject</div>
                        <div className='h-[63%] border-[2px] border-[#BDBEC2] rounded-md overflow-scroll'>
                            <div className='grid grid-cols-3 gap-3 justify-between my-3 mx-3'>
                                {subject.map((subject, index) => {
                                    return (
                                        <button key={index} className={`flex items-center justify-center py-3 ${subject===selectSubject ? 'border-[#BDBEC2] bg-[#BDBEC2] text-white' : 'border-[#BDBEC2]'} border-[1px] rounded-md hover:border-[#BDBEC2] hover:text-white hover:bg-[#BDBEC2]`}
                                                onClick={() => {
                                                    setDisableButton(false)
                                                    console.log(1,selectSubject);
                                                    {subject === selectSubject ? setSelectSubject(null) : setSelectSubject(subject)}
                                                    // console.log(selectSubject);
                                                }}>
                                            {subject}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <button className={`border-[#BDBEC2] border-[1px] py-2 px-3 text-[#BDBEC2] rounded-md right-0 ${disableButton ? 'opacity-50' : 'opacity-100 hover:bg-[#BDBEC2] hover:text-white'}`}
                                    disabled={disableButton}
                                    onClick={() => handleSubmit()}>
                                    Select
                            </button>
                        </div>
                    </div>
                </Fade>
            </ Modal>
        </div>
    )
}

export default DeleteSubject