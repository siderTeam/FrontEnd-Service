import { useEffect, useRef } from 'react';

export const useObserver = (navName: string, setNavName: React.Dispatch<React.SetStateAction<string>>) => {
  const options = { threshold: 0.7, rootMargin: '0px 0px -30% 0px' };
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setNavName(navName);
      }
    }, options);

    if (refElement.current) {
      observer.observe(refElement.current);
    }

    return () => observer.disconnect();
  }, []);

  return refElement;
};
