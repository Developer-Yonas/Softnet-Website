import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdSchool } from 'react-icons/io';
import { FiServer } from 'react-icons/fi';
import { AiOutlineCode } from 'react-icons/ai';
import { FaRegBuilding } from 'react-icons/fa';

export const MenuItems = [
  { title: 'Home', url: '/', cName: 'nav-links' },
  { title: 'About', url: '/about', cName: 'nav-links' },
  {
    name: 'Services',
    cName: 'nav-links',
    dropdownItems: [
      { title: 'Technology Training', url: '/services/TechnologyTraining', cName: 'nav-links', icon: <IoMdSchool className="mr-0 text-xl text-blue-500" /> },
      { title: 'Infrastructure', url: '/services/Infrastructure', cName: 'nav-links', icon:<FiServer className="mr-0 text-xl text-blue-500" /> },
      { title: 'Software Development', url: '/services/Softwaredevelopment', cName: 'nav-links', icon: <AiOutlineCode className="mr-0 text-xl text-blue-500" /> },
      { title: 'Information Technology Outsourcing(ITO)', url: '/services/ITO', cName: 'nav-links', icon:  <FaRegBuilding className="mr-0 text-xl text-blue-500"/> },
    ],
    render: () => (
      <ul className="py-3 text-sm text-gray-700 dark:text-gray-400">
        {MenuItems[2].dropdownItems.map((subItem, subIndex) => (
          <li key={subIndex}>
            <NavLink
              to={subItem.url}
              className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 hover:text-blue-500"
              activeClassName="text-blue-500 bg-white"  // Change this to the appropriate class name for active styles
              exact
            >
              {subItem.icon} {subItem.title}
            </NavLink>
          </li>
        ))}
      </ul>
    ),
  },
  { title: 'Portfolio', url: '/portfolio', cName: 'nav-links' },
  { title: 'Contact Us', url: '/contact', cName: 'nav-links' },
];
