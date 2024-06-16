import React, { useState } from "react";
import { FilterProvider } from '../components/Shop/FilterContext';
import { Breadcrumb } from "../components/Shop/Breadcrumbs";
import Topshop from "../components/Shop/Topshop";
import Product from "../components/Shop/Product";
import product from "../components/Shop/Productdata";
import Card from "../components/Shopcomponents/Card";
import Pagination from "../components/Shop/Pagination";

function Shop() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // const products = product;
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // // ---Input Filter-----
  // const [query, setQuery] = useState("");
  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };
  // // const filteredItems = products.filter((products) =>
  // //   products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  // // );
  // //-----Radio Filter---
  // const handleChange = (event) => {
  //   setSelectedCategory(event.target.value);
  // };
  // // ------buttonFilter--------
  // const handleClick = (event) => {
  //   setSelectedCategory(event.target.value);
  // };

  // function filteredData(products, selected, query) {
  //   let filteredProducts = products;
  //   // filtering input items-query
  //   if (query) {
  //     filteredProducts = filteredItems;
  //   }
  //   // filtering selected items
  //   if (selected) {
  //     filteredProducts = filteredProducts.filter(
  //       ({ category, price,tag }) => category === selected || price === selected || tag===selected
  //     );
  //   }
  //   return filteredProducts.map(
  //     (value,index) => (
  //       <Card
  //         key={index}
  //         image={value.image}
  //         name={value.name}
  //         price={value.price}
  //         salePrice={value.salePrice}
  //         sale={value.sale}
  //         rating={value.rating}
  //         category={value.category}
  //         outOfStock={value.outOfStock}
  //       />
  //     )
  //   );
  // }
  // const result = filteredData(products, selectedCategory);
  // console.log(result);
  return (
    <div>
      <Breadcrumb />
      {/* <Topshop/>
      <Product /> */}
      <FilterProvider>
      <div className="">
        <Topshop />
        <Product />
      </div>
    </FilterProvider>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Shop;
