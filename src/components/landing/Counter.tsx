"use client";

import { useEffect, useState, useRef } from 'react';

type CounterProps = {
  target: number;
  className?: string;
};

export function Counter({ target, className }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
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
    if (!isInView) return;

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
  }, [isInView, target]);

  const displayValue = isInView ? count : 0;

  const formatDisplayValue = (value: number) => {
    if (target >= 1000) {
      if (isInView) {
        return value >= 1000 ? `${(value/1000).toFixed(0)}k+` : value;
      }
      return `${(target/1000).toFixed(0)}k+`
    }
    return isInView ? value : target;
  }

  return (
    <div ref={ref} className={className}>
      {formatDisplayValue(displayValue)}
    </div>
  );
}
