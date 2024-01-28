import PropTypes from "prop-types";

const Button = ({ text }) => (
  <button
    type="button"
    className="py-2 px-4 text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
