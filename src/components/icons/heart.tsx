import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";

interface HeartProps extends SVGProps<SVGSVGElement> {
  filled?: boolean;
}

const SvgHeart = ({ filled = false, ...props }: HeartProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={filled ? "none" : "#7A7A7A"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.62 20.812c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12"
    />
  </svg>
);

const MemoHeart = memo(SvgHeart);
export default MemoHeart;
export type { HeartProps };






// import * as React from "react";
// import type { SVGProps } from "react";
// import { memo } from "react";
// const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="1em"
//     height="1em"
//     fill="none"
//     viewBox="0 0 24 24"
//     {...props}
//   >
//     <path
//       stroke="#7A7A7A"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={1.5}
//       d="M12.62 20.812c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12"
//     />
//   </svg>
// );
// const Memo = memo(SvgHeart);
// export default Memo;
