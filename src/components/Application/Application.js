import React from 'react';
import './Application.css';
import Button from '../Button/Button'

const Application = () => {
    return (
        <div className='application-container' id='Application Process'>
            <h3>Application Process</h3>
            <h2>How to Enroll</h2>
            <p>At DataLytics, we truly believe that anyone can learn to code, regardless of their professional background. After teaching many students, we have found that determination is the #1 factor to student success - NOT coding experience. That’s why our admissions process does not include a coding challenge or technical assessment.</p>

            <div className="application-grid">
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>1</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Explore (optional)</h3>
                            <p>Schedule a Q&A call with Admissions to get quick answers about the bootcamp or join the next Open House.</p>
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
                            <p>Ready to join? Submit your application and pick your start date to join.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>3</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Interview</h3>
                            <p>Meet an Admission Advisor to make sure you’re ready for the challenges of the program. An acceptance decision will be made within 2-3 business days.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="inner-grid">
                        <div className="inner-item circle">
                            <h2>4</h2>
                        </div>
                        <div className="inner-item">
                            <h3>Deposit to Enroll</h3>
                            <p>If accepted, submit your deposit to officially save your seat and gain access to bootcamp-prep materials for your start date.</p>
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