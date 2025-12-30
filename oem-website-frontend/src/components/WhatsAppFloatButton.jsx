import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloatButton = () => {
  // Replace 250XXXXXXXXX with your actual WhatsApp number (with country code)
  const phoneNumber = '250XXXXXXXXX';
  const message = 'Hello Organisation Enfants Mere, I would like more information.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloatButton;