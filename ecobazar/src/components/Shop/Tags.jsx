import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Buttons from "../Shopcomponents/Buttons";

const Tags = ({handleClick }) => {
    const [showCategories, setShowCategories] = useState(true);
  const handleClicker = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div  className="w-64 bg-white shadow rounded p-4 mt-5">
        <div className="flex justify-between" onClick={handleClicker}>
        
          <h2 className="text-xl font-semibold mb-4">Popular Tags</h2>
        
        <div>{showCategories ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
      {showCategories && (
        <div className="flex items-center mb-2 flex-wrap gap-2 ">
          <Buttons/>
            {/* tag="Healthy"
            
            value="healthy"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Low Fat"
            
            value="lowfat"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Kid Foods"
            
            value="kidfoods"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Snacks"
            
            value="snacks"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Meat"
            
            value="meat"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Dinner"
            
            value="dinner"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Bread"
           
            value="bread"
            onClickHandler={handleClick}
          />
          <Buttons
            tag="Vegetarian"
           
            value="vegetarian"
            onClickHandler={handleClick}
          /> */}
          
        </div>
      )}
        </div>
  )
}

export default Tags