"use client";

import { useEffect, useState, useRef, RefObject } from "react";

export type UseInViewOptions = {
  threshold?: number;
  triggerOnce?: boolean;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export function useInView<T extends HTMLElement = any>(
  options: UseInViewOptions = {}
): { ref: RefObject<T | any>; isInView: boolean } {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, { threshold });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, isInView };
}
