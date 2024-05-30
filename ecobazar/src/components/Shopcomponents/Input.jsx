// import React from "react";

// const Input = ({ name, total, value, handleChange }) => {
//   return (
//     <div>
//       <label className="gap-2 items-center">
//         <input
//           type="radio"
//           // id={category.name}
//           name="category"
//           // checked={selectedCategory === category.name}
//           onChange={handleChange}
//           value={value}
//           className="form-radio h-4 w-4 text-green-600 transition duration-150"
//         />

//         <span className="ml-2 items-center justify-center text-center">{name}</span>
//         <span className="text-gray-600">{total}</span>
//       </label>
//     </div>
//   );
// };

// export default Input;


import React from "react";
import { useDispatch } from "react-redux";
import { radioFilter } from "../../features/slice/Productslice";
// import './Input.css';
const Input = () => {
  const category = [
    "Fresh Fruit",
    "Vegetable",
    "Cooking",
    "Snacks",
    "Beverages",
    "Beauty & Health",
    "Bread & Bakery",
  ];
  const dispatch = useDispatch();
  return (
    <div className="mt-4 flex flex-col gap-2">
      {category.map((item, index) => {
        return (
          <label key={index}  className="custom-radio-label">
            <input
              name="category"
              type="radio"
              onChange={() => dispatch(radioFilter(item))}
              value={item}
            />
            <span className="ml-2 text-sm font-normal text-[#1A1A1A]">
              {item}
            </span>
            {/* <span className="text-gray-500 ml-2 text-sm font-normal">
              {quantity}
            </span> */}
          </label>
        );
      })}
    </div>
  );
};
export default Input;










