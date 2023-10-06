import { useEffect, useRef } from "react";

export const useIsFirstRender = () => {
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
    }
  }, []);

  return {
    isFirstRender: isFirstRenderRef.current,
  };
};
