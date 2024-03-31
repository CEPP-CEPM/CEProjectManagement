"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

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

  return (
    <div className="flex flex-col py-5 gap-3 items-center">
      <p className="p-[20px] text-[30px] font-bold">List Advisor</p>
      {data ? (
        data.map((d) => {
          return (
            <div
              key={d.id}
              className="bg-KMITL text-[20px] text-white px-5 rounded-md py-3 w-[25%]"
            >
              <Link href={`group/advisor/${d.id}`}>
                {d.name} {d.lastname}
              </Link>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
      {/* <div>test</div> */}
    </div>
  );
};

export default ListGroup;
