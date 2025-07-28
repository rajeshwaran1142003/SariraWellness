import * as React from "react";
import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export const SariraLogo = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 160 60"
    width="120"
    height="45"
    className={cn("text-primary", className)}
    {...props}
  >
    <g transform="translate(0, -10)">
      <path
        d="M 43.42,26.54 C 43.73,22.42 40.24,20.00 36.58,20.00 C 32.85,20.00 29.83,22.23 29.41,26.01 C 29.21,27.84 29.83,29.13 31.25,29.95 C 33.63,31.30 36.56,31.06 38.00,32.88 C 39.28,34.50 38.63,36.55 37.07,37.58 C 35.22,38.81 32.88,38.88 31.00,38.28 C 28.50,37.50 27.52,35.00 27.52,32.55 M 34.91,48.00 C 37.22,46.54 38.93,44.40 39.48,41.21 C 40.50,35.00 37.00,32.00 34.00,32.00 C 31.00,32.00 28.00,34.50 28.00,38.00 C 28.00,41.50 30.50,44.00 34.00,44.00 C 35.00,44.00 35.50,44.50 35.50,45.50 L 35.50,47.00"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="14" r="4" fill="hsl(var(--accent))" />
    </g>
    <text
      x="5"
      y="52"
      fontFamily="Poppins, sans-serif"
      fontSize="24"
      fontWeight="600"
      fill="currentColor"
      letterSpacing="2"
    >
      SARIRA
    </text>
  </svg>
);
