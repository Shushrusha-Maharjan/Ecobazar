// import React, { useState } from "react";


// const IncrementDecrementBtn = ({ minValue = 0, maxValue = 100, quantity }) => {
//   const [count, setCount] = useState(quantity);

//   const handleIncrementCounter = () => {
//     if (count < maxValue) {
//       setCount((prevState) => prevState + 1);
//     }
//   };

//   const handleDecrementCounter = () => {
//     if (count > minValue) {
//       setCount((prevState) => prevState - 1);
//     }
//   };

//   return (
//     <div className="flex items-center bg-[#fff] rounded-3xl h-[48px] w-32 border-[1px] gap-5 px-2">
//       <button className="rounded-full w-8 h-8 bg-slate-200" onClick={handleDecrementCounter}>
//         <span class="items-center justify-center">-</span>
//       </button>
//       <p>{count}</p>
//       <button className="rounded-full w-8 h-8 bg-slate-200 " onClick={handleIncrementCounter}>
//         <span class="items-center justify-center">+</span>
//       </button>
      
//     </div>
//   );
// };

// export default IncrementDecrementBtn;

import React from 'react';

const IncrementDecrementBtn = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center bg-[#fff] rounded-3xl h-[48px] w-32 border-[1px] gap-5 px-2">
      <button className="rounded-full w-8 h-8 bg-slate-200" onClick={onDecrement}><span class="items-center justify-center">-</span></button>
      <span>{quantity}</span>
      <button className="rounded-full w-8 h-8 bg-slate-200" onClick={onIncrement}><span class="items-center justify-center">+</span></button>
    </div>
  );
};

export default IncrementDecrementBtn;
