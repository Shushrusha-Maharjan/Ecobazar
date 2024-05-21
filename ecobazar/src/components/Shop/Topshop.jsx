import React from "react";
import { PiSlidersHorizontalLight } from "react-icons/pi";

const Topshop = ({result}) => {
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
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 ">
              <option selected>Latest</option>
              <option value="popular">Popular</option>
              <option value="recommended">Recommended</option>
              <option value="feature">Feature</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="font-semibold">{result.length}</p>results
        </div>
      </div>
    </section>
  );
};

export default Topshop;
