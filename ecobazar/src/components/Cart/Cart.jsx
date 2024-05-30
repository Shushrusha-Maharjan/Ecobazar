
// import React from "react";
// import capsicum from "../../assets/img/capsicum.png";
// import redcapsicum from "../../assets/img/redcapsicum.png";
// import IncrementDecrementBtn from "./Counter";
// import CartTotal from "./Total";
// import CouponCode from "./Coupon";
// import { Breadcrumb } from "../Shop/Breadcrumbs";

// const Cart = () => {
//   return (
//     <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
//       <Breadcrumb/>
//       <div>
//         <p className="text-2xl md:text-4xl text-center mt-5 font-semibold">
//           My Shopping Cart
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//         <div className="md:col-span-2">
//           <div className="p-4 bg-white rounded-lg shadow-md">
//             <div className="hidden md:block">
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="p-2 md:p-4 text-left">PRODUCT</th>
//                     <th className="p-2 md:p-4 text-left">PRICE</th>
//                     <th className="p-2 md:p-4 text-left">QUANTITY</th>
//                     <th className="p-2 md:p-4 text-left">SUBTOTAL</th>
//                     <th className="p-2 md:p-4"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="p-2 md:p-4 flex items-center">
//                       <img
//                         src={capsicum}
//                         alt="Green Capsicum"
//                         className="h-16 w-16 md:h-24 md:w-24"
//                       />
//                       <span className="ml-2 md:ml-4">Green Capsicum</span>
//                     </td>
//                     <td className="p-2 md:p-4">$14.00</td>
//                     <td className="p-2 md:p-4">
//                       <IncrementDecrementBtn
//                         quantity={5}
//                         onDecrement={() => {}}
//                         onIncrement={() => {}}
//                       />
//                     </td>
//                     <td className="p-2 md:p-4">$70.00</td>
//                     <td className="p-2 md:p-4 text-right">
//                       <button className="rounded-full w-7 h-7 border border-gray-400 text-gray-600">
//                         ✖
//                       </button>
//                     </td>
//                   </tr>
//                   <tr className="border-b">
//                     <td className="p-2 md:p-4 flex items-center">
//                       <img
//                         src={redcapsicum}
//                         alt="Red Capsicum"
//                         className="h-16 w-16 md:h-24 md:w-24"
//                       />
//                       <span className="ml-2 md:ml-4">Red Capsicum</span>
//                     </td>
//                     <td className="p-2 md:p-4">$14.00</td>
//                     <td className="p-2 md:p-4">
//                       <IncrementDecrementBtn
//                         quantity={5}
//                         onDecrement={() => {}}
//                         onIncrement={() => {}}
//                       />
//                     </td>
//                     <td className="p-2 md:p-4">$70.00</td>
//                     <td className="p-2 md:p-4 text-right">
//                       <button className="rounded-full w-7 h-7 border border-gray-400 text-gray-600">
//                         ✖
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="md:hidden space-y-4">
//               <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
//                 <div className="flex items-center">
//                   <img
//                     src={capsicum}
//                     alt="Green Capsicum"
//                     className="h-16 w-16"
//                   />
//                   <span className="ml-4 font-semibold">Green Capsicum</span>
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span>Price: $14.00</span>
//                   <IncrementDecrementBtn
//                     quantity={5}
//                     onDecrement={() => {}}
//                     onIncrement={() => {}}
//                   />
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span>Subtotal: $70.00</span>
//                   <button className="rounded-full w-7 h-7 border border-gray-400 text-gray-600">
//                     ✖
//                   </button>
//                 </div>
//               </div>
//               <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md">
//                 <div className="flex items-center">
//                   <img
//                     src={redcapsicum}
//                     alt="Red Capsicum"
//                     className="h-16 w-16"
//                   />
//                   <span className="ml-4 font-semibold">Red Capsicum</span>
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span>Price: $14.00</span>
//                   <IncrementDecrementBtn
//                     quantity={5}
//                     onDecrement={() => {}}
//                     onIncrement={() => {}}
//                   />
//                 </div>
//                 <div className="mt-2 flex justify-between items-center">
//                   <span>Subtotal: $70.00</span>
//                   <button className="rounded-full w-7 h-7 border border-gray-400 text-gray-600">
//                     ✖
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
//                 Return to shop
//               </button>
//               <button className="px-4 py-2 bg-gray-800 text-white rounded-full">
//                 Update Cart
//               </button>
//             </div>
            
//           </div>
//           <div className="mt-10">
//           <CouponCode className="mt-5" />
//           </div>
          
//         </div>
//         <div className="md:col-span-1">
//           <CartTotal />
//         </div>
//       </div>
      
//     </section>
//   );
// };

// export default Cart;

