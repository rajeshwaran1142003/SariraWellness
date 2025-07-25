"use client";

import { useEffect, useState, useRef } from 'react';

type CounterProps = {
  target: number;
  className?: string;
};

export function Counter({ target, className }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      let start = 0;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min(1, (timestamp - startTime) / duration);
        const currentCount = Math.floor(progress * target);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isIntersecting, target]);
  
  const displayValue = isIntersecting ? count : 0;

  const formatDisplayValue = (value: number) => {
    if (target >= 1000) {
      return value >= 1000 ? `${Math.floor(value / 1000)}k+` : value;
    }
    return value;
  };

  return (
    <div ref={ref} className={className}>
      {formatDisplayValue(displayValue)}
    </div>
  );
}
