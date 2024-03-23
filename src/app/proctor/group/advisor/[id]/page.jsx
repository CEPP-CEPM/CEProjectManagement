'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';


const GroupAdvisor = ({params}) =>{
    const [data, setData] = useState();

    const [show, setShow] = useState(null);
  const test = 0;

  useEffect(() => {
    const fetch = async () => {
      const group = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/advisor/${params.id}`)
        .then((res) => res.data);
      setData(group);
    };
    fetch();
  }, []);

  console.log(data)

    return(
        <div className='flex flex-col gap-5 w-[500px] h-[400px]'>
            test
            {data ? data.map((d, index) => {
        return (
          <div>
            <div className="bg-KMITL text-white px-5 py-3" onClick={() => setShow(index)}>{d.topic}</div>
            <div
              className={`${
                show == index ? "" : "hidden"
              } px-5 py-3 bg-[#F5F5F5]`}
            >
              <div>สมาชิก</div>
              <div>64011109 นายณัชพล ไตรภัทร์</div>
            </div>
          </div>
        );
      }) : <div>test</div>}
        </div>
    )
}

export default GroupAdvisor