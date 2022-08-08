import React from 'react';
// import FooterIcon from '../FooterIcon/FooterIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <p className='title'>Copyright © 2022 dimmandys-world.<br /> All rights reserved.</p>
            <div className="icon-wrapper">
                <a href="https://web.facebook.com/dimmandystechworld"><FacebookIcon style={{
                    color: 'white'
                }} /></a>
                <a href="#"><LinkedInIcon style={{
                    color: 'white'
                }} /></a>
                <a href="#"><TwitterIcon style={{
                    color: 'white'
                }} /></a>
            </div>
        </div >
    )
}

export default Footer