import React from 'react';
import './PythonComponent.css';

const PythonComponent = () => {
    return (
        <div className='python-content'>
            <h2>What you will learn</h2>
            <p>Do you want to become a Data Scientist? If so, this course will equip you with concepts and tools that can bring you to speed and you can utilize the skills acquired in this course to work on any data science project in a standardized approach. <br /><br /> The objectives of this course is to get you started with Python as the programming language and give you a taste of how to start working with data in Python.</p>

            <div className="module">
                <div className="module-item">
                    <ul>
                        <h2>Module 1 - Python Basics</h2>
                        <li> Installing Python</li>
                        <li> Using Jupyter Notebooks</li>
                        <li> Your first program</li>
                        <li> Types</li>
                        <li> Expressions and Variables</li>
                        <li> String Operations</li>
                        <h2>Module 2 - Python Basics</h2>
                        <li>Lists and Tuples</li>
                        <li>Sets</li>
                        <li>Dictionaries</li>
                    </ul>
                </div>
                <div className="module-item">
                    <ul>
                        <h2>Module 3 - Python Programming Fundamentals</h2>
                        <li>Conditions and Branching</li>
                        <li>Loops</li>
                        <li>Functions</li>
                        <li>Objects and Classes</li>
                        <h2>Module 4 - Working with Data in Python</h2>
                        <li> Reading files with open</li>
                        <li> Writing files with opens</li>
                        <h2>Module 4 - Project</h2>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PythonComponent
