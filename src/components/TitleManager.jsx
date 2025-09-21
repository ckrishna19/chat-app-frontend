import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const TitleManager = () => {
  const location = useLocation();

  const pathname =
    location?.pathname?.split("/")[1] === ""
      ? "home"
      : location?.pathname?.split("/")[1];

  useEffect(() => {
    document.title =
      "Messaging" +
      " " +
      pathname.charAt(0).toUpperCase() +
      pathname?.slice(1).toLowerCase();
  }, [pathname]);
};

export default TitleManager;
