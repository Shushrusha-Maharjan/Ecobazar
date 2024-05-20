import React from 'react';
import { PiPlantFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Mastercard from "../../assets/img/Mastercard.png";
import ApplePay from "../../assets/img/ApplePay.png";
import Discover from "../../assets/img/Discover.png";
import Visa from "../../assets/img/Visa.png";
import Cart from "../../assets/img/Cart.png"; 
function Footers() {
  return (
    <section className=''>
      <div className='bg-slate-200'>
      <div className='mt-5  md:container md:mx-auto md:px-28'>
      <div className='flex space-y-9 mt-14 py-14'>
        <div>
            <p className='font-semibold text-[24px]'>Subscribe our Newsletter</p>
            <p className='text-slate-400'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
        </div>
        <div>
        <div className="md:flex hidden">
            <div
              className="flex py-[12px] pr-[18px] pl-[16px] w-[400px] h-[45px] border-solid border-2
            rounded-full border-grey border-r-0 mr-[-30px]  bg-white"
            >
              <div className="flex items-center">
                
                <input
                  type="text"
                  placeholder="Your email address"
                  className="w-[350px] border-none outline-none  text-[15px] bg-transparent "
                />
              </div>
            </div>
            <button
              className="bg-primary rounded-full border-primary text-white text-[14px] py-[12px] pr-[18px] pl-[16px]
            hover:bg-[#2C742F] duration-150 h-[45px]">
              Subscribe
            </button>
            <div className='flex gap-2 items-center justify-center space-x-4 pl-2 text-gray-500'>
            <div><FaFacebook /></div>
<div><FaTwitter /></div>
<div><FaPinterestP /></div>
<div><FaInstagram /></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      <div className=' bg-slate-900 text-white px-[120px] py-[30px] text-[14px]'>
        <div className='grid grid-cols-6'>
            <div className='col-span-2 pr-8'>
            <div className="flex items-center gap-2 text-3xl">
            <PiPlantFill size={50} color="green" /> Ecobazar
          </div>
          <p className='text-slate-500'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          <div className='flex mt-2 gap-1'>
          <a className='border-b-2 border-[#20B526] pb-1'>(219) 555-0114</a>
          <p  className='text-slate-500'>or</p>
          <a className='border-b-2 border-[#20B526] pb-1'>Proxy@gmail.com</a>
          </div>
            </div>
            <div >
                <div className='mb-2'><a>My Account</a></div>
                <div className='text-slate-500'>My Account</div>
                <div ><a className='text-slate-500'>Order History</a></div>
                <div><a className='text-slate-500'>Shopping Cart</a></div>
                <div><a className='text-slate-500'>Wish List</a></div>

            </div>
            <div>
            <div className='mb-2'><a>Helps</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Contact</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Faqs</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Terms & Conditions</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Privacy Policy</a></div>
            </div>
            <div>
            <div className='mb-2'><a>Proxy</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>About</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Shop</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Product</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Track Order</a></div>
            </div>
            <div>
            <div className='mb-2'><a>Categories</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Fruit & Vegetables</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Meat & Fish</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Meat & Fish</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Bread & Bakery</a></div>
                <div className=''><a className='text-slate-500 hover:text-white'>Beauty & Health</a></div>
            </div>
        </div>
        <div className='flex justify-between text-slate-500 border-t-2 border-slate-500 pt-6 mt-20'>
        <div>Ecobazar eCommerce © 2021. All Rights Reserved</div>
        <div className='flex gap-1 h-[31.76px]'>
<img src={ApplePay} className='w-full '></img>
<img src={Visa} className='w-full '></img>
<img src={Discover} className='w-full '></img>
<img src={Mastercard} className='w-full '></img>
<img src={Cart} className='w-full '></img>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Footers