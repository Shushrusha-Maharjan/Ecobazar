// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { updateCartLogo } from "./cartLogoSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
    amount: 0,
  },
  reducers: {
    // addToCart: (state, action) => {
    //   const newItem = action.payload;
    //   try {
    //     // const existingItem = state.cart.find(i => i.id === newItem.id);
    //     const existingItem = state.cart.find(
    //       (product) =>
    //         product.id === newItem.id
    //     );
    //     if (existingItem) {
    //       existingItem.amount++;
    //       existingItem.totalPrice += newItem.price;
    //       state.totalAmount += action.payload.amount;
    //       state.totalPrice += newItem.price;
    //       // existingItem.amount++;
    //       // existingItem.amount += newItem.amount;
    //       // existingItem.totalPrice += newItem.price * newItem.amount;
    //       // state.totalAmount++;
    //       // state.totalPrice += newItem.price;

    //     } else {
    //       state.cart.push({
    //         id:newItem.id,
    //         img: newItem.img,
    //         price: newItem.price,
    //         name:newItem.name,
    //         amount: newItem.amount,

    //         totalPrice: newItem.price * newItem.amount,
    //       });

    //     state.totalAmount ++;
    //     // state.totalPrice += newItem.price;
    //     // state.totalAmount += newItem.amount;
    //     state.totalPrice += newItem.price * newItem.amount;

    //     }
    //   } catch (err) {
    //     return err;
    //   }
    // },
    addToCart: (state, action) => {
      const newItem = action.payload;
      try {
        const existingItem = state.cart.find(
          (product) => product.id === newItem.id
        );
        if (existingItem) {
          existingItem.amount += newItem.amount;
          existingItem.totalPrice += newItem.price * newItem.amount;
          state.totalAmount += newItem.amount;
          state.totalPrice += newItem.price * newItem.amount;
        } else {
          state.cart.push({
            id: newItem.id,
            img: newItem.img,
            price: newItem.price,
            name: newItem.name,
            amount: newItem.amount,
            totalPrice: newItem.price * newItem.amount,
          });
          state.totalAmount += newItem.amount;
          state.totalPrice += newItem.price * newItem.amount;
        }
      } catch (err) {
        return err;
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.cart.find((i) => i.id === id);
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.amount;
        state.totalPrice -= itemToRemove.totalPrice;
        state.cart = state.cart.filter((i) => i.id !== id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const itemToUpdate = state.cart.find((i) => i.id === id);
      if (itemToUpdate) {
        const difference = amount - itemToUpdate.amount;
        itemToUpdate.amount = amount;
        itemToUpdate.totalPrice = itemToUpdate.price * amount;
        state.totalAmount += difference;
        state.totalPrice += itemToUpdate.price * difference;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
