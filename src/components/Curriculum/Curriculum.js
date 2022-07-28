import React from 'react';
import CurriculumCard from '../Curriculum_card/CurriculumCard';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import './Curriculum.css';
import PythonComponent from '../PythonComponent/PythonComponent';
import DataAnalystComponent from '../DataAnalystComponent/DataAnalystComponent';
import SqlComponent from '../SqlComponent/SqlComponent';

const Curriculum = () => {
    return (
        <div id='curriculum' className='curriclum-collapsible'>
            <h3 className='course-heading'>Leveling up</h3>
            <h2 className='course-title'>Curriculum Overview</h2>
            <p className='course-content'>This bootcamp is a deep dive into the fundamentals of Data Anlytics. You’ll walk away with a portfolio of projects showcasing your skill working with data acumen to prospective employers! Browse through our curriculum and have a feel of what you will be consuming the caraious respective track you choose to embark on.</p>
            <CurriculumCard
                component={<PythonComponent />}
                id={'python'}
                title={'Python for Data Science'}
                Icon={KeyboardArrowDownOutlined}
            />

            <CurriculumCard
                component={<DataAnalystComponent />}
                id={'data analytics'}
                title={'Data Analytics'}
                Icon={KeyboardArrowDownOutlined}
            />
            <CurriculumCard
                component={<SqlComponent />}
                id={'SQL'}
                title={'Structured Queried Language (SQL)'}
                Icon={KeyboardArrowDownOutlined}
            />

            <CurriculumCard
                id={'power bi'}
                title={'Power BI'}
                Icon={KeyboardArrowDownOutlined}
            // content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />
            <CurriculumCard
                id={'tableau'}
                title={'Tableau'}
                Icon={KeyboardArrowDownOutlined}
            // content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />
            <CurriculumCard
                id={'excel'}
                title={'Data Analysis with Excel'}
                Icon={KeyboardArrowDownOutlined}
            // content={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quod voluptate minima consequatur tempora perferendis inventore quasi officia distinctio suscipit error sunt repellendus ut maiores odio esse accusamus quaerat, quisquam veritatis enim ipsam soluta velit possimus! Facere, ut error earum culpa assumenda dignissimos porro nisi similique. Quas assumenda optio voluptates.'}
            />


        </div>
    )
}

export default Curriculum