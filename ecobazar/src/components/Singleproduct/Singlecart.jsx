import React, { useState } from 'react';
import farmary from "../../assets/img/farmary.png";
import { data } from "../../Data/Filterdata";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";
import IncrementDecrementBtn from "../../components/Cart/Counter";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slice/Cartslice";

const Singlecart = ({id, image, price, sale, salePrice, rating, outOfStock, name, category}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
      };
  return (
    <section>
        <div className="">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold mb-2">{name}</h1>
              <div className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded inline-block mb-4">
                In Stock
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="space-x-1">
              <span className="text-[#FFA500] text-[24px]">
                {"★".repeat(Math.round(rating))}
              </span>
              <span className="text-gray-400 text-[24px]">
                {"★".repeat(5 - Math.round(rating))}
              </span>
              </div>
              <span className="ml-2 text-gray-600">4 Review</span>
              <span className="ml-4 text-sm text-gray-500">SKU: 2,51,594</span>
            </div>
            <div className="flex items-center gap-1 pb-5">
              <div className="text-gray-500 text-[20px] font-normal line-through">
                $48.00
              </div>
              <div className="text-green-500 text-[24px] font-normal">
                {price}
              </div>
              <div className="text-xs bg-red-200 text-red-700 px-2 py-1 rounded-3xl inline-block">
                64% Off
              </div>
            </div>
            <div className="flex justify-between border-t pt-5">
              <div className="mb-4 flex items-center gap-2">
                <div className="font-medium">Brand:</div>
                <div className="text-gray-600">
                  <img src={farmary} alt="" className="h-[56px] w-[56px]" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="font-medium">Share Item:</div>
                <div className="">
                  <FaFacebook className="h-[25px] w-[25px] text-primary" />
                </div>
                <div>
                  <FaTwitter className="h-[25px] w-[25px]" />
                </div>
                <div>
                  <FaPinterestP className="h-[25px] w-[25px]" />
                </div>
                <div>
                  <FaInstagram className="h-[25px] w-[25px]" />
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <div className="flex items-center mb-4 gap-3 border-y py-3">
              <IncrementDecrementBtn
                quantity={quantity}
                onDecrement={decreaseQuantity}
                onIncrement={increaseQuantity}
              />

              <button onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: image,
                    amount: quantity,
                    price: price,
                    name: name,
                  })
                )
              }  className="w-72 h-11 bg-primary rounded-full flex items-center justify-center hover:bg-primary text-white group-hover/edit:bg-slate-400">
                Add to Cart <HiOutlineShoppingBag className="ml-2" />
              </button>
              <div className="group-hover/edit w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                <IoHeartOutline className="" />
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              <span className="font-medium text-black">Category:</span>{" "}
              {category}
            </div>
            <div className="text-gray-500 text-sm">
              <span className="font-medium text-black">Tags:</span> Vegetables,
              Healthy, Chinese, Cabbage, Green Cabbage
            </div>
          </div>
    </section>
  )
}

export default Singlecart


