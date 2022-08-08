import React from 'react';
import CurriculumCard from '../Curriculum_card/CurriculumCard';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import './Curriculum.css';
import PythonComponent from '../PythonComponent/PythonComponent';
import DataAnalystComponent from '../DataAnalystComponent/DataAnalystComponent';
import SqlComponent from '../SqlComponent/SqlComponent';
import PowerBi from '../PowerBi/PowerBi';
import Tableau from '../Tableau/Tableau';
import Excel from '../Excel/Excel';

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
                component={<PowerBi />}
                id={'power bi'}
                title={'Power BI'}
                Icon={KeyboardArrowDownOutlined}

            />
            <CurriculumCard
                component={<Tableau />}
                id={'tableau'}
                title={'Tableau'}
                Icon={KeyboardArrowDownOutlined}

            />
            <CurriculumCard
                component={<Excel />}
                id={'excel'}
                title={'Data Analysis with Excel'}
                Icon={KeyboardArrowDownOutlined}

            />


        </div>
    )
}

export default Curriculum