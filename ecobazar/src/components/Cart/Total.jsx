// CartTotal.js
import React from 'react';

const CartTotal = () => {
  return (
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span>Subtotal:</span>
        <span>$84.00</span>
      </div>
      <div className="flex justify-between border-b pb-2 mb-2">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total:</span>
        <span>$84.00</span>
      </div>
      <button className="mt-4 w-full bg-primary text-white py-2 rounded-3xl hover:bg-green-600">
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;
