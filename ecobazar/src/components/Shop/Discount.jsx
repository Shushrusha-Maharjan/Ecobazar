import React from "react";
import { GoArrowRight } from "react-icons/go";

const Discount = () => {
  return (
    <section>
      <div className=" text-center h-[295px] w-[255px] bg-[url('C:\Users\shushru\Desktop\react\react_front\ecobazar\src\assets\img\discount.jpg')] bg-cover rounded-md mr-2">
        <div className="leading-[24px]">
          <div className="pt-10 flex items-center justify-center gap-2">
            <p className="text-orange text-[32px]">79%</p>
            <p className="text-[24px]">Discount</p>
          </div>
          <p className="text-[16px]">on your first order</p>
          <div className="flex justify-center">
            <div className="flex items-center justify-center gap-2  text-primary rounded-3xl h-12 w-40">
              <button className="ml-4 font-medium">Shop now </button>
              <GoArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
