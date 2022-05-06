import React from 'react';
import './Button.css';

const Button = ({ text, bgColor, color, fontSize }) => {
  return (
    <div>
        <button style={{
            backgroundColor: bgColor,
            color: color,
            fontSize: fontSize
        }}>{text}</button>
    </div>
  )
}

export default Button