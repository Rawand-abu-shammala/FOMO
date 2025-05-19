import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMenuSvgrepoCom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const Memo = memo(SvgMenuSvgrepoCom);
export default Memo;
