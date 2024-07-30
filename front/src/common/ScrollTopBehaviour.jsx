import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import GetContext from "../context/GetContext";

export default function ScrollTopBehaviour() {
  const { pathname } = useLocation();
  const { tabIndex } = GetContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, tabIndex]);

  return null;
}
