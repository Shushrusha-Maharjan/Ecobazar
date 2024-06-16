// // CouponCode.js
// import React from "react";

// const CouponCode = () => {
//   return (
//     <div className="border rounded-lg items-center">
//       <div className=" p-4 bg-white rounded-lg md:flex  items-center ">
//         <div className="">
//           <p className="font-medium">Coupon Code</p>
//         </div>
//         <div className="">
//           <div className=" w-full sm:w-auto ml-44">
//             <input
//               id="coupon"
//               type="text"
//               placeholder="Enter code"
//               className="flex-1 px-4 py-2 border rounded-3xl"
//             />
//             <button className=" bg-gray-800 text-white border rounded-3xl w-40 h-11 -ml-7">
//               Apply Coupon
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CouponCode;

import React from "react";

const CouponCode = () => {
  return (
    <div className="border rounded-lg p-4 bg-white">
      <div className="md:flex items-center">
        <div className="mb-2 md:mb-0 md:mr-4">
          <p className="font-medium">Coupon Code</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-full">
          <input
            id="coupon"
            type="text"
            placeholder="Enter code"
            className="flex-1 px-4 py-2 border rounded-3xl mb-2 lg:mb-0 lg:-mr-20 w-full lg:w-auto"
          />
          <button className="bg-gray-800 text-white border rounded-3xl w-full lg:w-auto h-11 lg:h-auto px-4 py-2 md:text-[8x]">
            Apply Coupon
          </button>
          
        </div>
      </div>
    </div>
//     <div className="border rounded-lg p-4 bg-white">
//   <div className="md:flex items-center">
//     <div className="mb-2 md:mb-0 md:mr-4">
//       <p className="font-medium">Coupon Code</p>
//     </div>
//     <div className="flex flex-col md:flex-row items-center w-full">
//       <input
//         id="coupon"
//         type="text"
//         placeholder="Enter code"
//         className="flex-1 px-4 py-2 border rounded-3xl mb-2 md:mb-0 md:-mr-20 w-full md:w-auto text-sm" {/* Here */}
//       />
//       <button className="bg-gray-800 text-white border rounded-3xl w-full md:w-auto h-11 md:h-auto px-4 py-2 sm:text-[16px] text-sm"> {/* Here */}
//         Apply Coupon
//       </button>
//     </div>
//   </div>
// </div>

  );
};

export default CouponCode;

