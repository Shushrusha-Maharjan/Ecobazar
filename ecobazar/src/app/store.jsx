import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/slice/Productslice";
import cartReducer from "../features/slice/Cartslice"
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
export {store};