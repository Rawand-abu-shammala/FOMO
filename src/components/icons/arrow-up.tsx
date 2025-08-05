import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <path
      stroke="#0061FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M23.472 17.928 21.25 9.637l-8.292 2.221M12.75 24.357 21.165 9.78"
    />
  </svg>
);
const Memo = memo(SvgArrowUp);
export default Memo;
