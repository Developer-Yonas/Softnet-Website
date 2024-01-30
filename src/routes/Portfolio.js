import React, { useState } from 'react';

const Portfolio = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [clickedImageSrc, setClickedImageSrc] = useState('');

  const openImage = (src) => {
    setClickedImageSrc(src);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <div className=' bg-gray-50 pb-10 ml-0 mr-0'>
      <h2 className="text-4xl text-violet-900 font-semibold mb-5 pt-5 ml-10"> Portfolio</h2>
      <section className="text-gray-400 ml-3 mr-3 mb-0 bg-gray-100 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Your other portfolio items... */}

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-64 rounded overflow-hidden" onClick={() => openImage('/images/t1.jpg')}>
                  <img alt="Technology" className="border-1 rounded border-r-8  border-violet-200 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer object-cover object-center w-full h-full block" src="/images/t1.jpg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">TECHNOLOGY TRAINING</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Training Center</h2>
                </div>
              </div>
            </div>
            
            
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-64 rounded overflow-hidden" onClick={() => openImage('/images/in.jpg')}>
                  <img alt="Infrastructure" className="border-1 border-r-8 border-violet-200 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer object-cover object-center w-full h-full block" src="/images/in.jpg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">INFRASTRUCTURE</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Infrastructure </h2>
                </div>
              </div>
            </div>
           

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-64 rounded overflow-hidden" onClick={() => openImage('/images/softt.png')}>
                  <img alt="Outsourcing" className="border-1  border-r-8 border-violet-200 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer object-cover object-center w-full h-full block" src="/images/softt.png" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">INFORMATION TECHNOLOGY OUTSOURCING</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">IT Outsourcing </h2>
                </div>
              </div>
            </div>

 
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a href='https://digitaltimeplc.com/' className="block h-64 rounded overflow-hidden" onClick={() => openImage('/images/logoD.png')}>
                  <img alt="Software development" className="border-1 border-r-8 border-violet-200 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer object-cover object-center w-full h-full block" src="/images/logoD.png" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">SOFTWARE DEVELOPMENT</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">DigitalTime Website</h2>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a href='https://www.softnetsc.com/#' className="block h-64 rounded overflow-hidden" onClick={() => openImage('/images/sow.png')}>
                  <img alt="Software development" className="border-1 border-r-8 border-violet-200  transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer object-cover object-center w-full h-full block" src="/images/sow.png" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-800 text-xs tracking-widest title-font mb-1">SOFTWARE DEVELOPMENT</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Softnet Solutions Website</h2>
                </div>
              </div>
            </div>

            
            
          </div>
          
        </div>
      </section>

      {/* Modal or overlay */}
      {isImageOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75" onClick={closeImage}>
          <img src={clickedImageSrc} alt="Clicked Image" className="max-h-full max-w-full" />
        </div>
      )}
    </div>
  );
}

export default Portfolio;
