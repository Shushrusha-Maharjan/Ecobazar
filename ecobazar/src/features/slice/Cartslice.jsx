
// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.amount += item.amount;
        existingItem.amount++;
                existingItem.totalPrice += item.price;
                state.totalAmount++;
                state.totalPrice += item.price;
      } else {
        state.items.push(item);
      }
      state.totalAmount++;
                state.totalPrice += item.price;
    },
    // addToCart:(state, action) =>{
    //         const productId = action.payload;
    //         try {
    //           const exist = state.cart.filter(
    //             (product) =>
    //               product.id === productId.id &&
    //               product.name === productId.name
    //           );
    //           if (exist) {
    //             exist.amount++;
    //             exist.totalPrice += productId.price;
    //             state.totalAmount++;
    //             state.totalPrice += productId.price;
    //           } else {
    //             state.cart.push({
    //               id: productId.id,
    //               price: productId.price,
                  
    //               amount: 1,
    //               img: productId.image,
    //               totalPrice: productId.price,
    //               name: productId.name,
                  
    //             });
    //             state.totalAmount++;
    //             state.totalPrice += productId.price;
    //           }
    //         } catch (err) {
    //           return err;
    //         }
    //       },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
    // removeFromCart:(state, action)=> {
    //         const productId = action.payload;
    //         try {
    //           const exist = state.cart.filter(
    //             (product) =>
    //               product.id === productId.id &&
    //               product.name === productId.name 
                 
    //           );
    //           if (exist.amount === 1) {
    //             state.cart = state.cart.filter(
    //               (product) =>
    //                 product.id !== productId.id ||
    //                 product.name !== productId.name 
    //             );
    //             state.totalAmount--;
    //             state.totalPrice -= productId.price;
    //           } else {
    //             exist.amount--;
    //             exist.totalPrice -= productId.price;
    //             state.totalAmount--;
    //             state.totalPrice -= productId.price;
    //           }
    //         } catch (err) {
    //           return err;
    //         }
    //       },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem) {
        existingItem.amount = amount;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
