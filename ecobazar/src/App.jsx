import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Homepage/Navbar";
import Footers from "../src/components/Homepage/Footers";
function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footers/>
    </>
  );
}
export default App;