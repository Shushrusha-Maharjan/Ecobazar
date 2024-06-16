

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import IncrementDecrementBtn from "../components/Cart/Counter";
// import CartTotal from "../components/Cart/Total";
// import CouponCode from "../components/Cart/Coupon";
// import { Breadcrumb } from "../components/Shop/Breadcrumbs";
// import { removeFromCart, updateQuantity } from "../features/slice/Cartslice";
// import { NavLink } from "react-router-dom";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cart);
//   const totalAmount = useSelector((state) => state.cart.totalAmount);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
//   const dispatch = useDispatch();

//   const [localQuantities, setLocalQuantities] = useState(
//     cartItems.reduce((acc, item) => {
//       acc[item.id] = item.amount;
//       return acc;
//     }, {})
//   );

//   const handleIncrement = (id) => {
//     setLocalQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: prevQuantities[id] + 1,
//     }));
//   };

//   const handleDecrement = (id) => {
//     setLocalQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : prevQuantities[id],
//     }));
//   };

//   const handleUpdateCart = () => {
//     Object.keys(localQuantities).forEach((id) => {
//       dispatch(updateQuantity({ id, amount: localQuantities[id] }));
//     });
//   };
//   useEffect(() => {
//     // This will recalculate the totals whenever the cart items change
//   }, [cartItems]);



//   return (
//     <div>
//       <Breadcrumb />
//       <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
//         <div>
//           <p className="text-2xl md:text-4xl text-center mt-5 font-semibold">
//             My Shopping Cart
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//           <div className="md:col-span-2">
//             <div className="p-4 bg-white rounded-lg shadow-md">
//               <div className="hidden md:block">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr>
//                       <th className="p-2 md:p-4 text-left">PRODUCT</th>
//                       <th className="p-2 md:p-4 text-left">PRICE</th>
//                       <th className="p-2 md:p-4 text-left">QUANTITY</th>
//                       <th className="p-2 md:p-4 text-left">SUBTOTAL</th>
//                       <th className="p-2 md:p-4"></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item, index) => (
//                       <tr className="border-b" key={index}>
//                         <td className="p-2 md:p-4 flex items-center">
//                           <img
//                             src={item.img}
//                             alt={item.name}
//                             className="h-16 w-16 md:h-24 md:w-24"
//                           />
//                           <span className="ml-2 md:ml-4">{item.name}</span>
//                         </td>
//                         <td className="p-2 md:p-4">${item.price.toFixed(2)}</td>
//                         <td className="p-2 md:p-4">
//                           <IncrementDecrementBtn
//                             quantity={localQuantities[item.id]}
//                             onDecrement={() => handleDecrement(item.id)}
//                             onIncrement={() => handleIncrement(item.id)}
//                           />
//                         </td>
//                         <td className="p-2 md:p-4">
//                           ${(item.price * localQuantities[item.id]).toFixed(2)}
//                         </td>
//                         <td className="p-2 md:p-4 text-right">
//                           <button
//                             className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
//                             onClick={() => dispatch(removeFromCart(item.id))}
//                           >
//                             ✖
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="md:hidden space-y-4">
//                 {cartItems.map((item) => (
//                   <div
//                     className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md"
//                     key={item.id}
//                   >
//                     <div className="flex items-center">
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="h-16 w-16"
//                       />
//                       <span className="ml-4 font-semibold">{item.name}</span>
//                     </div>
//                     <div className="mt-2 flex justify-between items-center">
//                       <span>Price: ${item.price.toFixed(2)}</span>
//                       <IncrementDecrementBtn
//                         quantity={localQuantities[item.id]}
//                         onDecrement={() => handleDecrement(item.id)}
//                         onIncrement={() => handleIncrement(item.id)}
//                       />
//                     </div>
//                     <div className="mt-2 flex justify-between items-center">
//                       <span>
//                         Subtotal: ${(item.price * localQuantities[item.id]).toFixed(2)}
//                       </span>
//                       <button
//                         className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
//                         onClick={() => dispatch(removeFromCart(item.id))}
//                       >
//                         ✖
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-4">
//                 <NavLink to="/shop">
//                   <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
//                     Return to shop
//                   </button>
//                 </NavLink>
//                 <button
//                   onClick={handleUpdateCart}
//                   className="px-4 py-2 bg-gray-800 text-white rounded-full"
//                 >
//                   Update Cart
//                 </button>
//               </div>
//             </div>
//             <div className="w-full mt-10">
//               <CouponCode className="mt-5" />
//             </div>
//           </div>
//           <div className="md:col-span-1">
//             <CartTotal />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Cart;


// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import IncrementDecrementBtn from "../components/Cart/Counter";
// import CartTotal from "../components/Cart/Total";
// import CouponCode from "../components/Cart/Coupon";
// import { Breadcrumb } from "../components/Shop/Breadcrumbs";
// import { removeFromCart, updateQuantity } from "../features/slice/Cartslice";
// import { NavLink } from "react-router-dom";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cart);
//   const dispatch = useDispatch();
//   const [localCart, setLocalCart] = useState(
//     cartItems.map(item => ({
//       ...item,
//       localAmount: item.amount,
//       localTotalPrice: item.price * item.amount
//     }))
//   );

//   const handleIncrement = (id) => {
//     setLocalCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               localAmount: item.localAmount + 1,
//               localTotalPrice: item.price * (item.localAmount + 1),
//             }
//           : item
//       )
//     );
//   };

//   const handleDecrement = (id) => {
//     setLocalCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id && item.localAmount > 1
//           ? {
//               ...item,
//               localAmount: item.localAmount - 1,
//               localTotalPrice: item.price * (item.localAmount - 1),
//             }
//           : item
//       )
//     );
//   };

//   const handleUpdateCart = () => {
//     localCart.forEach((item) => {
//       if (item.localAmount !== item.amount) {
//         dispatch(updateQuantity({ id: item.id, amount: item.localAmount }));
//       }
//     });
//   };

//   return (
//     <div>
//       <Breadcrumb />
//       <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
//         <div>
//           <p className="text-2xl md:text-4xl text-center mt-5 font-semibold">
//             My Shopping Cart
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//           <div className="md:col-span-2">
//             <div className="p-4 bg-white rounded-lg shadow-md">
//               <div className="hidden md:block">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr>
//                       <th className="p-2 md:p-4 text-left">PRODUCT</th>
//                       <th className="p-2 md:p-4 text-left">PRICE</th>
//                       <th className="p-2 md:p-4 text-left">QUANTITY</th>
//                       <th className="p-2 md:p-4 text-left">SUBTOTAL</th>
//                       <th className="p-2 md:p-4"></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {localCart.map((item, index) => (
//                       <tr className="border-b" key={index}>
//                         <td className="p-2 md:p-4 flex items-center">
//                           <img
//                             src={item.img}
//                             alt={item.name}
//                             className="h-16 w-16 md:h-24 md:w-24"
//                           />
//                           <span className="ml-2 md:ml-4">{item.name}</span>
//                         </td>
//                         <td className="p-2 md:p-4">${item.price.toFixed(2)}</td>
//                         <td className="p-2 md:p-4">
//                           <IncrementDecrementBtn
//                             quantity={item.localAmount}
//                             onDecrement={() => handleDecrement(item.id)}
//                             onIncrement={() => handleIncrement(item.id)}
//                           />
//                         </td>
//                         <td className="p-2 md:p-4">
//                           ${item.localTotalPrice.toFixed(2)}
//                         </td>
//                         <td className="p-2 md:p-4 text-right">
//                           <button
//                             className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
//                             onClick={() => dispatch(removeFromCart(item.id))}
//                           >
//                             ✖
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <div className="md:hidden space-y-4">
//                 {localCart.map((item) => (
//                   <div
//                     className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md"
//                     key={item.id}
//                   >
//                     <div className="flex items-center">
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="h-16 w-16"
//                       />
//                       <span className="ml-4 font-semibold">{item.name}</span>
//                     </div>
//                     <div className="mt-2 flex justify-between items-center">
//                       <span>Price: ${item.price.toFixed(2)}</span>
//                       <IncrementDecrementBtn
//                         quantity={item.localAmount}
//                         onDecrement={() => handleDecrement(item.id)}
//                         onIncrement={() => handleIncrement(item.id)}
//                       />
//                     </div>
//                     <div className="mt-2 flex justify-between items-center">
//                       <span>
//                         Subtotal: ${(item.price * item.localAmount).toFixed(2)}
//                       </span>
//                       <button
//                         className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
//                         onClick={() => dispatch(removeFromCart(item.id))}
//                       >
//                         ✖
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between mt-4">
//                 <NavLink to="/shop">
//                   <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">
//                     Return to shop
//                   </button>
//                 </NavLink>
//                 <button 
//                   onClick={handleUpdateCart}
//                   className="px-4 py-2 bg-gray-800 text-white rounded-full">
//                   Update Cart
//                 </button>
//               </div>
//             </div>
//             <div className="w-full mt-10">
//               <CouponCode className="mt-5" />
//             </div>
//           </div>
//           <div className="md:col-span-1">
//             <CartTotal />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Cart;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IncrementDecrementBtn from "../components/Cart/Counter";
import CartTotal from "../components/Cart/Total";
import CouponCode from "../components/Cart/Coupon";
import { Breadcrumb } from "../components/Shop/Breadcrumbs";
import { removeFromCart, updateQuantity } from "../features/slice/Cartslice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [localCart, setLocalCart] = useState(
    cartItems.map(item => ({
      ...item,
      localAmount: item.amount,
      localTotalPrice: item.price * item.amount
    }))
  );

  const handleIncrement = (id) => {
    setLocalCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              localAmount: item.localAmount + 1,
              localTotalPrice: item.price * (item.localAmount + 1),
            }
          : item
      )
    );
  };

  const handleDecrement = (id) => {
    setLocalCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.localAmount > 1
          ? {
              ...item,
              localAmount: item.localAmount - 1,
              localTotalPrice: item.price * (item.localAmount - 1),
            }
          : item
      )
    );
  };

  const handleUpdateCart = () => {
    localCart.forEach((item) => {
      if (item.localAmount !== item.amount) {
        dispatch(updateQuantity({ id: item.id, amount: item.localAmount }));
      }
    });
  };

  return (
    <div>
      <Breadcrumb />
      <section className="mt-5 mb-2 container mx-auto px-4 md:px-28">
        <div>
          <p className="text-2xl md:text-4xl text-center mt-5 font-semibold">
            My Shopping Cart
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div className="md:col-span-2">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="hidden lg:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 md:p-4 text-left text-sm md:text-base lg:text-lg">PRODUCT</th>
                      <th className="p-2 md:p-4 text-left text-sm md:text-base lg:text-lg">PRICE</th>
                      <th className="p-2 md:p-4 text-left text-sm md:text-base lg:text-lg">QUANTITY</th>
                      <th className="p-2 md:p-4 text-left text-sm md:text-base lg:text-lg">SUBTOTAL</th>
                      <th className="p-2 md:p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {localCart.map((item, index) => (
                      <tr className="border-b" key={index}>
                        <td className="p-2 md:p-4 flex items-center">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="h-16 w-16 md:h-24 md:w-24"
                          />
                          <span className="ml-2 md:ml-4 text-sm md:text-base lg:text-lg">{item.name}</span>
                        </td>
                        <td className="p-2 md:p-4 text-sm md:text-base lg:text-lg">${item.price.toFixed(2)}</td>
                        <td className="p-2 md:p-4 text-sm md:text-base lg:text-lg">
                          <IncrementDecrementBtn
                            quantity={item.localAmount}
                            onDecrement={() => handleDecrement(item.id)}
                            onIncrement={() => handleIncrement(item.id)}
                          />
                        </td>
                        <td className="p-2 md:p-4 text-sm md:text-base lg:text-lg">
                          ${item.localTotalPrice.toFixed(2)}
                        </td>
                        <td className="p-2 md:p-4 text-right">
                          <button
                            className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            ✖
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="block lg:hidden space-y-4">
                {localCart.map((item) => (
                  <div
                    className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md"
                    key={item.id}
                  >
                    <div className="flex items-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-16 w-16"
                      />
                      <span className="ml-4 font-semibold text-sm md:text-base lg:text-lg">{item.name}</span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm md:text-base lg:text-lg">Price: ${item.price.toFixed(2)}</span>
                      <IncrementDecrementBtn
                        quantity={item.localAmount}
                        onDecrement={() => handleDecrement(item.id)}
                        onIncrement={() => handleIncrement(item.id)}
                      />
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-sm md:text-base lg:text-lg">
                        Subtotal: ${(item.price * item.localAmount).toFixed(2)}
                      </span>
                      <button
                        className="rounded-full w-7 h-7 border border-gray-400 text-gray-600"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        ✖
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <NavLink to="/shop">
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm md:text-base lg:text-lg">
                    Return to shop
                  </button>
                </NavLink>
                <button 
                  onClick={handleUpdateCart}
                  className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm md:text-base lg:text-lg">
                  Update Cart
                </button>
              </div>
            </div>
            <div className="w-full mt-10">
              <CouponCode className="mt-5" />
            </div>
          </div>
          <div className="md:col-span-1">
            <CartTotal />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

