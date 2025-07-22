'use client'

import React, { useState, FormEvent } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import StepOneForm from './StepOne'
import StepTwoForm from './StepTwo'
import StepThreeForm from './StepThree'
import { StepOneData, StepTwoData, StepThreeData } from '../../../utils/signup'

interface SignupFormProps {
  initialRole: 'student' | 'mentor'
  onSwitchRole: (role: 'student' | 'mentor') => void
}

export default function SignupForm({ initialRole, onSwitchRole }: SignupFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [loading, setLoading] = useState(false)

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

  // خطوة 1 → 2
  const handleNext = (e: FormEvent) => {
    e.preventDefault()
    if (!stepOneData.firstName.trim()) return toast.error('First name required')
    if (!stepOneData.lastName.trim())  return toast.error('Last name required')
    if (!stepOneData.email.trim())     return toast.error('Email required')
    if (!stepOneData.password)         return toast.error('Password required')
    if (stepOneData.password !== stepOneData.confirmPassword)
      return toast.error('Passwords must match')
    setStep(2)
  }

  // خطوة 2 → 3 أو إرسال (طالب)
  const handleContinue = (e: FormEvent) => {
    e.preventDefault()
    if (!stepTwoData.pronoun) return toast.error('Select pronoun')
    if (!stepTwoData.major)   return toast.error('Select major')
    if (stepOneData.role === 'mentor') setStep(3)
    else handleSubmit(e)
  }

  // الإرسال النهائي
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (step === 3 && !stepThreeData.termsAccepted) {
      return toast.error('You must accept the terms')
    }
    setLoading(true)
    try {
      const fd = new FormData()
      // append stepOneData
      const dob = stepOneData.dob
      fd.append('dob', `${dob.yyyy}-${dob.mm}-${dob.dd}`)
      Object.entries(stepOneData).forEach(([k, v]) => {
        if (k !== 'dob') fd.append(k, String(v))
      })
      // append stepTwoData
      Object.entries(stepTwoData).forEach(([k, v]) => {
        if (k === 'photo' && v instanceof File) fd.append('photo', v)
        else fd.append(k, String(v))
      })
      // append stepThreeData if mentor
      if (step === 3) {
        Object.entries(stepThreeData).forEach(([k, v]) => {
          fd.append(k, String(v))
        })
      }
      await fetch('/api/signup', {
        method: 'POST',
        body: fd,
      })
      toast.success('Signed up successfully')
    } catch {
      toast.error('Signup failed')
    } finally {
      setLoading(false)
    }
  }

  // عند تغيير بيانات الخطوة الأولى 
  const handleStepOneChange = (
    field: keyof Omit<StepOneData, 'dob'> | `dob.${keyof StepOneData['dob']}`,
    value: string
  ) => {
    if (field === 'role') {
      onSwitchRole(value as 'student' | 'mentor')
      return
    }

    if (field.startsWith('dob.')) {
      // نفصل dd أو mm أو yyyy
      const part = field.split('.')[1] as keyof StepOneData['dob']
      setStepOneData(prev => ({
        ...prev,
        dob: {
          ...prev.dob,
          [part]: value,
        },
      }))
    } else {
      setStepOneData(prev => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {step === 1 && (
        <form onSubmit={handleNext} className="w-full max-w-md space-y-6">
          <StepOneForm
            data={stepOneData}
            onChange={handleStepOneChange}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleContinue} className="w-full max-w-md space-y-6">
          <StepTwoForm
            data={stepTwoData}
            onChange={(f, v) => setStepTwoData(p => ({ ...p, [f]: v }))}
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            {stepOneData.role === 'mentor' ? 'Next' : 'Submit'}
          </button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <StepThreeForm
            data={stepThreeData}
            onChange={(f, v) => setStepThreeData(p => ({ ...p, [f]: v }))}
            loading={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg"
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </form>
      )}
    </>
  )
}





