import React from 'react';
import { MenuOutlined, ArrowDropDownOutlined, CloseOutlined } from '@mui/icons-material';
import Button from '../Button/Button';
import { Link } from 'react-scroll';
import logo from '../../assets/logo-web.png';
import { useState } from 'react';
import './AppBar.css';

const AppBar = ({handleClick}) => {
    const [isToggle, setIsToggle] = useState(false);
    const [isCourse, setIsCourse] = useState(false);

    return (
        <div>
            <div className="header">
                <div className="logo" id='logo'>
                    <Link to="home" spy={true} smooth={true} offset={-50} duration={500}><img src={logo} alt="logo" /></Link>
                    <MenuOutlined onClick={() => setIsToggle(!isToggle)} />
                </div>
                <div>
                    <div className={isToggle ? 'open-nav' : 'nav-link'}>
                        <CloseOutlined className='close-icon' onClick={() => setIsToggle(!isToggle)} />
                        <ul className='mobile-link'>
                            <li className='link'><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link></li>
                            <li className='link-course link'><p>Course <ArrowDropDownOutlined className='drop-down' onClick={() => setIsCourse(!isCourse)} /></p>
                                <ul className={!isCourse ? 'sub-courses' : 'show-subCourses'}>
                                    <li><Link to="python" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>Python</Link></li>
                                    <li><Link to="data analytics" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>Data Analytics</Link></li>
                                    <li><Link to="SQL" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>SQL</Link></li>
                                    <li><Link to="python" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>Power BI</Link></li>
                                    <li><Link to="tableau" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>Tableau</Link></li>
                                    <li><Link to="excel" spy={true} smooth={true} offset={-50} duration={500} onClick={() => setIsToggle(!isToggle)}>Advance Excel</Link></li>
                                </ul>
                            </li>
                            <li className='link'>
                                <Button onclick={handleClick} text={'Apply Now'} bgColor={'#05A8DF'} color={'white'} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-desktop">
                    <ul className='desktop-link dropdown'>
                        <li className='link'><Link to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link></li>
                        <li className='dropbtn'><p className='course-list'>Course <ArrowDropDownOutlined className='drop-down' /></p>
                            <ul className='dropdown-content'>
                                <li className='drop-link'><Link to="python" spy={true} smooth={true} offset={-60} duration={500}>Python</Link></li>
                                <li className='drop-link'><Link to="data analytics" spy={true} smooth={true} offset={-60} duration={500}>Data Analytics</Link></li>
                                <li className='drop-link'><Link to="SQL" spy={true} smooth={true} offset={-60} duration={500}>SQL</Link></li>
                                <li className='drop-link'><Link to="power bi" spy={true} smooth={true} offset={-60} duration={500}>Power BI</Link></li>
                                <li className='drop-link'><Link to="tableau" spy={true} smooth={true} offset={-60} duration={500}>Tableau</Link></li>
                                <li className='drop-link'><Link to="excel" spy={true} smooth={true} offset={-60} duration={500}>Advance Excel</Link></li>
                            </ul>
                        </li>
                        <li className='link'>
                            <Button onclick={handleClick} text={'Apply Now'} bgColor={'#05A8DF'} color={'white'} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppBar