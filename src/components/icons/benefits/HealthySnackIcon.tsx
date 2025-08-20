
import * as React from "react";
import { SVGProps } from "react";

export const HealthySnackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    {...props}
  >
    <path d="M52.5,3.5H11.5c-2.8,0-5,2.2-5,5v50c0,2.8,2.2,5,5,5h41c2.8,0,5-2.2,5-5V8.5C57.5,5.7,55.3,3.5,52.5,3.5z M32,54.8 c-12.6,0-22.8-10.2-22.8-22.8S19.4,9.2,32,9.2S54.8,19.4,54.8,32S44.6,54.8,32,54.8z" />
    <path d="M32,15.5c-9.1,0-16.5,7.4-16.5,16.5s7.4,16.5,16.5,16.5s16.5-7.4,16.5-16.5S41.1,15.5,32,15.5z" />
  </svg>
);
HealthySnackIcon.displayName = "HealthySnackIcon";
