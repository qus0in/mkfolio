import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);
    }
    setInitialized(true);
  }, []);
  useEffect(() => {
    if (initialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [initialized, location]);
  return null;
};

export default RouteChangeTracker;
