import React from 'react';
import './CardDetails.css';
import { ArrowForwardIosOutlined } from '@mui/icons-material';

const CardDetails = ({course, category, date }) => {
  return (
    <div className='card-container'>
        <div className="card-flex">
            
        </div>
        <div className="card-flex">
            <h3>{course}</h3>
            <h3>{category}</h3>
            <h3>{date}</h3>
        </div>
        <div className="card-flex">
            <ArrowForwardIosOutlined/>
        </div>
    </div>
  )
}

export default CardDetails