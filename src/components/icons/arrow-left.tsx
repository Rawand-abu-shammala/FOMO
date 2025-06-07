import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m15 19.918-6.52-6.52c-.77-.77-.77-2.03 0-2.8L15 4.078"
    />
  </svg>
);
const Memo = memo(SvgArrowLeft);
export default Memo;
