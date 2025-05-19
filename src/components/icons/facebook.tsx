import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#facebook_svg__a)">
      <path
        fill="#fff"
        d="M17.24 24v-7.298h2.448l.367-2.845h-2.816v-1.816c0-.823.228-1.384 1.41-1.384l1.505-.001V8.111A20 20 0 0 0 17.96 8c-2.171 0-3.658 1.326-3.658 3.76v2.097h-2.456v2.845h2.456V24z"
      />
    </g>
    <circle cx={16} cy={16} r={15.5} stroke="#fff" />
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill="#fff" d="M8 8h16v16H8z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgFacebook);
export default Memo;
