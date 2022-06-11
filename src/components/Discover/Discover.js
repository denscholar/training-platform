import React from 'react';
import CardDetails from '../CardDetails/CardDetails';
import DataImg from '../../assets/data-analysis.png'
import './Discover.css'
import SpecialCardDetails from '../SpecialCardDetails/SpecialCardDetails';

const Discover = () => {
    return (
        <div className='discover-container' id='discover'>
            <h2 className='title'>Discover our trainings</h2>
            <div className="discover-flex">
                <div className="data-science">
                    <div className="top-div">
                        <SpecialCardDetails
                        course={'Data Science'}
                        category={'Our flagship, 3 stack software development'}
                        date={'12 WEEKS | 20HRS / WK'}
                        width={'100%'}
                        bgColor={'#D9EBF3'}
                        />
                    </div>
                </div>

                <div className="card-details">
                    <CardDetails
                        className="card"
                        course={'Data analytics'}
                        img={DataImg}
                        category={'Online Part-time Bootcamp'}
                        date={'12 WEEKS | 20HRS / WK'}
                        width={'100%'}
                    />
                    <CardDetails
                        course={'Data analytics'}
                        img={DataImg}
                        width={'100%'}
                        category={'Online Part-time Bootcamp'}
                        date={'12 WEEKS | 20HRS / WK'}
                        className="card"
                    />
                    <CardDetails
                        course={'Data analytics'}
                        img={DataImg}
                        width={'100%'}
                        category={'Online Part-time Bootcamp'}
                        date={'12 WEEKS | 20HRS / WK'}
                        className="card"
                    />
                </div>
            </div>
        </div>
    )
}

export default Discover