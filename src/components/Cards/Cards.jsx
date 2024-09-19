import React from "react";
import { Card } from "react-bootstrap";
import "../Cards/card.css";
import { NavLink } from "react-router-dom";

const Cards = ({ destination }) => {
  // Function to handle WhatsApp redirection with prefilled message
  const handleWhatsAppClick = () => {
    const phoneNumber = "9419705974"; // The number to send the message to
    const message = `Hello! Can I get more info on this?\n\nTour: ${destination.name}`;
    
    // Encode the message to be URL friendly
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="img-box">
        <NavLink
          className="body-text text-dark text-decoration-none"
          onClick={handleWhatsAppClick} // Add the click event here
        > 
          <Card>
            <Card.Img
              variant="top"
              src={destination.image}
              className="img-fluid"
              style={{ height: 248, width: 248 }}
              alt={destination.name}
            />
            <Card.Title>
              {destination.name}
            </Card.Title>
            <span className="tours">{destination.tours}</span>
          </Card>
        </NavLink>
      </div>
    </>
  );
};

export default Cards;
