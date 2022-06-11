import React from 'react';
import './FormDetails.css';

const FormDetails = ({fName, lName, email, value, amount, courseCategory}) => {
    return (
        <div className='form-details'>
            <h2>😜Please confirm your details before you proceed to make payment</h2>
            <p>First Name: {fName} </p>
            <p>Last Name: {lName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {value}</p>
            <p>Fees: {amount}</p>
            <p>Course Category: {courseCategory}</p>
        </div>
    )
}

export default FormDetails