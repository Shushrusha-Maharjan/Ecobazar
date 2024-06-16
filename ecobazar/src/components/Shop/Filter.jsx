import React from "react";
import { useSelector } from "react-redux";
import Card from "../Shopcomponents/Card";
const Filter = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log(products);
  return (
    <section className="md:container md:grid lg:grid-cols-3 md:grid-cols-3 gap-4">
      {products
        // .filter((product) => product.tag === tag)
        .map((product, index) => {
          return (
            <div key={index} className="">
              <Card
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                sale={product.sale}
                rating={product.rating}
                outOfStock={product.outOfStock}
              />
            </div>
          );
        })}
    </section>
  );
};
export default Filter;







