import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface CartIconProps {
  itemCount: number;
  link: string;
}

const CartIcon: React.FC<CartIconProps> = ({ itemCount, link }) => {
  return (
    <div className="relative mx-3">
      <Link
        to={link}
        aria-label="Cart icon"
        title="Go to cart"
        className="text-gray-700 hover:text-gray-900"
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{
            fontSize: "1rem"
          }}
          className="sm:text-sm md:text-lg lg:text-2xl dark:text-whiteFont dark:hover:text-whiteFont-600 transition-colors duration-300"
        />

        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs font-bold w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center ">
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
