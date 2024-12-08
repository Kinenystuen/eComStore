import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/UseApi";
import Loader from "../shared/ui/Loader";
import AddToCartButton from "../AddToCartButton";
import H1 from "../shared/Typography/H1";
import ModalImage from "../shared/ui/ModalImage";
import { useState } from "react";
import Breadcrumb from "../shared/ui/BreadCrumItem";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
}

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
            <p className="text-lg font-bold text-green-500">
              Price: ${product.discountedPrice}
            </p>
            <p className="line-through text-gray-700 dark:text-whiteFont-600 text-sm">
              Original Price: ${product.price}
            </p>
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
                  <p className="absolute bottom-[-3rem] text-white bg-black bg-opacity-60 p-2 rounded-sm">
                    {product.image.alt}
                  </p>
                )}
              </div>
            </div>
          </ModalImage>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
