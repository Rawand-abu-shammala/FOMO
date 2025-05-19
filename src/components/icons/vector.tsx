import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgVector = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      d="M15.996 16H16V10.13c0-2.87-.618-5.082-3.974-5.082-1.613 0-2.696.886-3.138 1.725h-.047V5.317H5.66V16h3.314V10.71c0-1.393.264-2.74 1.988-2.74 1.7 0 1.725 1.59 1.725 2.83V16zM.264 5.318h3.317V16H.264zM1.921 0C.861 0 0 .86 0 1.921s.86 1.94 1.921 1.94 1.922-.879 1.922-1.94A1.923 1.923 0 0 0 1.92 0"
    />
  </svg>
);
const Memo = memo(SvgVector);
export default Memo;
