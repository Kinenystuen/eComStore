import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";
import { Product } from "../../library/types";
import P from "../shared/Typography/P";
import CalcDiscount from "../shared/ui/CalcDiscount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

interface DisplayDataProps {
  data: Product[];
  totalItems?: number;
}

const DisplayData: React.FC<DisplayDataProps> = ({ data, totalItems }) => {
  const { state } = useCartContext();

  return (
    <div>
      {/* Total items */}
      <P className="flex justify-end mx-8">
        {data.length}/{totalItems} products
      </P>
      {/* If 0 products, display this */}
      {data.length === 0 && (
        <div className="flex flex-col justify-center items-center h-96">
          <P className="text-2xl">No products found</P>
        </div>
      )}
      {/* Display products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 md:p-6">
        {data.map((product) => {
          // Check if product is in cart
          const isInCart = state.items.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="bg-white dark:bg-customBgDark-600 shadow-md rounded-lg overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                title={`Go to ${product.title}`}
              >
                <img
                  src={product.image.url}
                  alt={product.image.alt || product.title}
                  className="w-full h-64 object-cover"
                />
              </Link>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                {/* Title */}
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  title={`Go to ${product.title}`}
                  className="flex"
                >
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-whiteFont-200">
                    {product.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="mt-2 text-gray-600 dark:text-whiteFont-600 flex-grow">
                  {product.description}
                </p>

                {/* Prices */}
                <div className="m-1">
                  <div className="flex gap-2">
                    {product.discountedPrice < product.price && (
                      <span className="text-lg font-bold text-green-500 break-words">
                        {product.discountedPrice.toFixed(2)} kr
                      </span>
                    )}
                    {product.discountedPrice < product.price && (
                      <CalcDiscount
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                        className="text-gray-600 dark:text-whiteFont-600 text-center text-sm"
                      />
                    )}
                  </div>
                  <P
                    className={`text-gray-700 dark:text-whiteFont-500 ${
                      product.discountedPrice < product.price &&
                      `line-through dark:text-whiteFont-600 text-sm`
                    }`}
                  >
                    <span
                      className={`text-lg font-bold ${
                        product.discountedPrice < product.price
                          ? "line-through text-gray-700 dark:text-whiteFont-600 text-sm"
                          : "text-gray-900 dark:text-whiteFont-500"
                      } break-words`}
                    >
                      {product.price.toFixed(2)} kr
                    </span>
                  </P>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center mb-2">
                  {product.reviews && product.reviews.length > 0 ? (
                    <>
                      <span className="text-yellow-400 text-lg">★</span>
                      <span className="ml-2 text-gray-700 dark:text-white font-medium">
                        {product.rating}/5
                      </span>
                    </>
                  ) : (
                    <small className="text-gray-700 dark:text-whiteFont-400">
                      No reviews yet
                    </small>
                  )}
                </div>

                <div className="flex justify-between gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    title={`Go to ${product.title}`}
                    className="flex p-2 px-3 button text-center justify-center rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400"
                  >
                    <P className="text-white">View</P>
                  </Link>

                  <div className="flex">
                    {/* Cart Icon | only show if in cart */}
                    <div className="flex items-center justify-end">
                      {isInCart && (
                        <Link
                          to="/cart"
                          className="mx-1 flex items-center"
                          aria-label="Go to cart"
                          title="Go to cart"
                        >
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            style={{
                              fontSize: "1rem",
                              color: "black",
                              padding: "0.7rem"
                            }}
                            className="text-center hover:color-BtnColor-100"
                          />
                        </Link>
                      )}
                    </div>
                    {/* Add to Cart Button Component */}
                    <AddToCartButton
                      productId={product.id}
                      title={product.title}
                      price={product.discountedPrice}
                      image={product.image}
                      className="content-end justify-center items-center "
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayData;
