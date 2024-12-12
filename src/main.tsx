import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.tsx";
import GoToTop from "./components/shared/ui/GoToTop.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter
    basename={import.meta.env.BASE_URL}
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  >
    <StrictMode>
      <CartProvider>
        {/* Go to top of page when changing routes */}
        <GoToTop />
        <App />
      </CartProvider>
    </StrictMode>
  </BrowserRouter>
);
