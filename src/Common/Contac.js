import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaTelegram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div className={`contact-infoo flex cursor-pointer mt-0 w-full justify-between items-center px-4 bg-violet-50 ${isTop ? '' : 'hidden'}`}>
      <p className="flex mt-3 mb-4 hover:text-blue-700 text-l text-violet-800 text-l"><FaPhone /> : +251-116-72-4546</p>
      <p className="flex mt-3 mb-4 hover:text-blue-700 text-l text-violet-800 text-l"><FaMapMarkerAlt />: Bole Medaniyalm Morning Star Mall, 3rd floor Office number 316 </p>
      <div className="social-links flex space-x-4">
        <a href="https://www.facebook.com/example" className="social-icon hover:text-blue-700 text-violet-800 text-l text-xl"><FaFacebook /></a>
        <a href="https://www.twitter.com/example" className="social-icon hover:text-blue-700 text-violet-800 text-l text-xl"><FaTwitter /></a>
        <a href="https://www.telegram.com/example" className="social-icon hover:text-blue-700 text-violet-800 text-l text-xl"><FaTelegram /></a>
      </div>
    </div>
  );
};

export default Contac;
