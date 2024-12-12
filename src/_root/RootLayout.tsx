import { Outlet } from "react-router-dom";
import HeaderBar from "../components/shared/header/HeaderBar";
import FooterBar from "../components/shared/FooterBar";
import GoToTop from "../components/shared/ui/GoToTop";

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component. This is how we can nest routes

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Go to top of page when changing routes */}
      <GoToTop />
      {/* Header */}
      <HeaderBar />

      {/* Main Section */}
      <main className="w-full flex-grow mt-14 lg:mt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <FooterBar />
    </div>
  );
};

export default RootLayout;
