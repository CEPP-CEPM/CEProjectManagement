const DetailGroup = () =>{
    return(
        <div className="shadow-lg rounded-md">
            <div className="bg-KMITL px-5 py-3 rounded-t-md text-white font-semibold">รายละเอียดกลุ่ม</div>
            <div className="py-7 px-20 flex flex-col gap-5">
                <div className="flex gap-5">
                    <div>ชื่อกลุ่ม</div>
                    <div>Test</div>
                </div>
                <div className="flex gap-5">
                    <div>ปีการศึกษา</div>
                    <div>2567</div>
                </div>
                <div className="flex gap-5">
                    <div>จำนวนสมาชิก</div>
                    <div>2</div>
                </div>
                <div className="flex gap-5">
                    <div>สถานะกลุ่ม</div>
                    <div>ยังไม่มีหัวข้อ</div>
                </div>
                <div className="flex gap-5">
                    <div>การร้องขอทำโครงงาน</div>
                    <div className="flex flex-col gap-3">
                        <div>ชื่ออาจารย์</div>
                        <div>ชื่อProject</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailGroup