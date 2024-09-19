import React from 'react';
import "../Cards/card.css";
import { Card, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Importing the icons

const PopularCard = ({ val }) => {
  // Function to handle WhatsApp redirection with prefilled message
  const handleWhatsAppClick = () => {
    const phoneNumber = "9419705974";
    const message = `Hello! Can I get more info on this?\n\nTour: ${val.title}`;
    
    // Encode the message to be URL friendly
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp link in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle phone call
  const handleCallClick = () => {
    window.open(`tel:9419705974`, '_self');
  };

  return (
    <>
      <Card className="rounded-2 shadow-sm popular">
        <Card.Img
          variant="top"
          src={val.image}
          className="img-fluid"
          alt={"image"}
          style={{ height: 200, width: 400, objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Text>
            <i className="bi bi-geo-alt"></i>
            <span className="text mt-2 font-bold font-mono">{val.location}</span>
          </Card.Text>

          <Card.Title>
            <NavLink className="body-text text-dark text-decoration-none font-bold font-mono">
              {val.title}
            </NavLink>
          </Card.Title>
        </Card.Body>

        <Card.Footer className="py-4">
          <Stack direction="horizontal" className="justify-content-between mt-3">
            <p className="font-bold font-mono">
              From <b>₹{val.price ? val.price.toFixed(2) : val.price}</b>
            </p>

            {/* Adding call and WhatsApp icons */}
            <div className="flex gap-4">
              {/* Call Icon */}
              <FaPhoneAlt
                onClick={handleCallClick}
                style={{ cursor: 'pointer', marginRight: '10px' }}
                size={20}
                color="#007bff"
              />

              {/* WhatsApp Icon */}
              <FaWhatsapp
                onClick={handleWhatsAppClick}
                style={{ cursor: 'pointer' }}
                size={28}
                color="#25D366"
              />
            </div>
          </Stack>
        </Card.Footer>
      </Card>
    </>
  );
};

export default PopularCard;
