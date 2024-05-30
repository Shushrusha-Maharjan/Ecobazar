import React from 'react';
import { data } from "../../Data/Data";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";

const Productcart = () => {
  return (
    <section>
      <p className="font-medium text-[32px] text-center">Related Products</p>
        <div className="m-auto md:grid grid-cols-4 mt-4 gap-2">
          {data.offerdata
            .filter((item) => item.related === true) // Filter items where related is true
            .map((item, index) => (
              <div className="grid" key={index}>
                <div className="group/item relative">
                  <div className="rounded-lg border-[1px] hover:border-[#20B526] py-[9px]">
                    <img src={item.img} alt="" className="" />
                    <div className="items-center pl-3 mb-3">
                      <p className="ml-2">{item.title}</p>
                      <p className="ml-2 flex">
                        {item.price}
                        <span className="ml-2 line-through text-slate-500">
                          {item.initial}
                        </span>
                      </p>
                      {item.sale && (
                        <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                          Sale 20%
                        </span>
                      )}
                      <div className="mb-4">
                        <div>
                          <Rating className="">
                            <Rating.Star fill="orange" fontSize={20} />
                            <Rating.Star fill="orange" fontSize={20} />
                            <Rating.Star fill="orange" fontSize={20} />
                            <Rating.Star fill="orange" fontSize={20} />
                            <Rating.Star filled={false} fontSize={20} />
                          </Rating>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col justify-between">
                    <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                      <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoHeartOutline className="" />
                      </div>
                      <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoEyeOutline className="" />
                      </div>
                    </div>
                    <div className="mt-48 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
                      <HiOutlineShoppingBag className="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Productcart