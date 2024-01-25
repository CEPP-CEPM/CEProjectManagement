'use client'
import { useState } from "react"

const FilterType = (props) => {

    const [showDropDown, setShowDropDown] = useState(false)
    const [filter, setFilter] = useState('Filter by Type')

    const handleType = (type) => {
        setFilter(type)
        props.setType(type)
    }

    return (
        <div className="flex-col w-[160px]">
            <button className="border-[#BDBEC2] border-[1px] py-2 text-[#BDBEC2] rounded-md w-[100%] hover:bg-[#BDBEC2] hover:text-white" 
                    onClick={() => setShowDropDown(!showDropDown)}
                    onBlur={() => setShowDropDown(false)}>
                {filter}
            </button>
            {showDropDown ? (
            <ul className="flex-col border-[#BDBEC2] text-[#BDBEC2] absolute z-[1] border-[1px] w-[160px] bg-white rounded-md">
                <li className="flex justify-center py-2 hover:bg-[#BDBEC2] hover:text-white cursor-pointer" onMouseDown={() => handleType('Announcement')}>Announcement</li>
                <li className="flex justify-center py-2 hover:bg-[#BDBEC2] hover:text-white cursor-pointer" onMouseDown={() => handleType('Assignment')}>Assignment</li>
                <li className="flex justify-center py-2 hover:bg-[#BDBEC2] hover:text-white cursor-pointer" onMouseDown={() => handleType('ทั้งหมด')}>ทั้งหมด</li>
            </ul>
            ):null}
        </div>
    )
}

export default FilterType