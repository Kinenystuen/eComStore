import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface DropdownProps {
  label: string;
  items: { label: string; href?: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Detect click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-2 py-1 text-sm font-normal rounded-sm focus:ring-1 focus:outline-none focus:ring-gray-100 button bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400"
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow w-44 dark:bg-BtnColor">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {items.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => {
                    if (item.href) {
                      navigate(item.href);
                    }
                    setIsOpen(false);
                  }}
                  className="w-full text-left block px-4 py-2 bg-white"
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
