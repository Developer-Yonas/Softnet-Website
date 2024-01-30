import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaTelegram, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram } from 'react-icons/fa';

import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Contac = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`contact-infoo hidden md:flex-row cursor-pointer mt-0 w-auto justify-between items-center px-4 md:flex sm:hidden bg-white ${isTop ? '' : 'md:hidden sm:hidden'}`}>
      <p className="flex mt-2 mb-0 hover:text-violet-700  text-blue-500 text-base sm:text-sm md:text-lg  md:mr-4 md:mb-0"><FaPhone /> :+251(0)15 57 86 57</p>
      <p className="flex mt-2 mb-0 hover:text-violet-700  text-blue-500 text-base sm:text-sm md:text-lg "><FaMapMarkerAlt />: Mexico , Shewa Bakery Bldg. 4th Floor - Infront of K Kare Center
Addis Ababa , Ethiopia </p>
      <div className="social-links flex mt-2 md:mt-0 space-x-2">
        <a href="https://www.facebook.com/example" className="social-icon hover:text-violet-700 text-blue-500 text-l text-xl"><FaFacebook /></a>
        <a href="https://www.twitter.com/example" className="social-icon hover:text-violet-700 text-grey-700 text-l text-xl"><FaTwitter /></a>
        <a href="https://www.telegram.com/example" className="social-icon hover:text-violet-700 text-blue-500 text-l text-xl"><FaTelegram /></a>
        <a href="https://www.linkedin.com/company/softnet-sc/mycompany/" className="social-icon hover:text-violet-700 text-blue-600 text-l text-xl"><FaLinkedin /></a>
        <a href="https://www.telegram.com/example" className="social-icon hover:text-violet-700 text-red-500 text-l text-xl"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default Contac;
