import { useEffect } from "react";

export function useOnScreen(ref: React.MutableRefObject<any>, setPage: React.Dispatch<React.SetStateAction<number>>) {
    useEffect(() => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setTimeout(() => {
            setPage((prev) => prev + 1);
          }, 1000);
        }
      });
      if (ref.current) {
        intersectionObserver.observe(ref.current);
      }
      return () => intersectionObserver.disconnect();
    }, []);
}