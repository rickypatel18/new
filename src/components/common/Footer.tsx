// import React from 'react'

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SocialMedia from "./Media";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/work", label: "Work" },
  { path: "/process", label: "Process" },
  { path: "/about", label: "About" },
  { path: "/careers", label: "Careers" },
  { path: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <div className=" container mx-auto flex flex-row items-center justify-between py-[20px] px-4">
      <Logo />
      <NavMenu links={navLinks}/>
      <SocialMedia/>
    </div>
  );
};

export default Footer;
