import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Button from "./shared/Button";
import H1 from "./shared/Typography/H1";
import H2 from "./shared/Typography/H2";
import P from "./shared/Typography/P";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPageDisplay = ({
  onProceedToCheckout
}: {
  onProceedToCheckout: () => void;
}) => {
  const { state, incrementItem, decrementItem, removeItem, clearCart } =
    useCartContext();

  const totalPrice = state.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="container flex flex-col min-h-[50vh] mx-auto px-4 sm:px-6 mt-8 sm:my-20 sm:mt-10 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <H1 className="text-2xl font-bold">Your cart</H1>
        {/* Clear cart button */}
        {state.items.length > 0 && (
          <Button
            onClick={clearCart}
            className="text-white text-sm px-4 rounded"
          >
            Clear cart
          </Button>
        )}
      </div>
      {state.items.length === 0 ? (
        <div className="flex flex-col gap-2">
          <P>Your cart is empty.</P>
          <Link to="/" className="">
            <Button buttonType="blue" className="px-4 py-2 button rounded">
              Go Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex-grow  space-y-4 ">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap xs:flex-nowrap items-center justify-between border dark:border-customBgDark-400 p-2 rounded-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-fill object-cover rounded-lg"
                />

                {/* Details */}
                <div className="flex-grow flex-col flex flex-wrap ml-4">
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    title={`Go to ${item.title}`}
                  >
                    <H2 className="text-base text-wrap sm:font-bold ps-0">
                      {item.title}
                    </H2>
                  </Link>
                  <P>Price: {item.price} kr</P>
                  <P>Quantity: {item.quantity}</P>
                </div>

                {/* Actions */}
                <div className="flex items-end justify-end ms-2 gap-4 flex-wrap flex-col">
                  <div className="flex justify-center m-2">
                    <Button
                      onClick={() => removeItem(item.id)}
                      className="px-[0.6rem] py-2 rounded flex items-center justify-center"
                      buttonType="red"
                      ariaLabel="Remove Product(s)"
                      title="Remove Product(s)"
                    >
                      <FontAwesomeIcon icon={faTrash} width={12} />
                    </Button>
                  </div>
                  <div className="flex gap-2 m-2">
                    <Button
                      onClick={() => decrementItem(item.id)}
                      className="px-3 py-1 rounded"
                      ariaLabel="Remove one Product(s)"
                      title="Remove one Product(s)"
                    >
                      -
                    </Button>
                    <P className="hidden md:flex items-center">
                      {item.quantity}
                    </P>
                    <Button
                      onClick={() => incrementItem(item.id)}
                      className="px-3 py-1 rounded"
                      ariaLabel="Add one Product(s)"
                      title="Add one Product(s)"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-end content-end items-end mt-20">
            <P className="dark:text-whiteFont-300 font-bold text-lg mt-6">
              Total: {totalPrice.toFixed(2)} kr
            </P>
            <div className="flex justify-between gap-2 my-4  text-sm sm:text-md">
              <Button buttonType="blue" ariaLabel="continue shopping">
                <Link to="/">Continue shopping</Link>
              </Button>
              <Button
                buttonType="green"
                ariaLabel="Proceed to checkout"
                onClick={onProceedToCheckout}
              >
                Proceed to checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPageDisplay;
