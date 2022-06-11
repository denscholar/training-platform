import React, { useState, useRef } from 'react'
import './CurriculumCard.css'

const CurriculumCard = ({ Icon, title, content, id }) => {
    const [rotate, setIsRotate] = useState(false);

    const parentRef = useRef();

    // if(parentRef.current) console.log(parentRef.current.scrollHeight);
    // const scrollHeight = document.getElementById('parent').scrollHeight;

    return (
        <div className="curriculum-wrapper" id={id}>
            <div className="curriculum-card">
                <div className="curriculum-title">
                    <h3>{title}</h3>
                    <Icon className={!rotate ? 'icon' : 'icon-rotate'} onClick={() => setIsRotate(!rotate)} />
                </div>
                <div className='curriculum-content' ref={parentRef} style={ rotate ? {
                    height: parentRef.current.scrollHeight + 'px'
                } : {
                    height: '0px'
                }}>
                    <p className="content">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default CurriculumCard