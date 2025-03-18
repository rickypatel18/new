// import React from 'react'

import Logo from "./Logo";
import NavMenuFooter from "./NavMenuFooter";
import Media from "./Media";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="border-t border-[var(--color-background)] py-[30px] gap-[50px] flex flex-col justify-center items-center">
      <div className=" container mx-auto gap-[10px] lg:gap-[22px] xl:gap-[30px] flex flex-col lg:flex-row items-center justify-between ">
        <Logo />
        <NavMenuFooter links={navLinks} />
        <Media />
      </div>

      <div className="flex container border-b border-[var(--color-background)] w-[338px] lg:w-[100%]"></div>
      <div className=" container w-[338px] lg:w-[100%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[20px] lg:gap-[0px] ">
        <div className="gap-[0px] lg:gap-[30px] flex flex-col lg:flex-row ">
          <div className="border-b border-[var(--color-background)] flex justify-center items-center py-[20px] lg:py-[0px] gap-[10px]">
            <IoMdMail className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
            <p>hello@squareup.com</p>
          </div>
          <div className="border-b border-[var(--color-background)] flex justify-center items-center py-[20px] lg:py-[0px] gap-[10px]">
            <FaPhoneAlt className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
            <p>+91 91813 23 2309</p>
          </div>
          <div className="border-b border-[var(--color-background)] flex justify-center items-center py-[20px] lg:py-[0px] gap-[10px]">
            <FaLocationDot className="h-[24px] w-[24px] lg:h-[22px] lg:w-[22px] xl:h-[24px] xl:w-[24px] text-[var(--color-primary)] " />
            <p>Somewhere in the World</p>
          </div>
        </div>
        <div className="text-[var(--color-text-gray)]  ">
          © 2023 SquareUp. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
