import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, navType]);

  // Also scroll to top on initial mount (refresh)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
};

export default ScrollToTop;
