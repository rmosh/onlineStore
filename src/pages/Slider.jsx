import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SliderData } from '../ProductData/SliderDAta.js';

const Slider = () => {
  const items = SliderData.map((item) => (
    <div className="flex items-center justify-center">
      <img
        className="w-full h-100 object-contain cursor-pointer bg-red-600"
        role="presentation"
        src={item.image}
        alt=""
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={5000}
      infinite
      animationType="fadeout"
    />
  );
};

export default Slider;
