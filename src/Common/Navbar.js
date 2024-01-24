import React, { useState, useEffect } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import Contac from './Contac';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const handleClick = (index) => {
    toggleDropdown(index);
  };

  const handleMouseEnter = (index) => {
    setDropdownVisible(index);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 ${
        isScrolled ? 'fixed top-0 w-full z-10' : ''
      }`}
    >
      <Contac />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-2 p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src='/images/soft.png' className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-grey rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={() => toggleMenu()}
        >
          <span className="sr-only">Open main menu</span>
          <svg
     className="w-8 h-8 "
     xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    stroke="currentColor"
    >
  {isMenuOpen ? (
    // Close icon when menu is open
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  ) : (
    // Open icon when menu is closed
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  )}
</svg>

        </button>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium items-center p-3 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {MenuItems.map((item, index) => (
              <li key={index}>
                {item.dropdownItems ? (
                  <button
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    onClick={() => handleClick(index)}
                    aria-current={item.title === "Home" ? "page" : null}
                  >
                    {item.title}
                  </button>
                ) : (
                  <a
                    href={item.url}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    aria-current={item.title === "Home" ? "page" : null}
                  >
                    {item.title}
                  </a>
                )}





{item.dropdownItems && (
        <div
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            id={`dropdownNavbarLink${index}`}
            data-dropdown-toggle={`dropdownNavbar${index}`}
            className="flex items-center mt-0 pt-0 w-full font-medium py-3 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            aria-expanded={dropdownVisible === index + 1 ? "true" : "false"}
            aria-controls={`dropdownNavbar${index + 1}`}
          >
            {item.name}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 9l7 7 7-7" />
            </svg>
          </button>
        </div>
      )}
      {item.dropdownItems && (
        <div
          id={`dropdownNavbar${index + 1}`}
          className={`${
            dropdownVisible === index + 1 ? 'block' : 'hidden'
          } absolute mt-2 -ml-4 md:ml-0 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
        >
                    <ul className="py-3 text-sm text-gray-700 dark:text-gray-400">
                      {item.dropdownItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.url}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  