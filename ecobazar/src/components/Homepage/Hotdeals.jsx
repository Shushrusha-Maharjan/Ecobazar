import React from "react";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";
import { datas } from "../../Data/db";
import Timer from "./Timer";
import Card from "../Shopcomponents/Card";

function Hotproducts() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto lg:px-28 md:px-10">
      <div className="">
        <div className="flex justify-between mb-3">
          <div className="text-xl font-medium">Hot Deals</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>

        <div className="md:grid lg:grid-cols-10 md:grid-cols-9">
          {datas
          .filter((item) => item.offerone === true)
          .map((item, index) => (
            <div className="lg:col-span-4 lg:row-span-2 md:col-span-6 md:row-span-2 items-center justify-center">
              <div
                key={index}
                className="group/item md:flex flex-col items-center relative"
              >
                <div className="rounded-[10px] border-[1px] hover:border-[#20B526]">
                  <img src={item.img} alt="" className="" />
                  <div className="items-center">
                    <div className="flex flex-row justify-between">
                      <div className="ml-4 group-hover/edit w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoHeartOutline className="" />
                      </div>
                      <div className="w-72 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary text-white group-hover/edit:bg-slate-400">
                        Add to Cart <HiOutlineShoppingBag className="ml-2" />
                      </div>
                      <div className="mr-4 group-hover/edit w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoEyeOutline className="" />
                      </div>
                    </div>
                    <p className="text-center text-xl leading-10 text-green-600 ml-3 mt-4">
                      {item.title}
                    </p>
                    <p className="items-center leading-9 ml-2 flex justify-center">
                      {item.price}
                      <span className="ml-2 line-through text-slate-500">
                        {item.initial}
                      </span>
                    </p>
                    {item.sale && (
                      <div>
                        <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                          Sale 20%
                        </span>
                        <span className="absolute bg-[#2388FF] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[100px]">
                          Best Sale
                        </span>
                      </div>
                    )}
                    <div className="flex justify-center">
                      <Rating className="">
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                      </Rating>
                      <p className="text-slate-400 lg:leading-7 text-center">
                        (524 Feedback)
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 lg:leading-10 text-center mt-1">
                        Hurry Up! Offers ends In:
                      </p>
                      <div className="flex justify-center lg:mb-[9px] lg:pb-[20px]">
                        <Timer className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {datas
  .filter(item => item.hotdeals === true) // Filter items where hotdeal is true
  .map((item, index) => (
    
    <div className="lg:col-span-2 md:col-span-3 h-full md:w-full" key={index}>
      <Card
                id={index}
                image={item.img}
                name={item.title}
                price={item.price}
                salePrice={item.initial}
                sale={item.sale}
                rating={item.rating}
                outOfStock={item.outOfStock}
                className="md:h-full" 
              />
      {/* <div className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
          <div className="mt-2 px-[-20px] hover:border-[#20B526]">
            {item.sale && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
                Sale 50%
              </div>
            )}
            {item.outOfStock && (
              <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
                Out of Stock
              </div>
            )}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] object-cover rounded"
            />
            <div className="mt-4 ml-4 items-center justify-center">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.sale ? item.initial : item.price}</p>
              <div className="flex items-center">
                <span className="text-[#FFA500] text-[24px]">
                  {"★".repeat(Math.round(item.rating))}
                </span>
                <span className="text-gray-400 text-[24px]">
                  {"★".repeat(5 - Math.round(item.rating))}
                </span>
              </div>
            </div>
            <div className="absolute top-4 right-3 flex flex-col justify-between">
              <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                  <IoHeartOutline className="w-5 h-5" />
                </div>
                <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                  <IoEyeOutline className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
              <HiOutlineShoppingBag className="w-5 h-5" />
            </div>
          </div>
        </div> */}



        
      {/* <div className="group/item relative group"> */}
        {/* <div className="border-[1px] hover:border-[#20B526] py-[9px] group">
          <img src={item.img} alt="" className="" />
          <div className="items-center mb-3">
            <p className="ml-2 group-hover:text-[#2C742F]">{item.title}</p>
            <p className="ml-2 flex">
              {item.price}
              <span className="ml-2 line-through text-gray-500">{item.initial}</span>
            </p>
            {item.sale && (
              <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                Sale 20%
              </span>
            )}
            <div className="-mb-3 pl-2">
            <div className="flex items-center">
                <span className="text-[#FFA500] text-[24px]">
                  {"★".repeat(Math.round(item.rating))}
                </span>
                <span className="text-gray-400 text-[24px]">
                  {"★".repeat(5 - Math.round(item.rating))}
                </span>
              </div>
              
            </div>
          </div>
        </div> */}
        {/* <div className="absolute top-4 right-3 flex flex-col justify-between">
              <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                  <IoHeartOutline className="w-5 h-5" />
                </div>
                <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                  <IoEyeOutline className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
              <HiOutlineShoppingBag className="w-5 h-5" />
            </div> */}
        {/* <div className="absolute top-4 right-4 flex flex-col justify-between">
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
        </div> */}
      {/* </div> */}
    </div>
  ))}

        </div>
      </div>
      <div></div>
    </section>
  );
}
export default Hotproducts;


// import React from "react";
// import { GoArrowRight } from "react-icons/go";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
// import { Rating } from "flowbite-react";
// import { data } from "../../Data/Data";
// import Timer from "./Timer";

// function Hotproducts() {
//   return (
//     <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
//       <div>
//         <div className="flex justify-between">
//           <div className="text-xl font-medium">Hot Deals</div>
//           <div className="flex items-center gap-2 text-primary">
//             View All <GoArrowRight />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 mt-4">
//           {data.offerone.map((item, index) => (
//             <div key={index} className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 flex flex-col items-center relative">
//               <div className="border-[1px] hover:border-[#20B526] w-full">
//                 <img src={item.img} alt={item.title} className="w-full" />
//                 <div className="p-4">
//                   <div className="flex justify-between mb-4">
//                     <div className="w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
//                       <IoHeartOutline />
//                     </div>
//                     <div className="flex-grow mx-4">
//                       <div className="w-full h-11 bg-primary rounded-full flex items-center justify-center text-white">
//                         Add to Cart <HiOutlineShoppingBag className="ml-2" />
//                       </div>
//                     </div>
//                     <div className="w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
//                       <IoEyeOutline />
//                     </div>
//                   </div>
//                   <p className="text-center text-xl text-green-600">{item.title}</p>
//                   <p className="text-center flex justify-center">
//                     {item.price}
//                     {item.initial && (
//                       <span className="ml-2 line-through text-slate-500">
//                         {item.initial}
//                       </span>
//                     )}
//                   </p>
//                   {item.sale && (
//                     <div className="relative mt-2">
//                       <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[4px] rounded-md top-0 left-0">
//                         Sale 20%
//                       </span>
//                       <span className="absolute bg-[#2388FF] text-white text-[14px] px-[8px] py-[4px] rounded-md top-0 left-[100px]">
//                         Best Sale
//                       </span>
//                     </div>
//                   )}
//                   <div className="flex justify-center mt-4">
//                     <Rating>
//                       <Rating.Star filled={true} />
//                       <Rating.Star filled={true} />
//                       <Rating.Star filled={true} />
//                       <Rating.Star filled={true} />
//                       <Rating.Star filled={false} />
//                     </Rating>
//                     <p className="text-slate-400 ml-2">(524 Feedback)</p>
//                   </div>
//                   <div className="text-center mt-4">
//                     <p className="text-slate-400">Hurry Up! Offers end In:</p>
//                     <div className="flex justify-center mt-1">
//                       <Timer />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {data.offerdata
//             .filter((item) => item.hotdeals === true)
//             .map((item, index) => (
//               <div key={index} className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col items-center relative">
//                 <div className="border-[1px] hover:border-[#20B526] w-full py-4">
//                   <img src={item.img} alt={item.title} className="w-full" />
//                   <div className="p-4">
//                     <p className="text-center">{item.title}</p>
//                     <p className="text-center flex justify-center">
//                       {item.price}
//                       {item.initial && (
//                         <span className="ml-2 line-through">{item.initial}</span>
//                       )}
//                     </p>
//                     {item.sale && (
//                       <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[4px] rounded-md top-4 left-4">
//                         Sale 20%
//                       </span>
//                     )}
//                     <div className="mt-4">
//                       <Rating>
//                         <Rating.Star filled={true} />
//                         <Rating.Star filled={true} />
//                         <Rating.Star filled={true} />
//                         <Rating.Star filled={true} />
//                         <Rating.Star filled={false} />
//                       </Rating>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute top-4 right-4 flex flex-col justify-between">
//                   <div className="invisible flex flex-col gap-3 group-hover/item:visible">
//                     <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
//                       <IoHeartOutline />
//                     </div>
//                     <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
//                       <IoEyeOutline />
//                     </div>
//                   </div>
//                   <div className="mt-32 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
//                     <HiOutlineShoppingBag />
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hotproducts;

