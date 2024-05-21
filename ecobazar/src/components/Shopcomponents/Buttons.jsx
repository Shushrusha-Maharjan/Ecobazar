import React from "react";

const Buttons = ({ name, value, onClickHandler }) => {
  return (
    <div>
        
        <button value={value} className="gap-2 button-primary flex-wrap bg-slate-200 px-[16px] py-[6px] rounded-3xl" onClick={onClickHandler}>
        {/* <input
          type="button"
          
          name="tag"
          
          onChange={handleChange}
          value={value}
          className="h-4 w-4 text-green-600 rounded duration-150"
        /> */}

        {name}
        
      </button>
        
      
    </div>
  );
};

export default Buttons;
