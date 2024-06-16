import React from 'react';
import { data } from "../../Data/Data";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";
import Card from '../Shopcomponents/Card';

const Productcart = () => {
  return (
    <section className='mt-5 mb-2 container md:mx-auto md:px-10'>
      <p className="font-medium text-[32px] text-center">Related Products</p>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-3 mt-4 gap-2">
          {data.offerdata
            .filter((item) => item.related === true) // Filter items where related is true
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
        //       <div className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
        //   <div className="mt-2 px-[-20px] hover:border-[#20B526]">
        //     {item.sale && (
        //       <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
        //         Sale 50%
        //       </div>
        //     )}
        //     {item.outOfStock && (
        //       <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
        //         Out of Stock
        //       </div>
        //     )}
        //     <img
        //       src={item.img}
        //       alt={item.title}
        //       className="w-full h-[250px] object-cover rounded"
        //     />
        //     <div className="mt-4 ml-4 items-center justify-center">
        //       <h3 className="text-lg font-semibold">{item.title}</h3>
        //       <p className="text-gray-600">{item.sale ? item.initial : item.price}</p>
        //       <div className="flex items-center">
        //         <span className="text-[#FFA500] text-[24px]">
        //           {"★".repeat(Math.round(item.rating))}
        //         </span>
        //         <span className="text-gray-400 text-[24px]">
        //           {"★".repeat(5 - Math.round(item.rating))}
        //         </span>
        //       </div>
        //     </div>
        //     <div className="absolute top-4 right-3 flex flex-col justify-between">
        //       <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
        //         <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
        //           <IoHeartOutline className="w-5 h-5" />
        //         </div>
        //         <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
        //           <IoEyeOutline className="w-5 h-5" />
        //         </div>
        //       </div>
        //     </div>
        //     <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
        //       <HiOutlineShoppingBag className="w-5 h-5" />
        //     </div>
        //   </div>
        // </div>
              
            ))}
        </div>
    </section>
  )
}

export default Productcart