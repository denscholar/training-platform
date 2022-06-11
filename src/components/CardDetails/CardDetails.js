import React from 'react';
import './CardDetails.css';
import { ArrowForwardIosOutlined } from '@mui/icons-material';


const CardDetails = ({course, category, date, img, width, bgColor }) => {
  return (
    <div className='card-container' style={{
      width:width,
      backgroundColor:bgColor
    }}>
        <div className="card-flex1">
            <img src={img} alt={img} />
        </div>
        <div className="card-flex2">
            <h2>{course}</h2>
            <h3>{category}</h3>
            <p>{date}</p>
        </div>
        <div className="card-flex3">
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}

export default CardDetails