import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechnologyTraining = () => {
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
      image:'/images/Services/webd.jpg',
      title: 'Web Development',
      description: 'Learn the latest web development technologies and frameworks in our intensive bootcamp.',
    },
    {
      image: '/images/Services/appd.jpg',
      title: 'App Development',
      description: 'Explore the fundamentals of App development and gain insights, skills and experience.',
    },
    {
      image: '/images/Services/robod.jpg',
      title: 'Robotics',
      description: 'Build your robotics experience here with our expert instructors.',
    },
    {
      image: '/images/Services/digd.jpg',
      title: 'Digital Art',
      description: 'Build your digital art experience here with our expert instructors.',
    },
    {
      image: '/images/Services/bud.jpg',
      title: 'Ethical Tech Mastry',
      description: 'Build your ethical tech mastry experience here with our expert instructors.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-violet-900">Technology Trainings </h1>
        <p className="text-gray-600 mt-2">Learn the latest technologies with our expert instructors.</p>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="bg-white p-6 rounded shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">What we offer?</h2>
          <p className="text-gray-700">
            Tech Training offers a variety of courses to help you gain expertise in different technologies. From coding to web development, we offer specialized programs for all age groups, starting as young as 10 years old.
            Whether you are a beginner or an experienced professional, our courses are designed to meet your learning needs.
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
                <p className="text-gray-700">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </main>
    </div>
  );
}

export default TechnologyTraining;
