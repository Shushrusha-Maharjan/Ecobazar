import React from "react";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";
import { data } from "../Data/Data";
import Timer from "./Timer";

function Products() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="">
        <div className="flex justify-between">
          <div className="text-xl font-medium">Hot Deals</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>

        <div className="grid grid-cols-10">
          {data.offerone.map((item, index) => (
            <div className="col-span-4 row-span-2 items-center justify-center">
              <div
                key={index}
                className="group/item flex flex-col items-center relative"
              >
                <div className="border-[1px] hover:border-[#20B526]">
                  <img src={item.img} alt="" className="" />
                  <div className="items-center">
                    <div className="flex flex-row justify-between">
                      <div className="ml-4 group-hover/edit w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoHeartOutline className="" />
                      </div>
                      <div className="w-72 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary text-white group-hover/edit:bg-slate-400">
                        Add to Cart <HiOutlineShoppingBag className="ml-2" />
                      </div>
                      <div className="mr-4 group-hover/edit w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                        <IoEyeOutline className="" />
                      </div>
                    </div>
                    <p className="text-center text-xl text-green-600 ml-3 mt-4">
                      {item.title}
                    </p>
                    <p className="items-center ml-2 flex justify-center">
                      {item.price}
                      <span className="ml-2 line-through text-slate-500">
                        {item.initial}
                      </span>
                    </p>
                    {item.sale && (
                      <div>
                        <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                          Sale 20%
                        </span>
                        <span className="absolute bg-[#2388FF] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[100px]">
                          Best Sale
                        </span>
                      </div>
                    )}
                    <div className="flex justify-center">
                      <Rating className="">
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                        <Rating.Star fill="orange" fontSize={20} />
                      </Rating>
                      <p className="text-slate-400 text-center">
                        (524 Feedback)
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-center mt-1">
                        Hurry Up! Offers ends In:
                      </p>
                      <div className="flex justify-center mb-[9px]">
                        <Timer className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {data.offerdata.map((item, index) => (
            <div className="col-span-2 grid">
              <div key={index} className="group/item relative">
                <div className="border-[1px] hover:border-[#20B526] py-[9px]">
                  <img src={item.img} alt="" className="" />
                  <div className="items-center mb-3">
                    <p className="ml-2">{item.title}</p>
                    <p className="ml-2 flex">
                      {item.price}
                      <span className="ml-2 line-through">{item.initial}</span>
                    </p>
                    {item.sale && (
                      <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
                        Sale 20%
                      </span>
                    )}
                    <div className="mb-4">
                      <div>
                        <Rating className="">
                          <Rating.Star fill="orange" fontSize={20} />
                          <Rating.Star fill="orange" fontSize={20} />
                          <Rating.Star fill="orange" fontSize={20} />
                          <Rating.Star fill="orange" fontSize={20} />
                          <Rating.Star filled={false} fontSize={20} />
                        </Rating>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col justify-between">
                  <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                    <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                      <IoHeartOutline className="" />
                    </div>
                    <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                      <IoEyeOutline className="" />
                    </div>
                  </div>
                  <div className="mt-32 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
                    <HiOutlineShoppingBag className="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
}
// const data = [
//   {
//     img: apple,
//     title: `Green Apple`,
//     initial: `$20.99`,
//     price: `$14.99`,
//     rating: `4`,
//     sale: `Sale 50%`,
//   },
//   {
//     img: orange,
//     title: `Orange`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: chinesecabbage,
//     title: `Chinese Cabbage`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: lettuce,
//     title: `Lettuce`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: eggplant,
//     title: `Eggplant`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: potato,
//     title: `Potato`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: corn,
//     title: `Corn`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: cauliflower,
//     title: `Cauliflower`,

//     price: `$14.99`,
//     rating: `4`,
//   },
//   {
//     img: capsicum,
//     title: `Capsicum`,
//     initial: `$20.99`,
//     price: `$14.99`,
//     rating: `4`,
//     sale: `Sale 50%`,
//   },
//   {
//     img: chilly,
//     title: `Chillies`,

//     price: `$14.99`,
//     rating: `4`,
//   },
// ];

export default Products;
