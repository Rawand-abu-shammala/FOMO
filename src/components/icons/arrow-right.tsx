import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      stroke="#0061FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m5.94 13.279 4.347-4.347a1.324 1.324 0 0 0 0-1.867L5.94 2.72"
    />
  </svg>
);
const Memo = memo(SvgArrowRight);
export default Memo;
