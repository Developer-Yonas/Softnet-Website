import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdSchool, IoIosArrowForward } from 'react-icons/io';
import { FiServer } from 'react-icons/fi';
import { AiOutlineCode } from 'react-icons/ai';
import { FaRegBuilding } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 border rounded shadow-md">
      <h2 className="text-4xl text-violet-900 font-semibold mb-10">Our Services</h2>
      <div className="flex flex-wrap -mx-4 cursor-pointer">
        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <Link to="/services/TechnologyTraining">
            <div className="bg-white p-6 rounded border hover:bg-gray-100 transition duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl text-violet-800 font-semibold mb-2 flex items-center">
                  <IoMdSchool className="mr-3 text-4xl text-blue-500" />
                  Technology Trainings
                </h3>
                <IoIosArrowForward className="text-blue-500 text-3xl" />
              </div>
              <p className="text-gray-700 mt-5 text-lg hover:text-blue-500">
                From coding to Web Development, We offer specialized programs for all age groups, Starting as young as 10 years old
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <Link to="/services/Infrastructure">
            <div className="bg-white p-6 rounded border hover:bg-gray-50 transition duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl text-violet-800 font-semibold mb-2 flex items-center">
                  <FiServer className="mr-3 text-4xl text-blue-500" />
                  Infrastructure Supply and Deployment
                </h3>
                <IoIosArrowForward className="text-blue-500 text-3xl" />
              </div>
              <p className="text-gray-700 mt-5 text-lg hover:text-blue-500">End to end service guaranteeing seamless integration and optimal performance of your technology Infrastructure</p>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <Link to="/services/Softwaredevelopment">
            <div className="bg-white p-6 rounded border hover:bg-gray-300 transition duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl text-violet-800 font-semibold mb-2 flex items-center">
                  <AiOutlineCode className="mr-3 text-4xl text-blue-500" />
                  Software Development
                </h3>
                <IoIosArrowForward className="text-blue-500 text-3xl" />
              </div>
              <p className="text-gray-700 mt-5 text-lg hover:text-blue-500 ">We craft scalable, secure and user-friendly software applications to enhance productivity and streamline your buisness processes.
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-4">
          <Link to="/services/ITO">
            <div className="bg-white p-6 rounded border hover:bg-gray-300 transition duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl text-violet-800 font-semibold mb-2 flex items-center">
                  <FaRegBuilding className="mr-3 text-4xl text-blue-500" />
                  Information Technology Outsourcing (ITO)
                </h3>
                <IoIosArrowForward className="text-blue-500 text-3xl" />
              </div>
              <p className="text-gray-700 mt-5 text-lg hover:text-blue-500">Softnet, your ultimate partner for outsourced services that redefine excellence. Dive into a realm where professionalism</p>
            </div>
          </Link>
        </div>
        {/* Add more service items as needed */}
      </div>
    </div>
  );
}

export default Service;
