import React from 'react';
import { PiPlantFill } from "react-icons/pi";
function Footers() {
  return (
    <section>
        <div className='grid grid-cols-5'>
            <div>
            <div className="flex items-center gap-2 text-3xl">
            <PiPlantFill size={50} color="green" /> Ecobazar
          </div>
          <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
          <div className='flex'>
          <p>(219) 555-0114</p>
          <p>or</p>
          <p>Proxy@gmail.com</p>
          </div>
            </div>
            <div >
                <div><p>My Account</p></div>
                <div><p>My Account</p></div>
                <div><p>Order History</p></div>
                <div><p>Shopping Cart</p></div>
                <div><p>Wish List</p></div>

            </div>
            <div>
            <div><p>Helps</p></div>
                <div><p>Contact</p></div>
                <div><p>Faqs</p></div>
                <div><p>Terms & Conditions</p></div>
                <div><p>Privacy Policy</p></div>
            </div>
            <div>
            <div><p>Proxy</p></div>
                <div><p>About</p></div>
                <div><p>Shop</p></div>
                <div><p>Product</p></div>
                <div><p>Track Order</p></div>
            </div>
            <div>
            <div><p>Categories</p></div>
                <div><p>Fruit & Vegetables</p></div>
                <div><p>Meat & Fish</p></div>
                <div><p>Bread & Bakery</p></div>
                <div><p>Beauty & Health</p></div>
            </div>
        </div>
        <div>

        </div>
    </section>
  )
}

export default Footers