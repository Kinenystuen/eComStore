import { useRef } from "react";
import CartPageDisplay from "../../components/CartCartPage";
import CheckoutForm from "../../components/shared/Checkout";
import Breadcrumb from "../../components/shared/ui/BreadCrumItem";
import { useCartContext } from "../../context/CartContext";
import MetaTags from "../../components/shared/metaTags";

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
      const offset = window.innerHeight * 0.1;
      const elementTop =
        checkoutRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      <MetaTags
        title={`Shopping cart - eComStore`}
        keywords="eComStore, products, shopping cart, cart, checkout, shop online"
        description="eComStore shopping cart and checkout!"
      />
      <Breadcrumb
        items={breadcrumbItems}
        className="container max-w-8xl mx-auto px-4"
        goBack={true}
      />
      <CartPageDisplay onProceedToCheckout={scrollToCheckout} />{" "}
      {state.items.length > 0 && (
        <div ref={checkoutRef}>
          <CheckoutForm />
        </div>
      )}
    </div>
  );
};

export default CartPage;
