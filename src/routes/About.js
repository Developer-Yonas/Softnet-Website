import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl text-violet-800 font-bold mb-6">About Us</h1>
        <h2 className="text-2xl text-gray-500 font-bold mb-6">Softnet Solutions - Technology Development</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Softnet is a technology firm specializing in comprehensive technology training, tailored software development, and end-to-end technology infrastructure solutions.
        </p>
        
        {/* Image Section */}
        <div className="mb-6">
          <img src="/images/soft.png" alt="Company Office" className="w-auto h-auto rounded-md mr-10" />
        </div>

        <h2 className="text-2xl text-gray-500 font-bold mb-6">Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our mission is to provide creative and innovative technology solutions that effectively address the challenges of our community, while also ensuring that these solutions are scalable and globally applicable.
        </p>

        <h2 className="text-2xl text-gray-500 font-bold mb-6">Vision</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our vision is to be an exceptional and sustainable Ethiopian company that delivers innovative technology solutions that have a significant positive impact on people's lives.
        </p>

        {/* Add more content as needed */}
      </div>
    </div>
  );
}

export default About;
