import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";
import { data } from "../../Data/Data";

function Feature() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="">
        <div className="flex justify-between">
          <div className="text-2xl font-medium">Featured Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        
        <div className="m-auto md:grid grid-cols-5 mt-4">
          {data.featured.map((item, index) => (
            <div key={index} className="group/item flex flex-col items-center relative">
              <div className="border-2 hover:border-[#20B526]">
                <img src={item.img} alt="" className="" />
                <div>
                  <p className="text-  ml-2">{item.title}</p>
                  
              <p className='text- ml-2 flex'>{item.price} 
              <p className='text- ml-2 line-through text-slate-400'>{item.initial}</p>
              </p>

              {item.sale ? (
                <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                  Sale 20%
                </span>
              ) : (
                <></>
              )}
              <p className='text- ml-2 pb-3'>
              <div className="">
                    <Rating className="">
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star fill="orange" fontSize={20} />
                      <Rating.Star filled={false} fontSize={20} />
                    </Rating>
                  </div>
                
                
                </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 flex flex-col justify-between ">
                <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                  <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                    <IoHeartOutline className="" />
                  </div>
                  <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                    <IoEyeOutline className="" />
                  </div>
                </div>
                <div className="mt-32 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
                <HiOutlineShoppingBag className="" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
      
    </section>
  )
}

export default Feature;




