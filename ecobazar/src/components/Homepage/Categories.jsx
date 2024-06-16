// import React from "react";
// import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { LiaShippingFastSolid } from "react-icons/lia";
// import { IoBagCheckOutline } from "react-icons/io5";
// import { BsBoxSeam } from "react-icons/bs";

// function Categories() {
//   return (
//     <section>
//       <div className="md:container md:px-28 md:mx-auto space-x-11 gap-4">
//         <div className="md:container shadow-lg flex justify-between mt-5 mb-2 gap-5">
//         <div className="flex justify-between gap-3 pl-4">
//           <div>
//             <LiaShippingFastSolid size={40} color="#00B207" />
//           </div>
//           <div>
//           <div className="text-[16px]">Free Shipping</div>
//           <div className="text-slate-400 text-[14px]">Free Shipping on all your order</div>
//           </div>
//         </div>

//         <div className="flex justify-between gap-3">
//           <div>
//             <TfiHeadphoneAlt size={40} color="#00B207" />
//           </div>
//           <div>
//           <div className="text-[16px]">Customer Support 24/7</div>
//           <div className="text-slate-400 text-[14px]">Instant access to support</div>
//           </div>
//         </div>

//         <div className="flex justify-between gap-3">
//         <div>
//           <IoBagCheckOutline size={40} color="#00B207" />
//         </div>
//         <div>
//         <div className="text-[16px]">100% Secure Payment</div>
//         <div className="text-slate-400 text-[14px]">We ensure your money is save</div>
//         </div>
//         </div>

//         <div className="flex justify-between gap-3">
//         <div>
//           <BsBoxSeam size={40} color="#00B207" />
//         </div>
//         <div>
//         <div className="text-[16px]">Money-Back Guarantee</div>
//         <div className="text-slate-400 text-[14px]">30 Days Money-Back Guarantee</div>
//         </div>
//       </div>
//         </div>
        
//       </div>
//     </section>
//   );
// }

// export default Categories;

import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

function Categories() {
  return (
    <section>
      <div className="md:container lg:px-28 md:px-10 md:mx-auto space-x-11 gap-4">
        {/* Original layout for large screens */}
        <div className="md:container shadow-lg justify-between mt-5 mb-2 gap-5 hidden container md:flex">
          <div className="flex justify-between gap-3 pl-4">
            <div>
              <LiaShippingFastSolid size={40} color="#00B207" />
            </div>
            <div>
              <div className="lg:text-[16px] md:text-[12px]">Free Shipping</div>
              <div className="text-slate-400 lg:text-[14px] md:text-[12px]">Free Shipping on all your order</div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div>
              <TfiHeadphoneAlt size={40} color="#00B207" />
            </div>
            <div>
              <div className="lg:text-[16px] md:text-[12px]">Customer Support 24/7</div>
              <div className="text-slate-400 lg:text-[14px] md:text-[12px]">Instant access to support</div>
            </div>
          </div>

          <div className="md:flex justify-between gap-3">
            <div>
              <IoBagCheckOutline size={40} color="#00B207" />
            </div>
            <div>
              <div className="lg:text-[16px] md:text-[12px]">100% Secure Payment</div>
              <div className="text-slate-400 lg:text-[14px] md:text-[12px]">We ensure your money is save</div>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <div>
              <BsBoxSeam size={40} color="#00B207" />
            </div>
            <div>
              <div className="lg:text-[16px] md:text-[12px]">Money-Back Guarantee</div>
              <div className="text-slate-400 lg:text-[14px] md:text-[12px]">30 Days Money-Back Guarantee</div>
            </div>
          </div>
        </div>

        {/* Responsive layout for smaller screens */}
        <div className="md:hidden">
          <div className="-ml-10 grid grid-cols-1 gap-5 mt-1 border-[1px] shadow-sm">
            <div className="bg-white border-b-[1px] flex flex-col justify-center items-center p-4 rounded-lg">
              <LiaShippingFastSolid size={30} color="#00B207" />
              <div className="mt-2 text-lg">Free Shipping</div>
              <div className="text-slate-400 text-sm">Free Shipping on all orders</div>
            </div>

            <div className="bg-white border-b-[1px] flex flex-col justify-center items-center p-4 rounded-lg">
              <TfiHeadphoneAlt size={30} color="#00B207" />
              <div className="mt-2 text-lg">Customer Support 24/7</div>
              <div className="text-slate-400 text-sm">Instant access to support</div>
            </div>

            <div className="bg-white border-b-[1px] flex flex-col justify-center items-center p-4 rounded-lg">
              <IoBagCheckOutline size={30} color="#00B207" />
              <div className="mt-2 text-lg">100% Secure Payment</div>
              <div className="text-slate-400 text-sm">We ensure your money is safe</div>
            </div>

            <div className="bg-white border-b-[1px] flex flex-col justify-center items-center p-4 rounded-lg">
              <BsBoxSeam size={30} color="#00B207" />
              <div className="mt-2 text-lg">Money-Back Guarantee</div>
              <div className="text-slate-400 text-sm">30 Days Money-Back Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
