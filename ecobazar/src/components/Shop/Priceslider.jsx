

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React from "react";
function valuetext(value) {
  return `${value}`;
}
const Priceslider = () => {
  const [value, setValue] = React.useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className=" border-b pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-[#1A1A1A] cursor-pointer">
            Price
          </h2>
        </div>
        <Box sx={{ width: 250 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
          />
        </Box>
        <label className="Price">
          <input type="text" name="price" />
          <span>Price:</span>
          <span className="ml-2 text-sm font-normal text-[#1A1A1A]">{value[0]}-{value[1]}</span>
        </label>
      </div>
    </div>
  );
};
export default Priceslider;
