import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Homepage/Navbar";
import Footers from "../src/components/Homepage/Footers";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log("cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("totalPrice", totalPrice);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footers />
    </>
  );
}
export default App;
