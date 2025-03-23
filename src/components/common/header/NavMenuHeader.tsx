import { NavLink } from "react-router-dom";
import "../../../App.css";

interface NavLinkItem {
  path: string;
  label: string;
}

interface NavMenuProps {
  links: NavLinkItem[];
  closeMenu?: () => void;
}

const NavMenuHeader = ({ links, closeMenu }: NavMenuProps) => {
  return (
    <nav>
      <ul className="flex flex-col xl:flex-row">
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `block py-[10px] px-[13px] md:py-[12px] md:px-[18px] lg:py-[12px] lg:px-[23px] xl:py-[14px] xl:px-[28px] rounded-[8px] nav-text text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[500] hover:text-primary transition ${
                  isActive ? "bg-[var(--color-background)] nav-hover-text" : ""
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

export default NavMenuHeader;
