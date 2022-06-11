import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = ({showModal}) => {
    return (
        <div className='hero-image' id='home'>
            <div className="hero-text">
                <h2>Become a Sought-after Data Analyst</h2>
                <p>Learn today’s most in-demand tech skills and kickstart your new career</p>
                <Button
                    onclick={showModal}
                    className='button'
                    text={'Apply Now'}
                    bgColor={'#05AAE1'}
                    color={'white'}
                    fontSize='18px'
                />
            </div>
        </div>
    )
}

export default Hero