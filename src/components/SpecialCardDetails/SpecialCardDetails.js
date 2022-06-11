import React from 'react';
import './SpecialCardDetails.css';
import { ArrowForwardIosOutlined } from '@mui/icons-material';

const SpecialCardDetails = () => {
    return (
        <div className='wrapper'>
            <div className="top-div" style={{ backgroundColor: '#D9EBF3' }}>
                <div className="card-flex2">
                    <h2>Data Analytics Training</h2>
                    <h3>Our flagship 3-categories of our bootcamps</h3>
                </div>
            </div>
            <div className="section-div">
                <div className="section-wrapper">
                    <div className="single">
                        <div className="card-flex2">
                            <h2>Onsite Full-Time</h2>
                        </div>
                        <div className="card-flex3">
                            <p>Learn More <ArrowForwardIosOutlined /></p>
                        </div>
                    </div>
                    <p className='date'>14 WEEKS | MON-FRI | 70-90 HRS/WK</p>
                    <hr />
                </div>
                <div className="section-wrapper">
                <div className="single">
                        <div className="card-flex2">
                            <h2>Onsite Full-Time</h2>
                        </div>
                        <div className="card-flex3">
                            <p>Learn More <ArrowForwardIosOutlined /></p>
                        </div>
                    </div>
                    <p className='date'>14 WEEKS | MON-FRI | 70-90 HRS/WK</p>
                    <hr />
                </div>
                <div className="section-wrapper">
                    <div className="single">
                        <div className="card-flex2">
                            <h2>Onsite Full-Time</h2>
                        </div>
                        <div className="card-flex3">
                            <p>Learn More <ArrowForwardIosOutlined /></p>
                        </div>
                    </div>
                    <p className='date'>14 WEEKS | MON-FRI | 70-90 HRS/WK</p>
                </div>
            </div>


        </div>
    )
}

export default SpecialCardDetails