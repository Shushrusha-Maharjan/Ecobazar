// import { Rating } from 'flowbite-react';
// import React, { useState, useRef } from 'react';
// import robert from "../../assets/img/robert.png";
// import dianne from "../../assets/img/dianne.png";
// import eleonor from "../../assets/img/eleonor.png";
// import Vector from "../../assets/img/Vector.png";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

// const data = [
//   {
//     name: `Robert Fox`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: robert,
//   },
//   {
//     name: `Dianne`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: dianne,
//   },
//   {
//     name: `Eleonor Pena`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: eleonor,
//   },
//   {
//     name: `Robert Fox`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: robert,
//   },
//   {
//     name: `Dianne`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: dianne,
//   },
//   {
//     name: `Eleonor Pena`,
//     category: `Customer`,
//     testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
//     ratings: `5`,
//     img: eleonor,
//   },
// ];

// function Client() {
//   const [slider, setSlider] = useState(null); // State to hold the slider reference

//   const settings = {
//     dots: false, // Changed to true to show dots
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//   };

//   return (
//     <section className='mt-5 mb-2 md:container md:mx-auto md:px-28 bg-[#F2F2F2] py-8'>
//       <div className="flex justify-between items-center mb-4">
//         <p className='text-2xl'>Client Testimonials</p>
//         <div className="slider-buttons items-center justify-center mt-2">
//           {/* Slider buttons */} 
//           <button onClick={() => slider && slider.slickPrev()} class><div className='h-[35px] w-[35px] rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white'><FaArrowLeftLong size={20} /></div></button> {/* Added check for slider reference */}
//           <button onClick={() => slider && slider.slickNext()} class><div className='h-[35px] w-[35px] rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white'><FaArrowRightLong size={20} /></div></button> {/* Added check for slider reference */}
//         </div>
//       </div>
//       <div className="slider-container gap-5">
//         <Slider {...settings} ref={slider => setSlider(slider)}> {/* Set slider reference */}
//           {data.map((item, index) => (
//             <div className='border-[1px] p-4 bg-white' key={index}> {/* Added key */}
//               <div><img src={Vector} className='w-[32px] h-[26px] mb-5'></img> </div>
//               <div>{item.testimonials}</div>
//               <div className='md:flex justify-between mt-3'>
//                 <div className='md:flex gap-2'>
//                   <div><img src={item.img} className='w-[56px] h-[56px] rounded-full'></img> </div>
//                   <div><p>{item.name}</p>
//                     <p className='text-slate-500'>{item.category}</p></div>
//                 </div>
//                 <div className='mt-5'><Rating className="">
//                   <Rating.Star fill="orange" fontSize={20} />
//                   <Rating.Star fill="orange" fontSize={20} />
//                   <Rating.Star fill="orange" fontSize={20} />
//                   <Rating.Star fill="orange" fontSize={20} />
//                   <Rating.Star fill="orange" fontSize={20} />
//                 </Rating> </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default Client;

import { Rating } from 'flowbite-react';
import React, { useState, useRef } from 'react';
import robert from "../../assets/img/robert.png";
import dianne from "../../assets/img/dianne.png";
import eleonor from "../../assets/img/eleonor.png";
import Vector from "../../assets/img/Vector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const data = [
  {
    name: `Robert Fox`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: robert,
  },
  {
    name: `Dianne`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: dianne,
  },
  {
    name: `Eleonor Pena`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: eleonor,
  },
  {
    name: `Robert Fox`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: robert,
  },
  {
    name: `Dianne`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: dianne,
  },
  {
    name: `Eleonor Pena`,
    category: `Customer`,
    testimonials: `Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget`,
    ratings: `5`,
    img: eleonor,
  },
];

function Client() {
  const [slider, setSlider] = useState(null); // State to hold the slider reference

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Changed to 1 for mobile responsiveness
    slidesToScroll: 3, // Changed to 1 for mobile responsiveness
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as per your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='mt-5 mb-2 md:container md:mx-auto md:px-28 bg-[#F2F2F2] py-8'>
      <div className="flex justify-between items-center mb-4">
        <p className='text-2xl'>Client Testimonials</p>
        <div className="slider-buttons items-center justify-center mt-2">
          {/* Slider buttons */} 
          <button onClick={() => slider && slider.slickPrev()} class><div className='h-[35px] w-[35px] rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white'><FaArrowLeftLong size={20} /></div></button>
          <button onClick={() => slider && slider.slickNext()} class><div className='h-[35px] w-[35px] rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white'><FaArrowRightLong size={20} /></div></button>
        </div>
      </div>
      <div className="slider-container gap-5">
        <Slider {...settings} ref={slider => setSlider(slider)}>
          {data.map((item, index) => (
            <div className='border-[1px] p-4 bg-white' key={index}>
              <div><img src={Vector} className='w-[32px] h-[26px] mb-5'></img> </div>
              <div>{item.testimonials}</div>
              <div className='md:flex justify-between mt-3'>
                <div className='md:flex gap-2'>
                  <div><img src={item.img} className='w-[56px] h-[56px] rounded-full'></img> </div>
                  <div><p>{item.name}</p>
                    <p className='text-slate-500'>{item.category}</p></div>
                </div>
                <div className='mt-5'><Rating className="">
                  <Rating.Star fill="orange" fontSize={20} />
                  <Rating.Star fill="orange" fontSize={20} />
                  <Rating.Star fill="orange" fontSize={20} />
                  <Rating.Star fill="orange" fontSize={20} />
                  <Rating.Star fill="orange" fontSize={20} />
                </Rating> </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}


export default Client;

