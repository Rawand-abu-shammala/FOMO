import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#twitter_svg__a)">
      <path
        fill="#fff"
        d="M17.49 14.775 23.317 8h-1.381l-5.061 5.883L12.834 8H8.172l6.112 8.895L8.172 24h1.381l5.344-6.212L19.167 24h4.661zm-1.892 2.199-.62-.886-4.927-7.048h2.121l3.977 5.688.62.886 5.168 7.393h-2.121z"
      />
    </g>
    <circle cx={16} cy={16} r={15.5} stroke="#fff" />
    <defs>
      <clipPath id="twitter_svg__a">
        <path fill="#fff" d="M8 8h16v16H8z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgTwitter);
export default Memo;
