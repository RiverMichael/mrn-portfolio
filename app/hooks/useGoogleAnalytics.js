import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const useGoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    handleRouteChange(pathname); // Track the initial page load

    // Subscribe to pathname changes
    const handlePathChange = () => handleRouteChange(pathname);

    window.addEventListener("pathnameChange", handlePathChange);

    return () => {
      window.removeEventListener("pathnameChange", handlePathChange);
    };
  }, [pathname]);
};
