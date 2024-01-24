import React from 'react';
import { NavLink } from 'react-router-dom';

export const MenuItems = [
  
  { title: "Home", url: "/", cName: "nav-links" },
  { title: "About", url: "/about", cName: "nav-links" },
  {
    name: "Services",
    cName: "nav-links",
    dropdownItems: [
      { title: "Service 1", url: "/services/service", cName: "nav-links" },
      { title: "Service 2", url: "/services/service2", cName: "nav-links" },
      { title: "Service 3", url: "/services/service3", cName: "nav-links" },
    ],
    render: () => (
      <ul className="py-3 text-sm text-gray-700 dark:text-gray-400">
        {[
          
          { title: "Service 1", url: "/services/service" },
          { title: "Service 2", url: "/services/service2" },
          { title: "Service 3", url: "/services/service3" },
        ].map((subItem, subIndex) => (
          <li key={subIndex}>
            <NavLink
  to={subItem.url}
  className="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 hover:text-blue-500"
  activeClassName="active"
  exact
>
  {subItem.title}
</NavLink>

          </li>
        ))}
      </ul>
    ),
  },
  { title: "Portfolio", url: "/portfolio", cName: "nav-links" },
  { title: "Contact Us", url: "/contact", cName: "nav-links" },
];
