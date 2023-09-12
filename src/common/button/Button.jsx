import  "./Button.css";

const Button = ({
  icon,
  title,
  customClass,
  handleClick,
  iconCustomClass,
  titleCustomClass,
  type,
  handleMouseEnter,
  handleMouseLeave,
  loader,
  disabled,
  customClassLoader
}) => {
  return (
    <button
      disabled={disabled}
      className="button_pagination"
      onClick={() => handleClick ? handleClick() : {}}
      onMouseEnter={() => {
        handleMouseEnter && handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave && handleMouseLeave();
      }}
      type={type}
    >
          <span className={iconCustomClass}>{icon}</span>
          <span className={titleCustomClass}>{title}</span>
    </button>
  );
};

export default Button;
