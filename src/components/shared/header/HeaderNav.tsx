import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../../library/constants";

import { Bars3Icon } from "@heroicons/react/24/outline";
import CloseBtn from "../CloseBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavLink } from "../../../library/types";

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-3 lg:px-8 lg:bg-white lg:shadow-md"
      >
        {/* Logo Section */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <h1 className="text-lg">eCom store</h1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-8">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <NavLink
                key={link.label}
                to={link.route}
                className={`py-2 px-3 text-sm font-semibold ${
                  isActive
                    ? "text-white bg-blue-500 rounded-lg"
                    : "text-gray-700 hover:bg-gray-100 hover:rounded-lg"
                }`}
              >
                <span className="sr-only">{link.title}</span>
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5 mr-2" />
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/login" className="text-sm font-semibold text-gray-700">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-end p-6">
          <CloseBtn
            action={() => setMobileMenuOpen(false)}
            message="Close menu"
          />
        </div>

        {/* Mobile Navigation Links */}
        <div className="py-6 px-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <NavLink
                key={link.label}
                to={link.route}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-lg text-base font-semibold ${
                  isActive
                    ? "bg-blue-500 text-white hover:text-gray-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="sr-only">{link.title}</span>
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5 mr-2" />
                {link.label}
              </NavLink>
            );
          })}
        </div>

        {/* Mobile Login Button */}
        <div className="py-6 px-6">
          <Link
            to="/login"
            className="block px-3 py-2 text-base font-semibold text-gray-700 hover:bg-gray-10 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
