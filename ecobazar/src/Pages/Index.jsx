// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import two from "../assets/img/two.png";
// import chinesecabbage from "../assets/img/chinesecabbage.png";
// import three from "../assets/img/three.png";
// import four from "../assets/img/four.png";

// import Productcart from "../components/Singleproduct/Productcart";
// import Description from "../components/Singleproduct/Description";
// import Singlecart from "../components/Singleproduct/Singlecart";
// import { useSelector } from "react-redux";
// import Sidecart from "../components/Singleproduct/Sidecart";
// import { useParams } from "react-router-dom";

// const Index = () => {
//   const [quantity, setQuantity] = useState(5);
//   const [selectedImage, setSelectedImage] = useState(0);

//   const images = [chinesecabbage, two, three, four];
//   const products = useSelector((state) => state.products.filteredProducts);
//   const { type } = useParams();
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: true,
//   };

//   return (
//     <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
//       <div className="mx-auto bg-white rounded-md">
//         {products
//           // .filter((product) => product.type === type)
//           .map((product, index) => (
//             <div key={index}>
//                 <div className="md:grid grid-cols-2">
//                   <Sidecart
//                     key={product.id}
//                     image={product.image}
//                     name={product.name}
//                     price={product.price}
//                     salePrice={product.salePrice}
//                     sale={product.sale}
//                     rating={product.rating}
//                     outOfStock={product.outOfStock}
//                   />
//                   <Singlecart
//                     key={product.id}
//                     image={product.image}
//                     name={product.name}
//                     price={product.price}
//                     salePrice={product.salePrice}
//                     sale={product.sale}
//                     rating={product.rating}
//                     outOfStock={product.outOfStock}
//                     category={product.category}
//                   />
//                 </div>
//               </div>
//           )

//             )};

//         {/* <Singlecart/> */}
//       </div>
//       <div className="container mx-auto p-4">
//         {/* <div className="flex"> */}
//         <div className="pr-4 text-gray-500">
//           <div className="flex items-center justify-center gap-5 border-b border-gray-400">
//             <h2 className="text-[16px] font-medium pb-4 text-black border-b-2 border-green-500">
//               Descriptions
//             </h2>
//             <h2 className="text-[16px] font-medium mb-4">
//               Additional Information
//             </h2>
//             <h2 className="text-[16px] font-medium mb-4">Customer Feedback</h2>
//           </div>
//           <Description />
//         </div>
//       </div>
//       <div>
//         <Productcart />
//       </div>
//     </section>
//   );
// };

// export default Index;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { singleProduct } from "../features/slice/Productslice";
// import two from "../assets/img/two.png";
// import chinesecabbage from "../assets/img/chinesecabbage.png";
// import three from "../assets/img/three.png";
// import four from "../assets/img/four.png";

// import Productcart from "../components/Singleproduct/Productcart";
// import Description from "../components/Singleproduct/Description";
// import Singlecart from "../components/Singleproduct/Singlecart";
// import Sidecart from "../components/Singleproduct/Sidecart";

// const Index = () => {
//   const [quantity, setQuantity] = useState(5);
//   const [selectedImage, setSelectedImage] = useState(0);

//   const images = [chinesecabbage, two, three, four];
//   const products = useSelector((state) => state.products.filteredProducts);
//   const dispatch = useDispatch();
//   const { type } = useParams();
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     arrows: true,
//   };

//   const handleProductSelect = (productId) => {
//     dispatch(singleProduct(productId));
//   };

//   return (
//     <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
//       <div className="mx-auto bg-white rounded-md">
//         {products.map((product, index) => (
//           <div key={index}>
//             <div className="md:grid grid-cols-2">
//               <Sidecart
//                 key={product.id}
//                 image={product.image}
//                 name={product.name}
//                 price={product.price}
//                 salePrice={product.salePrice}
//                 sale={product.sale}
//                 rating={product.rating}
//                 outOfStock={product.outOfStock}
//                 onProductSelect={() => handleProductSelect(product.id)}
//               />
//               <Singlecart
//                 key={product.id}
//                 image={product.image}
//                 name={product.name}
//                 price={product.price}
//                 salePrice={product.salePrice}
//                 sale={product.sale}
//                 rating={product.rating}
//                 outOfStock={product.outOfStock}
//                 category={product.category}
//                 onProductSelect={() => handleProductSelect(product.id)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="container mx-auto p-4">
//           <div className="pr-4 text-gray-500">
//             <div className="flex items-center justify-center gap-5 border-b border-gray-400">
//               <h2 className="text-[16px] font-medium pb-4 text-black border-b-2 border-green-500">
//                 Descriptions
//               </h2>
//               <h2 className="text-[16px] font-medium mb-4">
//                 Additional Information
//               </h2>
//               <h2 className="text-[16px] font-medium mb-4">Customer Feedback</h2>
//             </div>
//             <Description />
//           </div>
//         </div>
//         <div>
//           <Productcart />
//         </div>
//       </section>
//     );
//   };

//   export default Index;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Sidecart from "../components/Singleproduct/Sidecart";
import Singlecart from "../components/Singleproduct/Singlecart";
import Description from "../components/Singleproduct/Description";
import Productcart from "../components/Singleproduct/Productcart";

const Index = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.filteredProducts);

  const product = products.find((product) => product.id === parseInt(id));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="mt-5 mb-2 md:container md:mx-auto lg:px-28 md:px-10">
      <div className="mx-auto bg-white rounded-md">
        <div key={product.id}>
          <div className="md:grid grid-cols-2">
            <Sidecart
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              sale={product.sale}
              rating={product.rating}
              outOfStock={product.outOfStock}
            />
            <Singlecart
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              sale={product.sale}
              rating={product.rating}
              outOfStock={product.outOfStock}
              category={product.category}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="pr-4 text-gray-500">
          <div className="flex items-center justify-center gap-5 border-b border-gray-400">
            <h2 className="text-[16px] font-medium pb-4 text-black border-b-2 border-green-500">
              Descriptions
            </h2>
            <h2 className="text-[16px] font-medium mb-4">
              Additional Information
            </h2>
            <h2 className="text-[16px] font-medium mb-4">Customer Feedback</h2>
          </div>
          <Description />
        </div>
      </div>
      <div>
        <Productcart />
      </div>
    </section>
  );
};

export default Index;
