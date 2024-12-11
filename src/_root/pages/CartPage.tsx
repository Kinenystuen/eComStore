import { useRef } from "react";
import CartPageDisplay from "../../components/CartCartPage";
import CheckoutForm from "../../components/shared/Checkout";
import Breadcrumb from "../../components/shared/ui/BreadCrumItem";
import { useCartContext } from "../../context/CartContext";

const CartPage = () => {
  const { state } = useCartContext();
  const checkoutRef = useRef<HTMLDivElement | null>(null);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", current: true }
  ];

  // Roll down to checkout form
  const scrollToCheckout = () => {
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumb items={breadcrumbItems} className="ms-4" goBack={true} />
      <CartPageDisplay onProceedToCheckout={scrollToCheckout} />{" "}
      {state.items.length > 0 && (
        <div ref={checkoutRef}>
          <CheckoutForm />
        </div>
      )}
    </>
  );
};

export default CartPage;
