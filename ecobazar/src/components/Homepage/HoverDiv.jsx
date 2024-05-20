import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5";

const HoverDiv = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`${isHovering ? "block" : "hidden"} absolute bg-white p-4 shadow-md`}>
        {/* Content you want to show on hover */}
        This content shows on hover
        <div className="absolute top-4 right-4 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <IoHeartOutline className="" />
                  </div>
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <IoEyeOutline className="" />
                  </div>
                </div>
                <HiOutlineShoppingBag className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mt-28" />
              </div>
      </div>
      <div className="bg-gray-300 w-32 h-32">
        {/* This div will trigger hover effect */}
      </div>
    </div>
  );
};
export default HoverDiv;