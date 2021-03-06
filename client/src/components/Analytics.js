import React, { useEffect } from "react";
import ReactGA from "react-ga";
import FullStory from "react-fullstory";
import FacebookPixel from "react-facebook-pixel";

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    FacebookPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL_ID);
    FacebookPixel.pageView();
  }, []);

  return <FullStory org={process.env.REACT_APP_FULLSTORY_ORG_ID} />;
};

const NoAnalytics = () => {
  return null;
};

export default process.env.NODE_ENV === "development" ? NoAnalytics : Analytics;
