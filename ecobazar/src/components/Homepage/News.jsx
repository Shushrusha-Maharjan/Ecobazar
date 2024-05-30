// import React from "react";
// import orangebg from "../../assets/img/orangebg.png";
// import egg from "../../assets/img/egg.png";
// import avocado from "../../assets/img/avocado.png";
// import { GoTag } from "react-icons/go";
// import { GoArrowRight } from "react-icons/go";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegCommentAlt } from "react-icons/fa";
// const data=[
//   {
// day:`18`,
// month:`NOV`,
// img: orangebg,
// title:`Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
// category:`Food`,
// type:`By Admin`,
// comments:`65 comments`
//   },
//   {
//     day:`29`,
//     month:`JAN`,
//     img: egg,
//     title:`Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
//     category:`Food`,
//     type:`By Admin`,
//     comments:`65 comments`
//       },
//       {
//         day:`21`,
//         month:`FEB`,
//         img: avocado,
//         title:`Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
//         category:`Food`,
//         type:`By Admin`,
//         comments:`65 comments`
//           },
// ]

// function News() {
//   return (
//     <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
//       <div className="items-center justify-center text-[32px]">Latest News</div>
//       <div className="grid grid-cols-3 gap-5">

//         {data.map((item,index) => (
//           <div className="rounded-t-[10px] border-[1px] space-y-3 pb-6 relative"><img src={item.img} alt="" />
//           <div className="md:container md:mx-auto md:px-28  pr-6 rounded-t-[10px] x">
//           <div className="absolute bg-white w-[58px] h-[58px] left-[16px] rounded-[4px] mt-[-86px]">
//             {/* <div className=""> */}
//               <p className="pt-[7px] text-center">{item.day}</p>
//             {/* </div> */}
//             {/* <div className=""> */}
//               <p className="text-center">{item.month}</p>
//             {/* </div> */}
//           </div>
//         </div>
//         <div className="flex gap-5 space-y-2 pl-2">
//         <div className="flex gap-2 space-y-2"><GoTag className="mt-2"/> <p className="text-sm">{item.category}</p></div>
//         <div className="flex gap-2"><IoPersonOutline /><p className="text-sm">{item.type}</p></div>
//         <div className="flex gap-2"><FaRegCommentAlt /><p className="text-sm">{item.comments}</p></div>
//         </div>
//         <div className="mt-3 pl-2"><p className="font-size-[18px] leading-[27px]">Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p></div>
//         <div className="flex items-center gap-2 text-primary text-base pl-2">
//             <p className="leading-[19.2px] text-[16px]">Read More</p> <GoArrowRight />
//           </div>
//         </div>
//         ))}
        
        
        
//         {/* <div className="rounded-t-[10px] border-[1px] space-y-3">
//         <div className="md:container md:mx-auto md:px-28 h-[324px] w-[424px] bg-[url('./assets/img/egg.png')] bg-cover pr-6 rounded-t-[10px] relative">
//           <div className="absolute bg-slate-300 w-[58px] h-[58px] top-[242px] left-[24px] rounded-[4px] items-center justify-center">
//             <div className="">
//               <p className="pt-[7px] text-center">29</p>
//             </div>
//             <div className="">
//               <p className="text-center">JAN</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 space-y-2 items-center justify-center pl-2">
//         <div className="flex gap-2 items-center"><GoTag /> <p className="text-sm">Food</p></div>
//         <div className="flex gap-2 items-center"><IoPersonOutline /><p className="text-sm">By Admin</p></div>
//         <div className="flex gap-2 items-center"><FaRegCommentAlt /><p className="text-sm">65 Comments</p></div>
//         </div>
//         <div className="flex gap-5 space-y-2 items-center justify-center pl-2 mt-3"><p className="font-size-[18px] leading-[27px]">Eget lobortis lorem lacinia. Vivamus pharetra semper.</p></div>
//         <div className="space-y-2 pl-2 flex items-center gap-2 text-primary text-base">
//             <p className="leading-[19.2px] text-[16px]">Read More</p> <GoArrowRight />
//           </div>
//         </div>
        
//         <div className="rounded-t-[10px] border-[1px] space-y-3">
//         <div className="md:container md:mx-auto md:px-28 h-[324px] w-[424px] bg-[url('./assets/img/avocado.png')] bg-cover pr-6 rounded-t-[10px] relative">
//           <div className="absolute bg-slate-300 w-[58px] h-[58px] top-[242px] left-[24px] rounded-[4px] items-center justify-center">
//             <div className="">
//               <p className="pt-[7px] text-center">21</p>
//             </div>
//             <div className="">
//               <p className="text-center">FEB</p>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 space-y-2 items-center justify-center pl-2">
//         <div className="flex gap-2 items-center"><GoTag /> <p className="text-sm">Food</p></div>
//         <div className="flex gap-2 items-center"><IoPersonOutline /><p className="text-sm">By Admin</p></div>
//         <div className="flex gap-2 items-center"><FaRegCommentAlt /><p className="text-sm">65 Comments</p></div>
//         </div>
//         <div className="mt-3"><p className="font-size-[18px] leading-[27px] pl-2">Maecenas blandit risus elementum mauris malesuada.</p></div>
//         <div className="flex items-center gap-2 text-primary text-base">
//             <p className="leading-[19.2px] text-[16px] pl-2">Read More</p> <GoArrowRight />
//           </div>
//         </div> */}
        
//       </div>
//     </section>
//   );
// }

// export default News;

import React from "react";
import orangebg from "../../assets/img/orangebg.png";
import egg from "../../assets/img/egg.png";
import avocado from "../../assets/img/avocado.png";
import { GoTag } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCommentAlt } from "react-icons/fa";

const data = [
  {
    day: `18`,
    month: `NOV`,
    img: orangebg,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`
  },
  {
    day: `29`,
    month: `JAN`,
    img: egg,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`
  },
  {
    day: `21`,
    month: `FEB`,
    img: avocado,
    title: `Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.`,
    category: `Food`,
    type: `By Admin`,
    comments: `65 comments`
  },
];

function News() {
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="items-center justify-center text-[32px]">Latest News</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {data.map((item, index) => (
          <div className="rounded-t-[10px] border-[1px] space-y-3 pb-6 relative" key={index}>
            <img src={item.img} alt="" className="w-full" />
            <div className="md:container md:mx-auto md:px-28  pr-6 rounded-t-[10px]">
              <div className="absolute bg-white w-[58px] h-[58px] left-[16px] rounded-[4px] mt-[-86px] flex flex-col justify-center items-center">
                <p className="pt-[7px] text-center">{item.day}</p>
                <p className="text-center">{item.month}</p>
              </div>
            </div>
            <div className="flex gap-5 space-y-2 pl-2">
              <div className="flex gap-2 space-y-2"><GoTag className="mt-2" /> <p className="text-sm">{item.category}</p></div>
              <div className="flex gap-2"><IoPersonOutline /><p className="text-sm">{item.type}</p></div>
              <div className="flex gap-2"><FaRegCommentAlt /><p className="text-sm">{item.comments}</p></div>
            </div>
            <div className="mt-3 pl-2"><p className="font-size-[18px] leading-[27px]">{item.title}</p></div>
            <div className="flex items-center gap-2 text-primary text-base pl-2">
              <p className="leading-[19.2px] text-[16px]">Read More</p> <GoArrowRight />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default News;
