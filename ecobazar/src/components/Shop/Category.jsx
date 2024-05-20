import React, { useState } from "react";

const categories = [
  { name: "Fresh Fruit", total: 134 },
  { name: "Vegetables", total: 150 },
  { name: "Cooking", total: 54 },
  { name: "Snacks", total: 47 },
  { name: "Beverages", total: 43 },
  { name: "Beauty & Health", total: 38 },
  { name: "Bread & Bakery", total: 15 },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState( );

  return (
    <div className="w-64 bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-4">All Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id={category.name}
                name="category"
                checked={selectedCategory === category.name}
                onChange={() => setSelectedCategory(category.name)}
                className="form-radio h-4 w-4 text-green-600 transition duration-150"
              />
              <label>
                {category.name}
                <span className="text-gray-600">({category.total})</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
