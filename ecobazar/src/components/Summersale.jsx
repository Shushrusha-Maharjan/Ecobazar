import React from "react";
import { GoArrowRight } from "react-icons/go";
function Summersale() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div>
        <div className="top-[4212px] left-[300px] h-[358px] w-full bg-[url('./assets/img/back.jpg')] bg-cover pr-6 rounded-[10px]">
          <div className="ml-[650px] mt-[60px] pt-[20px] text-white">
            <p className="mt-[50px] text-2xl mb-3">SUMMER SALE</p>
            <div className="flex text-6xl mb-5">
              <p className="font-semibold text-orange">37%</p>
              <p className="font-semibold ">OFF</p>
            </div>
            <div className="leading-normal">
              Free on all your order, Free Shipping and 30 days money-back guarantee
            </div>

            <div className="flex">
              <div className="flex items-center justify-center gap-2  bg-primary text-white rounded-3xl h-12 w-40 mt-4">
                <button className="ml-4 font-medium">Shop now </button>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Summersale;
