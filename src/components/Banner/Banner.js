import React from 'react';
import Icon1 from '../../assets/icons8-mentor-64.png';
import Icon2 from '../../assets/icons8-website-analytics-64.png';
import Icon3 from '../../assets/icons8-award-58 (1).png';
import './Banner.css';

export const Banner = () => {
  return (
    <div className='banner-container'>
      <h3>A data analytics bootcamp on your schedule, guaranteed to get you a job</h3>
      <p className='banner-title'>Get the training you need for a successful career in data analytics. Learn at your own pace with 1-on-1 mentorship from industry experts and support from student advisors and career coaches.</p>
      <div className="icon-wrapper">
        <div className="icon-item">
          <img src={Icon1} alt={Icon1} />
          <h3 className='icon-title'>1-on-1 mentor support</h3>
          <p>Regular meetings to discuss your project, or career-specific questions.</p>
        </div>
        <div className="icon-item">
          <img src={Icon2} alt={Icon1} />
          <h3 className='icon-title'>Hands-on experience</h3>
          <p>Learn in-depth technical skills through project based learning.</p>
        </div>
        <div className="icon-item">
          <img src={Icon3} alt={Icon1} />
          <h3 className='icon-title'>Job Guarantee</h3>
          <p>Land a job as a data analyst within 6 months of graduating.</p>
        </div>
      </div>
    </div>
  )
}
