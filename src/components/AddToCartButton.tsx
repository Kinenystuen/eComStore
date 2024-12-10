import React from "react";
import { useCartContext } from "../context/CartContext";
import Button from "./shared/Button";

interface AddToCartButtonProps {
  productId: string;
  title: string;
  price: number;
  image: { url: string; alt?: string };
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  title,
  price,
  image,
  className
}) => {
  const { state, addItem, incrementItem, decrementItem, removeItem } =
    useCartContext();

  const currentItem = state.items.find((item) => item.id === productId);
  const quantity = currentItem ? currentItem.quantity : 0;

  const handleAddToCart = () => {
    addItem({ id: productId, title, price, image: image.url });
  };

  const handleIncrement = () => {
    incrementItem(productId);
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      removeItem(productId);
    } else {
      decrementItem(productId);
    }
  };

  return (
    <div className={`flex gap-4 relative ${className}`}>
      {quantity === 0 ? (
        // Show "Add to Cart" button when quantity is 0
        <Button onClick={handleAddToCart} className="px-4 py-2">
          Add to Cart
        </Button>
      ) : (
        // Show - and + buttons with the quantity
        <div className="flex items-center gap-2">
          <Button onClick={handleDecrement} className="px-3 py-2">
            -
          </Button>
          <span className="text-lg font-bold text-gray-700 dark:text-whiteFont-600">
            {quantity}
          </span>
          <Button onClick={handleIncrement} className="px-3 py-2 ">
            +
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
