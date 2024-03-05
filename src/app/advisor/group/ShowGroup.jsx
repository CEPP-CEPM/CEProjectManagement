"use client";
import { useState } from "react";

const ShowGroup = () => {

  const [show, setShow] = useState(null);
  const data = [0, 1, 2, 3];
  const test = 0;

  return (
    <div className="flex flex-col gap-5 w-[500px] h-[400px]">
      {data.map((d, index) => {
        return (
          <div>
            <div className="bg-KMITL text-white px-5 py-3" onClick={() => setShow(index)}>topic</div>
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
      })}
    </div>
  );
};

export default ShowGroup;
