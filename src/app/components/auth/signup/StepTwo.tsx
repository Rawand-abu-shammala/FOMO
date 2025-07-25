// StepTwo.tsx
'use client';

import React from 'react';
import { Select, 
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { TextInput } from './Inputs';
import { Input } from '@/components/ui/input';
import { StepTwoData } from '../../../utils/signup';

interface StepTwoProps {
  data: StepTwoData;
  onChange: <K extends keyof StepTwoData>(field: K, value: StepTwoData[K]) => void;
}

export default function StepTwo({ data, onChange }: StepTwoProps) {
  const fieldClass =
    'w-full pl-3 pr-3 py-3 h-12 bg-gray-100 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500';

  const dropdownClasses =
    'bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 mt-1 max-h-60 overflow-auto';

  return (
    <>
      <label className="block mb-2 font-medium">Pronoun</label>
      <Select
        name="pronoun"
        value={data.pronoun}
        onValueChange={value => onChange('pronoun', value as StepTwoData['pronoun'])}
      >
        <SelectTrigger className={fieldClass}>

          <SelectValue placeholder="Select…" />
        </SelectTrigger>
        <SelectContent className={dropdownClasses}>
          <SelectItem value="he">he</SelectItem>
          <SelectItem value="she">she</SelectItem>
          <SelectItem value="they">they</SelectItem>
        </SelectContent>
      </Select>

      <label className="block mb-2 font-medium">Major</label>
      <Select
        name="major"
        value={data.major}
        onValueChange={value => onChange('major', value as StepTwoData['major'])}
      >
        <SelectTrigger className={fieldClass}>
          <SelectValue placeholder="Select…" />
        </SelectTrigger>
        <SelectContent className={dropdownClasses}>
          <SelectItem value="software engineering">software engineering</SelectItem>
          <SelectItem value="uxui design">uxui design</SelectItem>
          <SelectItem value="computer science">computer science</SelectItem>
        </SelectContent>
      </Select>

      <label className="block mb-2 font-medium">Profile Photo</label>
      <Input
        type="file"
        accept="image/*"
        onChange={e => onChange('photo', e.target.files?.[0] ?? null)}
        className={fieldClass}
        variant="unstyled" 
      />

      <label className="block mb-2 font-medium">Goals</label>
      <TextInput
        name="goals"
        placeholder="Goals"
        value={data.goals}
        onChange={value => onChange('goals', value)}
        className={fieldClass}
      />

      <label className="block mb-2 font-medium">Bio</label>
      <textarea
        name="bio"
        rows={3}
        placeholder="Bio"
        value={data.bio}
        onChange={e => onChange('bio', e.target.value)}
        className="w-full px-3 py-2 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="block mb-2 font-medium">LinkedIn Profile</label>
      <TextInput
        name="linkedin"
        placeholder="LinkedIn URL"
        value={data.linkedin}
        onChange={value => onChange('linkedin', value)}
        className={fieldClass}
      />
    </>
  );
}






// 'use client'
// import React from 'react'
// import { StepTwoData } from '../../../utils/signup'
// import { TextInput } from './Inputs'

// interface StepTwoProps {
//   data: StepTwoData
//   // Make onChange strongly typed per field
//   onChange: <K extends keyof StepTwoData>(field: K, value: StepTwoData[K]) => void
// }

// export default function StepTwo({ data, onChange }: StepTwoProps) {
//   return (
//     <>
//       <label className="block mb-1 font-medium">Pronoun</label>
//       <select
//         name="pronoun"
//         value={data.pronoun}
//         onChange={e => onChange('pronoun', e.target.value as StepTwoData['pronoun'])}
//         className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
//       >
//         <option value="">Select…</option>
//         <option value="he">he</option>
//         <option value="she">she</option>
//         <option value="they">they</option>
//       </select>

//       <label className="block mb-1 font-medium">Major</label>
//       <select
//         name="major"
//         value={data.major}
//         onChange={e => onChange('major', e.target.value as StepTwoData['major'])}
//         className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
//       >
//         <option value="">Select…</option>
//         <option value="software engineering">software engineering</option>
//         <option value="uxui design">uxui design</option>
//         <option value="computer science">computer science</option>
//       </select>

//       <label className="block mb-1 font-medium">Profile Photo</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={e => onChange('photo', e.target.files?.[0] ?? null)}
//         className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
//       />

//       <label className="block mb-1 font-medium">Goals</label>
//       <TextInput
//         name="goals"
//         label="Goals"
//         value={data.goals}
//         onChange={value => onChange('goals', value)}
//       />

//       {/* ← UPDATED: Bio field */}
//       <label className="block mb-1 font-medium">Bio</label>
//       <textarea
//         name="bio"
//         rows={3}
//         placeholder="Bio"
//         value={data.bio}
//         onChange={e => onChange('bio', e.target.value)}
//         className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
//       />

//       {/* ← UPDATED: LinkedIn Profile */}
//       <label className="block mb-1 font-medium">LinkedIn Profile</label>
//       <TextInput
//         name="linkedin"
//         label="LinkedIn URL"
//         value={data.linkedin}
//         onChange={value => onChange('linkedin', value)}
//       />
//     </>
//   )
// }




