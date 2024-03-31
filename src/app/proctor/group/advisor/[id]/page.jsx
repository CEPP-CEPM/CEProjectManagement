"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowGroup from "@/components/ShowGroup";

const GroupAdvisor = ({ params }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetch = async () => {
      const group = await axios
        .get(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/group/proctor/advisor/${params.id}`
        )
        .then((res) => res.data);
      setData(group);
    };
    fetch();
  }, []);

  return (
    <div className="flex justify-center py-5">
      <div>
        <p className="text-[30px] mb-5 font-bold">Group</p>
        <ShowGroup groupData={data} />
      </div>
    </div>
  );
};

export default GroupAdvisor;
