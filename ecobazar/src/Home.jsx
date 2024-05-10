import "./App.css";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Categories from "./components/Categories";
import Feature from "./components/Feature";
import Follow from "./components/Follow";
import Homebanner from "./components/Homebanner";
import Hotdeals from "./components/Hotdeals";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Popular from "./components/Popular";
import Products from "./components/Products";
import Subscribe from "./components/Subscribe";
import Summersale from "./components/Summersale";

function Home() {
  return (
    <>
      
      <Homebanner/>
      <Categories/>
      <Popular/>
      <Products/>
      <Banner/>
      <Hotdeals/>
      <Summersale/>
      <Feature/>
      <News/>
      <Brands/>
      <Follow/>
      <Subscribe/>
    </>
  );
}

export default Home;