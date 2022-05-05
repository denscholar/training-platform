import React from 'react';
import './Button.css';

const Button = ({ text, bgColor, color }) => {
  return (
    <div>
        <button style={{
            backgroundColor: bgColor,
            color: color
        }}>{text}</button>
    </div>
  )
}

export default Button