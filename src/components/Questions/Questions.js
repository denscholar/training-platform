import React from 'react';
import './Questions.css';
import Image_1 from '../../assets/call-us.PNG';
import Image_2 from '../../assets/admission.PNG';
import { CheckOutlined } from '@mui/icons-material';
import Button from '../Button/Button'


const Questions = () => {
    return (
        <div className='question-container' id='question'>
            <h2 className='title'>Have questions?</h2>
            <div className='question-section' style={{
                display: 'flex',
                gap: '100px',
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <div className="join-whatsapp">
                    <img src={Image_1} alt={Image_1} />
                    <h3>Online Info Session</h3>
                    <p><CheckOutlined />Get a course recommendation</p>
                    <p><CheckOutlined />See how we teach</p>
                    <p><CheckOutlined />Meet our instructors</p>
                    <Button className="button-class"
                        text={'Contact us via WhatsApp'}
                        bgColor={'#008EBD'}
                        width={'15rem'}
                        color={'white'}
                        fontSize={'18px'}
                    />

                </div>
                <div className="call-us">
                    <img src={Image_2} alt={Image_2} />
                    <h3>Online Info Session</h3>
                    <p><CheckOutlined />Get to know how the bootcamps works</p>
                    <p><CheckOutlined />Learn all our course options</p>
                    <p><CheckOutlined />Discover other interesting features</p>
                    <Button className="button-class"
                        text={'Contact us via WhatsApp'}
                        bgColor={'#008EBD'}
                        width={'15rem'}
                        color={'white'}
                        fontSize={'18px'}
                    />
                </div>
            </div>
        </div>

    )
}

export default Questions