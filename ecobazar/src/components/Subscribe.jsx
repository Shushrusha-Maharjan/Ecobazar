import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Subscribe() {
  return (
    <section className='mt-5 mb-2 md:container md:mx-auto md:px-28'>
        <div className='flex space-y-9 mt-14'>
        <div>
            <p className='font-semibold text-[24px]'>Subscribe our Newsletter</p>
            <p className='text-slate-400'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
        </div>
        <div>
        <div className="md:flex hidden">
            <div
              className="flex py-[12px] pr-[18px] pl-[16px] w-[400px] h-[45px] border-solid border-2
            rounded-full border-grey border-r-0 mr-[-30px]"
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
              className="bg-primary rounded-full border-primary text-white text-[14px] pt-2 pb-2 pl-5 pr-5
            hover:bg-[#2C742F] duration-150 h-[45px]">
              Subscribe
            </button>
            <div className='flex gap-2 items-center justify-center space-x-4 pl-2'>
            <div><FaFacebook /></div>
<div><FaTwitter /></div>
<div><FaPinterestP /></div>
<div><FaInstagram /></div>
            </div>
          </div>
        </div>
        </div>
        
        
    </section>
  )
}

export default Subscribe