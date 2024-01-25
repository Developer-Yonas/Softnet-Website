import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  // Add your carousel items
  const carouselItems = [
    {
      imageSrc: "/images/soft.png",
      alt: "Slide 1",
      text: "Software | Infrastructure | Training | It Outsourcing",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    },
    {
      imageSrc: "/images/soft.png",
      alt: "Slide 2",
      text: "Software Development",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    },
    {
      imageSrc: "/images/soft.png",
      alt: "Slide 3",
      text: "Software Development",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    },
    // Add more items as needed
  ];

  // Carousel configuration
  const carouselConfig = {
    autoPlay: true,
    infinite: true,
    interval: 3000, // Time between slides in milliseconds
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    },
  };

  return (
    <div>
      <Carousel {...carouselConfig}>
        {carouselItems.map((item, index) => (
          <div key={index} style={{ position: "relative", overflow: "hidden" }}>
            <div style={{ fontSize:35, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", padding: "20px", color: "black" }}>
             <div style={{position: "absolute",  top:250, left:70}}><p>{item.text}</p>
              <a href={item.portfolioLink} style={{ color: "#333", textDecoration: "none", marginTop: "10px", marginRight:"20px" }}>Portfolio</a>
              <a href={item.contactLink} style={{ color: "#333", textDecoration: "none", marginTop: "10px" }}>Contact</a>
              </div>
            </div>
            <img src={item.imageSrc} alt={item.alt} className="w-full h-auto" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Hero;
