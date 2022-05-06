import React from 'react';
import Hero from '../components/Hero/Hero';
import IconsSection from '../components/IconsSection/IconsSection';
import './Home.css';

const Home = () => {
  return (
    <div>
        <Hero/>
        {/* icon section */}
        <IconsSection/>
    </div>
  )
}

export default Home