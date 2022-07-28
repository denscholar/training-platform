import React from 'react';
import Avatar from '@mui/material/Avatar';
import './TestimonialCard.css';

const TestimonialCard = ({ src, text, alt, width, height }) => {
    return (
        <div className='testimonai-card'>
            <div className="circularImage">
                <Avatar
                    className='circular'
                    sx={{ width: width, height: height }}
                    src={src}
                    alt={alt}
                />
                <div className="text-container">
                    <p className="text">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard