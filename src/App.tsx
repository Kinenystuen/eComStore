import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Contact from "./_root/pages/Contact";
import ProductPage from "./_root/pages/ProductPage";
import CartPage from "./_root/pages/CartPage";

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
          <Route
            path="checkout-success"
            element={<div>Checkout-page is coming</div>}
          />
          <Route path="*" element={<div>Site not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
