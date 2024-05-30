// import React from "react";
// import { GoArrowRight } from "react-icons/go";
// import apple from "../../assets/img/apple.png";
// import capsicum from "../../assets/img/capsicum.png";
// import cauliflower from "../../assets/img/cauliflower.png";
// import chilly from "../../assets/img/chilly.png";
// import chinesecabbage from "../../assets/img/chinesecabbage.png";
// import corn from "../../assets/img/corn.png";
// import eggplant from "../../assets/img/eggplant.png";
// import lettuce from "../../assets/img/lettuce.png";
// import orange from "../../assets/img/orange.png";
// import potato from "../../assets/img/potato.png";
// import { HiOutlineShoppingBag } from "react-icons/hi";
// import { IoHeartOutline } from "react-icons/io5";
// import { IoEyeOutline } from "react-icons/io5";
// import { Rating } from "flowbite-react";

// function Products() {
  
//   return (
//     <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
//       <div className="">
//         <div className="flex justify-between">
//           <div className="text-xl font-medium">Popular Products</div>
//           <div className="flex items-center gap-2 text-primary">
//             View All <GoArrowRight />
//           </div>
//         </div>
        
//         <div className="m-auto md:grid grid-cols-5 mt-4">
//           {data.map((item, index) => (
//             <div key={index} className="group/item flex flex-col items-center relative">
//               <div className="border-[1px]  hover:border-[#20B526] group">
//                 <img src={item.img} alt="" className="" />
//                 <div>
//                   <p className="text-  ml-2">{item.title}</p>
                  
//               <p className='text- ml-2 flex'>{item.price} 
//               <p className='text- ml-2 line-through text-slate-400'>{item.initial}</p>
//               </p>

//               {item.sale ? (
//                 <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[8px] rounded-md top-[16px] left-[16px]">
//                   Sale 20%
//                 </span>
//               ) : (
//                 <></>
//               )}
//               <p className='text- ml-2 pb-3'>
//               <div className="">
//                     <Rating className="">
//                       <Rating.Star fill="orange" fontSize={20} />
//                       <Rating.Star fill="orange" fontSize={20} />
//                       <Rating.Star fill="orange" fontSize={20} />
//                       <Rating.Star fill="orange" fontSize={20} />
//                       <Rating.Star filled={false} fontSize={20} />
//                     </Rating>
//                   </div>
                
                
//                 </p>
//                 </div>
//                 <div className="absolute top-4 right-4 flex flex-col justify-between">
//                 <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//                   <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                     <IoHeartOutline className="" />
//                   </div>
//                   <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                     <IoEyeOutline className="" />
//                   </div>
//                 </div>
                
                
//               </div>
//               <div className="absolute bottom-4 right-4 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center    group-hover:bg-primary group-hover:text-white">
//                 <HiOutlineShoppingBag className="" />
//                 </div>
//               </div>
              
//               {/* <div className="absolute top-4 right-4 flex flex-col justify-between ">
//                 <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
//                   <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                     <IoHeartOutline className="" />
//                   </div>
//                   <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-primary">
//                     <IoEyeOutline className="" />
//                   </div>
//                 </div>
//                 <div className="mt-32 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white group-hover/edit:bg-slate-400">
//                 <HiOutlineShoppingBag className="" />
//                 </div>
                
//               </div> */}
//             </div>
//           ))}
//         </div>
        
        
//       </div>
//       <div></div>
//     </section>
//   );
// }
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

// export default Products;

import React from "react";
import { GoArrowRight } from "react-icons/go";
import apple from "../../assets/img/apple.png";
import capsicum from "../../assets/img/capsicum.png";
import cauliflower from "../../assets/img/cauliflower.png";
import chilly from "../../assets/img/chilly.png";
import chinesecabbage from "../../assets/img/chinesecabbage.png";
import corn from "../../assets/img/corn.png";
import eggplant from "../../assets/img/eggplant.png";
import lettuce from "../../assets/img/lettuce.png";
import orange from "../../assets/img/orange.png";
import potato from "../../assets/img/potato.png";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";

function Products() {
  
  return (
    <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
      <div>
        <div className="flex justify-between">
          <div className="text-xl font-medium">Popular Products</div>
          <div className="flex items-center gap-2 text-primary">
            View All <GoArrowRight />
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {data.map((item, index) => (
            <div key={index} className="group/item flex flex-col items-center relative">
              <div className="border-[1px] hover:border-[#20B526] group">
                <img src={item.img} alt="" className="w-full" />
                <div className="p-2">
                  <p className="text-lg">{item.title}</p>
                  <p className='text-lg flex items-center'>
                    {item.price}
                    {item.initial && (
                      <span className='text-sm ml-2 line-through text-slate-400'>{item.initial}</span>
                    )}
                  </p>

                  {item.sale && (
                    <span className="absolute bg-[#EA4B48] text-white text-[14px] px-[8px] py-[4px] rounded-md top-[16px] left-[16px]">
                      Sale 20%
                    </span>
                  )}
                  
                  <div className="mt-2">
                    <Rating>
                      <Rating.Star filled={item.rating >= 1} fill="orange" />
                      <Rating.Star filled={item.rating >= 2} fill="orange"/>
                      <Rating.Star filled={item.rating >= 3} fill="orange"/>
                      <Rating.Star filled={item.rating >= 4} fill="orange"/>
                      <Rating.Star filled={item.rating >= 5} />
                    </Rating>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col justify-between">
                  <div className="group/edit invisible flex flex-col gap-3 group-hover/item:visible">
                    <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
                      <IoHeartOutline />
                    </div>
                    <div className="group-hover/edit w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white">
                      <IoEyeOutline />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white">
                  <HiOutlineShoppingBag />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    img: apple,
    title: 'Green Apple',
    initial: '$20.99',
    price: '$14.99',
    rating: 4,
    sale: 'Sale 50%',
  },
  {
    img: orange,
    title: 'Orange',
    price: '$14.99',
    rating: 4,
  },
  {
    img: chinesecabbage,
    title: 'Chinese Cabbage',
    price: '$14.99',
    rating: 4,
  },
  {
    img: lettuce,
    title: 'Lettuce',
    price: '$14.99',
    rating: 4,
  },
  {
    img: eggplant,
    title: 'Eggplant',
    price: '$14.99',
    rating: 4,
  },
  {
    img: potato,
    title: 'Potato',
    price: '$14.99',
    rating: 4,
  },
  {
    img: corn,
    title: 'Corn',
    price: '$14.99',
    rating: 4,
  },
  {
    img: cauliflower,
    title: 'Cauliflower',
    price: '$14.99',
    rating: 4,
  },
  {
    img: capsicum,
    title: 'Capsicum',
    initial: '$20.99',
    price: '$14.99',
    rating: 4,
    sale: 'Sale 50%',
  },
  {
    img: chilly,
    title: 'Chillies',
    price: '$14.99',
    rating: 4,
  },
];

export default Products;

