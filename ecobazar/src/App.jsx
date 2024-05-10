import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
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