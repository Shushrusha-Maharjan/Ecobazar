import React from "react";
import { GoArrowRight } from "react-icons/go";
import { datas } from "../../Data/db";

function Popular() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto lg:px-28 md:px-10">
      <div className="">
        <div className="flex md:flex justify-between">
          <div className="text-xl md:font-medium">Popular Categories</div>
          <div className="flex md:flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto grid lg:grid-cols-6 grid-cols-2 gap-4 mt-4 mb-2">
          {datas
            .filter((item) => item.popular === true)
            .map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center pb-4 -mt-3"
              >
                <div className="border-2 hover:border-[#20B526] shadow-md pb-4 h-full">
                  <img src={item.img} alt="" className="" />
                  <p className="text-center md:text-[12px] lg:text-[16px]">{item.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Popular;
