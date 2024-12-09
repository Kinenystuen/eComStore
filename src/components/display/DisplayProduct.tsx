import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Loader from "../shared/ui/Loader";
import AddToCartButton from "../AddToCartButton";
import H1 from "../shared/Typography/H1";
import ModalImage from "../shared/ui/ModalImage";
import { useState } from "react";
import Breadcrumb from "../shared/ui/BreadCrumItem";
import CalcDiscount from "../shared/ui/CalcDiscount";
import { Product } from "../../library/types";
import H2 from "../shared/Typography/H2";
import P from "../shared/Typography/P";

/* Breadcrumb items */
const breadcrumbItems = [{ label: "Home", href: "/" }];

const DisplayProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: product,
    isLoading,
    isError
  } = useApi<Product>(`https://v2.api.noroff.dev/online-shop/${id}`);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) return <div>Error loading product details.</div>;
  if (!product) return <div>No product details available.</div>;

  /* Handle image click */
  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container pt-0 ">
      <Breadcrumb items={breadcrumbItems} />
      <div className=" mx-auto max-w-3xl flex flex-col sm:flex-row gap-4 mt-4">
        <div
          className="sm:flex-1 relative cursor-pointer h-[40vh] sm:h-[60vh]"
          onClick={() => handleImageClick()}
        >
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <H1 className="text-2xl font-bold my-4">{product.title}</H1>
          <p className="text-gray-700 dark:text-whiteFont-500 ">
            {product.description}
          </p>
          <div className="m-2">
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
                <div>Original Price: ${product.price}</div>
              )}
            </P>
          </div>
          {/* Add to Cart Button Component */}
          <AddToCartButton
            productId={product.id}
            title={product.title}
            price={product.discountedPrice}
            image={product.image}
            className="m-2"
          />

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
      {/* Reviews */}
      {product.reviews && product.reviews.length > 0 ? (
        <div className="mx-auto max-w-3xl flex flex-col gap-4 mt-8">
          <H2 className="text-xl font-semibold mb-4">Reviews</H2>
          <ul className="space-y-4">
            {product.reviews.map((review) => (
              <li
                key={review.id}
                className="border border-customBgDark-600 rounded-lg p-4 bg-gray-50 dark:bg-customBgDark-600"
              >
                <P className="text-sm font-semibold">{review.username}</P>
                <P className="text-yellow-500">{`★`.repeat(review.rating)}</P>
                <P className="text-gray-700 mt-2">{review.description}</P>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl flex flex-col gap-4 mt-8">
          <H2 className="text-xl font-semibold mb-4">Reviews</H2>
          <P className="text-gray-500">
            No reviews available for this product.
          </P>
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;
