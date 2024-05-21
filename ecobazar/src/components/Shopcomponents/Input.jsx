import React from "react";

const Input = ({ name, total, value, handleChange }) => {
  return (
    <div>
      <label className="gap-2">
        <input
          type="radio"
          // id={category.name}
          name="category"
          // checked={selectedCategory === category.name}
          onChange={handleChange}
          value={value}
          className="form-radio h-4 w-4 text-green-600 transition duration-150"
        />

        <span>{name}</span>
        <span className="text-gray-600">{total}</span>
      </label>
    </div>
  );
};

export default Input;
