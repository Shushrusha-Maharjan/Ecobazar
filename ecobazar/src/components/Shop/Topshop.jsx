import React from "react";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { useDispatch,useSelector } from "react-redux";
import { sortFilter } from "../../features/slice/Productslice";

const Topshop = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  // console.log(products);
  const dispatch = useDispatch();
  const sort = [
    "Latest",
    "Featured",
    "Popular",
  ];
  return (
    <section className="mt-5 mb-2 md:container md:mx-auto md:px-28">
      <div className="flex justify-between">
        <div className="w-2/4 flex items-center justify-between">
          <div className="flex place-content-center mt-2 text-white">
            <button className="rounded-3xl border h-12 w-32 flex gap-2 items-center justify-center bg-primary">
              Filter{" "}
              <PiSlidersHorizontalLight
                size={20}
                color="primary"
                className=""
              />
            </button>
          </div>
          <div className="">
            <label className="mr-2">Sort by:</label>
            <select
              className="p-1 border rounded-md w-48 text-[#4D4D4D] text-[14px] leading-[21px] font-normal"
              onChange={(event) => {
                dispatch(sortFilter(event.target.value));
              }}
            >
              {sort.map((item, index) => {
                return (
                  <option
                    value={item}
                    className=" p-2 hover:bg-[#2C742F] rounded-lg transition-all duration-300"
                  >
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{products.length}</p>results
        </div>
      </div>
    </section>
  );
};

export default Topshop;
