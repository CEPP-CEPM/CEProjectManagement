'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import './styles.css'

// icon
import { IoIosAddCircle } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';

const CreatePost = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [type, setType] = useState(true);
    const [topic, setTopic] = useState('');
    const [tags, setTags] = useState([]);
    const [dueDate, setDueDate] = useState('');
    const [detail, setDetail] = useState(' ');

    const [options, setOptions] = useState([{id:'1',name:'sw'},{id:'2',name:'nw'},{id:'3',name:'dwaadwada'}]);
    const [showDropdown, setShowDropdown] = useState(false);

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
    
    const selectTag = (newtag) => {
        setTags([...tags, newtag]);
        options.splice(options.indexOf(newtag), 1);
        setOptions(options);
        setShowDropdown(false);
    };
    
    const deleteTag = (tag) => {
        setOptions([...options, tag]);
        tags.splice(tags.indexOf(tag), 1);
        setTags(tags);
    };

    const handleSubmit = () => {
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

                        {/* Tag & Due date */}
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
                                    onChange={(e) => setDueDate(e.target.value)}
                                />
                            </div>
                            ) : (
                            // Tag
                            <div className='mb-[3px]'>
                                <div className=' text-[15px] font-bold text-[#545F71] mb-[5px]'>หมวดหมู่</div>
                                <div className='flex md:flex md:flex-row md:px-[0] '>
                                    {tags.map((tag) => {
                                        return (
                                            <div
                                            key={tag.id}
                                            className='mr-[5px] flex flex-row items-center rounded-[6px] border-[1px] border-[#BDBEC2] bg-[#BDBEC2] px-[5px] py-[6px] text-[12px] text-[#fff]'
                                            >
                                                <div>{tag.name}</div>
                                                <button className='ml-[2px]' onClick={() => deleteTag(tag)}>
                                                    <RxCross2 />
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <div
                                    className='flex-col'
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    onBlur={() => setShowDropdown(false)}
                                    >
                                        {options.length != 0 ? (
                                            <button className='createPost_postForm_tag hover:bg-[#898a8d] focus:bg-[#898a8d]'>
                                                <IoIosAddCircle />
                                            </button>
                                        ) : null}
                                        <ul
                                            className={`dropdown-content  ${
                                            showDropdown ? 'flex-col ' : 'hidden'
                                            }`}
                                        >
                                            {showDropdown
                                            ? options.map((tag) => {
                                                return (
                                                    <li
                                                    key={tag.id}
                                                    className='align-self-center z-[1] flex w-[100%] px-3 py-3 hover:bg-[#898a8d]'
                                                    onMouseDown={() => selectTag(tag)}
                                                    >
                                                    {tag.name}
                                                    </li>
                                                );
                                                })
                                            : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>

                        {/* detail */}
                        <div className='mb-[10px]'>
                            <h2 className='text-[15px] font-bold text-[#545F71] mb-2'>รายละเอียด</h2>
                            <textarea name="" id="" cols="" rows="7" spellCheck='true' className=' w-full resize-none border-[1px] border-[#BDBEC2] rounded-[6px] px-2 py-2 outline-none'
                                    onChange={(e) => setDetail(e.target.value)}></textarea>
                        </div>

                        {/* send file */}

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