import { useEffect, useState } from "react";
import { throttle } from "lodash";

const DEFAULT_POSITION_THRESHOLD = 100;

export const useShowBackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > DEFAULT_POSITION_THRESHOLD) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return { showBackToTop };
};
