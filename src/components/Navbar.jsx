import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="px-16 h-[72px] flex justify-between items-center shadow-lg">
      <div className="logo">
        <img src="../assets/logo.png" alt="Site logo" />
      </div>
      <div className="flex gap-10">
        <ul className="nav-links flex gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.title === "Home" ? (
                <NavLink to="/">{link.title}</NavLink>
              ) : (
                <NavLink to={link.id}>{link.title}</NavLink>
              )}
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};
export default Navbar;
