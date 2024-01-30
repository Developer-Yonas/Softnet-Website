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
      title: 'Web Development',
      description: 'Learn the latest web development technologies and frameworks in our intensive bootcamp.',
    },
    {
      image: '/images/cam.png',
      title: 'App Development',
      description: 'Explore the fundamentals of App development and gain insights, skills and experience.',
    },
    {
      image: '/images/cam.png',
      title: 'Customized Solutions',
      description: 'Build your robotics experience here with our expert instructors.',
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-violet-900">Software Development </h1>
        <p className="text-gray-600 mt-2">Solving complex problems, effortlessly .</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">What we do?</h2>
          <p className="text-gray-700">
            We craft scalable, secure, and user-friendly software applications to enhance productivity and streamline your business processes.
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

export default Infrastructure;
