import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "./Breadcrumbs";
import Topshop from "./Topshop";
import Product from "./Product";
import product from "./Productdata";
import Card from "../Shopcomponents/Card";
import Pagination from "./Pagination";

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 21; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const products = product;
  const [selectedCategory, setSelectedCategory] = useState(null);
  // ---Input Filter-----
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // const filteredItems = products.filter((products) =>
  //   products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  // );
  //-----Radio Filter---
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // ------buttonFilter--------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    // filtering input items-query
    if (query) {
      filteredProducts = filteredItems;
    }
    // filtering selected items
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, price }) => category === selected || price === selected
      );
    }
    return filteredProducts.map(
      ({
        image,
        name,
        price,
        salePrice,
        rating,
        category,
        sale,
        outOfStock,
      }) => (
        <Card
          key={Math.random()}
          image={image}
          name={name}
          price={price}
          salePrice={salePrice}
          sale={sale}
          rating={rating}
          category={category}
          outOfStock={outOfStock}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory);
  console.log(result);
  return (
    <div>
      <Breadcrumb />
      <Topshop result={result}/>
      <Product result={result} handleChange={handleChange} handleClick={handleClick} />
      <h1 className="text-center my-4">Pagination Component</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Shop;
