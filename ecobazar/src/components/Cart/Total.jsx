// // CartTotal.js
// import React from 'react';
// import { useSelector } from 'react-redux';

// const CartTotal = () => {
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
  
//   return (
//     <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
//       <div className="flex justify-between border-b pb-2 mb-2">
//         <span>Subtotal:</span>
//         <span>{totalPrice.toFixed(2)}</span>
//       </div>
//       <div className="flex justify-between border-b pb-2 mb-2">
//         <span>Shipping:</span>
//         <span>Free</span>
//       </div>
//       <div className="flex justify-between font-bold">
//         <span>Total:</span>
//         <span>{totalPrice.toFixed(2)}</span>
//       </div>
//       <button className="mt-4 w-full bg-primary text-white py-2 rounded-3xl hover:bg-green-600">
//         Proceed to checkout
//       </button>
//     </div>
//   );
// };

// export default CartTotal;

import React from 'react';
import { useSelector } from 'react-redux';

const CartTotal = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md sm:max-w-md md:max-w-lg lg:max-w-xl">
      <h2 className="text-lg font-semibold mb-4 md:text-xl lg:text-2xl">Cart Total</h2>
      <div className="flex justify-between border-b pb-2 mb-2 text-sm md:text-base lg:text-lg">
        <span>Subtotal:</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-2 text-sm md:text-base lg:text-lg">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-bold text-sm md:text-base lg:text-lg">
        <span>Total:</span>
        <span>{totalPrice.toFixed(2)}</span>
      </div>
      <button className="mt-4 w-full bg-primary text-white py-2 rounded-3xl hover:bg-green-600 text-sm md:text-base lg:text-lg">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
