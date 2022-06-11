import React, { useState } from 'react';
import './ModalForm.css';
import ModalImage from '../../assets/girl.jpg';
import { CloseOutlined } from '@mui/icons-material';
import FormDetails from '../FormDetail/FormDetails';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import PaystackPop from '@paystack/inline-js';


const ModalForm = ({ closeModal }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState();
    const [amount, setAmount] = useState('');
    const [course, setCourse] = useState('');

    // PayStack Integration
    const payStackIntegration = (e) => {
        e.preventDefault();
        const payStack = new PaystackPop();
        payStack.newTransaction({
            key: 'pk_test_a761bd4a0ca0a31b4f11c855f0769134276c8fec',
            amount: amount * 100,
            email: email,
            firstName: firstName,
            lastName: lastName,
            phone: value,
            course: course,
            onSuccess(transaction) {
                const msg = `payment Complete! Reference ${transaction.reference}`;
                alert(msg)
                closeModal(false);
            },
            onCancel() {
                alert('You have not initiated any transaction')
            }
        })
    }


    const [formStep, setFormStep] = useState(0);
    const formStepForward = () => {
        setFormStep(cur => cur + 1)
    }

    const formStepBackward = () => {
        setFormStep(cur => cur - 1)
    }
    return (
        <div className='bg-modal'>
            <div className="modal-content">
                <div className="close" onClick={() => closeModal(false)}><CloseOutlined /></div>
                <div className="modal-image">
                    <img src={ModalImage} alt={ModalImage} />
                </div>
                <div className="form-flex">
                    {formStep === 0 && (<form
                        id="fs-frm"
                        name="registration-form"
                    >
                        <div id="fs-frm-inputs">
                            <input
                                type="text"
                                name="firstName"
                                id="first-name"
                                value={firstName}
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                id="last-name"
                                value={lastName}
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                id="email-address"
                                value={email}
                                placeholder="Enter email address"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <div className="selection">
                                <select value={course} onChange={(e) => setCourse(e.target.value)}>
                                    <option value='Select Category'>Select Category</option>
                                    <option value='Python(Part-Time)'>Python(Part-Time) - N20,000</option>
                                    <option value='Data Analyst'>Data Analyst(Part-Time) - N35,000</option>
                                    <option value='Data Analyst (Full Time)'>Data Analyst(Full-Time) - N50,000</option>
                                    <option value='SQL'>SQL - N20,000</option>
                                </select>
                            </div>
                            <div className="phone-details">
                                <PhoneInput
                                    className='phone-input1'
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue} />

                                <input
                                    id="state"
                                    value={amount}
                                    placeholder="Amount to Pay"
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className='phone-input2'
                                />
                            </div>
                        </div>
                        <p>Note: Ensure you enter the amount that correspond with the course you are registering for.</p>
                    </form>)}
                    {formStep === 1 && (<FormDetails
                        fName={firstName}
                        lName={lastName}
                        email={email}
                        value={value}
                        amount={amount}
                        courseCategory={course}
                    />)}
                    <div className="button-container">
                        <button type='button' disabled={formStep ? false : true} onClick={formStepBackward} style={!formStep ? {
                            background: 'gray',
                        } : {
                            background: 'red'
                        }}>{!formStep ? 'Disabled' : 'Back'}</button>
                        <button type='submit' onClick={formStep === 1 ? payStackIntegration : formStepForward}>{formStep === 1 ? 'Make Payment' : 'Continue'}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalForm

