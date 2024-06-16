import React from 'react';
import { GoArrowRight } from "react-icons/go";

import { datas } from "../../Data/db";
import Card from '../Shopcomponents/Card';

function Feature() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto lg:px-28 md:px-10">
      <div className="">
        <div className="flex justify-between">
          <div className="text-2xl font-medium">Featured Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        
        <div className="m-auto md:grid lg:grid-cols-5 md:grid-cols-3 mt-4">
          {datas
          .filter((item) => item.feature === true)
          .map((item, index) => (
            <Card
                id={index}
                image={item.img}
                name={item.title}
                price={item.price}
                salePrice={item.initial}
                sale={item.sale}
                rating={item.rating}
                outOfStock={item.outOfStock}
              />
            // <div key={index} className="group/item flex flex-col items-center relative group">
            //   <div className="border-[1px] hover:border-[#20B526]">
            //     <img src={item.img} alt="" className="" />
            //     <div>
            //       <p className="text-  ml-2">{item.title}</p>
                  
            //   <p className='text- ml-2 flex'>{item.price} 
            //   <p className='text- ml-2 line-through text-slate-400'>{item.initial}</p>
            //   </p>

            //   {item.sale ? (
            //     <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
            //       Sale 20%
            //     </span>
            //   ) : (
            //     <></>
            //   )}
            //   <p className='text- ml-2 pb-3'>
            //   <div className="">
            //         <Rating className="">
            //           <Rating.Star fill="orange" fontSize={20} />
            //           <Rating.Star fill="orange" fontSize={20} />
            //           <Rating.Star fill="orange" fontSize={20} />
            //           <Rating.Star fill="orange" fontSize={20} />
            //           <Rating.Star filled={false} fontSize={20} />
            //         </Rating>
            //       </div>
                
                
            //     </p>
            //     </div>
            //   </div>
            //   <div className="absolute top-4 right-3 flex flex-col justify-between">
            //   <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
            //     <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
            //       <IoHeartOutline className="w-5 h-5" />
            //     </div>
            //     <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
            //       <IoEyeOutline className="w-5 h-5" />
            //     </div>
            //   </div>
            // </div>
            // <div className="absolute bottom-7 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
            //   <HiOutlineShoppingBag className="w-5 h-5" />
            // </div>
              
            //   {/* <div className="absolute top-4 right-4 flex flex-col justify-between ">
            //     <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
            //       <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
            //         <IoHeartOutline className="" />
            //       </div>
            //       <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
            //         <IoEyeOutline className="" />
            //       </div>
            //     </div>
            //     <div className="mt-32 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
            //     <HiOutlineShoppingBag className="" />
            //     </div>
                
            //   </div> */}
            // </div>
          ))}
        </div>
        
        
      </div>
      
    </section>
  )
}

export default Feature;




