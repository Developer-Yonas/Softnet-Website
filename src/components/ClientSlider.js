import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ClientSlider = () => {
  const clientLogos = [
    "/images/logo/cl1.png",
    "/images/logo/cl2.png",
    "/images/logo/cl4.png",
    "/images/logo/cl5.png",
    "/images/logo/cl6.png",
    "/images/logo/cl7.png",
    "/images/logo/cl8.png",
    "/images/logo/cl9.png",
    "/images/logo/cl10.png",
    "/images/logo/cl11.png",
    "/images/logo/cl12.png",
    "/images/logo/cl13.png",
    // Add more client logos as needed
  ];

  const carouselConfig = {
    autoPlay: true,
    infinite: true,
    interval: 1000,
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
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
          className="ml-10 md:mx-16 sm:mx-0  object-center"
          // Add additional styling as needed
        />
      ))}
    </Carousel>
  );
};

export default ClientSlider;
