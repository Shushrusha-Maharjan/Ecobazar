// import React from "react";
// import { GoArrowRight } from "react-icons/go";
// import Timer from "./Timer";
// function Banner() {
//   return (
//     <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
//       <div className="grid lg:grid-flow-row-dense lg:grid-cols-3">
//         <div className="gridone text-white text-center h-[536px] w-[345px] bg-[url('./assets/img/Bestdeals.png')] bg-cover rounded-md ">
//           <div className="leading-[46px]">
//             <p className="mt-6">BEST DEALS</p>
//             <p className="font-semibold text-3xl">Sale of the Month</p>
//             <div className="flex justify-center mb-[9px]">
//                         <Timer className="" />
//                         </div>
//             <div className="flex justify-center">
//               <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
//                 <button className="ml-4 font-medium">Shop now </button>
//                 <GoArrowRight />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=" text-white text-center h-[536px] w-[345px]  bg-[url('./assets/img/Fatfree.png')] bg-cover rounded-md ml-1 mr-2">
//           <div className="leading-[46px]">
//             <p className="mt-6">85% FAT FREE</p>
//             <p className="font-semibold text-3xl">Low-Fat Meat</p>
//             <div className="flex items-center justify-center gap-2">
//               <p>Started at</p>
//               <p className="text-orange font-medium">$79.99</p>
//             </div>
//             <div className="flex justify-center">
//               <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
//                 <button className="ml-4 font-medium">Shop now </button>
//                 <GoArrowRight />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="  text-center h-[536px] w-[345px]  bg-[url('./assets/img/Last.png')] bg-cover rounded ml-2">
//           <div className="leading-[46px]">
//             <p className="mt-6">SUMMER SALE</p>
//             <p className="font-semibold text-3xl">100% Fresh Fruit</p>
//             <div className="flex space-x-2 text-black items-center  justify-center font-medium">
//               <p>Up to</p>
//               <p
//                 className=" bg-black h-[39px] w-[100px] rounded text-[#FCC900] items-center justify-center"
//               >
//                 64% OFF
//               </p>
//             </div>
//             <div className="flex justify-center">
//               <div className="flex items-center justify-center gap-2  bg-white text-primary rounded-3xl h-12 w-40 mt-4">
//                 <button className="ml-4 font-medium">Shop now </button>
//                 <GoArrowRight />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Banner;

import React from "react";
import { GoArrowRight } from "react-icons/go";
import Timer from "./Timer";

function Banner() {
  return (
    <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative text-white text-center h-[536px] w-full bg-[url('./assets/img/Bestdeals.png')] bg-cover rounded-md">
          <div className="absolute inset-0 -top-40 flex flex-col justify-center items-center leading-[46px]">
            <p className="">BEST DEALS</p>
            <p className="font-semibold text-3xl">Sale of the Month</p>
            <div className="flex justify-center mb-[9px]">
              <Timer className="" />
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2 bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-white text-center h-[536px] w-full bg-[url('./assets/img/Fatfree.png')] bg-cover rounded-md">
          <div className="absolute inset-0 -top-40 flex flex-col justify-center items-center leading-[46px]">
            <p className="">85% FAT FREE</p>
            <p className="font-semibold text-3xl">Low-Fat Meat</p>
            <div className="flex items-center justify-center gap-2">
              <p>Started at</p>
              <p className="text-orange font-medium">$79.99</p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2 bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-center h-[536px] w-full bg-[url('./assets/img/Last.png')] bg-cover rounded-md">
          <div className="absolute inset-0 -top-40 flex flex-col justify-center items-center leading-[46px]">
            <p className="">SUMMER SALE</p>
            <p className="font-semibold text-3xl">100% Fresh Fruit</p>
            <div className="flex space-x-2 text-black items-center justify-center font-medium">
              <p>Up to</p>
              <p className="bg-black h-[39px] w-[100px] rounded text-[#FCC900] flex items-center justify-center">
                64% OFF
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center gap-2 bg-white text-primary rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
