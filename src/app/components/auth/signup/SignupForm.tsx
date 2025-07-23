'use client'
// components/auth/signup/SignupForm.tsx
import React, { useState, FormEvent } from 'react'
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StepOneForm from './StepOne'
import StepTwoForm from './StepTwo'
import StepThreeForm from './StepThree'
import { StepOneData, StepTwoData, StepThreeData } from '../../../utils/signup'

interface Props {
  initialRole: 'student' | 'mentor'
  onSwitchRole: (role: 'student' | 'mentor') => void
}

export default function SignupForm({ initialRole, onSwitchRole }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  

  const [stepOneData, setStepOneData] = useState<StepOneData>({
    role: initialRole,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: { dd: '', mm: '', yyyy: '' },
  })

  const [stepTwoData, setStepTwoData] = useState<StepTwoData>({
    pronoun: '',
    major: '',
    photo: null,
    goals: '',
    bio: '',
    linkedin: '',
    experience: '',
    specialties: '',
  })

    const [stepThreeData, setStepThreeData] = useState<StepThreeData>({
    tracks: '',
    skills: '',
    welcome: '',
    experienceYears: '',
    linkedin: '',
    termsAccepted: false,
    bio: '',
    experience: '',
    specialties: '',
    loading: false,
  })

  // Step 1 -> 2
  const handleNext = (e: FormEvent) => {
    e.preventDefault()
    // validations
    if (!stepOneData.firstName.trim()) return toast.error('First name required')
    if (!stepOneData.lastName.trim()) return toast.error('Last name required')
    if (!/\S+@\S+\.\S+/.test(stepOneData.email)) return toast.error('Valid email required')
    if (stepOneData.password.length < 6) return toast.error('Password must be >=6 chars')
    if (stepOneData.password !== stepOneData.confirmPassword) return toast.error('Passwords must match')
    setStep(2)
  }

  // Step 2 -> 3 or submit
  const handleContinue = (e: FormEvent) => {
    e.preventDefault()
    if (!stepTwoData.pronoun) return toast.error('Select pronoun')
    if (!stepTwoData.major) return toast.error('Select major')

    if (stepOneData.role === 'mentor') {
      setStep(3)
    } else {
      handleSubmit(e)
    }
  }

  // Final submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (step === 3 && !stepThreeData.termsAccepted) return toast.error('Accept terms')
    setLoading(true)
    try {
      const fd = new FormData()
      const d = stepOneData.dob
      fd.append('dob', `${d.yyyy}-${d.mm}-${d.dd}`)
      Object.entries(stepOneData).forEach(([k, v]) => { if (k !== 'dob') fd.append(k, String(v)) })
      Object.entries(stepTwoData).forEach(([k, v]) => {
        if (k === 'photo' && v instanceof File) fd.append('photo', v)
        else fd.append(k, String(v))
      })
      if (step === 3) Object.entries(stepThreeData).forEach(([k, v]) => fd.append(k, String(v)))
      await fetch('/api/signup', { method: 'POST', body: fd })
      toast.success('Signed up successfully');
      router.push("/home");
    } catch {
      toast.error('Signup failed')
    } finally {
      setLoading(false)
    }
  }

  // Handle Step1 field changes
  const handleStepOneChange = (
    field: keyof StepOneData | `dob.${keyof StepOneData['dob']}`,
    value: string
  ) => {
    if (field === 'role') {
      onSwitchRole(value as 'student' | 'mentor')
      return
    }
    if (field.startsWith('dob.')) {
      const key = field.split('.')[1] as keyof StepOneData['dob']
      setStepOneData(p => ({ ...p, dob: { ...p.dob, [key]: value } }))
    } else {
      setStepOneData(p => ({ ...p, [field]: value }))
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left illustration */}
      <div className="md:w-1/2 w-full bg-blue-50 flex items-center justify-center p-6 md:p-12">
        <Image
          src={
            step === 1
              ? '/assets/images/Sign up-amico 1.svg'
              : step === 2
              ? '/assets/images/Sign up-rafiki 1.svg'
              : '/assets/images/Sign up-third-step.svg'
          }
          alt="Signup Illustration"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6 md:p-12">
        {step === 1 && (
          <form onSubmit={handleNext} className="w-full max-w-lg space-y-6">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <p className="text-gray-600 text-center">
              Join us today and unlock access to exclusive features. Sign up in just a few steps!
            </p>
            <StepOneForm data={stepOneData} onChange={handleStepOneChange} />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleContinue} className="w-full max-w-lg space-y-6">
            <h1 className="text-3xl font-bold text-center">More Details</h1>
            <p className="text-gray-600 text-center">
              Complete your profile by providing additional information.
            </p>
            <StepTwoForm data={stepTwoData} onChange={(f, v) => setStepTwoData(p => ({ ...p, [f]: v }))} />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg">
              {stepOneData.role === 'mentor' ? 'Next' : 'Submit'}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <h1 className="text-3xl font-bold text-center">Almost There!</h1>
            <p className="text-gray-600 text-center">
              Share your expertise and finalize your mentor profile. You are just one step away!
            </p>
            <StepThreeForm data={stepThreeData} onChange={(f, v) => setStepThreeData(p => ({ ...p, [f]: v }))} loading={loading} />
            <button disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded-lg">
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}





