import { ButtonProps } from "../../library/types";

function Button({
  onClick,
  children,
  className,
  title,
  ariaLabel,
  buttonType
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className={`button rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400 ${buttonType === "green" ? "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white" : ""}  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
