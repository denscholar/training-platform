import React from 'react';
import Whatsapp from '../../assets/whatsapp.png';
import './WhatsappChat.css'

const WhatsappChat = () => {
  return (
    <div className='whatsapp-icon'>
        <a href="https://wa.me/2348122821939?text=Hi,%20I'm%20interested%20in%20your%20training"><img src={Whatsapp} alt="whatsapp-icon" /></a>
    </div>
  )
}

export default WhatsappChat