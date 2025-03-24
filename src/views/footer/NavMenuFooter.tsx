import { NavLink } from "react-router-dom";
import "../../App.css"

interface NavLinkItem {
  path: string;
  label: string;
}

interface NavMenuProps {
  links: NavLinkItem[];
  closeMenu?: () => void;
}

const NavMenuFooter = ({ links, closeMenu }: NavMenuProps) => {
  return (
    <nav className=" ">
      <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-5 lg:gap-6 xl:gap-7 h-[68px] lg:h-[24px] xl:h-[27px] w-full lg:w-[490px] xl:w-[574px] ">
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                ` rounded-[8px] nav-text text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[500] hover:text-primary transition ${
                  isActive ? "underline nav-hover-text" : "hover:underline"
                }`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenuFooter;
