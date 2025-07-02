'use client'
import React from 'react';
import './whatsappBtn.css';

type WhatsAppButtonProps = {
  number: string;
  message: string;
  label?: string;
};

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  number,
  message,
  label = 'Send via WhatsApp',
}) => {
  const handleClick = () => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-success whatsapp-button"
    >
      {label}
    </button>
  );
};

export default WhatsAppButton;
