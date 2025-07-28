import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '233505277493'; // Ghana country code, no plus sign
    const message = "Hello! I'm interested in your bricks and construction services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#650909] hover:bg-[#4b1313] text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default WhatsAppFloat;