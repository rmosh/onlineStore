import React from 'react';
import ResponsiveCard from './components/WomenClothesSlider';
import { gounsPage1 } from './ProductData/Gouns/gouns';
import { kurtaPage1 } from './ProductData/Kurta/kurta';
import { mens_kurta } from './ProductData/Men/men_kurta';
import Navigation from './pages/Navigation';
import Slider from './pages/Slider.jsx';
import MenClotherSlider from './components/MenClotherSlider';
import MenKurta from './components/MenKurta'; // Check if the path is correct and matches your file structure
import Footer from './pages/Footer';

function App() {
  return (
    <div className="container mx-auto ">
      <Navigation />
      <Slider />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ResponsiveCard data={gounsPage1} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MenClotherSlider data={kurtaPage1} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MenKurta data={mens_kurta} />
      </div>
      <div className="h-96 bg-slate-300">
        <Footer />
      </div>
    </div>
  );
}

export default App;
