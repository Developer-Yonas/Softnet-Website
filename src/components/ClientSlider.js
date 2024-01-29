import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientSlider = () => {
  const clientLogos = [
    "/images/4.jpg",
    "/images/softt.png",
    "/images/soft.png",
    "/images/t.jpg",
    "/images/cam.png",
    "/images/client3.png",
    // Add more client logos as needed
  ];

  const carouselConfig = {
    autoPlay: true,
    infinite: true,
    interval: 10,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
      },
    },
  };

  return (
    <Carousel {...carouselConfig}>
      {clientLogos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Client Logo ${index + 1}`}
          className="mx-2.5 pr-5"
          // Add additional styling as needed
        />
      ))}
    </Carousel>
  );
};

export default ClientSlider;
