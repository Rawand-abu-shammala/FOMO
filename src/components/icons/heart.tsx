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





// import * as React from 'react';

// interface HeartProps extends React.SVGProps<SVGSVGElement> {
//   filled?: boolean;
// }

// export function Heart({ filled = false, className, ...props }: HeartProps) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill={filled ? 'currentColor' : 'none'}
//       stroke="currentColor"
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       {...props}
//     >
//       {filled ? (
//         <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
//       ) : (
//         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
//                  5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 
//                  1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//       )}
//     </svg>
//   );
// }




import * as React from 'react';

interface HeartProps extends React.SVGProps<SVGSVGElement> {
  /** إذا true نرسم القلب مملوء، وإلا رسمة قلب فارغ */
  filled?: boolean;
}

export function Heart({ filled = false, className, ...props }: HeartProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {filled ? (
        // مسار القلب المملوء
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      ) : (
        // مسار قلب الـ outline
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09
                 C10.91 3.81 9.24 3 7.5 3
                 4.42 3 2 5.42 2 8.5
                 c0 3.78 3.4 6.86 8.55 11.54L12 21.35
                 l1.45-1.32C18.6 15.36 22 12.28 22 8.5
                 22 5.42 19.58 3 16.5 3z" />
      )}
    </svg>
  );
}
