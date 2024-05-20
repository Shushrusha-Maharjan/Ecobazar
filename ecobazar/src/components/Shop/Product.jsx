import React from 'react';
import product from "./Productdata";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import Category from './Category';

  
function Product({  }) {
    
  return (
    <section className='mt-5 mb-2 md:container md:mx-auto md:px-28'>
        <div className='m-auto md:grid grid-cols-12'>
        <div className='bg-amber-400 col-span-3'>
            <Category/>
        </div>
        <div className='bg-slate-500 col-span-9 grid grid-cols-3 gap-3'>
            {product.map((product, index) => (
        <div key={index} className="group/item flex flex-col items-center bg-white shadow-md rounded-lg border-[1px] pb-3 relative group">
    <div className="mt-2 bg-slate-400 hover:border-[#20B526]">
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
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.sale ? product.salePrice : product.price}</p>
        <div className="flex items-center">
          <span className="text-yellow-500">
            {'★'.repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-400">
            {'★'.repeat(5 - Math.round(product.rating))}
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
    
    ))}</div>
    
    </div>
    </section>
    
  );
}

export default Product;
