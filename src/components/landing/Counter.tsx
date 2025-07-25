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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    let start = 0;
    const duration = 2000;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
        if(!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / duration);
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
    if (!isMounted) return 0;
    const displayCount = count;
    if (target >= 1000) {
      const value = isInView ? displayCount : target;
      return value >= 1000 ? `${(value/1000).toFixed(0)}k+` : displayCount
    }
    return isInView ? displayCount : target;
  }
  
  const initialDisplay = () => {
    if(target >= 1000) return `${(target/1000).toFixed(0)}k+`;
    return target;
  }

  return (
    <div ref={ref} className={className}>
      {isMounted && isInView ? displayValue() : initialDisplay()}
    </div>
  );
}
