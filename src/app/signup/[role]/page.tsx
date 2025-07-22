// app/signup/[role]/page.tsx
'use client'

// import React, { useState, useEffect, FormEvent } from 'react'
// import Image from 'next/image'
// import { useRouter, useParams } from 'next/navigation'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import SignupForm from '../../components/auth/signup/SignupForm'
// import axios from 'axios'
// import type { StepOneData, StepTwoData, StepThreeData } from '@/utils/signup'
// import { StepOneData, StepTwoData, StepThreeData } from '@/utils/signup'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter, useParams } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignupForm from '../../components/auth/signup/SignupForm'
// import axios from 'axios'
// import type { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'
// import { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'

/**
 * Dynamic Signup Page for student or mentor,
 * with a 3-step flow and left-side illustration.
 */
export default function SignupPage() {
  const { role: initialRole } = useParams() as { role: 'student' | 'mentor' }
  const router = useRouter()

  useEffect(() => { window.scrollTo(0,0) }, [initialRole])

  const switchRole = (newRole: 'student'|'mentor') => {
    router.push(`/signup/${newRole}`)
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left illustration panel */}
        <div className="md:w-1/2 w-full bg-blue-50 flex items-center justify-center p-6 md:p-12">
          <Image
            src={
              initialRole === 'student'
                ? '/assets/images/Sign up-amico 1.svg'
                : '/assets/images/Sign up-rafiki 1.svg'
            }
            alt="Signup Illustration"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
        {/* Right form panel */}
        <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
          <SignupForm
            initialRole={initialRole}
            onSwitchRole={switchRole}
          />
        </div>
      </div>
    </>
  )
}






// // app/signup/[role]/page.tsx
// 'use client'

// // import React, { useState, useEffect } from 'react'
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { useRouter, useParams } from 'next/navigation'
// import SignupForm from '../../components/auth/signup/SignupForm'
// // import { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'

// export default function SignupPage() {
//   const { role: initialRole } = useParams() as { role: 'student' | 'mentor' }
//   const router = useRouter()

//   // When URL segment changes, scroll to top:
//   useEffect(() => { window.scrollTo(0,0) }, [initialRole])

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Left SVG, unchanged */}
//       <div className="hidden md:flex md:w-1/2 bg-blue-50 items-center justify-center p-12">
//         <Image
//           src={
//             initialRole === 'student'
//               ? '/assets/images/Sign up-amico 1.svg'
//               : '/assets/images/Sign up-rafiki 1.svg'
//           }
//           width={450}
//           height={450}
//           alt="Sign up illustration"
//         />
//       </div>

//       {/* Right: pass `initialRole` down */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-12">
//         <SignupForm
//           initialRole={initialRole}
//           onSwitchRole={(newRole) => router.push(`/signup/${newRole}`)}
//         />
//       </div>
//     </div>
//   )
// }






// 'use client'
// // app/signup/[role]/page.tsx


// // import React, { useState, useEffect } from 'react'
// import React, { useEffect } from 'react'
// import Image from 'next/image'
// import { useRouter, useParams } from 'next/navigation'
// import SignupForm from '../../components/auth/signup/SignupForm'
// // import { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'

// export default function SignupPage() {
//   const { role: initialRole } = useParams() as { role: 'student' | 'mentor' }
//   const router = useRouter()

//   // When URL segment changes, scroll to top:
//   useEffect(() => { window.scrollTo(0,0) }, [initialRole])

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Left SVG, unchanged */}
//       <div className="hidden md:flex md:w-1/2 bg-blue-50 items-center justify-center p-12">
//         <Image
//           src={
//             initialRole === 'student'
//               ? '/assets/images/Sign up-amico 1.svg'
//               : '/assets/images/Sign up-rafiki 1.svg'
//           }
//           width={450}
//           height={450}
//           alt="Sign up illustration"
//         />
//       </div>

//       {/* Right: pass `initialRole` down */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-12">
//         <SignupForm
//           initialRole={initialRole}
//           onSwitchRole={(newRole) => router.push(`/signup/${newRole}`)}
//         />
//       </div>
//     </div>
//   )
// }




// 'use client'

// import { useState, FormEvent } from 'react'
// import { useRouter } from 'next/navigation'
// import axios, { AxiosError } from 'axios'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Image from 'next/image'

// import StepOneForm from '../../components/auth/signup/StepOne'
// import StepTwoForm from '../../components/auth/signup/StepTwo'
// import StepThreeForm from '../../components/auth/signup/StepThree'
// import { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'

// export default function SignupForm({ initialRole = 'student' }: { initialRole?: 'student' | 'mentor' }) {
//   const router = useRouter()
//   const [step, setStep] = useState<1 | 2 | 3>(1)
//   const [loading, setLoading] = useState(false)

//   const [stepOneData, setStepOneData] = useState<StepOneData>({
//     role: initialRole,
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     dob: { dd: '', mm: '', yyyy: '' },
//   })

//   const [stepTwoData, setStepTwoData] = useState<StepTwoData>({
//     pronoun: '',
//     major: '',
//     photo: null,
//     goals: '',
//     bio: '',
//     linkedin: '',
//     experience: '',
//     specialties: '',
//   })

//   const [stepThreeData, setStepThreeData] = useState<StepThreeData>({
//     tracks: '',
//     skills: '',
//     welcome: '',
//     experienceYears: '',
//     linkedin: '',
//     termsAccepted: false,
//     bio: '',
//     experience: '',
//     specialties: '',
//     loading: false,
//   })

//   const onNext = (e: FormEvent) => {
//     e.preventDefault()
//     if (!stepOneData.firstName.trim()) return toast.error('First name required')
//     if (!stepOneData.lastName.trim())  return toast.error('Last name required')
//     if (!stepOneData.email.trim())     return toast.error('Email required')
//     if (!stepOneData.password)         return toast.error('Password required')
//     if (stepOneData.password !== stepOneData.confirmPassword)
//       return toast.error('Passwords must match')
//     setStep(2)
//   }

//   const onContinue = (e: FormEvent) => {
//     e.preventDefault()
//     if (!stepTwoData.pronoun) return toast.error('Select pronoun')
//     if (!stepTwoData.major)   return toast.error('Select major')
//     if (stepOneData.role === 'mentor') setStep(3)
//     else onSubmit(e)
//   }

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     if (step === 3 && !stepThreeData.termsAccepted) {
//       return toast.error('You must accept the terms')
//     }

//     setLoading(true)
//     try {
//       const fd = new FormData()
//       const d = stepOneData.dob
//       fd.append('dob', `${d.yyyy}-${d.mm}-${d.dd}`)

//       Object.entries(stepOneData).forEach(([k, v]) => {
//         if (k !== 'dob') fd.append(k, String(v))
//       })

//       Object.entries(stepTwoData).forEach(([k, v]) => {
//         if (k === 'photo' && v instanceof File) fd.append('photo', v)
//         else fd.append(k, String(v))
//       })

//       if (step === 3) {
//         Object.entries(stepThreeData).forEach(([k, v]) => {
//           fd.append(k, String(v))
//         })
//       }

//       await axios.post('/api/signup', fd, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       })
//       toast.success('Signed up successfully')
//       router.replace('/home')
//     } catch (err: unknown) {
//       const msg = axios.isAxiosError(err)
//         ? (err as AxiosError<{ message?: string }>).response?.data?.message
//         : 'Signup failed'
//       toast.error(msg)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <div className="flex flex-col md:flex-row min-h-screen">
//         {/* Illustration */}
//         <div className="hidden md:flex md:w-1/2 bg-blue-50 items-center justify-center p-6 md:p-12">
//           <Image
//             // src={
//             //   stepOneData.role === 'student'
//             //     ? '/assets/images/Sign up-amico 1.svg'
//             //     : '/assets/images/Sign up-rafiki 1.svg'
//             // }
//             // alt="Signup Illustration"
//             // width={450}
//             // height={450}
//             // className="max-w-full h-auto"


//              src={
//             step === 1
//               ? "/assets/images/Sign up-amico 1.svg"
//               : "/assets/images/Sign up-rafiki 1.svg"
//           }
//           alt="Signup Illustration"
//           className="max-w-full h-auto"
//           width={450}
//             height={450}
//           />
//         </div>
//         <div className="flex-1 flex items-center justify-center p-6 md:p-12">
//           <div className="w-full max-w-lg space-y-6">
//             {step === 1 && (
//               <form onSubmit={onNext} className="space-y-4">
//                 <StepOneForm
//                   data={stepOneData}
//                   onChange={(f, v) => setStepOneData(p => ({ ...p, [f]: v }))}
//                 />
//                 <button
//                   type="submit"
//                   className="mt-4 w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
//                 >
//                   Next
//                 </button>
//               </form>
//             )}

//             {step === 2 && (
//               <form onSubmit={onContinue} className="space-y-4">
//                 <StepTwoForm
//                   data={stepTwoData}
//                   onChange={(f, v) => setStepTwoData(p => ({ ...p, [f]: v }))}
//                 />
//                 <button type="submit" className="mt-4 w-full btn btn-primary">
//                   {stepOneData.role === 'mentor' ? 'Next' : 'Submit'}
//                 </button>
//               </form>
//             )}

//             {step === 3 && (
//               <form onSubmit={onSubmit} className="space-y-4">
//                 <StepThreeForm
//                   data={stepThreeData}
//                   onChange={(field, val) => setStepThreeData(p => ({ ...p, [field]: val }))}
//                   loading={loading}
//                 />
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-4 w-full btn btn-primary"
//                 >
//                   {loading ? 'Submitting…' : 'Submit'}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }





// 'use client'

// import { useState, FormEvent, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import axios, { AxiosError } from 'axios'
// import { toast, ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import Image from 'next/image'
// import Link from 'next/link'

// import StepOneForm from '../../components/auth/signup/StepOne'
// import StepTwoForm from '../../components/auth/signup/StepTwo'
// import StepThreeForm from '../../components/auth/signup/StepThree'
// import { StepOneData, StepTwoData, StepThreeData } from '../../utils/signup'

// export default function SignupForm() {
//   const router = useRouter()
//   const params = useSearchParams()
//   // Read `initialRole` from URL segment, default to 'student'
//   const urlRole = (params.get('initialRole') as 'student' | 'mentor') ?? 'student'

//   const [step, setStep] = useState<1 | 2 | 3>(1)
//   const [loading, setLoading] = useState(false)

//   const [stepOneData, setStepOneData] = useState<StepOneData>({
//     role: urlRole,
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     dob: { dd: '', mm: '', yyyy: '' },
//   })

//   // Keep `stepOneData.role` in sync if URL changes
//   useEffect(() => {
//     setStepOneData(d => ({ ...d, role: urlRole }))
//   }, [urlRole])

//   const [stepTwoData, setStepTwoData] = useState<StepTwoData>({
//     pronoun: '',
//     major: '',
//     photo: null,
//     goals: '',
//     bio: '',
//     linkedin: '',
//     experience: '',
//     specialties: '',
//   })

//   const [stepThreeData, setStepThreeData] = useState<StepThreeData>({
//     tracks: '',
//     skills: '',
//     welcome: '',
//     experienceYears: '',
//     linkedin: '',
//     termsAccepted: false,
//     bio: '',
//     experience: '',
//     specialties: '',
//     loading: false,
//   })

//   const onNext = (e: FormEvent) => {
//     e.preventDefault()
//     if (!stepOneData.firstName.trim()) return toast.error('First name required')
//     if (!stepOneData.lastName.trim())  return toast.error('Last name required')
//     if (!stepOneData.email.trim())     return toast.error('Email required')
//     if (!stepOneData.password)         return toast.error('Password required')
//     if (stepOneData.password !== stepOneData.confirmPassword)
//       return toast.error('Passwords must match')
//     setStep(2)
//   }

//   const onContinue = (e: FormEvent) => {
//     e.preventDefault()
//     if (!stepTwoData.pronoun) return toast.error('Select pronoun')
//     if (!stepTwoData.major)   return toast.error('Select major')
//     if (stepOneData.role === 'mentor') setStep(3)
//     else onSubmit(e)
//   }

//   const onSubmit = async (e: FormEvent) => {
//     e.preventDefault()
//     if (step === 3 && !stepThreeData.termsAccepted) {
//       return toast.error('You must accept the terms')
//     }

//     setLoading(true)
//     try {
//       const fd = new FormData()
//       const d = stepOneData.dob
//       fd.append('dob', `${d.yyyy}-${d.mm}-${d.dd}`)

//       Object.entries(stepOneData).forEach(([k, v]) => {
//         if (k !== 'dob') fd.append(k, String(v))
//       })
//       Object.entries(stepTwoData).forEach(([k, v]) => {
//         if (k === 'photo' && v instanceof File) fd.append('photo', v)
//         else fd.append(k, String(v))
//       })
//       if (step === 3) {
//         Object.entries(stepThreeData).forEach(([k, v]) => {
//           fd.append(k, String(v))
//         })
//       }

//       await axios.post('/api/signup', fd, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       })
//       toast.success('Signed up successfully')
//       router.replace('/home')
//     } catch (err: unknown) {
//       const msg = axios.isAxiosError(err)
//         ? (err as AxiosError<{ message?: string }>).response?.data?.message
//         : 'Signup failed'
//       toast.error(msg)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />

//       <div className="flex flex-col md:flex-row min-h-screen">
//         {/* Illustration */}
//         <div className="hidden md:flex md:w-1/2 bg-blue-50 items-center justify-center p-6 md:p-12">
//           <Image
//             src={
//               // show “student” art on step 1 for students, else mentor art thereafter
//               step === 1 && stepOneData.role === 'student'
//                 ? '/assets/images/Sign up-amico 1.svg'
//                 : '/assets/images/Sign up-rafiki 1.svg'
//             }
//             alt="Signup Illustration"
//             width={450}
//             height={450}
//             className="max-w-full h-auto"
//           />
//         </div>

//         {/* Form + Role Toggle */}
//         <div className="flex-1 flex flex-col space-y-4 p-6 md:p-12">
//           {/* Role switch links */}
//           <div className="flex space-x-4 justify-center">
//             <Link
//               href="/signup/student"
//               className={`px-4 py-2 rounded ${urlRole==='student' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//             >
//               Student
//             </Link>
//             <Link
//               href="/signup/mentor"
//               className={`px-4 py-2 rounded ${urlRole==='mentor' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//             >
//               Mentor
//             </Link>
//           </div>

//           <div className="flex-1 flex items-center justify-center">
//             <div className="w-full max-w-lg">
//               {step === 1 && (
//                 <form onSubmit={onNext} className="space-y-4">
//                   <StepOneForm
//                     data={stepOneData}
//                     onChange={(f, v) =>
//                       setStepOneData(prev => ({ ...prev, [f]: v }))
//                     }
//                   />
//                   <button
//                     type="submit"
//                     className="mt-4 w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white"
//                   >
//                     Next
//                   </button>
//                 </form>
//               )}

//               {step === 2 && (
//                 <form onSubmit={onContinue} className="space-y-4">
//                   <StepTwoForm
//                     data={stepTwoData}
//                     onChange={(f, v) =>
//                       setStepTwoData(prev => ({ ...prev, [f]: v }))
//                     }
//                   />
//                   <button type="submit" className="mt-4 w-full btn btn-primary">
//                     {stepOneData.role === 'mentor' ? 'Next' : 'Submit'}
//                   </button>
//                 </form>
//               )}

//               {step === 3 && (
//                 <form onSubmit={onSubmit} className="space-y-4">
//                   <StepThreeForm
//                     data={stepThreeData}
//                     onChange={(field, val) =>
//                       setStepThreeData(prev => ({ ...prev, [field]: val }))
//                     }
//                     loading={loading}
//                   />
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="mt-4 w-full btn btn-primary"
//                   >
//                     {loading ? 'Submitting…' : 'Submit'}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }





