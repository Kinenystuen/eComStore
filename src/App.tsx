import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Contact from "./_root/pages/Contact";
import ProductPage from "./_root/pages/ProductPage";
import CartPage from "./_root/pages/CartPage";
import CheckoutSuccessPage from "./_root/pages/CheckoutSuccessPage";
import PageNotFound from "./_root/pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
