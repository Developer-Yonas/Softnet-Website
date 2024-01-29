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
    <div>
      <h2 className="text-4xl text-violet-900 font-semibold mb-5 mt-10 ml-5"> Portfolio</h2>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* Your other portfolio items... */}

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-48 rounded overflow-hidden" onClick={() => openImage('/images/tr.jpg')}>
                  <img alt="ecommerce" className="cursor-pointer object-cover object-center w-full h-full block" src="/images/tr.jpg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">TECHNOLOGY TRAINING</h3>
                  <h2 className="text-white title-font text-lg font-medium">Training Center</h2>
                </div>
              </div>
            </div>
            
            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-48 rounded overflow-hidden" onClick={() => openImage('/images/infra.jpg')}>
                  <img alt="ecommerce" className="cursor-pointer object-cover object-center w-full h-full block" src="/images/infra.jpg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">INFRASTRUCTURE</h3>
                  <h2 className="text-white title-font text-lg font-medium">The </h2>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-48 rounded overflow-hidden" onClick={() => openImage('/images/digi.png')}>
                  <img alt="ecommerce" className="cursor-pointer object-cover object-center w-full h-full block" src="/images/digi.png" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">SOFTWARE DEVELOPMENT</h3>
                  <h2 className="text-white title-font text-lg font-medium">DigitalTime Website</h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="relative">
                <a className="block h-48 rounded overflow-hidden" onClick={() => openImage('/images/in.jpg')}>
                  <img alt="ecommerce" className="cursor-pointer object-cover object-center w-full h-full block" src="/images/in.jpg" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">INFORMATION TECHNOLOGY OUTSOURCING</h3>
                  <h2 className="text-white title-font text-lg font-medium">Outsourcing </h2>
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
