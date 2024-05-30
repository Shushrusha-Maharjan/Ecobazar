// 

import React from 'react';
import { PiPlantFill } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";
import Mastercard from "../../assets/img/Mastercard.png";
import ApplePay from "../../assets/img/ApplePay.png";
import Discover from "../../assets/img/Discover.png";
import Visa from "../../assets/img/Visa.png";
import Cart from "../../assets/img/Cart.png";

function Footers() {
  return (
    <section className=''>
      <div className='bg-slate-200'>
        <div className='mt-5 container mx-auto px-4 md:px-28'>
          <div className='flex flex-col md:flex-row md:space-y-0 space-y-9 mt-14 py-14'>
            <div className='md:flex-1'>
              <p className='font-semibold text-2xl'>Subscribe our Newsletter</p>
              <p className='text-slate-400'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
            </div>
            <div className='md:flex-1'>
              <div className="md:flex hidden">
                <div
                  className="flex py-3 pr-4 pl-4 w-full md:w-[400px] h-11 border-solid border-2
                rounded-full border-grey border-r-0 mr-[-30px] bg-white"
                >
                  <div className="flex items-center w-full">
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="w-full border-none outline-none text-base bg-transparent"
                    />
                  </div>
                </div>
                <button
                  className="bg-primary rounded-full border-primary text-white text-sm py-3 pr-4 pl-4
                hover:bg-[#2C742F] duration-150 h-11">
                  Subscribe
                </button>
                <div className='flex gap-2 items-center justify-center space-x-4 pl-2 text-gray-500'>
                  <FaFacebook />
                  <FaTwitter />
                  <FaPinterestP />
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-900 text-white px-4 md:px-[120px] py-6 md:py-12 text-sm'>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
          <div className='col-span-2 pr-8'>
            <div className="flex items-center gap-2 text-3xl mb-2">
              <PiPlantFill size={50} color="green" /> Ecobazar
            </div>
            <p className='text-slate-500 mb-4'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
            <div className='flex mt-2 gap-1'>
              <a href="tel:(219) 555-0114" className='border-b-2 border-[#20B526] pb-1'>(219) 555-0114</a>
              <p className='text-slate-500'>or</p>
              <a href="mailto:Proxy@gmail.com" className='border-b-2 border-[#20B526] pb-1'>Proxy@gmail.com</a>
            </div>
          </div>
          <div>
            <div className='mb-2 font-semibold'>My Account</div>
            <div className='text-slate-500'><a href="#">Order History</a></div>
            <div className='text-slate-500'><a href="#">Shopping Cart</a></div>
            <div className='text-slate-500'><a href="#">Wish List</a></div>
          </div>
          <div>
            <div className='mb-2 font-semibold'>Helps</div>
            <div className='text-slate-500 hover:text-white'><a href="#">Contact</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Faqs</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Terms & Conditions</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Privacy Policy</a></div>
          </div>
          <div>
            <div className='mb-2 font-semibold'>Proxy</div>
            <div className='text-slate-500 hover:text-white'><a href="#">About</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Shop</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Product</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Track Order</a></div>
          </div>
          <div>
            <div className='mb-2 font-semibold'>Categories</div>
            <div className='text-slate-500 hover:text-white'><a href="#">Fruit & Vegetables</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Meat & Fish</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Bread & Bakery</a></div>
            <div className='text-slate-500 hover:text-white'><a href="#">Beauty & Health</a></div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between text-slate-500 border-t-2 border-slate-500 pt-6 mt-10'>
          <div className='mb-4 md:mb-0'>Ecobazar eCommerce © 2021. All Rights Reserved</div>
          <div className='md:flex gap-2 h-[31.76px]'>
            <img src={ApplePay} className='md:w-full' alt="Apple Pay" />
            <img src={Visa} className='w-full' alt="Visa" />
            <img src={Discover} className='w-full' alt="Discover" />
            <img src={Mastercard} className='w-full' alt="Mastercard" />
            <img src={Cart} className='w-full' alt="Cart" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footers;
