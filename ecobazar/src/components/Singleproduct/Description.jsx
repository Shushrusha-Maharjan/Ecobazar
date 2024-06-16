// import React from 'react';
// import { LiaTagsSolid } from "react-icons/lia";
// import { RiLeafLine } from "react-icons/ri";

// const Description = () => {
//   return (
//     <section>
//         <div className="flex">
//             <div className="w-2/3 pr-4 text-gray-500">
//               <p className="mb-4 text-[14px] mt-5">
//                 Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
//                 at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
//                 sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
//                 laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
//                 interdum sollicitudin. Mauris sem ante, vestibulum nec orci
//                 vitae, aliquam mollis lacus. Sed et condimentum arcu, id
//                 molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
//                 convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
//                 elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
//                 Phasellus nec fringilla elit.
//               </p>
//               <p className="mb-4 text-[14px]">
//                 Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
//                 Sed iaculis, metus faucibus elementum tincidunt, turpis mi
//                 viverra velit, pellentesque tristique neque mi eget nulla. Proin
//                 luctus elementum neque et pharetra.
//               </p>
//               <ul className="list-disc list-inside mb-4 text-[14px]">
//                 <li className="mb-2">100 g of fresh leaves provides</li>
//                 <li className="mb-2">
//                   Aliquam ac est et augue volutpat elementum
//                 </li>
//                 <li className="mb-2">Quisque nec enim eget sapien molestie</li>
//                 <li className="mb-2">
//                   Proin convallis odio volutpat finibus posuere
//                 </li>
//               </ul>
//               <p className="text-[14px]">
//                 Cras et diam maximus, accumsan sapien et, sollicitudin velit.
//                 Nulla blandit eros non turpis lobortis facilisis ut ut massa.
//               </p>
//             </div>
//             <div className="w-1/3 flex flex-col items-center">
//               <div className="mb-4 mt-5">
//                 <div className=" aspect-video ">
//                   <iframe
//                     className=" h-full w-full rounded-lg"
//                     src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
//                     width="100%"
//                     title="YouTube video player"
//                     frameborder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     allowfullscreen
//                   ></iframe>
//                 </div>
//               </div>
//               <div className="flex bg-white border-[1px] rounded-lg">
//                 <div className="w-full p-4  mb-4">
//                   <div className="flex items-center mb-2">
//                     <LiaTagsSolid size={30} color="Green" />
//                     <span className="ml-2 text-[14px]">64% Discount</span>
//                   </div>
//                   <p className="text-gray-600 text-[13px]">
//                     Save your 64% money with us
//                   </p>
//                 </div>
//                 <div className="w-full p-4 ">
//                   <div className="flex items-center mb-2">
//                     <RiLeafLine size={20} color="green" />
//                     <span className="ml-2 text-[14px]">100% Organic</span>
//                   </div>
//                   <p className="text-gray-600 text-[13px]">
//                     100% Organic Vegetables
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </section>
//   )
// }

// export default Description

import React from 'react';
import { LiaTagsSolid } from "react-icons/lia";
import { RiLeafLine } from "react-icons/ri";

const Description = () => {
  return (
    <section className="md:container lg:flex lg:justify-center md:mx-auto ">
      <div className="lg:w-2/3 md:pr-4 md:text-gray-500">
        <div className="text-gray-500">
          <p className="mb-4 text-[14px] mt-5">
            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
            at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
            sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
            laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
            interdum sollicitudin. Mauris sem ante, vestibulum nec orci
            vitae, aliquam mollis lacus. Sed et condimentum arcu, id
            molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
            convallis. Morbi urna ipsum, placerat quis commodo quis, egestas
            elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
            Phasellus nec fringilla elit.
          </p>
          <p className="mb-4 text-[14px]">
            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui.
            Sed iaculis, metus faucibus elementum tincidunt, turpis mi
            viverra velit, pellentesque tristique neque mi eget nulla. Proin
            luctus elementum neque et pharetra.
          </p>
          <ul className="list-disc list-inside mb-4 text-[14px]">
            <li className="mb-2">100 g of fresh leaves provides</li>
            <li className="mb-2">
              Aliquam ac est et augue volutpat elementum
            </li>
            <li className="mb-2">Quisque nec enim eget sapien molestie</li>
            <li className="mb-2">
              Proin convallis odio volutpat finibus posuere
            </li>
          </ul>
          <p className="text-[14px]">
            Cras et diam maximus, accumsan sapien et, sollicitudin velit.
            Nulla blandit eros non turpis lobortis facilisis ut ut massa.
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:flex lg:flex-col lg:items-center">
        <div className="lg:mb-4 lg:mt-5">
          <div className="aspect-video">
            <iframe
              className="h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
              width="100%"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="md:flex md:bg-white md:border-[1px] md:rounded-lg">
          <div className="md:w-full md:p-4 md:mb-4">
            <div className="md:flex md:items-center md:mb-2">
              <LiaTagsSolid size={30} color="Green" />
              <span className="md:ml-2 text-[14px]">64% Discount</span>
            </div>
            <p className="text-gray-600 text-[13px]">
              Save your 64% money with us
            </p>
          </div>
          <div className="md:w-full md:p-4">
            <div className="md:flex md:items-center md:mb-2">
              <RiLeafLine size={20} color="green" />
              <span className="md:ml-2 text-[14px]">100% Organic</span>
            </div>
            <p className="text-gray-600 text-[13px]">
              100% Organic Vegetables
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description;

