import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Whatsapp.css';

export default function Whatsapp() {
  const phone = '919490717275';
  const url = `https://wa.me/${phone}`;
  return (
    <a href={url} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <span className="wa-waves"></span>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">Chat</span>
    </a>
  );
}
