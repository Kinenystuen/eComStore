import { CloseBtnProps } from "../../library/types";

const CloseBtn: React.FC<CloseBtnProps> = ({ action, message }) => {
  return (
    <button
      onClick={action}
      title="Close"
      className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
    >
      <span className="sr-only">{message}</span>
      <svg
        className="h-6 w-6 transition-transform duration-1000 ease-in-out transform hover:rotate-[180deg]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseBtn;
