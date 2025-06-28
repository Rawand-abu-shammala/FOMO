import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGalleryExport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#0061FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <path
      stroke="#0061FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
    />
    <path
      stroke="#0061FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 8V2l2 2M18 2l-2 2M2.67 18.949l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4"
    />
  </svg>
);
const Memo = memo(SvgGalleryExport);
export default Memo;
