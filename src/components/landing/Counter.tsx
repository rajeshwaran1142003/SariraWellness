"use client";

import { useEffect, useState, useRef } from 'react';

type CounterProps = {
  target: number;
  className?: string;
};

export function Counter({ target, className }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min(1, (currentTime - startTime) / duration);
      const currentCount = Math.floor(progress * (target - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, isMounted]);
  
  const displayValue = () => {
    if (!isMounted) return 0; // Render initial value on server
    const displayCount = count;
    return displayCount >= 1000 ? `${(displayCount/1000).toFixed(0)}k+` : displayCount;
  }

  return (
    <div ref={ref} className={className}>
      {displayValue()}
    </div>
  );
}
