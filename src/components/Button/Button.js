import React from 'react';
import './Button.css';

const Button = ({ text, bgColor, color, fontSize, width, height, onclick }) => {
  return (
    <div>
        <button onClick={onclick} style={{
            backgroundColor: bgColor,
            color: color,
            fontSize: fontSize,
            width: width,
            height: height,
        }}>{text}</button>
    </div>
  )
}

export default Button