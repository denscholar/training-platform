import React from 'react';
import './IconsSection.css';
import image1 from '../../assets/cap_1.png';
import image2 from '../../assets/examples.png';
import image3 from '../../assets/puzzle.png';


const IconsSection = () => {
    return (
        <div className='icon_section'>
            <h3>Redefining Learning</h3>
            <div className="flex-icon">
                <div className="image-content">
                    <img src={image1} alt="" />
                    <p>Step-by-step guides to get you up and running.</p>
                </div>
            </div>
            <div className="flex-icon">
                <div className="image-content">
                    <img src={image3} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.</p>
                </div>
            </div>
            <div className="flex-icon">
                <div className="image-content">
                    <img src={image2} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quos.</p>
                </div>
            </div>
        </div>
    )
}

export default IconsSection