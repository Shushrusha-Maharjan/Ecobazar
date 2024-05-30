// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { singleProduct } from "../redux/actions/productActions"; // adjust the import based on your file structure

// const SingleProduct = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const product = useSelector((state) => state.products.singleProduct);

//   useEffect(() => {
//     dispatch(singleProduct(id));
//   }, [dispatch, id]);

//   if (!product || product.length === 0) {
//     return <div>Loading...</div>;
//   }

//   const { image, name, price, salePrice, sale, rating, outOfStock, category } = product[0];

//   return (
//     <div className="single-product-container">
//       <div className="product-details">
//         <img src={image} alt={name} />
//         <h2>{name}</h2>
//         <p>{sale ? salePrice : price}</p>
//         <p>{rating}</p>
//         <p>{category}</p>
//         {outOfStock && <p>Out of Stock</p>}
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;


import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.filteredProducts.find((product) => product.id === parseInt(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2" />
        <div className="md:ml-4 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-xl text-gray-600">${product.sale ? product.salePrice : product.price}</p>
          <div className="flex items-center">
            <span className="text-[#FFA500] text-[24px]">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-400 text-[24px]">
              {"★".repeat(5 - Math.round(product.rating))}
            </span>
          </div>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
