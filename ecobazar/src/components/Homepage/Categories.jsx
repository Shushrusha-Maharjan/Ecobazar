import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

function Categories() {
  return (
    <section>
      <div className="md:container md:px-28 md:mx-auto space-x-11 gap-4">
        <div className="md:container shadow-lg flex justify-between mt-5 mb-2 gap-5">
        <div className="flex justify-between gap-3 pl-4">
          <div>
            <LiaShippingFastSolid size={40} color="#00B207" />
          </div>
          <div>
          <div className="text-[16px]">Free Shipping</div>
          <div className="text-slate-400 text-[14px]">Free Shipping on all your order</div>
          </div>
        </div>

        <div className="flex justify-between gap-3">
          <div>
            <TfiHeadphoneAlt size={40} color="#00B207" />
          </div>
          <div>
          <div className="text-[16px]">Customer Support 24/7</div>
          <div className="text-slate-400 text-[14px]">Instant access to support</div>
          </div>
        </div>

        <div className="flex justify-between gap-3">
        <div>
          <IoBagCheckOutline size={40} color="#00B207" />
        </div>
        <div>
        <div className="text-[16px]">100% Secure Payment</div>
        <div className="text-slate-400 text-[14px]">We ensure your money is save</div>
        </div>
        </div>

        <div className="flex justify-between gap-3">
        <div>
          <BsBoxSeam size={40} color="#00B207" />
        </div>
        <div>
        <div className="text-[16px]">Money-Back Guarantee</div>
        <div className="text-slate-400 text-[14px]">30 Days Money-Back Guarantee</div>
        </div>
      </div>
        </div>
        
      </div>
    </section>
  );
}

export default Categories;
