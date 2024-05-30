import React from "react";
import { GoArrowRight } from "react-icons/go";
import baking from "../../assets/img/baking.png";
import beauty from "../../assets/img/beauty.png";
import beverages from "../../assets/img/beverages.png";
import bread from "../../assets/img/bread.png";
import cooking from "../../assets/img/cooking.png";
import diabetic from "../../assets/img/diabetic.png";
import dish from "../../assets/img/dish.png";
import freshfruits from "../../assets/img/freshfruits.png";
import freshvegetables from "../../assets/img/freshvegetables.png";
import meat from "../../assets/img/meat.png";
import oil from "../../assets/img/oil.png";
import snacks from "../../assets/img/snacks.png";

function Popular() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="">
        <div className="md:flex justify-between">
          <div className="text-xl font-medium">Popular Categories</div>
          <div className="md:flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        <div className="m-auto md:grid grid-cols-6 gap-4 mt-4 mb-4">
          {data.map((item, index) => (
            <div key={index} className="md:flex flex-col items-center pb-4">
              <div className="border-2 hover:border-[#20B526] shadow-md mb-4 pb-4">
                <img src={item.img} alt="" className="" />
                <p className="text-center">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
const data = [
  {
    img: freshfruits,
    title: `Fresh Fruit`,
  },
  {
    img: freshvegetables,
    title: `Fresh Vegetables`,
  },
  {
    img: meat,
    title: `Meat & Fish`,
  },
  {
    img: snacks,
    title: `Snacks`,
  },
  {
    img: beverages,
    title: `Beverages`,
  },
  {
    img: beauty,
    title: `Beauty & Health`,
  },
  {
    img: bread,
    title: `Bread & Bakery`,
  },
  {
    img: baking,
    title: `Baking Needs`,
  },
  {
    img: cooking,
    title: `Cooking`,
  },
  {
    img: diabetic,
    title: `Diabetic Food`,
  },
  {
    img: dish,
    title: `Dish Detergents`,
  },
  {
    img: oil,
    title: `Oil`,
  },
];

export default Popular;
