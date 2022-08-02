import React, { useState } from 'react';
// import Hero from '../components/Hero/Hero';
import IconsSection from '../components/IconsSection/IconsSection';
// import Discover from '../components/Discover/Discover';
import Questions from '../components/Questions/Questions';
import Application from '../components/Application/Application';
import Curriculum from '../components/Curriculum/Curriculum';
import Button from '../components/Button/Button';
import { Link } from 'react-scroll';
import { Banner } from '../components/Banner/Banner';
import WhatsAppChat from '../components/WhatsappChat/WhatsappChat';
import Testimonial from '../components/Testimonial/Testimonial';
// import Form from '../components/FormModal/ModalForm';
import './Home.css';

const Home = ({ handleClick }) => {
  // const [showForm, setShowForm] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const setToActiveState = () =>{
    setIsActive(true)
  }
  
  return (
    <div className="home-container">
      <div className='floating-nav-bar'>
        <ul className='floating-link'>
          <li className={isActive ? 'active' : ''} onClick={setToActiveState}><Link to="overview" spy={true} smooth={true} offset={-50} duration={500}>Overview</Link></li>
          <li className={isActive ? 'active' : ''}><Link to="question" spy={true} smooth={true} offset={-50} duration={500}>Discover</Link></li>
          <li className={isActive ? 'active' : ''}><Link to="curriculum" spy={true} smooth={true} offset={-50} duration={500}>Curriculum</Link></li>
          <li className={isActive ? 'active' : ''}><Link to="Application Process" spy={true} smooth={true} offset={-50} duration={500}>Application Process</Link></li>
          <li className={isActive ? 'active' : ''}><Link to="testimonial" spy={true} smooth={true} offset={-50} duration={500}>Testimonials</Link></li>
          <li><Button
          text={'Apply Now'}
          bgColor={'#05A8DF'}
          color={'white'}
          fontSize={'18px'}
          onclick={()=>handleClick(true)}
          /></li>
        </ul>
      </div>
      
      <div className='bottom-floating-bar'>
        <div className="text">
          <p>Enroll by</p>
          <h2>June 15</h2>
          <p>to start class on</p>
          <h2>June 20</h2>
        </div>
      </div>
      <IconsSection />
      <Banner/>
      {/* <Discover /> */}
      <Questions />
      <Curriculum/>
      <Application />
      <Testimonial/>
      <WhatsAppChat/>
      {/* {showForm && <Form closeModal={setShowForm} />} */}

    </div>
  )
}

export default Home