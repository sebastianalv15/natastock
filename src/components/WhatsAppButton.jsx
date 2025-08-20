import React from "react";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/59172165836"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat en WhatsApp"
    >
      <img
        src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
