import React from 'react'
import Link from 'next/link'
import CheckIcon from '@/components/icons/check'


/** Shape of data for step three */
export interface StepThreeData {
  tracks: string
  skills: string
  welcome: string
  experience: string
  linkedin: string
  termsAccepted: boolean
}

/** Props for StepThree component */
interface StepThreeProps {
  data: StepThreeData
  onChange: (name: string, value: string) => void
  loading: boolean
}

export default function StepThree({ data, onChange, loading }: StepThreeProps) {
  // sample options
  const trackOptions = [
    'UX/UI Design',
    'Web Development',
    'Data Science',
    'Mobile Development',
    'Digital Marketing'
  ]
  const skillOptions = [
    'Java',
    'C++',
    'Python',
    'Figma',
    'React',
    'Node.js'
  ]

  return (
    <div className="space-y-6">
      {/* Tracks select */}
      <div>
        <label className="block mb-1 font-medium">Tracks you are expert in</label>
        <div className="relative">
          <select
            name="tracks"
            value={data.tracks}
            onChange={e => onChange('tracks', e.target.value)}
            disabled={loading}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="" disabled>
              Select a track...
            </option>
            {trackOptions.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">&#9662;</span>
        </div>
      </div>

      {/* Skills select */}
      <div>
        <label className="block mb-1 font-medium">Skills</label>
        <div className="relative">
          <select
            name="skills"
            value={data.skills}
            onChange={e => onChange('skills', e.target.value)}
            disabled={loading}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="" disabled>
              Select your skill...
            </option>
            {skillOptions.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">&#9662;</span>
        </div>
      </div>

      {/* Welcome statement */}
      <div>
        <label className="block mb-1 font-medium">Welcome statement</label>
        <input
          type="text"
          name="welcome"
          placeholder="A welcome sentence for students who visit your page"
          value={data.welcome}
          onChange={e => onChange('welcome', e.target.value)}
          disabled={loading}
          className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Years of experience */}
      <div>
        <label className="block mb-1 font-medium">
          Years of experience <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="experience"
          placeholder="00"
          value={data.experience}
          onChange={e => onChange('experience', e.target.value)}
          disabled={loading}
          className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* LinkedIn URL */}
      <div>
        <label className="block mb-1 font-medium">LinkedIn Profile</label>
        <input
          type="url"
          name="linkedin"
          placeholder="https://linkedin.com/in/username"
          value={data.linkedin}
          onChange={e => onChange('linkedin', e.target.value)}
          disabled={loading}
          className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Terms checkbox */}
 
        {/* <label htmlFor="terms" className="text-sm">
          By Clicking “Sign In”, I Agree To{' '}
          <Link href="/terms" className="text-blue-500 underline">Terms Of Condition</Link>
          {' & '}
          <Link href="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
        </label> */}

                 {/* Terms with custom checkbox */}
      <div className="flex items-start space-x-3">
        <div
          onClick={() => !loading && onChange('termsAccepted', String(!data.termsAccepted))}
          className={`w-5 h-5 rounded flex items-center justify-center cursor-pointer ${
            data.termsAccepted ? 'border-0' : 'border border-gray-300'
          }`}
        >
          {data.termsAccepted && (
            <CheckIcon className="w-5 h-5 text-blue-600" fill="currentColor" />
          )}
        </div>
        <label htmlFor="terms" className="text-sm">
          By Clicking “Sign In”, I Agree To{' '}
          <Link href="/terms" className="text-blue-500 underline">Terms Of Condition</Link>
          {' & '}
          <Link href="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
        </label>
      </div>
      </div>
  )
}




// import React from 'react'
// import { TextInput } from './Inputs'
// import Link from 'next/link'
// import CheckIcon from '@/components/icons/check'


// /** Shape of data for step three */
// export interface StepThreeData {
//   tracks: string
//   skills: string
//   welcome: string
//   experience: string
//   linkedin: string
//   termsAccepted: boolean
// }

// /** Props for StepThree component */
// interface StepThreeProps {
//   data: StepThreeData
//   onChange: (name: string, value: string) => void
//   loading: boolean
// }

// export default function StepThree({ data, onChange, loading }: StepThreeProps) {
//   const trackOptions = [
//     'UX/UI Design',
//     'Web Development',
//     'Data Science',
//     'Mobile Development',
//     'Digital Marketing',
//   ]
//   const skillOptions = ['Java', 'C++', 'Python', 'Figma', 'React', 'Node.js']

//   return (
//     <>
//       <div>
//         <label className="block mb-1 font-medium">Tracks you are expert in</label>
//         <select
//           name="tracks"
//           value={data.tracks}
//           onChange={e => onChange('tracks', e.target.value)}
//           disabled={loading}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
//         >
//           <option value="" disabled>Select a track...</option>
//           {trackOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//         </select>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Skills</label>
//         <select
//           name="skills"
//           value={data.skills}
//           onChange={e => onChange('skills', e.target.value)}
//           disabled={loading}
//           className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
//         >
//           <option value="" disabled>Select a skill...</option>
//           {skillOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//         </select>
//       </div>

//       <TextInput
//         name="welcome"
//         label="Welcome statement"
//         value={data.welcome}
//         onChange={onChange}
//       />

//       <TextInput
//         name="experience"
//         label="Years of experience"
//         type="number"
//         value={data.experience}
//         onChange={onChange}
//       />

//       <TextInput
//         name="linkedin"
//         label="LinkedIn URL"
//         type="url"
//         value={data.linkedin}
//         onChange={onChange}
//       />

//       {/* <div className="flex items-start mt-4">
//         <input
//           id="terms"
//           type="checkbox"
//           checked={data.termsAccepted}
//           onChange={e => onChange('termsAccepted', String(e.target.checked))}
//           disabled={loading}
//           className="mt-1 mr-2"
//         />
//         <label htmlFor="terms" className="text-sm">
//           By Clicking “Sign In”, I Agree To{' '}
//           <Link href="/terms" className="text-blue-500 underline">Terms Of Condition</Link>{' & '}
//           <Link href="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
//         </label>
//       </div> */}

      //    {/* Terms with custom checkbox */}
      // <div className="flex items-start space-x-3">
      //   <div
      //     onClick={() => !loading && onChange('termsAccepted', String(!data.termsAccepted))}
      //     className={`w-5 h-5 rounded flex items-center justify-center cursor-pointer ${
      //       data.termsAccepted ? 'border-0' : 'border border-gray-300'
      //     }`}
      //   >
      //     {data.termsAccepted && (
      //       <CheckIcon className="w-5 h-5 text-blue-600" fill="currentColor" />
      //     )}
      //   </div>
      //   <label htmlFor="terms" className="text-sm">
      //     By Clicking “Sign In”, I Agree To{' '}
      //     <Link href="/terms" className="text-blue-500 underline">Terms Of Condition</Link>
      //     {' & '}
      //     <Link href="/privacy" className="text-blue-500 underline">Privacy Policy</Link>
      //   </label>
      // </div>
//       {/* </div> */}
//     </>
//   )
// }

   
