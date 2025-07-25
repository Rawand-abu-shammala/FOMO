import React from 'react';

type Role = 'student' | 'mentor';

interface RoleSelectorProps {
  value: Role;
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
    
            className={`flex-1 py-3 rounded-lg border text-center font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      value === role
                        ? "bg-white shadow border-blue-600"
                        : "bg-gray-100 border-none"
          }`}



        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  );
}
