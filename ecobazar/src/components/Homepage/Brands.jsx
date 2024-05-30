import React from "react";
import foods from "../../assets/img/foods.png";
import food from "../../assets/img/food.png";
import bookoff from "../../assets/img/bookoff.png";
import Group from "../../assets/img/Group.png";
import mangos from "../../assets/img/mangos.png";
import steps from "../../assets/img/steps.png";
import { LuTally1 } from "react-icons/lu";

const data = [
  {
    img: steps,
  },
  {
    img: mangos,
  },
  {
    img: foods,
  },
  {
    img: food,
  },
  {
    img: bookoff,
  },
  {
    img: Group,
  },
];
function Brands() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="md:flex items-center justify-between">
        {data.map((item, index) => (
          <div className="md:flex items-center justify-between gap-12">
            <div className="">
              <img src={item.img} className="h-[32px]"></img>
            </div>

            <div className="items-center justify-between">
              <LuTally1 size={40} color="#E6E6E6"/>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="items-center justify-between">
          <img src={steps} className="h-[32px]"></img>
        </div> */}

      {/* <div>
          <img src={mangos} className="h-[32px]"></img>
        </div>
        <div
          className="border border-slate-400 h-[32px]">
          
        </div>

        <div>
          <img src={foods} className="h-[32px]"></img>
        </div>
        <div
          className="border border-slate-400 h-[32px]">
          
        </div>
        <div>
          <img src={food} className="h-[32px]"></img>
        </div>
        <div
          className="border border-slate-400 h-[32px]">
          
        </div>
        <div>
          <img src={bookoff} className="h-[32px]"></img>
        </div>
        <div
          className="border border-slate-400 h-[32px]">
          
        </div>
        <div>
          <img src={Group} className="h-[32px]"></img>
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default Brands;
