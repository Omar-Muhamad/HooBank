import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { navLinks } from "../constants";
import { logo } from "../assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="px-16 h-20 flex justify-between items-center">
      <div className="logo w-[124px] h-[32px]">
        <img src={logo} alt="Site logo" className="" />
      </div>
      <div className="flex gap-4">
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
      <div className="flex gap-4 items-center">
        <Button text='Get Started'/>
      </div>
    </nav>
  );
};
export default Navbar;
