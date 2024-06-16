import React, { useContext } from 'react';
import { FilterContext } from '../Shop/FilterContext';
import product from "./Productdata";
import {default as Filter } from "./Filter"
import Category from "./Category";
import Priceslider from "./Priceslider";
import Rating from "./Rating";
import Tags from "./Tags";
import Discount from "./Discount";
import SaleProducts from "./Saleproduct";

function Product() {
  const { isFilterVisible, toggleFilter } = useContext(FilterContext);
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="m-auto lg:grid grid-cols-12 gap-20">
        <div className="hidden lg:block lg:col-span-3">
          <Category />
          <Priceslider />
          <Rating />
          <Tags />
          <Discount/>
          <SaleProducts/>
        </div>
        
     {isFilterVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleFilter}
        ></div>
      )}
      <div
        className={`fixed pl-3 md:top-0 top-16 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
        style={{ transform: isFilterVisible ? 'translateX(0)' : 'translateX(-100%)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Category />
        <Priceslider />
        <Rating />
        <Tags />
        <Discount />
        <SaleProducts />
      </div>
        <div className="col-span-9">
          {/* <div className="grid grid-cols-3 gap-3"> */}
          {/* {result.map((item, index) => (
            <div>{item}</div>
          ))} */}
          <Filter/>
          {/* </div> */}
          
          {/* {product.map((product, index) => (
            <div
              key={index}
              className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group"
            >
              <div className="mt-2  hover:border-[#20B526]">
                {product.sale && (
                  <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5">
                    Sale 50%
                  </div>
                )}
                {product.outOfStock && (
                  <div className="bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded absolute top-5">
                    Out of Stock
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">
                    ${product.sale ? product.salePrice : product.price}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">
                      {"★".repeat(Math.round(product.rating))}
                    </span>
                    <span className="text-gray-400">
                      {"★".repeat(5 - Math.round(product.rating))}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-8 flex flex-col justify-between">
                  <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                    <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                      <IoHeartOutline className="w-5 h-5" />
                    </div>
                    <div className="group-hover/edit w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
                      <IoEyeOutline className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 right-8 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center    group-hover:bg-primary group-hover:text-white">
                  <HiOutlineShoppingBag className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Product;
