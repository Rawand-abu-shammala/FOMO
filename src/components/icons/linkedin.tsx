import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx={16} cy={16} r={15.5} stroke="#fff" />
    <g clipPath="url(#linkedin_svg__a)">
      <path
        fill="#fff"
        d="M23.996 24H24V18.13c0-2.87-.618-5.082-3.974-5.082-1.613 0-2.696.886-3.138 1.725h-.047v-1.457H13.66V24h3.314V18.71c0-1.393.264-2.74 1.988-2.74 1.7 0 1.725 1.59 1.725 2.83V24zM8.264 13.318h3.317V24H8.264zM9.921 8C8.861 8 8 8.86 8 9.921s.86 1.94 1.921 1.94 1.922-.879 1.922-1.94A1.923 1.923 0 0 0 9.92 8"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" d="M8 8h16v16H8z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgLinkedin);
export default Memo;
