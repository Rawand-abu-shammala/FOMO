import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgStar1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 11"
    {...props}
  >
    <path
      fill="#FBC000"
      d="M5.049.927c.3-.921 1.603-.921 1.902 0l.62 1.91a1 1 0 0 0 .952.69h2.008c.968 0 1.371 1.24.588 1.81l-1.625 1.18a1 1 0 0 0-.363 1.118l.62 1.91c.3.921-.755 1.688-1.539 1.118l-1.624-1.18a1 1 0 0 0-1.176 0l-1.624 1.18c-.784.57-1.839-.197-1.54-1.118l.621-1.91a1 1 0 0 0-.363-1.118L.881 5.337c-.783-.57-.38-1.81.588-1.81h2.008a1 1 0 0 0 .951-.69z"
    />
  </svg>
);
const Memo = memo(SvgStar1);
export default Memo;
