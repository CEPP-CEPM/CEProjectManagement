'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './styles.css'

const CreatePost = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [type, setType] = useState(true);
    const [topic, setTopic] = useState('');

    const selectType = (select) => {
        if (select == 1 && !type) {
            setType(true);
        } else if (select == 0 && type) {
            setType(false);
        }
    };

    return (
        <div>
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
                    <div className='bg-white left-[25%] top-[5%] absolute w-[50%] h-[90%] rounded-md px-[2.5%] py-[2.5%]'>
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
                        <div className=' mb-[15px] '>
                            <h2 className='text-[15px] font-bold text-[#545F71] mb-2'>หัวข้อ</h2>
                            <input
                            type='topic'
                            className='createPost_postForm_topicInput'
                            placeholder='หัวข้อ'
                            onChange={(e) => setTopic(e.target.value)}
                            value={topic}
                            />
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default CreatePost