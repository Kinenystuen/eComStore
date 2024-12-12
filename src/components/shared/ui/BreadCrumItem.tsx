import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";
import Button from "../Button";
import GoBackBtn from "./GoBackBtn";

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href?: string }[];
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  goBack?: boolean;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  goBack,
  className
}) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`my-2 flex px-1 py-1 gap-4 ${className}`}>
      {goBack && (
        <div>
          <GoBackBtn />
          <span className="sr-only">Go back</span>
        </div>
      )}
      <nav className="flex  text-gray-700" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-1 rtl:space-x-reverse">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="inline-flex items-center">
                {item.isDropdown && item.dropdownItems ? (
                  <Dropdown
                    label={item.label}
                    items={item.dropdownItems.map((dropdownItem) => ({
                      ...dropdownItem,
                      onClick: () => handleNavigate(dropdownItem.href!)
                    }))}
                  />
                ) : item.href && !item.current ? (
                  <Button
                    onClick={() => handleNavigate(item.href!)}
                    className="inline-flex items-center text-sm p-[0.3rem] bg-customBg dark:bg-transparent text-BtnColor-700 hover:text-BtnColor-800 hover:bg-gray-500 dark:text-gray-400 dark:hover:text-white"
                  >
                    {index === 0 && (
                      <FontAwesomeIcon
                        icon={faHome}
                        className="w-3 h-3 me-2.5 m-0.5 "
                        aria-hidden="true"
                      />
                    )}
                    {item.label}
                  </Button>
                ) : (
                  <span
                    className={`ms-1 text-sm font-medium ${
                      item.current
                        ? "text-gray-500"
                        : "text-gray-700 hover:text-customGreen-800 dark:text-gray-400 dark:hover:text-white"
                    } md:ms-2`}
                  >
                    {item.label}
                  </span>
                )}
              </li>

              {index < items.length - 1 && (
                <li className="flex items-center">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="block w-3 h-3 mx-1 text-gray-400"
                    aria-hidden="true"
                  />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
