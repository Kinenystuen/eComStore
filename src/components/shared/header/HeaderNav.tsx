import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { headerNavLinks } from "../../../library/constants";

import { Bars3Icon } from "@heroicons/react/24/outline";
import CloseBtn from "../CloseBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavLink } from "../../../library/types";
import CartIcon from "./CartIcon";
import ThemeToggle from "../../ThemeToggle";
import Button from "../Button";
import H1 from "../Typography/H1";

const HeaderNav = ({ cartItemCount }: { cartItemCount: number }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-3 mt-0 lg:bg-customBg dark:bg-customBgDark lg:shadow-md"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <H1 className="text-lg">eCom store</H1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-2  mx-2">
          {headerNavLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <NavLink
                key={link.label}
                to={link.route}
                className={`py-2 px-3 text-sm font-semibold ${
                  isActive
                    ? "bg-blue-500 text-white hover:text-gray-800 dark:bg-customBgDark-400 dark:text-gray-100 dark:hover:text-white rounded-lg"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-customBgDark-400 hover:rounded-lg"
                }`}
              >
                <span className="sr-only">{link.title}</span>
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5 mr-2" />
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobilmeny-knapp og CartIcon */}
        <div className="flex items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          {/* Theme Toggle */}
          <div>
            <ThemeToggle />
          </div>
          {/* Cart Icon */}
          <div className="flex items-center">
            <CartIcon itemCount={cartItemCount} />
          </div>

          {/* Mobile menu-btn */}
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block lg:hidden -m-2 p-2 text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 focus:outline-none"
          >
            <Bars3Icon className="h-6 w-6" />
            <span className="sr-only">Open main menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-white dark:bg-customBgDark-500 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-end p-2">
          <CloseBtn
            action={() => setMobileMenuOpen(false)}
            message="Close menu"
          />
        </div>

        {/* Mobile Navigation Links */}
        <div className="py-0 px-6 mb-">
          {headerNavLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <NavLink
                key={link.label}
                to={link.route}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-lg text-base font-semibold ${
                  isActive
                    ? "bg-blue-500 text-white hover:text-gray-800 dark:text-whiteFont-500 dark:hover:text-whiteFont-100"
                    : "text-gray-700 hover:bg-gray-100 dark:text-whiteFont-600 dark:hover:text-white dark:hover:bg-customBgDark-400"
                }`}
              >
                <span className="sr-only">{link.title}</span>
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5 mr-2" />
                {link.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
