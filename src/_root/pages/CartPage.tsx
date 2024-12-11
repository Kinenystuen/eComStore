import CartPageDisplay from "../../components/CartCartPage";
import CheckoutForm from "../../components/shared/Checkout";
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  const cartQuantity = useCartContext();
  return (
    <>
      <CartPageDisplay />
      {cartQuantity.state.items.length > 0 && <CheckoutForm />}
    </>
  );
};

export default CartPage;
