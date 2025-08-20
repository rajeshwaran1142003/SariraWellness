
import * as React from "react";
import { SVGProps } from "react";

export const HoneyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="currentColor"
    {...props}
  >
    <path d="M47.9,3.5H16.1c-2.8,0-5,2.2-5,5v11.3c0,2.8,2.2,5,5,5h31.8c2.8,0,5-2.2,5-5V8.5C52.9,5.7,50.7,3.5,47.9,3.5z M47.9,8.5v11.3 H16.1V8.5H47.9z" />
    <path d="M52.9,28.2H11.1c-2.8,0-5,2.2-5,5v22.3c0,2.8,2.2,5,5,5h41.8c2.8,0,5-2.2,5-5V33.2C57.9,30.4,55.7,28.2,52.9,28.2z M27.4,51.8c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S28.8,51.8,27.4,51.8z M36.6,51.8c-1.4,0-2.5-1.1-2.5-2.5 s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S38,51.8,36.6,51.8z" />
  </svg>
);
HoneyIcon.displayName = "HoneyIcon";
