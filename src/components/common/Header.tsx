import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
import Logo from "@/components/common/Logo";
import NavMenu from "@/components/common/NavMenu";
import CustomButton from "@/components/custom/CustomButton";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/work", label: "Work" },
  { path: "/process", label: "Process" },
  { path: "/about", label: "About" },
  { path: "/careers", label: "Careers" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto flex justify-between items-center py-[20px] px-4">
      <div className="w-fit lg:w-[25%]">
        <Logo hide={false} />
      </div>

      <div className="flex flex-row-reverse xl:flex-row xl:justify-between gap-[10px] w-[75%]">
        <nav className="hidden xl:flex">
          <NavMenu links={navLinks} />
        </nav>

        <button
          className="xl:hidden text-3xl px-[8px] focus:outline-none bg-[var(--color-background)]"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu className="text-[#D8FF99]" />
        </button>

        <div
          className={`fixed top-0 left-0 w-[70%] h-full bg-black text-white shadow-lg transform transition-transform duration-300 ${
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
            <NavMenu links={navLinks} closeMenu={() => setIsMenuOpen(false)} />
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <CustomButton
          text="Contact Us"
          textSize="text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px]"
          textColor="text-[var(--color-background)]"
        />
      </div>
    </header>
  );
};

export default Header;
