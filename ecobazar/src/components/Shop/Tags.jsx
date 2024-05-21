import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Buttons from "../Shopcomponents/Buttons";

const Tags = ({ handleClick }) => {
    const [showCategories, setShowCategories] = useState(true);
  const handleClicker = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div  className="w-64 bg-white shadow rounded p-4">
        <div className="flex justify-between" onClick={handleClicker}>
        <div className="">
          <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
        </div>
        <div>{showCategories ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
      {showCategories && (
        <div className="space-y-2 gap-2">
          <Buttons
            name="Healthy"
            
            value="healthy"
            onClickHandler={handleClick}
          />
          <Buttons
            name="Low Fat"
            
            value="lowfat"
            onClickHandler={handleClick}
          />
          <Buttons
            name="kid Foods"
            
            value="kidfoods"
            onClickHandler={handleClick}
          />
          <Buttons
            name="Snacks"
            
            value="snacks"
            onClickHandler={handleClick}
          />
          <Buttons
            name="Meat"
            
            value="meat"
            onClickHandler={handleClick}
          />
          <Buttons
            name="Dinner"
            
            value="dinner"
            onClickHandler={handleClick}
          />
          <Buttons
            name="Bread"
           
            value="bread"
            onClickHandler={handleClick}
          />
          
        </div>
      )}
        </div>
  )
}

export default Tags