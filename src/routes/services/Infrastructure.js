import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Infrastructure = () => {
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
      title: 'Servers',
      description: ' Specialized computers or software applications designed to provide services, resources, or functionalities to other computers, known as clients, within a network.',
    },
    
    {
      image: '/images/cam.png',
      title: 'Networking',
      description: 'Networking, refers to the practice of connecting computers and other devices to enable them to communicate and share resources.',
    },
    {
      image: '/images/cam.png',
      title: 'HCI(Hyper-Converged-Infrastructure)',
      description: ' An integrated IT infrastructure system that combines computing, storage, and networking resources in a single, software-defined solution. ',
    },
    {
      image: '/images/cam.png',
      title: 'Security Solutions',
      description: 'Encompass a wide range of tools, practices, and measures designed to protect  IT systems, networks, data, and users from various security threats and risks.',
    },
    {
      image: '/images/cam.png',
      title: 'Data Center Solutions',
      description: 'It refer to a set of integrated products and services designed to optimize the management, storage, processing, and networking of data within a centralized facility.',
    },    
  
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-violet-900">Infrastructure </h1>
        <p className="text-gray-600 mt-2">Infrastructure supply and deployment</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">What we offer?</h2>
          <p className="text-gray-700">
            End-to-end services guaranteeing seamless integration and optimal performance of your technology infrastructure.
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
              <img src={slide.image} alt={`Slide ${index + 1}`} className="md:ml-80 sm:ml-0  md:w-auto sm:w-full sm:h-auto md:h-96 rounded shadow-md" />
              <div className="text-center mt-4">
                <h2 className="text-2xl font-semibold mb-2">{slide.title}</h2>
                <p className=" text-gray-700 ">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
}

export default Infrastructure;
