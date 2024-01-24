export const MenuItems = [
  { title: "Home", url: "/", cName: "nav-links" },
  { title: "About", url: "/about", cName: "nav-links" },
  {

    // url: "/services",
    name: "Services",
    cName: "nav-links",
    dropdownItems: [
      { title: "Service 1", url: "/services/service1" },
      { title: "Service 2", url: "/services/service2" },
      { title: "Service 3", url: "/services/service3" },
    ],
  },
  { title: "Portfolio", url: "/portfolio", cName: "nav-links" },
  { title: "Contact Us", url: "/contact", cName: "nav-links" },
];
