import "./App.css";
import Banner from "../src/components/Homepage/Banner";
import Brands from "../src/components/Homepage/Brands";
import Categories from "../src/components/Homepage/Categories";
import Client from "../src/components/Homepage/Client";
import Feature from "../src/components/Homepage/Feature";
import Follow from "../src/components/Homepage/Follow";
import Homebanner from "../src/components/Homepage/Homebanner";
import Hotdeals from "../src/components/Homepage/Hotdeals";
import Navbar from "../src/components/Homepage/Navbar";
import News from "../src/components/Homepage/News";
import Popular from "../src/components/Homepage/Popular";
import Products from "../src/components/Homepage/Products";

import Summersale from "../src/components/Homepage/Summersale";

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
      <Client/>
      <Brands/>
      <Follow/>
      
    </>
  );
}

export default Home;