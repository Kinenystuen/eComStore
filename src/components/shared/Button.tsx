import { ButtonProps } from "../../library/types";

function Button({
  ButtonType,
  onClick,
  children,
  className,
  title,
  ariaLabel
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className={`button rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
