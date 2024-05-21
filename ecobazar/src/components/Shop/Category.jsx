import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Input from "../Shopcomponents/Input";

const categories = [
  { name: "Fresh Fruit", total: 134 },
  { name: "Vegetables", total: 150 },
  { name: "Cooking", total: 54 },
  { name: "Snacks", total: 47 },
  { name: "Beverages", total: 43 },
  { name: "Beauty & Health", total: 38 },
  { name: "Bread & Bakery", total: 15 },
];

const Category = ({ handleChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState();
  const [showCategories, setShowCategories] = useState(true);
  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="w-64 bg-white shadow rounded p-4 ">
      <div className="flex justify-between" onClick={handleClick}>
        <div className="">
          <h2 className="text-xl font-semibold mb-4">All Categories</h2>
        </div>
        <div>{showCategories ? <FaAngleUp /> : <FaAngleDown />}</div>
      </div>

      {showCategories && (
        <ul className="space-y-2 gap-2">
          <Input
            name="Fresh Fruit"
            total="(25)"
            value="Fruits"
            handleChange={handleChange}
          />
          <Input
            name="Vegetables"
            total="(150)"
            value="Vegetables"
            handleChange={handleChange}
          />
          <Input
            name="Cooking"
            total="(25)"
            value="cooking"
            handleChange={handleChange}
          />
          <Input
            name="Snacks"
            total="(25)"
            value="snacks"
            handleChange={handleChange}
          />
          <Input
            name="Beverages"
            total="(25)"
            value="beverages"
            handleChange={handleChange}
          />
          <Input
            name="Beauty & Health"
            total="(25)"
            value="beauty"
            handleChange={handleChange}
          />
          <Input
            name="Bread & Bakery"
            total="(25)"
            value="bread"
            handleChange={handleChange}
          />
          
        </ul>
      )}
    </div>
  );
};

export default Category;
