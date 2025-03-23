import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import Logo from "@/components/common/logo/Logo";
import NavMenuHeader from "@/components/common/header/NavMenuHeader";
import CustomButton from "@/components/custom/CustomButton";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/works", label: "Work" },
  { path: "/process", label: "Process" },
  { path: "/about", label: "About" },
  { path: "/careers", label: "Careers" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex justify-between items-center py-[20px] border-b border-[var(--color-background)] px-4  ">
      <div className=" lg:w-[28%] flex items-start justify-start ">
        <Logo hide={false} />
      </div>

      <div className="flex flex-row-reverse xl:flex-row items-center xl:justify-between gap-[10px] lg:w-[72%] ">
        <nav className="hidden xl:flex">
          <NavMenuHeader links={navLinks} />
        </nav>

        <button
          className="xl:hidden rounded-[6px] flex justify-center items-center text-2xl p-[6px] focus:outline-none bg-[var(--color-background)]"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu className="text-[#D8FF99]" />
        </button>

        <div
          className={`fixed top-0 left-0 w-[70%] h-full bg-black text-white transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <FiX />
          </button>

          <div className="mt-16 p-6">
            <NavMenuHeader
              links={navLinks}
              closeMenu={() => setIsMenuOpen(false)}
            />
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-0 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <CustomButton
          display="hidden md:flex"
          text="Contact Us"
          textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
          textColor="text-[var(--color-background)]"
        />
      </div>
    </header>
  );
};

export default Header;
