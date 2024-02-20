'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import UploadFile from '@/components/UploadFile';
import axios from 'axios'
import './styles.css'

const CreatePost = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [type, setType] = useState(true);
    const [topic, setTopic] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [detail, setDetail] = useState(' ');
    const [files, setFiles] = useState([])

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;

    const selectType = (select) => {
        if (select == 1 && !type) {
            setType(true);
        } else if (select == 0 && type) {
            setType(false);
        }
    };

    const handleSubmit = async () => {
        const formdata = new FormData()
        formdata.append('title', topic)
        formdata.append('description', detail)
        for (let i = 0; i < files.length; i++) {
            formdata.append('files',files[i])
        }
        if (type == 1) {
            // Announcement
            await axios.post(
                'http://localhost:3001/announcement',
                formdata
            )
        } else if (type == 0) {
            // Assignment
            formdata.append('dueAt',dueDate)
            await axios.post(
                'http://localhost:3001/assignment',
                formdata
            )
        }
        handleClose()
    }

    return (
        <div className=''>
            <button className="border-[#BDBEC2] border-[1px] py-2 text-[#BDBEC2] rounded-md w-[45px] hover:bg-[#BDBEC2] hover:text-white mr-3"
                    onClick={handleOpen}>+</button>
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
                    <div className='bg-white left-[12.5%] md:left-[25%] top-[5%] absolute w-[75%] md:w-[50%] h-[90%] rounded-md px-[2.5%] py-[2.5%]'>
                        {/* type */}
                        <div className='flex mb-[15px]'>
                            <button
                            className={`createPost_postForm_typeButton rounded-l-[6px]
                                ${
                                    type
                                    ? 'bg-[#FF6E2F] text-[#FFFFFF]'
                                    : 'text-[#FF6E2F] hover:bg-[#FF6E2F] hover:text-[#FFFFFF]'
                                }`}
                            disabled={type}
                            onClick={() => selectType(1)}
                            >
                            Announcement
                            </button>
                            <button
                            className={`createPost_postForm_typeButton rounded-r-[6px]
                                ${
                                    type
                                    ? 'text-[#FF6E2F] hover:bg-[#FF6E2F] hover:text-[#FFFFFF]'
                                    : 'bg-[#FF6E2F] text-[#FFFFFF]'
                                }`}
                            disabled={!type}
                            onClick={() => selectType(0)}
                            >
                            Assignment
                            </button>
                        </div>

                        {/* Topic */}
                        <div className='mb-[10px]'>
                            <h2 className='text-[15px] font-bold text-[#545F71] mb-2'>หัวข้อ</h2>
                            <input
                            type='topic'
                            className='createPost_postForm_topicInput'
                            placeholder='หัวข้อ'
                            onChange={(e) => setTopic(e.target.value)}
                            value={topic}
                            />
                        </div>

                        {/* Due date */}
                        <div
                            className={`md:flex items-end`}
                        >
                            {!type ? (
                            // Due-Date
                            <div className='md:flex-col mb-[5px]'>
                                <h2 className='text-[15px] font-bold text-[#545F71] mb-[5px]'>กำหนดส่ง</h2>
                                <input
                                    type='date'
                                    name='dueDate'
                                    min={`${currentDate}`}
                                    className='rounded-[6px] border-[1px] border-[#BDBEC2] px-3 py-1 text-[12px] text-[#BDBEC2] '
                                    onChange={(e) => {
                                        let dueAt = new Date(e.target.value)
                                        dueAt.setDate(dueAt.getDate() + 1)
                                        setDueDate(dueAt)
                                    }}
                                />
                            </div>
                            ) : (
                            null
                            )}
                        </div>

                        {/* detail */}
                        <div className='mb-[10px]'>
                            <h2 className='text-[15px] font-bold text-[#545F71] mb-2'>รายละเอียด</h2>
                            <textarea name="" id="" cols="" rows="7" spellCheck='true' className=' w-full resize-none border-[1px] border-[#BDBEC2] rounded-[6px] px-2 py-2 outline-none'
                                    onChange={(e) => setDetail(e.target.value)}></textarea>
                        </div>

                        {/* send file */}
                        <div className='ml-[-30px] mb-[10px]'>
                            <UploadFile files={files} setFiles={(e) => {
                                setFiles(e)
                                console.log('55555');
                            }}/>
                        </div>

                        {/* submit */}
                        <div className='flex justify-end'>
                            <button className=' bg-[#FF6E2F] mr-2 px-5 py-2 text-[15px] text-white rounded-md hover:bg-[#ee672d]' onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default CreatePost