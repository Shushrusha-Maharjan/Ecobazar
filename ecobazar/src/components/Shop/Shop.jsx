import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from './Breadcrumbs';
import Topshop from './Topshop';
import Product from './Product';

function Shop() {
  return (
    <div>
      <Breadcrumb/>
    <Topshop/>
    <Product/>
    </div>
    
  )
}

export default Shop