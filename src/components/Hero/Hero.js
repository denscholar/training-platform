import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-image'>
            <div className="hero-text">
                <h2>Land Your Dream Job in Tech</h2>
                <p>Learn today’s most in-demand digital skills and kickstart your new career</p>
            </div>
            <Button
            className='button' 
            text={'Apply Now'} 
            bgColor={'#05AAE1'} 
            color={'white'}
            fontSize='18px'
            />
        </div>
    )
}

export default Hero