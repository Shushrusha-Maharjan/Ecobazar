import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Breadcrumb = () => {
  return (
    <section  className="">
      <div className="bg-[url('./assets/img/signin.jpg')] bg-cover h-[120px] top-[195px]">
        <div className='md:container md:mx-auto md:px-28 flex items-center pt-12'>
          <div className='text-white'><IoHomeOutline size={20}/></div>
          <div className='text-white '><IoIosArrowForward size={30}/></div>
          <div className='text-white'><a >Categories</a></div>
          <div className='text-white'><IoIosArrowForward size={30}/></div>
          <div className='text-white '>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "text-white"
              }
            >
              <a >Vegetables</a>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    
  )
}
