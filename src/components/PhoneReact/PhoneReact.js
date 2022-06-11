import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import './PhoneReact.css';

const PhoneReact = () => {
    const [value, setValue] = useState()
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
  )
}

export default PhoneReact