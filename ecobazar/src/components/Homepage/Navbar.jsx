

// import React, { useState } from "react";
// import { CiLocationOn } from "react-icons/ci";
// import { FaAngleDown } from "react-icons/fa6";
// import { PiPlantFill } from "react-icons/pi";
// import { GoHeart } from "react-icons/go";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// import { PiPhoneCall } from "react-icons/pi";
// import { CiSearch } from "react-icons/ci";
// import { NavLink } from "react-router-dom";
// import { IoReorderThreeOutline } from "react-icons/io5";

// import { useSelector } from "react-redux";

// function Navbar() {
//   // const cartItems = useSelector((state) => state.cartLogo.totalItems);
//   // const cartPrice = useSelector((state) => state.cartLogo.totalPrice);
//   const cartItems = useSelector((state) => state.cart.totalAmount);
//   const cartPrice = useSelector((state) => state.cart.totalPrice);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Shop", path: "/shop" },
//     { link: "Pages", path: "/single" },
//     { link: "Blog", path: "/blog" },
//     { link: "About Us", path: "/about" },
//     { link: "Contact Us", path: "/contact" },
//   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <section className="">
//       <div className="">
        
// <div className="md:hidden flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 py-2 px-2">
         
//           {/* Navigation and Cart for smaller screens */}
//           <NavLink to="/">
//             <div className="flex items-center gap-2 text-3xl ml-2">
//               <PiPlantFill size={50} color="green" /> Ecobazar
//             </div>
//           </NavLink>
//           <div className="md:hidden flex relative">
//             <button
//               className="text-black flex justify-center pr-5 focus:outline-none md:hidden"
//               onClick={toggleDropdown}
//             >
//               <IoReorderThreeOutline size={30} />
//             </button>
//             {isDropdownOpen && (
//               <div
//                 className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
//                   isDropdownOpen ? "block" : "hidden"
//                 }`}
//                 onClick={toggleDropdown}
//               >
//                 {/* Dropdown menu */}
//                 <div
//                   className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform transform duration-300 ease-in-out"
//                   style={{
//                     transform: isDropdownOpen
//                       ? "translateX(0)"
//                       : "translateX(-100%)",
//                   }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <ul className="flex flex-col mt-16 space-y-4 px-4">
//                     {navItems.map((value, index) => (
//                       <li key={index}>
//                         <NavLink
//                           to={value.path}
//                           className={({ isActive }) =>
//                             isActive ? "text-primary" : "text-black"
//                           }
//                           onClick={() => setIsDropdownOpen(false)}
//                         >
//                           {value.link}
//                         </NavLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             )}
//             <NavLink
//               to="/cart"
//               className={({ isActive }) =>
//                 isActive ? "text-primary" : "text-slate-500"
//               }
//             >
//               {/* Cart icon with badge */}
//               <div className="relative flex items-center pr-2">
//                 <HiOutlineShoppingBag size={25} />
//                 <div className="absolute w-[15px] h-[15px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[20px]">
//                   <p className="text-[10px]">{cartItems}</p>
//                 </div>
//               </div>
//             </NavLink>
//           </div>
//         </div>
//         <div className="md:container md:mx-auto lg:px-28 md:px-10 border-b border-grey">
//           <div className="md:flex flex-col md:flex-row justify-between mt-5 md:mb-2">
//             <div className="hidden md:container md:flex items-center gap-2 mb-4 md:mb-0">
//               <CiLocationOn size={20} color="gray" /> Store Location: Lincoln-
//               344, Illinois, Chicago, USA
//             </div>
//             <div className="hidden md:flex gap-9">
//               <div className="flex border-r-2 border-grey">
//                 <div className="lg:flex md:hidden items-center mr-3 gap-1 ">
//                   Eng <FaAngleDown size={20} />
//                   USD <FaAngleDown size={20} />
//                 </div>
//               </div>
//               <div className="hidden md:flex items-center gap-2">
//                 <NavLink
//                   to="/signin"
//                   className={({ isActive }) =>
//                     isActive ? "text-primary" : "text-slate-500"
//                   }
//                 >
//                   SignIn
//                 </NavLink>
//                 <div>/</div>
//                 <NavLink
//                   to="/signup"
//                   className={({ isActive }) =>
//                     isActive ? "text-primary" : "text-slate-500"
//                   }
//                 >
//                   SignUp
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between mt-5 md:container md:mx-auto pr-5 lg:px-28 md:px-10 md:mb-3">
//           <NavLink to="/">
//             <div className="hidden md:flex md:items-center gap-2 text-[28px] md:font-medium lg:pt-2 md:pt-2">
//               <PiPlantFill size={50} color="green" /> Ecobazar
//             </div>
//           </NavLink>
//           {/* for smaller screen */}

//           <div className="md:hidden flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 py-2 px-5">
//             <NavLink to="/">
//               <div className="flex items-center gap-2 text-3xl ml-2">
//                 <PiPlantFill size={50} color="green" /> Ecobazar
//               </div>
//             </NavLink>
//             <div className="md:hidden flex relative pr-5">
//               <button
//                 className="text-black flex justify-center pr-5 focus:outline-none md:hidden"
//                 onClick={toggleDropdown}
//               >
//                 <IoReorderThreeOutline size={30} />
//               </button>
//               {isDropdownOpen && (
//                 <div
//                   className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
//                     isDropdownOpen ? "block" : "hidden"
//                   }`}
//                   onClick={toggleDropdown}
//                 >
//                   <div
//                     className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform transform duration-300 ease-in-out"
//                     style={{
//                       transform: isDropdownOpen
//                         ? "translateX(0)"
//                         : "translateX(-100%)",
//                     }}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <ul className="flex flex-col mt-16 space-y-4 px-4">
//                       {navItems.map((value, index) => (
//                         <li key={index}>
//                           <NavLink
//                             to={value.path}
//                             className={({ isActive }) =>
//                               isActive ? "text-primary" : "text-black"
//                             }
//                             onClick={() => setIsDropdownOpen(false)}
//                           >
//                             {value.link}
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               )}
//               <NavLink
//                 to="/cart"
//                 className={({ isActive }) =>
//                   isActive ? "text-primary" : "text-slate-500"
//                 }
//               >
//                 <div className="relative flex items-center pr-5">
//                   <HiOutlineShoppingBag size={25} />
//                   <div className="absolute w-[15px] h-[15px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[5px]">
//                     <p className="text-[10px]">{cartItems}</p>
//                   </div>
//                 </div>
//               </NavLink>
//             </div>
//           </div>

//           <div className="hidden md:flex md:justify-center md:items-center">
//             <div
//               className="flex py-[12px] pr-[18px] pl-[16px] lg:w-full xl:w-[400px] md:w-[200px] h-[45px] border-solid border-2
//             rounded-l-lg border-grey border-r-0"
//             >
//               <div className="flex items-center">
//                 <CiSearch size={20} color="black" />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="lg:w-full border-none outline-none text-[15px] p-1 bg-transparent"
//                 />
//               </div>
//             </div>
//             <button
//               className="bg-primary rounded-r-lg border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5
//             hover:bg-[#2C742F] duration-150 h-[45px]"
//             >
//               Search
//             </button>
//           </div>

//           <div className="hidden md:flex items-center gap-3 ">
//             <div className="border-r-2 border-grey pr-3">
//               <GoHeart size={30} />
//             </div>
//             <NavLink
//               to="/cart"
//               className={({ isActive }) =>
//                 isActive ? "text-primary" : "text-slate-500"
//               }
//             >
//               <div className="relative flex items-center">
//                 <HiOutlineShoppingBag size={30} />
//                 <div className="absolute w-[20px] h-[20px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[-5px]">
//                   <p className="text-[15px]">{cartItems}</p>
//                 </div>
//               </div>
//             </NavLink>
//             <div className="lg:flex lg:flex-col md:hidden items-start">
//               <div>Shopping Cart</div>
//               <div>{cartPrice}$</div>
//             </div>
//           </div>
//         </div>

//         {/* <div className=""> */}
//           <div className="md:mx-auto lg:px-28 md:px-10 bg-gray-800 md:text-white mx-[-6rem] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-11">
//             <div className="hidden md:flex">
//               <ul className="text-grey flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 m-5">
//                 {navItems.map((value, index) => (
//                   <li key={index}>
//                     <NavLink
//                       to={value.path}
//                       className={({ isActive }) =>
//                         isActive ? "text-green-500" : "text-white"
//                       }
//                     >
//                       {value.link}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="hidden lg:flex items-center">
//               <PiPhoneCall size={30} /> (219)555-01114
//             </div>
//           </div>
//         {/* </div> */}
//       </div>
//     </section>
//   );
// }


// // function Navbar() {
// //   const cartItems = useSelector((state) => state.cart.totalAmount);
// //   const cartPrice = useSelector((state) => state.cart.totalPrice);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const navItems = [
// //     { link: "Home", path: "/" },
// //     { link: "Shop", path: "/shop" },
// //     { link: "Pages", path: "/single" },
// //     { link: "Blog", path: "/blog" },
// //     { link: "About Us", path: "/about" },
// //     { link: "Contact Us", path: "/contact" },
// //   ];

// //   const toggleDropdown = () => {
// //     setIsDropdownOpen(!isDropdownOpen);
// //   };

// //   return (
// //     <section className="mx-auto">
// //       <div className="">
// //         {/* Previous content */}

// //         <div className="md:hidden flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 py-2 px-4">
// //           {/* Navigation and Cart for smaller screens */}
// //           <NavLink to="/">
// //             <div className="flex items-center gap-2 text-3xl ml-2">
// //               <PiPlantFill size={50} color="green" /> Ecobazar
// //             </div>
// //           </NavLink>
// //           <div className="md:hidden flex relative">
// //             <button
// //               className="text-black flex justify-center pr-5 focus:outline-none md:hidden"
// //               onClick={toggleDropdown}
// //             >
// //               <IoReorderThreeOutline size={30} />
// //             </button>
// //             {isDropdownOpen && (
// //               <div
// //                 className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
// //                   isDropdownOpen ? "block" : "hidden"
// //                 }`}
// //                 onClick={toggleDropdown}
// //               >
// //                 {/* Dropdown menu */}
// //                 <div
// //                   className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform transform duration-300 ease-in-out"
// //                   style={{
// //                     transform: isDropdownOpen
// //                       ? "translateX(0)"
// //                       : "translateX(-100%)",
// //                   }}
// //                   onClick={(e) => e.stopPropagation()}
// //                 >
// //                   <ul className="flex flex-col mt-16 space-y-4 px-4">
// //                     {navItems.map((value, index) => (
// //                       <li key={index}>
// //                         <NavLink
// //                           to={value.path}
// //                           className={({ isActive }) =>
// //                             isActive ? "text-primary" : "text-black"
// //                           }
// //                           onClick={() => setIsDropdownOpen(false)}
// //                         >
// //                           {value.link}
// //                         </NavLink>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               </div>
// //             )}
// //             <NavLink
// //               to="/cart"
// //               className={({ isActive }) =>
// //                 isActive ? "text-primary" : "text-slate-500"
// //               }
// //             >
// //               {/* Cart icon with badge */}
// //               <div className="relative flex items-center pr-2">
// //                 <HiOutlineShoppingBag size={25} />
// //                 <div className="absolute w-[15px] h-[15px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[5px]">
// //                   <p className="text-[10px]">{cartItems}</p>
// //                 </div>
// //               </div>
// //             </NavLink>
// //           </div>
// //         </div>

// //         {/* Previous content */}
// //       </div>
// //     </section>
// //   );
// // }



// export default Navbar;
import React, { useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { PiPlantFill, PiPhoneCall } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.totalAmount);
  const cartPrice = useSelector((state) => state.cart.totalPrice);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Pages", path: "/single" },
    { link: "Blog", path: "/blog" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
  ];
  const navItemsmob = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Pages", path: "/single" },
    { link: "Blog", path: "/blog" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
    { link: "Sign In", path: "/signin" },
    { link: "Sign Up", path: "/signup" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section>
      <div>
        {/* Mobile Navbar */}
        <div className="md:hidden px-5 flex items-center justify-between fixed top-0 left-0 right-0 bg-white z-50 py-2">
          <NavLink to="/">
            <div className="flex items-center gap-2 text-3xl ml-2">
              <PiPlantFill size={50} color="green" /> Ecobazar
            </div>
          </NavLink>
          <div className="md:hidden flex relative">
            <button className="text-black flex justify-center pr-5 focus:outline-none" onClick={toggleDropdown}>
              <IoReorderThreeOutline size={30} />
            </button>
            {isDropdownOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={toggleDropdown}>
                <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform transform duration-300 ease-in-out" style={{ transform: isDropdownOpen ? "translateX(0)" : "translateX(-100%)" }} onClick={(e) => e.stopPropagation()}>
                  <ul className="flex flex-col mt-16 space-y-4 px-4">
                    {navItemsmob.map((value, index) => (
                      <li key={index}>
                        <NavLink to={value.path} className={({ isActive }) => (isActive ? "text-primary" : "text-black")} onClick={() => setIsDropdownOpen(false)}>
                          {value.link}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primary" : "text-slate-500")}>
              <div className="relative flex items-center pr-2">
                <HiOutlineShoppingBag size={25} />
                <div className="absolute w-[15px] h-[15px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[5px]">
                  <p className="text-[10px]">{cartItems}</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="md:container md:mx-auto lg:px-28 md:px-10 border-b border-grey">
          <div className="md:flex flex-col md:flex-row justify-between mt-5 md:mb-2">
            <div className="hidden md:container md:flex items-center gap-2 mb-4 md:mb-0">
              <CiLocationOn size={20} color="gray" /> Store Location: Lincoln- 344, Illinois, Chicago, USA
            </div>
            <div className="hidden md:flex gap-9">
              <div className="flex border-r-2 border-grey">
                <div className="lg:flex md:hidden items-center mr-3 gap-1">
                  Eng <FaAngleDown size={20} /> USD <FaAngleDown size={20} />
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <NavLink to="/signin" className={({ isActive }) => (isActive ? "text-primary" : "text-slate-500")}>
                  SignIn
                </NavLink>
                <div>/</div>
                <NavLink to="/signup" className={({ isActive }) => (isActive ? "text-primary" : "text-slate-500")}>
                  SignUp
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-5 md:container md:mx-auto pr-5 lg:px-28 md:px-10 md:mb-3">
          <NavLink to="/">
            <div className="hidden md:flex md:items-center gap-2 text-[28px] md:font-medium lg:pt-2 md:pt-2">
              <PiPlantFill size={50} color="green" /> Ecobazar
            </div>
          </NavLink>

          {/* Search and Cart */}
          <div className="hidden md:flex md:justify-center md:items-center">
            <div className="flex py-[12px] pr-[18px] pl-[16px] lg:w-full xl:w-[400px] md:w-[200px] h-[45px] border-solid border-2 rounded-l-lg border-grey border-r-0">
              <div className="flex items-center">
                <CiSearch size={20} color="black" />
                <input type="text" placeholder="Search" className="lg:w-full border-none outline-none text-[15px] p-1 bg-transparent" />
              </div>
            </div>
            <button className="bg-primary rounded-r-lg border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5 hover:bg-[#2C742F] duration-150 h-[45px]">
              Search
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="border-r-2 border-grey pr-3">
              <GoHeart size={30} />
            </div>
            <NavLink to="/cart" className={({ isActive }) => (isActive ? "text-primary" : "text-slate-500")}>
              <div className="relative flex items-center">
                <HiOutlineShoppingBag size={30} />
                <div className="absolute w-[20px] h-[20px] rounded-full flex items-center justify-center bg-primary text-white top-[-5px] right-[-5px]">
                  <p className="text-[15px]">{cartItems}</p>
                </div>
              </div>
            </NavLink>
            <div className="lg:flex lg:flex-col md:hidden items-start">
              <div>Shopping Cart</div>
              <div>{cartPrice}$</div>
            </div>
          </div>
        </div>

        {/* Footer Navbar */}
        <div className="md:mx-auto lg:px-28 md:px-10 bg-gray-800 md:text-white flex flex-col md:flex-row justify-between items-center gap-4 md:gap-11">
          <div className="hidden md:flex">
            <ul className="text-grey flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 m-5">
              {navItems.map((value, index) => (
                <li key={index}>
                  <NavLink to={value.path} className={({ isActive }) => (isActive ? "text-green-500" : "text-white")}>
                    {value.link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center pr-5">
            <PiPhoneCall size={30} /> (219)555-01114
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
