import { useEffect, useRef } from 'react';

type Options = {
  root?: Element | Document;
  rootMargin?: string;
  threshold?: number;
};

const useIntersectionObserver = (callback: () => void, options?: Options) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (targetRef && targetRef.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target);
              callback();
            }
          });
        },
        { ...options },
      );
      intersectionObserver.observe(targetRef.current);
      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [targetRef, callback, options]);

  return targetRef;
};

export default useIntersectionObserver;
