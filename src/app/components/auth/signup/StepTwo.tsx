'use client'
import React from 'react'
import { StepTwoData } from '../../../utils/signup'
import { TextInput } from './Inputs'

interface StepTwoProps {
  data: StepTwoData
  // Make onChange strongly typed per field
  onChange: <K extends keyof StepTwoData>(field: K, value: StepTwoData[K]) => void
}

export default function StepTwo({ data, onChange }: StepTwoProps) {
  return (
    <>
      <label className="block mb-1 font-medium">Pronoun</label>
      <select
        name="pronoun"
        value={data.pronoun}
        onChange={e => onChange('pronoun', e.target.value as StepTwoData['pronoun'])}
        className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="">Select…</option>
        <option value="he">he</option>
        <option value="she">she</option>
        <option value="they">they</option>
      </select>

      <label className="block mb-1 font-medium">Major</label>
      <select
        name="major"
        value={data.major}
        onChange={e => onChange('major', e.target.value as StepTwoData['major'])}
        className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
      >
        <option value="">Select…</option>
        <option value="software engineering">software engineering</option>
        <option value="uxui design">uxui design</option>
        <option value="computer science">computer science</option>
      </select>

      <label className="block mb-1 font-medium">Profile Photo</label>
      <input
        type="file"
        accept="image/*"
        onChange={e => onChange('photo', e.target.files?.[0] ?? null)}
        className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
      />

      <label className="block mb-1 font-medium">Goals</label>
      <TextInput
        name="goals"
        label="Goals"
        value={data.goals}
        onChange={value => onChange('goals', value)}
      />

      {/* ← UPDATED: Bio field */}
      <label className="block mb-1 font-medium">Bio</label>
      <textarea
        name="bio"
        rows={3}
        placeholder="Bio"
        value={data.bio}
        onChange={e => onChange('bio', e.target.value)}
        className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* ← UPDATED: LinkedIn Profile */}
      <label className="block mb-1 font-medium">LinkedIn Profile</label>
      <TextInput
        name="linkedin"
        label="LinkedIn URL"
        value={data.linkedin}
        onChange={value => onChange('linkedin', value)}
      />
    </>
  )
}






// 'use client'

// import React from 'react'

// import { TextInput } from './Inputs'
// import { StepTwoData } from '../../../utils/signup'

// interface StepTwoProps {
//   data: StepTwoData
//   onChange: <K extends keyof StepTwoData>(field: K, value: StepTwoData[K]) => void
// }

// export default function StepTwo({ data, onChange }: StepTwoProps) {
//   return (
//     <div className="space-y-6">
//       {/* Grid for pronoun and major to differ sizes */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {/* Pronoun select */}
//       <div>
//         <label className="block mb-1 font-medium">Pronoun</label>
//         <select
//           name="pronoun"
//           value={data.pronoun}
//           onChange={e => onChange('pronoun', e.target.value as StepTwoData['pronoun'])}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
//         >
//           <option value="" disabled>Select…</option>
//           <option value="he">he</option>
//           <option value="she">she</option>
//           <option value="they">they</option>
//         </select>
//       </div>

//       {/* Major select */}
//       <div>
//         <label className="block mb-1 font-medium">Major</label>
//         <select
//           name="major"
//           value={data.major}
//           onChange={e => onChange('major', e.target.value as StepTwoData['major'])}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
//         >
//           <option value="" disabled>Select…</option>
//           <option value="software engineering">software engineering</option>
//           <option value="uxui design">uxui design</option>
//           <option value="computer science">computer science</option>
//         </select>
//       </div>

//       {/* Profile photo */}
//       <div>
//         <label className="block mb-1 font-medium">Profile Photo</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={e => onChange('photo', e.target.files?.[0] ?? null)}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Goals input */}
//       <TextInput
//         name="goals"
//         label="Goals"
//         icon="user"
//         value={data.goals}
//         onChange={(name, value) => onChange('goals', value)}
//       />

//       {/* Bio textarea */}
//       <div>
//         <label className="block mb-1 font-medium">Bio</label>
//         <textarea
//           name="bio"
//           rows={3}
//           placeholder="Bio"
//           value={data.bio}
//           onChange={e => onChange('bio', e.target.value)}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* LinkedIn input */}
//       <TextInput
//         name="linkedin"
//         label="LinkedIn URL"
//         icon="mail"
//         value={data.linkedin}
//         onChange={(name, value) => onChange('linkedin', value)}
//       />
//     </div>
//     </div>
//   )
// }



// 'use client'
// import React from 'react'

// type Pronoun = '' | 'he' | 'she' | 'they'
// type Major = '' | 'software engineering' | 'uxui design' | 'computer science'

// export interface StepTwoData {
//   pronoun: Pronoun
//   major: Major
//   photo: File | null
//   goals: string
//   bio: string
//   linkedin: string
// }

// interface StepTwoProps {
//   data: StepTwoData
//   onChange: <K extends keyof StepTwoData>(field: K, value: StepTwoData[K]) => void
// }

// export default function StepTwo({ data, onChange }: StepTwoProps) {
//   return (
//     <div className="w-full max-w-4xl mx-auto">
//       {/* Pronoun */}
//       <label className="block mb-1 font-medium">Pronoun</label>
//       <select
//         name="pronoun"
//         value={data.pronoun}
//         onChange={e => onChange('pronoun', e.target.value as Pronoun)}
//         className="w-full md:w-[400px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       >
//         <option value="">Select…</option>
//         <option value="he">he</option>
//         <option value="she">she</option>
//         <option value="they">they</option>
//       </select>

//       {/* Major */}
//       <label className="block mb-1 font-medium">Major</label>
//       <select
//         name="major"
//         value={data.major}
//         onChange={e => onChange('major', e.target.value as Major)}
//         className="w-full md:w-[400px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       >
//         <option value="">Select…</option>
//         <option value="software engineering">software engineering</option>
//         <option value="uxui design">uxui design</option>
//         <option value="computer science">computer science</option>
//       </select>

//       {/* Profile Photo */}
//       <label className="block mb-1 font-medium">Profile Photo</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={e => onChange('photo', e.target.files?.[0] ?? null)}
//         className="w-full md:w-[400px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       />

//       {/* Goals */}
//       <label className="block mb-1 font-medium">Goals</label>
//       <input
//         name="goals"
//         type="text"
//         placeholder="Goals"
//         value={data.goals}
//         onChange={e => onChange('goals', e.target.value)}
//         className="w-full md:w-[800px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       />

//       {/* Bio */}
//       <label className="block mb-1 font-medium">Bio</label>
//       <textarea
//         name="bio"
//         rows={3}
//         placeholder="Bio"
//         value={data.bio}
//         onChange={e => onChange('bio', e.target.value)}
//         className="w-full md:w-[800px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       />

//       {/* LinkedIn Profile */}
//       <label className="block mb-1 font-medium">LinkedIn Profile</label>
//       <input
//         name="linkedin"
//         type="url"
//         placeholder="LinkedIn URL"
//         value={data.linkedin}
//         onChange={e => onChange('linkedin', e.target.value)}
//         className="w-full md:w-[800px] p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//       />
//     </div>
//   )
// }
