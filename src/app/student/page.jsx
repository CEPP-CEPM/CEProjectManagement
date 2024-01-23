const Student = () => {
    return (
        <div className="px-40 py-6">
            <div className="flex justify-end mb-6 mt-1">
                <button className="border-[#BDBEC2] border-[1px] px-6 py-2 text-[#BDBEC2] rounded-md">Filter by type</button>
            </div>
            <div className=" shadow-md rounded-xl">
                <div className=" bg-[#FF6E2F] rounded-t-xl py-[0.6rem] px-5 font-bold text-white">ทั้งหมด</div>
                <div className="flex justify-between  bg-[#F5F5F5] py-[0.6rem] px-5 font-bold text-[#595959]">
                    <div>หัวข้อ</div>
                    <div>วันที่ประกาศ</div>
                </div>
                <div className="flex justify-between  bg-[#FFFFFF] py-[0.6rem] px-5 text-[#595959]">
                    <div>หัวข้อ</div>
                    <div>16/01/2024</div>
                </div>
                <div className="flex justify-between  bg-[#F5F5F5] py-[0.6rem] px-5 text-[#595959]">
                    <div>หัวข้อ</div>
                    <div>16/01/2024</div>
                </div>
            </div>
        </div>
    )
}

export default Student