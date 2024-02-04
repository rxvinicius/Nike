import PropTypes from "prop-types";

const Button = ({ label, iconUrl, alt }) => (
  <button
    className={`
      flex flex-row justify-center items-center gap-2 px-7 py-4 border
      font-montserrat text-lg leading-none bg-coral-red border-coral-red rounded-full text-white
    `}
  >
    {label}
    <img src={iconUrl} alt={alt} className="ml-2 rounded-full w-5 h-5" />
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Button;
