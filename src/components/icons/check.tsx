import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="url(#check_svg__a)"
      d="M20.506 3.501c-4.668-4.668-12.329-4.668-16.997 0-4.669 4.669-4.669 12.33 0 16.998a11.92 11.92 0 0 0 16.878 0c4.787-4.669 4.787-12.33.12-16.998M9.613 17.985l-4.788-4.788 1.676-1.676 3.112 3.112 7.9-7.9L19.19 8.41z"
    />
    <defs>
      <linearGradient
        id="check_svg__a"
        x1={0.007}
        x2={24.007}
        y1={0}
        y2={23.985}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4FC954" />
        <stop offset={1} stopColor="#49C628" />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(SvgCheck);
export default Memo;
