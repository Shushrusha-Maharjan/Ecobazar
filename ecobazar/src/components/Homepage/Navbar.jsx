import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiPhoneCall } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Shop", path: "/shop" },
    { link: "Pages", path: "/pages" },
    { link: "Blog", path: "/blog" },
    { link: "About Us", path: "/about" },
    { link: "Contact Us", path: "/contact" },
  ];

  return (
    <section className="container mx-auto">
      <div className="">
        <div className="border-b border-grey">
          <div className="flex justify-between mt-5 mb-2 md:container md:mx-auto md:px-28 ">
            <div className="flex items-center gap-2 ">
              <CiLocationOn size={20} color="red" /> Store Location: Lincoln-
              344, Illinois, Chicago, USA
            </div>
            <div className="flex gap-9">
              <div className="flex border-r-2 border-grey">
                <div className="flex items-center mr-3 gap-1 ">
                  Eng <FaAngleDown size={20} />
                  USD <FaAngleDown size={20} />
                </div>
              </div>
              <div className="item-center gap-5 flex">
                <NavLink to="/signin" className={({isActive})=>isActive?"text-primary": "text-slate-500"}><a>SignIn</a></NavLink>
                <div>/</div>
                <NavLink to="/signup" className={({isActive})=>isActive?"text-primary": "text-slate-500"}><a>SignUp</a></NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5 md:container md:mx-auto md:px-28">
          <div className="flex items-center gap-2 text-3xl">
            <PiPlantFill size={50} color="green" /> Ecobazar
          </div>
          <div className="md:flex hidden">
            <div
              className="flex py-[12px] pr-[18px] pl-[16px] w-[400px] h-[45px] border-solid border-2
            rounded-l-lg border-grey border-r-0"
            >
              <div className="flex items-center">
                <CiSearch size={20} color="black" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[350px] border-none outline-none  text-[15px] p-1 bg-transparent "
                />
              </div>
            </div>
            <button
              className="bg-primary rounded-r-lg border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5
            hover:bg-[#2C742F] duration-150 h-[45px]"
            >
              Search
            </button>
          </div>

          {/* <div className="flex space-x-4">
                <div className="flex rounded-md overflow-hidden w-96">

                {/* <svg className="w-6 h-6 text-gray-700 mt-5 ml-3 absolute bottom-600 left-1920" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
          {/* <input type="text" className="w-350px rounded-md rounded-r-none" placeholder="           Search"/>
                  <button className="bg-green-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                    Search
                  </button>
                </div>
              </div> */}

          <div className="flex items-center gap-3 ">
            <div className="border-r-2 border-grey pr-3">
              <GoHeart size={40} />
            </div>
            <div className="relative">
              <HiOutlineShoppingBag size={40} />
              <div className="absolute w-[20px] h-[20px] rounded-full items-center justify-center bg-primary text-white mt-[-40px] ml-[20px]"><p className="text-center">2</p></div>
            </div>
            
            <div>
              <div>Shopping Cart</div>
              <div>$57.00</div>
            </div>
          </div>
        </div>

        <div className="mt-5 bg-gray-800 text-white">
          <div className="md:container md:mx-auto md:px-28 flex justify-between items-center gap-11 ">
            {/* //             <div className="flex items-center"> */}
            <div>
              <ul className="text-grey md:flex space-x-8 m-5">
                {navItems.map((value, index) => (
                  <li key={index}>
                    <NavLink
                      to={value.path}
                      className={({ isActive }) =>
                        isActive ? "text-green-500" : "text-white"
                      }
                    >
                      {value.link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* //               <div className="flex items-center gap-1 mt-5 mb-5 mr-4">
//                 Home <FaAngleDown size={20} />
//               </div>
//               <div className="flex items-center gap-1 mt-5 mb-5 mr-4">
//                 Shop <FaAngleDown size={20} />
//               </div>
//               <div className="flex items-center gap-1 mt-5 mb-5 mr-4">
//                 Pages <FaAngleDown size={20} />
//               </div>
//               <div className="flex items-center gap-1 mt-5 mb-5 mr-4">
//                 Pages <FaAngleDown size={20} />
//               </div>
//               <div className="flex items-center gap-1 mt-5 mb-5 mr-4">
//                 Blog <FaAngleDown size={20} />
//               </div>
//               <div className="gap-2 mt-5 mb-5 mr-4">About Us </div>
//               <div className="gap-2 mt-5 mb-5 mr-4">Contact Us </div>
//             </div> */}

            <div className="flex items-center">
              <PiPhoneCall size={30} /> (219)555-01114
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

// import React from "react";
// import { CiLocationOn, CiSearch } from "react-icons/ci";
// import { FaAngleDown } from "react-icons/fa6";
// // import { Link } from "react-router-dom";
// import { LuPhoneCall } from "react-icons/lu";
// import { NavLink } from "react-router-dom";
// import bag from "../assets/image/Bag.png";
// import heart from "../assets/image/Heart.png";
// import plant from "../assets/image/plant.jpg";
// function Navbar() {
//   const navItems = [
//     { link: "Home", path: "/" },
//     { link: "Shop", path: "/shop" },
//     { link: "Pages", path: "/pages" },
//     { link: "Blog", path: "/blog" },
//     { link: "About Us", path: "/about" },
//     { link: "Contact Us", path: "/contact" },
//   ];
//   return (
//     <section className="">
//       <div className="">
//         <div className="border-b border-grey">
//           <div className="flex justify-between mt-5 mb-2 md:mx-auto md:px-28 px-3">
//             <div className="flex items-center gap-2">
//               <CiLocationOn size={20} color="grey" />
//               Store Location: Lincoln-344, Illinois, Chicago, USA
//             </div>
//             <div className="flex gap-7">
//               <div className="flex  gap-2 border-r-2 border-grey ">
//                 <div className="flex items-center mr-3 gap-2 ">
//                   ENG <FaAngleDown />
//                   USD <FaAngleDown />
//                 </div>
//               </div>
//               <div>
//                   <ul className="flex items-center gap-2">
//                     <NavLink to="/signin" className={({isActive}) => isActive? "text-primary" : "text-black"}>
//                      <a >Sign In</a>
//                     </NavLink>
//                     <div>/</div>
//                     <NavLink to="/signup" className={({isActive}) => isActive? "text-primary" : "text-black"}>
//                     <a >Sign Up</a>
//                     </NavLink>
//                   </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between text-center mt-5 mb-2 md:mx-auto md:px-28 px-3">
//           {/* logo */}
//           <div className=" text-center">
//             <a className="h-8 w-8 text-2xl font-semibold flex items-center space-x-3">
//               <img src={plant} />
//               <NavLink to="/">
//               <span>Ecobazar</span>
//               </NavLink>
//             </a>
//           </div>
//           {/* search */}
//           <div className="md:flex hidden">
//             <div
//               className="flex py-[12px] pr-[18px] pl-[16px] w-[400px] h-[45px] border-solid border-2
//             rounded-l-lg border-grey border-r-0"
//             >
//               <div className="flex items-center ">
//                 <CiSearch size={20} color="black" />
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="w-[350px] border-none outline-none  text-[15px] p-1 bg-transparent "
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
//           {/* like */}
//           <div className="flex">
//             <div className="flex items-center  ">
//               <div className="h-8 w-8">
//                 <div className=" border-r-2 border-grey">
//                   <div className="mr-2">
//                     <img src={heart} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-7 h-7 ml-2">
//               <img src={bag} />
//             </div>
//             <div className="text-left">
//               <div>Shopping cart</div>
//               <div>$57.0</div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between text-center mt-5 mb-2 md:mx-auto md:px-28 px-3 bg-black h-14">
//           <div>
//             <ul className="text-grey md:flex space-x-8 m-5">
//               {navItems.map((value, index) => (
//                <li key={index}>
//                 <NavLink to={value.path} className={({isActive})=> isActive? "text-green-500":"text-white"}>
//                     {value.link}
//                 </NavLink>
//                </li>
//               ))}
//             </ul>
//           </div>
//           <div className="m-5 md:flex text-grey gap-2">
//             <div>
//               <LuPhoneCall size={20} />
//             </div>
//             <div>(219) 555-0114</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Navbar;
