import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from './components/Shop/Breadcrumbs';
import Topshop from './components/Shop/Topshop';

function Shop() {
  return (
    <section>
      <Breadcrumb/>
      <Topshop/>
    </section>
      

  )
}

export default Shop