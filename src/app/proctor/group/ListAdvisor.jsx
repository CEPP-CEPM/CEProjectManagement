"use client";
import { useState, useEffect } from "react";
import axios from "axios";

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
        data.map((d, index) => {
          return <div>{data[index].name} {data[index].lastname}</div>
        })
      ) : (
        <div></div>
      )}
      {/* <div>test</div> */}
    </div>
  );
};

export default ListGroup;
