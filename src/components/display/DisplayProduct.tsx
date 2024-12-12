import { Link, useParams } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Loader from "../shared/ui/Loader";
import AddToCartButton from "../AddToCartButton";
import H1 from "../shared/Typography/H1";
import ModalImage from "../shared/ui/ModalImage";
import { useEffect, useState } from "react";
import Breadcrumb from "../shared/ui/BreadCrumItem";
import CalcDiscount from "../shared/ui/CalcDiscount";
import { Product } from "../../library/types";
import H2 from "../shared/Typography/H2";
import P from "../shared/Typography/P";
import { apiKey } from "../../library/constants";
import ErrorMessage from "../shared/ui/ErrorMessage";
import Button from "../shared/Button";
import { useCartContext } from "../../context/CartContext";
import MetaTags from "../shared/metaTags";

/* Breadcrumb items */
let productName = "Product";
const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: productName, current: true }
];

const DisplayProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: product,
    isLoading,
    isError,
    errorMessage
  } = useApi<Product>(`${apiKey}/online-shop/${id}`);

  useEffect(() => {
    if (product) {
      productName = product.title;
      breadcrumbItems[1].label = product.title;
    }
  }, [product]);

  const { state } = useCartContext();
  const currentItem = state.items.find((item) => item.id === product?.id);
  const quantity = currentItem ? currentItem.quantity : 0;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return (
      <ErrorMessage message="Product not found">
        <P>{errorMessage}</P>
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Continue Shopping</Button>
        </Link>
      </ErrorMessage>
    );
  }
  if (!product)
    return (
      <ErrorMessage message="Product not found">
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Continue Shopping</Button>
        </Link>
      </ErrorMessage>
    );

  /* Handle image click */
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <MetaTags
        title={`${product.title} - eComStore`}
        keywords="eComStore, product, details, shop online"
        description="Explore the details of our products. High-quality and great deals await you!"
      />
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mx-auto max-w-4xl lg:max-w-8xl flex flex-col sm:flex-row gap-4 mt-4">
          <div
            className="sm:flex-1 relative cursor-pointer h-[40vh] sm:h-[60vh] max-h-[30rem]"
            onClick={() => handleImageClick()}
          >
            <img
              src={product.image.url}
              alt={product.image.alt || product.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col flex-1">
            <div className="flex justify-between">
              <div className="flex flex-wrap">
                <H1 className="text-2xl font-bold my-2">{product.title}</H1>
              </div>
              {product.reviews && product.reviews.length > 0 && (
                <div className="m-2 flex justify-center items-center">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="ml-2 text-gray-700 dark:text-white font-medium">
                    {product.rating}/5
                  </span>
                </div>
              )}
            </div>
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {product.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-customBgDark-300 text-gray-700 dark:text-whiteFont-400 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <P className="flex-grow text-gray-700 dark:text-whiteFont-500 ">
              {product.description}
            </P>
            <div className="m-1">
              <div className="flex gap-2">
                {product.discountedPrice < product.price && (
                  <span className="text-lg font-bold text-green-500 break-words">
                    ${product.discountedPrice.toFixed(2)}
                  </span>
                )}
                {product.discountedPrice < product.price && (
                  <CalcDiscount
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    className="text-gray-900 dark:text-whiteFont-600 text-sm"
                  />
                )}
              </div>
              <P
                className={`text-gray-700 dark:text-whiteFont-500 ${product.discountedPrice < product.price && `line-through dark:text-whiteFont-600 text-sm`}`}
              >
                {product.discountedPrice >= product.price ? (
                  <span>${product.price}</span>
                ) : (
                  <span>Original Price: ${product.price}</span>
                )}
              </P>
            </div>
            <div className="flex justify-between lg:justify-start gap-6 mt-2">
              {/* Add to Cart Button Component */}
              <AddToCartButton
                productId={product.id}
                title={product.title}
                price={product.discountedPrice}
                image={product.image}
                className="my-4"
              />

              {/* Show Go to Cart Button if quantity is 1 or more */}
              {quantity > 0 && (
                <Link className="my-2" to="/cart">
                  <Button buttonType="green" className="my-1 px-4 inline-block">
                    Go to Cart
                  </Button>
                </Link>
              )}
            </div>

            <ModalImage
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <div className="relative">
                <div className="flex items-center justify-center">
                  <img
                    src={product.image.url}
                    alt={product.image.alt}
                    className="h-auto max-w-full max-h-[90vh] rounded-sm shadow-md object-contain"
                  />
                  {product.image.alt && (
                    <P className="absolute bottom-[-3rem] text-white bg-black bg-opacity-60 p-2 rounded-sm">
                      {product.image.alt}
                    </P>
                  )}
                </div>
              </div>
            </ModalImage>
          </div>
        </div>
      </div>
      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 ? (
        <div className="bg-customBgDark-200 dark:bg-customBgDark-600 py-4 pb-20 mt-20">
          <div className="mx-auto max-w-4xl flex flex-col gap-4 mt-8 ">
            <H2 className="text-xl font-semibold mb-4">Reviews</H2>
            <ul className="space-y-4">
              {product.reviews.map((review) => (
                <li
                  key={review.id}
                  className="border border-customBgDark-700 rounded-lg p-4 bg-gray-50 dark:bg-customBgDark-500"
                >
                  <P className="text-sm font-semibold">{review.username}</P>
                  <P className="text-yellow-500">{`★`.repeat(review.rating)}</P>
                  <P className="text-gray-700 mt-2">{review.description}</P>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-customBgDark-200 dark:bg-customBgDark-600 py-4 pb-20 mt-20">
          <div className="container mx-auto max-w-4xl flex flex-col gap-4 mt-8">
            <H2 className="text-xl font-semibold mb-4">Reviews</H2>
            <P className="text-gray-500">
              No reviews available for this product.
            </P>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;
