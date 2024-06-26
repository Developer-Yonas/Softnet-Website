import React from "react";

function About() {
  return (
    <div className="bg-gray-50  overflow-x-hidden  min-h-full flex flex-col  justify-center">
      <div className="max-w-7xl mt-0 mx- md:ml-8 sm:ml-0 mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h1 className="text-4xl text-violet-900 font-semibold mb-6">About Us</h1>
         {/* Image Section */}
         <div className="mb-6">
          <img src="/images/soft.png" alt="Company Office" className="w-auto pl-96 h-28 rounded-md " />
        </div>
        <h2 className="text-2xl text-gray-500 font-bold mb-6">Softnet Solutions </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Softnet is a technology firm specializing in comprehensive technology training, tailored<br/> software development, and end-to-end technology infrastructure solutions.
        </p>
        
       

        <h2 className="text-2xl text-gray-500 font-bold mb-6">Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to provide creative and innovative technology solutions that effectively address the challenges of our community, while also ensuring <br/> that these solutions are scalable and globally applicable.
        </p>

        <h2 className="text-2xl text-gray-500 font-bold mb-6">Vision</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our vision is to be an exceptional and sustainable Ethiopian company that delivers innovative technology solutions that have a significant <br/> positive impact on people's lives.
        </p>

        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default About;
