import { logEvent } from "firebase/analytics";
import { useLocation } from "react-router-dom";
import { analytics } from "../../config/firebase";
import { useEffect } from "react";

function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!analytics) return;

    const path = pathname + search;

    logEvent(analytics, "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}

export default AnalyticsTracker;
