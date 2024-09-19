import React from "react";
import "../Features/features.css";

import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Hassle-Free Bookings",
      des: "Easily book a ride to and from Mussoorie with our user-friendly platform.",
    },
    {
      id: 1,
      image: feature2,
      title: "Affordable Travel Packages",
      des: "Get the best deals on local tours, taxi services, and sightseeing adventures.",
    },
    {
      id: 2,
      image: feature3,
      title: "Local Expertise",
      des: "Our drivers know Mussoorie inside and out, ensuring a smooth and scenic journey.",
    },
    {
      id: 3,
      image: feature4,
      title: "Safe and Reliable",
      des: "Enjoy peace of mind with professional drivers and well-maintained vehicles.",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx} className="feature-card">
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Body>
                        <Card.Title className="feature-title">{feature.title}</Card.Title>
                        <Card.Text className="feature-des">{feature.des}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
