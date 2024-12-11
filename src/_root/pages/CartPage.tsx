import CartPageDisplay from "../../components/CartCartPage";
import CheckoutForm from "../../components/shared/Checkout";
import Breadcrumb from "../../components/shared/ui/BreadCrumItem";
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  const cartQuantity = useCartContext();
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart", current: true }
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} className="ms-4" goBack={true} />
      <CartPageDisplay />
      {cartQuantity.state.items.length > 0 && <CheckoutForm />}
    </>
  );
};

export default CartPage;
