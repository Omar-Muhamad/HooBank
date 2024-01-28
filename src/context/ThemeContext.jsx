import { createContext } from "react";
import PropTypes from 'prop-types';

export const ThemeContext = createContext("");

const Theme = ({ children }) => {
  const initialValue = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches === true
      ? "dark"
      : "light";

      console.log(initialValue())

  return (
    <ThemeContext.Provider value={initialValue()}>
      {children}
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme;
