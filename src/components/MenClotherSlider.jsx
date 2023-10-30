import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const MenClotherSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    const newIndex = currentIndex + itemsPerPage;
    if (newIndex <= data.length - itemsPerPage) {
      setCurrentIndex(newIndex);
    }
  };

  const prev = () => {
    const newIndex = currentIndex - itemsPerPage;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="w-screen relative">
      <h1 className="text-2xl font-bold my-4">Gown List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {data
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((gown, index) => (
            <div
              key={index}
              className="border rounded-lg"
            >
              <div className="w-[25rem] h-[35rem]">
                <img
                  src={gown.image}
                  alt={gown.title}
                  className="w-full h-full object-cover p-5 cursor-pointer object-cover"
                  width={250}
                  height={300}
                />
              </div>
              <div className="items-center justify-start p-5 w-[15rem] h-[15rem]">
                <h2 className="text-xl font-semibold mb-2">{gown.brand}</h2>
                <p className="text-base text-gray-600">{gown.title}</p>
                <p className="text-base text-gray-600">Color: {gown.color}</p>
                <p className="text-base text-gray-600">
                  Selling Price: {gown.selling_price}
                </p>
                <p className="text-base text-gray-600">Price: {gown.price}</p>
                <p className="text-base text-gray-600">
                  Discount: {gown.disscount}
                </p>
                <p className="text-base text-gray-600">Size: {gown.size}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 flex items-center justify-center bg-white rounded-full p-2 shadow-lg"
        onClick={prev}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 flex items-center justify-center bg-white rounded-full p-2 shadow-lg"
        onClick={next}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default MenClotherSlider;
