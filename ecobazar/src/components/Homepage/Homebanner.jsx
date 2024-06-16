// import React from 'react';

// import { GoArrowRight } from "react-icons/go";

// function Homebanner() {
//   return (
//     <section className="md:mt-3">
//         <div className="grid md:grid-flow-row-dense md:grid-cols-3 gap-6 container md:container md:mx-auto md:px-28 px-3">
//           <div className="gridone flex items-center md:col-span-2 row-span-2 h-[600px] md:bg-[url('./assets/img/BG-1.jpg')] bg-cover rounded-md ">
//             <div className="gap-5 p-10">
//               <p className="text-[48px] md:w-[580px] font-semibold text-white leading-[57px]">
//                 Fresh & Healthy Organic Food
//               </p>
//               <div className="border-l-2 border-[#84D187] mt-6 pl-2">
//                 <div className="flex space-x-2 text-[20px] text-white items-center">
//                   <p>Sale up to</p>
//                   <p className="font-medium bg-orange px-[12px] py-[4px] rounded">
//                     30% OFF
//                   </p>
//                 </div>
//                 <p className="text-[14px] text-white opacity-[80%] mt-2">
//                   Free shipping on all your order.
//                 </p>
//               </div>
//               <button className="buttonPrimary">
//                 Shop now <GoArrowRight size={20} color="primary" className="" />
//               </button>
//             </div>
//           </div>
//           <div className="relative row-span-1 h-[288px] bg-[url('./assets/img/summersale.png')] bg-cover rounded-md">
//             <div className="absolute top-[32px] left-[32px] gap-5">
//               <p className="text-[#1A1A1A] text-[14px]">SUMMER SALE</p>
//               <p className="text-[32px] font-semibold">75% OFF</p>
//               <p className="text-[#666666] text-[14px] mt-2">
//                 Only Fruit & Vegetable
//               </p>
//               <button className="buttonSecondary rounded-3xl">
//                 Shop Now <GoArrowRight size={20} color="primary" className="" />
//               </button>
//             </div>
//           </div>
//           <div className=" row-span-1 flex items-center justify-center h-[288px] bg-[url('./assets/img/Bestdeal.png')] bg-cover rounded-md">
//             <div className=" flex flex-col items-center gap-2 text-white ">
//               <p className="text-[14px] text-center leading-3 mb-3">
//                 Best Deal
//               </p>
//               <p className="text-[32px] text-center leading-[38px] font-bold w-[343px] h-[76px]">
//                 Special Products Deal of the Month
//               </p>
//               <div className="flex place-content-center mt-2 ">
//                 <button className="buttonTertiary rounded-3xl">
//                   Shop Now{" "} <GoArrowRight size={20} color="primary" className="" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//   )
// }

// export default Homebanner

import React from "react";
import { GoArrowRight } from "react-icons/go";
import bgImage1 from "../../assets/img/BG-1.jpg";
import summerSaleImage from "../../assets/img/summersale.png";
import bestDealImage from "../../assets/img/Bestdeal.png";

function Homebanner() {
  return (
    <section className="md:mt-3">
      <div className="lg:grid md:grid-flow-row-dense md:grid-cols-3 gap-4 md:container md:mx-auto lg:px-28 md:px-10 md:mt-5">
        <div
          className="md:gridone md:flex items-center md:col-span-2 row-span-2 h-[600px] bg-cover rounded-md"
          style={{ backgroundImage: `url(${bgImage1})` }}
        >
          <div className="gap-5 p-10">
            <p className="text-[48px] md:w-[580px] font-semibold text-white leading-[57px]">
              Fresh & Healthy Organic Food
            </p>
            <div className="border-l-2 border-[#84D187] mt-6 pl-2">
              <div className="flex space-x-2 text-[20px] text-white items-center">
                <p>Sale up to</p>
                <p className="font-medium bg-orange px-[12px] py-[4px] rounded">
                  30% OFF
                </p>
              </div>
              <p className="text-[14px] text-white opacity-[80%] mt-2">
                Free shipping on all your order.
              </p>
            </div>
            <button className="buttonPrimary">
              Shop now <GoArrowRight size={20} color="primary" className="" />
            </button>
          </div>
        </div>
        <div
          className="relative md:row-span-1 h-[288px] bg-cover rounded-md"
          style={{ backgroundImage: `url(${summerSaleImage})` }}
        >
          <div className="absolute top-[32px] left-[32px] gap-5">
            <p className="text-[#1A1A1A] text-[14px]">SUMMER SALE</p>
            <p className="text-[32px] font-semibold">75% OFF</p>
            <p className="text-[#666666] text-[14px] mt-2">
              Only Fruit & Vegetable
            </p>
            <button className="buttonSecondary rounded-3xl">
              Shop Now <GoArrowRight size={20} color="primary" className="" />
            </button>
          </div>
        </div>
        <div
          className="row-span-1 flex items-center justify-center h-[288px] bg-cover rounded-md"
          style={{ backgroundImage: `url(${bestDealImage})` }}
        >
          <div className="flex flex-col items-center gap-2 text-white ">
            <p className="text-[14px] text-center leading-3 mb-3">BEST DEAL</p>
            <p className="text-[32px] text-center leading-[38px] font-bold w-[343px] h-[76px]">
              Special Products Deal of the Month
            </p>
            <div className="flex place-content-center mt-2 ">
              <button className="buttonTertiary rounded-3xl">
                Shop Now <GoArrowRight size={20} color="primary" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homebanner;
