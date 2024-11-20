import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Contact from "./_root/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<div>Product id</div>} />
          <Route path="cart" element={<div>Cart</div>} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>Route not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
