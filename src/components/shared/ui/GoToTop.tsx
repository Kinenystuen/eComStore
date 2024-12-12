import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Go to top when changing routes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default GoToTop;
