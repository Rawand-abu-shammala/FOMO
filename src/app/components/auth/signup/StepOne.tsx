// StepOne.tsx
'use client';

import React, { useState } from 'react';
// import Link from 'next/link';
import UserIcon from '@/components/icons/frame';
import MailIcon from '@/components/icons/sms';
import LockIcon from '@/components/icons/lock';
import CalendarIcon from '@/components/icons/calender-svgrepo-com';
import EyeIcon from '@/components/icons/eye-svgrepo-com';
import EyeOffIcon from '@/components/icons/eye-slash';
import RoleSelector from './RoleSelector';
// import { TextInput } from './Inputs';
import { Input } from '@/components/ui/input';
import { StepOneData } from '../../../utils/signup';

interface StepOneProps {
  data: StepOneData;
  onChange: (
    field: keyof Omit<StepOneData, 'dob'> | `dob.${keyof StepOneData['dob']}`,
    value: string
  ) => void;
}

type Field =
  | keyof Omit<StepOneData, 'dob'>
  | `dob.${keyof StepOneData['dob']}`;

export default function StepOne({ data, onChange }: StepOneProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as Field;
    onChange(name, e.target.value);
  };

  const fieldClass =
    'w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <>
      <RoleSelector
        value={data.role}
        onChange={role => onChange('role', role)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-medium mb-2">
            First Name
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={data.firstName}
              onChange={handleChange}
              className={fieldClass}
              variant="unstyled"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-medium mb-2">
            Last Name
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={data.lastName}
              onChange={handleChange}
              className={fieldClass}
              variant="unstyled"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <label className="block font-medium mb-2">Email</label>
      <div className="relative mb-4">
        <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={data.email}
          onChange={handleChange}
          className={fieldClass}
          variant="unstyled"
        />
      </div>

      {/* Password */}
      <label className="block font-medium mb-2">Password</label>
      <div className="relative mb-4">
        <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          className={fieldClass + ' pr-10'}
          variant="unstyled"
        />
        <button
          type="button"
          onClick={() => setShowPassword(s => !s)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      {/* Confirm Password */}
      <label className="block font-medium mb-2">Confirm Password</label>
      <div className="relative mb-4">
        <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type={showConfirm ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={handleChange}
          className={fieldClass + ' pr-10'}
          variant="unstyled"
        />
        <button
          type="button"
          onClick={() => setShowConfirm(s => !s)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          {showConfirm ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>

      {/* Date of Birth */}
      <label className="block font-medium mb-2">Date Of Birth</label>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {(['dd', 'mm', 'yyyy'] as const).map(field => (
          <div key={field} className="relative">
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              name={`dob.${field}`}
              placeholder={field.toUpperCase()}
              value={data.dob[field]}
              onChange={handleChange}
              className={fieldClass}
              variant="unstyled"
            />
          </div>
        ))}
      </div>
    </>
  );
}





// // components/auth/signup/StepOne.tsx
// 'use client'

// import React, { useState } from 'react'
// import UserIcon from '@/components/icons/frame'
// import MailIcon from '@/components/icons/sms'
// import LockIcon from '@/components/icons/lock'
// import CalendarIcon from '@/components/icons/calender-svgrepo-com'
// import EyeIcon from '@/components/icons/eye-svgrepo-com'
// import EyeOffIcon from '@/components/icons/eye-slash'
// import RoleSelector from './RoleSelector'
// import { StepOneData } from '../../../utils/signup'

// /** Props for StepOne component */
// interface StepOneProps {
//   data: StepOneData
//   // Accept nested and top-level fields
//   onChange: (
//     field: keyof Omit<StepOneData, 'dob'> | `dob.${keyof StepOneData['dob']}`,
//     value: string
//   ) => void
// }

// type Field =
//   | keyof Omit<StepOneData, 'dob'>
//   | `dob.${keyof StepOneData['dob']}`

// export default function StepOne({ data, onChange }: StepOneProps) {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirm, setShowConfirm] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const name = e.target.name as Field
//     const value = e.target.value
//     onChange(name, value)
//   }

//   return (
//     <>
//       <RoleSelector
//         value={data.role}
//         onChange={role => onChange('role', role)}
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//   {/* First Name */}
//   <div>
//     <label htmlFor="firstName" className="block font-medium mb-4">
//       First Name
//     </label>
//     <div className="relative">
//       <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//       <input
//         id="firstName"
//         name="firstName"
//         placeholder="First Name"
//         value={data.firstName}
//         onChange={handleChange}
//         className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   </div>

//   {/* Last Name */}
//   <div>
//     <label htmlFor="lastName" className="block font-medium mb-4">
//       Last Name
//     </label>
//     <div className="relative">
//       <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//       <input
//         id="lastName"
//         name="lastName"
//         placeholder="Last Name"
//         value={data.lastName}
//         onChange={handleChange}
//         className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//     </div>
//   </div>
// </div>


//       <label className="block font-medium">Email</label>
//       <div className="relative mb-4">
//         <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <input
//           name="email"
//           type="email"
//           placeholder="you@example.com"
//           value={data.email}
//           onChange={handleChange}
//           className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <label className="block font-medium">Password</label>
//       <div className="relative mb-4">
//         <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <input
//           name="password"
//           type={showPassword ? 'text' : 'password'}
//           placeholder="Password"
//           value={data.password}
//           onChange={handleChange}
//           className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="button"
//           onClick={() => setShowPassword(s => !s)}
//           className="absolute top-1/2 right-3 transform -translate-y-1/2"
//         >
//           {showPassword ? <EyeIcon /> : <EyeOffIcon />  }
//         </button>
//       </div>

//       <label className="block font-medium">Confirm Password</label>
//       <div className="relative mb-4">
//         <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <input
//           name="confirmPassword"
//           type={showConfirm ? 'text' : 'password'}
//           placeholder="Confirm Password"
//           value={data.confirmPassword}
//           onChange={handleChange}
//           className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="button"
//           onClick={() => setShowConfirm(s => !s)}
//           className="absolute top-1/2 right-3 transform -translate-y-1/2"
//         >
//           {showConfirm ? <EyeIcon /> : <EyeOffIcon /> }
//         </button>
//       </div>

//       <label className="block font-medium">Date Of Birth</label>
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {(['dd', 'mm', 'yyyy'] as const).map(field => (
//           <div key={field} className="relative">
//             <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               name={`dob.${field}`}
//               placeholder={field.toUpperCase()}
//               value={data.dob[field]}
//               onChange={handleChange}
//               className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }


