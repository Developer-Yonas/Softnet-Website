import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ITO = () => {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image:'/images/cam.png',
      title: 'Web Development',
      description: 'Custom website development to align with your business goals and branding.',
    },
    {
      image: '/images/cam.png',
      title: 'App Development',
      description: 'Expertise in crafting custom mobile applications for any platforms.',
    },
    {
      image: '/images/cam.png',
      title: 'Data Encoding',
      description: 'Data encoding refers to the process of converting information or data from one format to another.',
    },
    {
      image: '/images/cam.png',
      title: 'Call center professionals',
      description: 'Customer service representatives or agents, are individuals employed in call centers to handle inbound and outbound calls from customers',
    },
    {
      image: '/images/cam.png',
      title: 'Graphics Design',
      description: 'A creative discipline that involves the visual communication and presentation of ideas.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-violet-900">Information Technology Outsourcing (ITO) </h1>
        <p className="text-gray-600 mt-2">Outsourcing</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">What we do?</h2>
          <p className="text-gray-700">
            Softnet, your ultimate partner for outsourced services that redefine excellence. Dive into a realm where professionalism.
          </p>
        </section>

        {/* Upcoming Courses Section
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Courses</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Web Development </li>
            <li>App Development</li>
            <li>Robotics</li>
            <li>Digital Art</li>
            <li>Ethical tech Mastry</li>
          </ul>
        </section> */}

        {/* Slider Section */}
        <Slider {...sliderSettings} className="mb-6">
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="md:ml-40 sm:ml-0  md:w-auto sm:w-full h-auto rounded shadow-md" />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-2">{slide.title}</h2>
                <p className="text-gray-700">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
}

export default ITO;
