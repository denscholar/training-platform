import React from 'react';
import CurriculumCard from '../Curriculum_card/CurriculumCard';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import './Curriculum.css';

const Curriculum = () => {
    return (
        <div id='curriculum' className='curriclum-collapsible'>
            <h3 className='course-heading'>Leveling up</h3>
            <h2 className='course-title'>Curriculum Overview</h2>
            <p className='course-content'>This bootcamp is a deep dive into the fundamentals of Data Anlytics. You’ll walk away with a portfolio of projects showcasing your skill working with data acumen to prospective employers! Browse through our curriculum and have a feel of what you will be consuming the caraious respective track you choose to embark on.</p>
            <CurriculumCard
                id={'python'}
                title={'Python for Data Science'}
                Icon={KeyboardArrowDownOutlined}
                content={<p>In the 21st century, the new driving force behind industries is Data. As a matter of fact, even automobile industries are using data to impart autonomy and improve the safety of their vehicles. The idea is to create powerful machines that think in the form of data.<br/> <br/>Data Science is also the electricity that powers the industries of today. Industries need data to improve their performance, make their business grow and provide better products to their customers.</p>}
            />

            <CurriculumCard
                id={'data analytics'}
                title={'Data Analytics'}
                Icon={KeyboardArrowDownOutlined}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />
            <CurriculumCard
                id={'SQL'}
                title={'Structured Queried Language (SQL)'}
                Icon={KeyboardArrowDownOutlined}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />

            <CurriculumCard
                id={'power bi'}
                title={'Power BI'}
                Icon={KeyboardArrowDownOutlined}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />
            <CurriculumCard
                id={'tableau'}
                title={'Tableau'}
                Icon={KeyboardArrowDownOutlined}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />
            <CurriculumCard
                id={'excel'}
                title={'Data Analysis with Excel'}
                Icon={KeyboardArrowDownOutlined}
                content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />


        </div>
    )
}

export default Curriculum