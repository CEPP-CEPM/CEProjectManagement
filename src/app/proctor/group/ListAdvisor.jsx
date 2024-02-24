"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from 'next/link';


const ListGroup = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const advisor = await axios
        .get(`${process.env.NEXT_PUBLIC_ENDPOINT}/users/Advisor`)
        .then((res) => res.data);
      setData(advisor);
    };
    fetch();
  }, []);
//   console.log(data);

  return (
    <div className="flex justify-center">
      {data ? (
        data.map((d) => {
          return <div>
            <Link href={`group/advisor/${d.id}`}>
            {d.name} {d.lastname}
            </Link>
            </div>
        })
      ) : (
        <div></div>
      )}
      {/* <div>test</div> */}
    </div>
  );
};

export default ListGroup;
