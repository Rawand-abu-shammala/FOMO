// // components/auth/Signup/RoleSelector.tsx
// export default function RoleSelector({ value, onChange }: any) {
//   return (
//     <div className="flex space-x-4">
//       {['student','mentor'].map(role => (
//         <button
//           key={role}
//           type="button"
//           onClick={() => onChange(role)}
//           className={`flex-1 py-2 rounded-lg text-center ${
//             value === role ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
//           }`}
//         >
//           {role.charAt(0).toUpperCase() + role.slice(1)}
//         </button>
//       ))}
//     </div>
//   )
// }





import React from 'react';

type Role = 'student' | 'mentor';

interface RoleSelectorProps {
  /** القيمة المحددة حالياً */
  value: Role;
  /** دالة تُستدعى عند تغيير الدور */
  onChange: (role: Role) => void;
}

export default function RoleSelector({
  value,
  onChange,
}: RoleSelectorProps) {
  const roles: Role[] = ['student', 'mentor'];

  return (
    <div className="flex space-x-4">
      {roles.map((role) => (
        <button
          key={role}
          type="button"
          onClick={() => onChange(role)}
          className={`flex-1 py-2 rounded-lg text-center ${
            value === role
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
}
