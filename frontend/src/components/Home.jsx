import React from 'react'
import HeroSection from './HeroSection';
import Slider from './Slider';
import FAQSection from './FAQSection';
import Categories from './Categories';

function Home() {
  return (
    <div>
      <HeroSection />
      <Slider />
      <Categories />
      <FAQSection />
    </div>
  )
}

export default Home;
