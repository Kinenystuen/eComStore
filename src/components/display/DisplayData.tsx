import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton";
import { Product } from "../../library/types";
import P from "../shared/Typography/P";

interface DisplayDataProps {
  data: Product[];
  totalItems?: number;
}

const DisplayData: React.FC<DisplayDataProps> = ({ data, totalItems }) => {
  return (
    <div>
      <P className="flex justify-end">
        {data.length}/{totalItems} products
      </P>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2 md:gap-3 md:p-6">
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
              {/* Tags */}
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-customBgDark-300 text-gray-700 dark:text-whiteFont-400 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-2 text-gray-600 dark:text-whiteFont-600 flex-grow">
                {product.description}
              </p>

              {/* Prices */}
              <div className="mt-4 flex flex-wrap items-baseline gap-2">
                {product.discountedPrice < product.price && (
                  <span className="text-lg font-bold text-green-500 break-words">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                )}
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
                <span className="text-yellow-400 text-lg">★</span>
                <span className="ml-2 text-gray-700 dark:text-whiteFont-600 font-medium">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex justify-between gap-2">
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  title={`Go to ${product.title}`}
                  className="flex p-2 px-3 button text-center justify-center rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400"
                >
                  <P>View</P>
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
