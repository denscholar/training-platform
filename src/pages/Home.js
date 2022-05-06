import React from 'react';
import Hero from '../components/Hero/Hero';
import IconsSection from '../components/IconsSection/IconsSection';
import Discover from '../components/Discover/Discover';
import './Home.css';

const Home = () => {
  return (
    <div>
        <Hero/>
        {/* icon section */}
        <IconsSection/>
        <Discover/>
    </div>
  )
}

export default Home