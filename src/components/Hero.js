import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  // Add your carousel items
  const carouselItems = [
    {
      imageSrc: "/images/softt.png",
      alt: "Slide 1",
      text: "Software Infrastructure",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    },
    {
      imageSrc: "/images/infra.jpg",
      alt: "Slide 2",
      text: "Software Development",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    },
    {
      imageSrc: "/images/in.jpg",
      alt: "Slide 3",
      text: "Unlock Your Potential With \
    Softnet's Technology Training Programs",
      portfolioLink: "/portfolio",
      contactLink: "/contact",
    }
    ,
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
        customTransition: "transform 300ms ease-in-out",
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        customTransition: "transform 300ms ease-in-out",
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        customTransition: "transform 300ms ease-in-out",
      },
    },
  };
  
  return (
    <div>
    <Carousel {...carouselConfig}>
      {carouselItems.map((item, index) => (
        <div key={index} style={{ position: "relative", overflow: "hidden", height: "30rem", marginBottom: "0px", marginTop:"0px", paddingBottom:"0px"  }}>
        
          <img src={item.imageSrc} alt={item.alt}  className="  w-full md:pl-96 sm:pl-0 md:h-full   object-center object-contain" />
          <div style={{ fontSize: 35, fontWeight: "bold", position: "absolute", top: 0, left: 0, right: 0, bottom: 20, background: "rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", paddingBottom: "100px", mariginTop:"0px", marginLeft:"0px", color: "darkblue" }}>
          <div className="relative left-10  sm:left-15 top-44  ">
  <p className="mb-5 text-violet-900 md:text-5xl sm:text-xl pl-0 justify-between">{item.text}</p>
  <a 
    href={item.portfolioLink}
    className="button-style hover:bg-blue-700 hover:border-blue-700 text-lg sm:text-lg hover:text-white"
    style={{ textDecoration: "none", marginTop: "10px", marginRight: "20px", border: "2px solid blue", borderRadius: "10px", padding: "8px" }}
  >
    Portfolio
  </a>
  <a
    href={item.contactLink}
    className="button-style hover:bg-red-700 hover:border-red-700 text-lg hover:text-white"
    style={{ textDecoration: "none", marginTop: "10px", border: "2px solid red", borderRadius: "10px", padding: "8px" }}
  >
    Contact
  </a>
</div>



          </div>
        </div>
      ))}
    </Carousel>
  </div>
  );
}

export default Hero;
