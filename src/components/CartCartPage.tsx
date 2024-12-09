import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Button from "./shared/Button";
import H1 from "./shared/Typography/H1";
import H2 from "./shared/Typography/H2";
import P from "./shared/Typography/P";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPageDisplay = () => {
  const { state, incrementItem, decrementItem, removeItem, clearCart } =
    useCartContext();

  const totalPrice = state.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="container mx-auto mt-8">
      <H1 className="text-2xl font-bold mb-6">Your Cart</H1>
      {state.items.length === 0 ? (
        <div className="flex flex-col gap-2">
          <P>Your cart is empty.</P>
          <Link to="/" className="">
            <Button className="px-4 py-2 button rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blueGreen dark:hover:bg-blueGreen-400">
              Go Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border dark:border-customBgDark-400 p-2 rounded-lg"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                {/* Details */}
                <div className="flex-1 ml-4">
                  <Link
                    to={`/product/${item.id}`}
                    key={item.id}
                    title={`Go to ${item.title}`}
                  >
                    <H2 className="font-bold ps-0">{item.title}</H2>
                  </Link>
                  <P>Price: ${item.price}</P>
                  <P>Quantity: {item.quantity}</P>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2 flex-wrap">
                  <Button
                    onClick={() => decrementItem(item.id)}
                    className="px-3 py-1 rounded"
                    ariaLabel="Remove one Product(s)"
                    title="Remove one Product(s)"
                  >
                    -
                  </Button>
                  <Button
                    onClick={() => incrementItem(item.id)}
                    className="px-3 py-1 rounded"
                    ariaLabel="Add one Product(s)"
                    title="Add one Product(s)"
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded flex items-center justify-center"
                    ariaLabel="Remove Product(s)"
                    title="Remove Product(s)"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <P className="dark:text-whiteFont-300 font-bold text-lg mt-6">
            Total: ${totalPrice.toFixed(2)}
          </P>
          <div className="flex justify-center mt-6 gap-6">
            <Button
              onClick={clearCart}
              className=" text-white px-4 py-2 rounded"
            >
              Clear Cart
            </Button>
            <Link to="/checkout-success">
              <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-4 py-2 rounded">
                Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPageDisplay;
