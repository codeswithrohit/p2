import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
   <section className="slider">
  <Carousel variant="dark">
    <Carousel.Item>
      <img
        src={sliderImg}
        className="d-block w-100"
        alt="First slide"
      />
      <Carousel.Caption>
        <div className="slider_des">
          <h5 className="heading">
            DISCOVER THE <span>CHARM OF MUSSOORIE</span>
          </h5>
        </div>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
      <Carousel.Caption>
        <div className="slider_des">
          <h5 className="heading">
            A <span>PICTURESQUE GETAWAY</span> IN THE HILLS
          </h5>
          <p className="sub_text">
            Explore the breathtaking landscapes and serene ambiance of
            Mussoorie. Perfect for nature lovers and adventure seekers,
            Mussoorie offers an unforgettable escape from the hustle and bustle
            of city life.
          </p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</section>

    </>
  );
};

export default Banner;
