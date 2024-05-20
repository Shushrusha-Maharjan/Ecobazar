import React from 'react';
import { PiSlidersHorizontalLight } from "react-icons/pi";

const Topshop = () => {
  return (
    <section className='mt-5 mb-2 md:container md:mx-auto md:px-28'>
      <div className='flex justify-between'>
        <div className='w-3/12 flex items-center justify-between bg-slate-600'>
          <div className="flex place-content-center mt-2 ">
                <button className="buttonTertiary">
                  Filter{" "} <PiSlidersHorizontalLight size={20} color="primary" className="" />
                </button>
              </div>
          <div>Sort by:</div>
        </div>
        <div className='bg-pink-300'>results</div>
      </div>
    </section>
  )
}

export default Topshop;