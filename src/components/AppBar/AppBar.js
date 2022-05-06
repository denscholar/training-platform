import React from 'react';
import { MenuOutlined, ArrowDropDownOutlined, CloseOutlined } from '@mui/icons-material';
import Button from '../Button/Button';
import { useState } from 'react';
import './AppBar.css';

const AppBar = () => {
    const [isToggle, setIsToggle] = useState(false);
    const [isCourse, setIsCourse] = useState(false);

    return (
        <div>
            <div className="header-mobile">
                <div className="logo">Logo</div>
                <div className="toggle-icon">
                    <MenuOutlined onClick={() => setIsToggle(!isToggle)} />
                </div>
                <div className={isToggle ? 'open-nav' : 'nav-link'}>
                    <CloseOutlined className='close-icon' onClick={() => setIsToggle(!isToggle)} />
                    <ul className='mobile-link'>
                        <li className='link'>Who we are</li>
                        <li className='link-course link'><p>Course <ArrowDropDownOutlined className='drop-down' onClick={() => setIsCourse(!isCourse)} /></p>
                            <ul className={!isCourse ? 'sub-courses' : 'show-subCourses'}>
                                <li>Data analytics</li>
                                <li>SQL</li>
                                <li>Software development</li>
                            </ul>
                        </li>
                        {/* <li className='link'></li> */}
                        <li className='link'>
                            <Button text={'Apply Now'} bgColor={'#05A8DF'} color={'white'} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-desktop">

            </div>
        </div>
    )
}

export default AppBar