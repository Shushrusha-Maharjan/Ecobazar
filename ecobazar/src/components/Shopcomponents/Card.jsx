// import React from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoHeartOutline } from "react-icons/io5";
// import { IoEyeOutline } from "react-icons/io5";
// import { useDispatch } from "react-redux";
// import { NavLink, useParams } from "react-router-dom";
// import { data } from "../../Data/Filterdata";
// const Card = ({key, image, price, sale, salePrice, rating, outOfStock, name }) => {
//   const product = data;
//   const dispatch = useDispatch();
//   const {type} = useParams();

// // const Card = ({ image, price, sale, salePrice, rating, outOfStock, name }) => {
//   return (
//     <section>
//       {/* <NavLink to="/single"> */}
//       <NavLink to={`/single/${type}/` + key}>
//       <div className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
//         <div className="mt-2 px-[-20px] hover:border-[#20B526]">
//           {sale && (
//             <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//               Sale 50%
//             </div>
//           )}
//           {outOfStock && (
//             <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//               Out of Stock
//             </div>
//           )}
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-[250px] object-cover rounded"
//           />
//           <div className="mt-4 ml-4 items-center justify-center">
//             <h3 className="text-lg font-semibold">{name}</h3>
//             <p className="text-gray-600">${sale ? salePrice : price}</p>
//             <div className="flex items-center">
//               <span className="text-[#FFA500] text-[24px]">
//                 {"★".repeat(Math.round(rating))}
//               </span>
//               <span className="text-gray-400 text-[24px]">
//                 {"★".repeat(5 - Math.round(rating))}
//               </span>
//             </div>
//           </div>
//           <div className="absolute top-4 right-3 flex flex-col justify-between">
//             <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//               <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                 <IoHeartOutline className="w-5 h-5" />
//               </div>
//               <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                 <IoEyeOutline className="w-5 h-5" />
//               </div>
//             </div>
//           </div>
//           <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center    group-hover:bg-primary group-hover:text-white">
//             <HiOutlineShoppingBag className="w-5 h-5" />
//           </div>
//         </div>
//       </div>
//       </NavLink>
//     </section>
//   );
// };

// export default Card;


// import React from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
// import { NavLink, useParams } from "react-router-dom";
// import { data } from "../../Data/Filterdata";

// const Card = ({ key, image, price, sale, salePrice, rating, outOfStock, name }) => {
//   const { type } = useParams();

//   return (
//     <section>
//       <NavLink to={`/single/${type}`}>
//         <div className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
//           <div className="mt-2 px-[-20px] hover:border-[#20B526]">
//             {sale && (
//               <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Sale 50%
//               </div>
//             )}
//             {outOfStock && (
//               <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Out of Stock
//               </div>
//             )}
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-[250px] object-cover rounded"
//             />
//             <div className="mt-4 ml-4 items-center justify-center">
//               <h3 className="text-lg font-semibold">{name}</h3>
//               <p className="text-gray-600">${sale ? salePrice : price}</p>
//               <div className="flex items-center">
//                 <span className="text-[#FFA500] text-[24px]">
//                   {"★".repeat(Math.round(rating))}
//                 </span>
//                 <span className="text-gray-400 text-[24px]">
//                   {"★".repeat(5 - Math.round(rating))}
//                 </span>
//               </div>
//             </div>
//             <div className="absolute top-4 right-3 flex flex-col justify-between">
//               <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoHeartOutline className="w-5 h-5" />
//                 </div>
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoEyeOutline className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
//               <HiOutlineShoppingBag className="w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </NavLink>
//     </section>
//   );
// };

// export default Card;





// import React from "react";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
// import { NavLink, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { singleProduct } from "../../features/slice/Productslice"; // Import the action

// const Card = ({ id, image, price, sale, salePrice, rating, outOfStock, name }) => {
//   const { type } = useParams();
//   const dispatch = useDispatch();

//   const handleProductSelect = () => {
//     dispatch(singleProduct(id)); // Dispatch the action with the product ID
//   };

//   return (
//     <section onClick={handleProductSelect}>
//       <NavLink to={`/single/${type}`}>
//         <div className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
//           <div className="mt-2 px-[-20px] hover:border-[#20B526]">
//             {sale && (
//               <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Sale 50%
//               </div>
//             )}
//             {outOfStock && (
//               <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Out of Stock
//               </div>
//             )}
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-[250px] object-cover rounded"
//             />
//             <div className="mt-4 ml-4 items-center justify-center">
//               <h3 className="text-lg font-semibold">{name}</h3>
//               <p className="text-gray-600">${sale ? salePrice : price}</p>
//               <div className="flex items-center">
//                 <span className="text-[#FFA500] text-[24px]">
//                   {"★".repeat(Math.round(rating))}
//                 </span>
//                 <span className="text-gray-400 text-[24px]">
//                   {"★".repeat(5 - Math.round(rating))}
//                 </span>
//               </div>
//             </div>
//             <div className="absolute top-4 right-3 flex flex-col justify-between">
//               <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoHeartOutline className="w-5 h-5" />
//                 </div>
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoEyeOutline className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
//               <HiOutlineShoppingBag className="w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </NavLink>
//     </section>
//   );
// };

// export default Card;





import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline, IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slice/Productslice"; // Import the action

// const Card = ({ id, image, price, sale, salePrice, rating, outOfStock, name }) => {
//   const dispatch = useDispatch();

//   const handleProductSelect = () => {
//     dispatch(singleProduct(id)); // Dispatch the action with the product ID
//   };

//   return (
//     <section className="">
//       <NavLink to={`/single/${id}`} onClick={handleProductSelect}>
//         <div className="group/item flex flex-col items-center justify-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
//           <div className="mt-2 px-[-20px] hover:border-[#20B526]">
//             {sale && (
//               <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Sale 50%
//               </div>
//             )}
//             {outOfStock && (
//               <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
//                 Out of Stock
//               </div>
//             )}
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-[200px] object-cover rounded"
//             />
//             <div className="mt-4 ml-4 items-center justify-center">
//               <h3 className="text-lg font-normal">{name}</h3>
//               <p className="text-gray-600">${sale ? salePrice : price}</p>
//               <div className="flex items-center">
//                 <span className="text-[#FFA500] text-[24px]">
//                   {"★".repeat(Math.round(rating))}
//                 </span>
//                 <span className="text-gray-400 text-[24px]">
//                   {"★".repeat(5 - Math.round(rating))}
//                 </span>
//               </div>
//             </div>
//             <div className="absolute top-4 right-3 flex flex-col justify-between">
//               <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoHeartOutline className="w-5 h-5" />
//                 </div>
//                 <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                   <IoEyeOutline className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
//               <HiOutlineShoppingBag className="w-5 h-5" />
//             </div>
//           </div>
//         </div>
//       </NavLink>
//     </section>
//   );
// };
const Card = ({ id, image, price, sale, salePrice, rating, outOfStock, name }) => {
  const dispatch = useDispatch();

  const handleProductSelect = () => {
    dispatch(singleProduct(id)); // Dispatch the action with the product ID
  };

  return (
    // <section className="max-w-[300px]"> {/* Set a fixed width for the card */}
    //   <NavLink to={`/single/${id}`} onClick={handleProductSelect}>
    //     <div className="group/item flex flex-col items-center justify-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
    //       <div className="mt-2 px-[-20px] hover:border-[#20B526]">
    //         {sale && (
    //           <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
    //             Sale 50%
    //           </div>
    //         )}
    //         {outOfStock && (
    //           <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
    //             Out of Stock
    //           </div>
    //         )}
    //         <img
    //           src={image}
    //           alt={name}
    //           className="w-full h-[200px] object-cover rounded"
    //         />
    //         <div className="mt-4 ml-4 items-center justify-center">
    //           <h3 className="text-lg font-normal">{name}</h3>
    //           <p className="text-gray-600">${sale ? salePrice : price}</p>
    //           <div className="flex items-center">
    //             <span className="text-[#FFA500] text-[24px]">
    //               {"★".repeat(Math.round(rating))}
    //             </span>
    //             <span className="text-gray-400 text-[24px]">
    //               {"★".repeat(5 - Math.round(rating))}
    //             </span>
    //           </div>
    //         </div>
    //         <div className="absolute top-4 right-3 flex flex-col justify-between">
    //           <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
    //             <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
    //               <IoHeartOutline className="w-5 h-5" />
    //             </div>
    //             <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
    //               <IoEyeOutline className="w-5 h-5" />
    //             </div>
    //           </div>
    //         </div>
    //         <div className="absolute bottom-5 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
    //           <HiOutlineShoppingBag className="w-5 h-5" />
    //         </div>
    //       </div>
    //     </div>
    //   </NavLink>
    // </section>
    <section className="flex justify-center"> {/* Center the card horizontally */}
    <div className="max-w-[300px]"> {/* Set a fixed width for the card */}
      <NavLink to={`/single/${id}`} onClick={handleProductSelect}>
        <div className="group/item flex flex-col items-center justify-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
          <div className="mt-2 px-[-20px] hover:border-[#20B526]">
            {sale && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
                Sale 50%
              </div>
            )}
            {outOfStock && (
              <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5 left-5">
                Out of Stock
              </div>
            )}
            <img
              src={image}
              alt={name}
              className="w-[220px] h-[200px] object-cover rounded"
            />
            <div className="mt-4 ml-4 items-center justify-center">
              <h3 className="lg:text-lg md:text-[14px] font-normal">{name}</h3>
              <p className="text-gray-600">${sale ? salePrice : price}</p>
              <div className="flex items-center">
                <span className="text-[#FFA500] lg:text-[24px]">
                  {"★".repeat(Math.round(rating))}
                </span>
                <span className="text-gray-400 lg:text-[24px]">
                  {"★".repeat(5 - Math.round(rating))}
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
        </div>
      </NavLink>
    </div>
  </section>
  );
};




export default Card;


