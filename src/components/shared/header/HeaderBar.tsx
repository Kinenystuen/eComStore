import { useCartContext } from "../../../context/CartContext";
import HeaderNav from "./HeaderNav";

const HeaderBar = () => {
  const { state } = useCartContext();
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <HeaderNav cartItemCount={itemCount} />
    </header>
  );
};

export default HeaderBar;
