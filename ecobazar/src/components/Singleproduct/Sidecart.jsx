import React from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const Sidecart = ({image, price, sale, salePrice, rating, outOfStock, name }) => {
  return (
    <section>
        <div className="flex">
            <div className="w-[80px] pr-4">
              {/* <Slider {...settings}> */}
              {/* <button onClick={() => Slider && Slider.slickPrev()} class>
                <div className="pl-7 rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white">
                  <FaChevronUp />
                </div>
              </button> */}

              <div className="space-y-4">
                {/* {image.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer ${
                      selectedImage === index
                        ? "border-2 border-green-500 w-[80px]"
                        : ""
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Product ${index + 1}`}
                      className="w-[80px] h-[90px]"
                    />
                  </div>
                ))} */}
              </div>
              {/* <div className="pl-7 rounded-full flex items-center justify-center  bg-white hover:bg-primary hover:text-white">
                <FaChevronDown />
              </div> */}
              {/* </Slider> */}
            </div>

            <div className="w-full">
              <img
                // src={image[selectedImage]}
                src={image}
                alt="Selected Product"
                className="w-[556px] h-[556px] mb-4"
              />
            </div>
          </div>
    </section>
  )
}

export default Sidecart


