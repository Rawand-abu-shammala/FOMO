import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgBag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.81 2 5.19 5.63M15.19 2l3.62 3.63"
    />
    <path
      stroke="red"
      strokeWidth={1.5}
      d="M2 7.852c0-1.85.99-2 2.22-2h15.56c1.23 0 2.22.15 2.22 2 0 2.15-.99 2-2.22 2H4.22c-1.23 0-2.22.15-2.22-2Z"
    />
    <path
      stroke="red"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.76 14v3.55M14.36 14v3.55M3.5 10l1.41 8.64C5.23 20.58 6 22 8.86 22h6.03c3.11 0 3.57-1.36 3.93-3.24L20.5 10"
    />
  </svg>
);
const Memo = memo(SvgBag);
export default Memo;
