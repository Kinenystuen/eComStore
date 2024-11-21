import { Outlet } from "react-router-dom";
import HeaderBar from "../components/shared/header/HeaderBar";
import FooterBar from "../components/shared/FooterBar";

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component. This is how we can nest routes

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <HeaderBar />

      {/* Main Section */}
      <section className="container mx-auto px-4 mb-8 flex-grow mt-14 lg:mt-20">
        <Outlet />
      </section>

      {/* Footer */}
      <FooterBar />
    </div>
  );
};

export default RootLayout;
