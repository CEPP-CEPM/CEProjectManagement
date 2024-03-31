'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowGroup from '@/components/ShowGroup';


const GroupAdvisor = ({params}) =>{
    const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const group = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/group/proctor/advisor/${params.id}`)
        .then((res) => res.data);
      setData(group);
    };
    fetch();
  }, []);
  console.log(data);

    return(
        <div className='flex justify-center py-5'>
            <ShowGroup groupData={data}/>
        </div>
    )
}

export default GroupAdvisor