
import * as React from "react";
import { SVGProps } from "react";

export const HealthyBreakfastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    {...props}
  >
    <path d="M54.5,3.5h-45C6.7,3.5,4.5,5.7,4.5,8.5v47c0,2.8,2.2,5,5,5h45c2.8,0,5-2.2,5-5v-47C59.5,5.7,57.3,3.5,54.5,3.5z M32,50.1 c-10,0-18.1-8.1-18.1-18.1S22,13.9,32,13.9S50.1,22,50.1,32S42,50.1,32,50.1z" />
    <path d="M32,22.7c-5.1,0-9.3,4.2-9.3,9.3s4.2,9.3,9.3,9.3s9.3-4.2,9.3-9.3S37.1,22.7,32,22.7z" />
  </svg>
);
HealthyBreakfastIcon.displayName = "HealthyBreakfastIcon";
