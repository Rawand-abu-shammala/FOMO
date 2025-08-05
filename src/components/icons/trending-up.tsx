import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTrendingUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#00C8FF"
      fillRule="evenodd"
      d="m1.518 34.09 15.2-15.201a1.085 1.085 0 0 1 1.535 0l7.919 7.92 9.322-9.323-3.575-3.575a1.083 1.083 0 0 1 .057-1.59c.151-.13.335-.216.532-.248L45.537 9.9a1.086 1.086 0 0 1 1.248 1.249l-2.171 13.028a1.08 1.08 0 0 1-.74.856 1.08 1.08 0 0 1-1.098-.267L39.2 21.192 26.939 33.453a1.083 1.083 0 0 1-1.535 0l-7.918-7.918-12.261 12.26a1.084 1.084 0 0 1-1.535 0l-2.172-2.17a1.085 1.085 0 0 1 0-1.536"
      clipRule="evenodd"
    />
  </svg>
);
const Memo = memo(SvgTrendingUp);
export default Memo;
