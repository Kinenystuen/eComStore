import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import H1 from "../../components/shared/Typography/H1";
import { useCartContext } from "../../context/CartContext";
import Button from "../../components/shared/Button";
import H2 from "../../components/shared/Typography/H2";
import P from "../../components/shared/Typography/P";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MetaTags from "../../components/shared/metaTags";

const CheckoutSuccessPage: React.FC = () => {
  const { state, clearCart, setOrder, order } = useCartContext();

  // Save the order and clear the cart on page load
  useEffect(() => {
    if (state.items.length > 0) {
      setOrder(state.items);
      clearCart();
    }
  }, [state.items, setOrder, clearCart]);

  return (
    <div className="container mx-auto max-w-2xl text-center flex flex-col items-center justify-center my-16 gap-2">
      <MetaTags
        title={`CheckoutSuccess - eComStore`}
        keywords="eComStore, products, details, shop online, checkout"
        description="eComStore checkout success page!"
      />
      <div className="container max-w-xs sm:max-w-sm md:max-w-2xl">
        <div className="mb-4 rounded-full bg-gray-100 dark:bg-customBgDark-500 w-[8rem] h-[8rem] flex justify-center content-center mx-auto">
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              fontSize: "6rem"
            }}
            className="m-4 sm:text-sm md:text-lg lg:text-2xl text-green-500 dark:text-green-600"
          />
        </div>
        <H1 className="m-auto text-3xl w-fit font-bold mb-6 motion-preset-confetti animate-confetti-loop">
          Checkout Successful!
        </H1>
        <P className="text-gray-700">Thank you for your purchase.</P>
        <P className="text-gray-700 mt-4">
          We appreciate your trust in us. A confirmation email has been sent to
          your inbox with the details of your order.
        </P>
        <P className="text-gray-700">
          If you have any questions, feel free to contact our support team.
        </P>
      </div>

      {/* Continue Shopping Button */}
      <div>
        <Link to="/">
          <Button className="my-8 px-4 inline-block">Continue Shopping</Button>
        </Link>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 dark:bg-customBgDark-600 p-4 rounded-lg shadow-md max-w-xs sm:max-w-lg w-full flex flex-col justify-center">
        <H2 className="text-xl font-bold mb-4">Your Order</H2>
        <ul className="space-y-4">
          {order.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between border-b border-BtnColor-500 pb-2"
            >
              {/* Item Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex flex-col items-start me-6">
                  <P className="font-semibold">{item.title}</P>
                  <P className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </P>
                </div>
              </div>

              {/* Item Price */}
              <P className="font-bold text-gray-800">
                {(item.quantity * item.price).toFixed(2)} kr
              </P>
            </li>
          ))}
        </ul>

        {/* Total Price */}
        <div className="mt-6 border-t pt-4">
          <P className="text-lg font-bold">
            Total:
            {order
              .reduce((total, item) => total + item.quantity * item.price, 0)
              .toFixed(2)}{" "}
            kr
          </P>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
