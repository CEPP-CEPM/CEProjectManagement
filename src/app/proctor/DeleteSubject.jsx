'use client'
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import axios from 'axios'

const DeleteSubject = () => {

    const [open, setOpen] = useState(false);

    const [deleteSubject, setDeleteSubject] = useState(null)
    const [disableButton, setDisableButton] = useState(true)

    const [subject, setSubject] = useState([])

    const handleSubmit = async () => {
        await axios.delete(`${process.env.NEXT_PUBLIC_ENDPOINT}/subjects/${deleteSubject}`)
        .then((res) => {
            console.log(`Deleted post with ID ${deleteSubject}`);
        })
        handleClose()
    }

    const fetch = async () => {
        const allSubject = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT}/subjects`,
        ).then((res) => res.data)
        setSubject([...allSubject])
    } 

    const handleOpen = () => {
        fetch()
        setDeleteSubject(null)
        setDisableButton(true)
        setOpen(true)
    }
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch()
    }, [])

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
                                {subject.map((data) => {
                                    return (
                                        <button key={data.id} className={`flex items-center justify-center py-3 ${data.id===deleteSubject ? 'border-[#FF5555] bg-[#FF5555] text-white' : 'border-[#BDBEC2]'} border-[1px] rounded-md hover:border-[#FF5555] hover:text-white hover:bg-[#FF5555]`}
                                                onClick={() => {
                                                    setDisableButton(false)
                                                    {data.id === deleteSubject ? setDeleteSubject(null) : setDeleteSubject(data.id)}
                                                }}>
                                            {data.subjectName}
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