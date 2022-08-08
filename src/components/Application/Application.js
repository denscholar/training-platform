import React from 'react';
import './Application.css';
import Button from '../Button/Button'

const Application = () => {
    return (
        <div className='application-container' id='Application Process'>
            <h3>Application Process</h3>
            <h2>How to Enroll</h2>
            <p>At Dimmandystech, we truly believe that anyone can become a Data analyst, regardless of their professional background. After teaching many students, we have found that determination is the #1 factor to student success - NOT programming experience. That’s why our admissions process does not include a coding challenge or technical assessment.</p>

            <div className="application-grid">
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>1</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Explore (optional)</h3>
                            <p>Schedule a Q&A chat using the Whatsapp chat button to get quick answers about the bootcamp.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>2</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Apply</h3>
                            <p>Ready to join? Click on the 'Apply Now' button to apply and make payments. Ensure you select your preferred course</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>3</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Reach out to us</h3>
                            <p>Reach out to us using the Whatsapp chat and evidence of payment. Once confirmed, you will be added to the student slack channel and whatsapp group. </p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>4</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Recieve your Prep-material</h3>
                            <p>Before the commencement of your training, you will receive a prep material containing the detailed curriculum and other relevant details</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <h2>Still Have Questions?</h2>
                <Button
                    bgColor={'#05AAE1'}
                    color={'white'}
                    text={'Attend our masters class'}
                    width={'15em'}
                    height={'2.5em'}
                    fontSize={'18px'}
                />
            </div>

        </div>
    )
}

export default Application