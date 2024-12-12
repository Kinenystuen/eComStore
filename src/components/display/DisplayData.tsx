import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";
import { Product } from "../../library/types";
import P from "../shared/Typography/P";
import CalcDiscount from "../shared/ui/CalcDiscount";

interface DisplayDataProps {
  data: Product[];
  totalItems?: number;
}

const DisplayData: React.FC<DisplayDataProps> = ({ data, totalItems }) => {
  return (
    <div>
      <P className="flex justify-end mx-8">
        {data.length}/{totalItems} products
      </P>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-2 md:p-6">
        {data.map((product) => (
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
              {product.discountedPrice < product.price && (
                <CalcDiscount
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                  className="text-gray-900 dark:text-whiteFont-600 text-sm mt-4"
                />
              )}
              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <div className="flex flex-col gap-2">
                  {product.discountedPrice < product.price && (
                    <span className="text-lg font-bold text-green-500 break-words">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <span
                  className={`text-lg font-bold ${
                    product.discountedPrice < product.price
                      ? "line-through text-gray-700 dark:text-whiteFont-600 text-sm"
                      : "text-gray-900 dark:text-whiteFont-500"
                  } break-words`}
                >
                  ${product.price.toFixed(2)}
                </span>
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
                {/* Add to Cart Button Component */}
                <AddToCartButton
                  productId={product.id}
                  title={product.title}
                  price={product.discountedPrice}
                  image={product.image}
                  className="content-end justify-center items-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
