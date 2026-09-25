'use client'
// app/components/auth/signup/SignupForm.tsx

import Image from 'next/image'
import 'react-toastify/dist/ReactToastify.css'
import StepOneForm from './StepOne'
import StepTwoForm from './StepTwo'
import StepThreeForm from './StepThree'
import { useSignupForm } from '@/hooks/useSignupForm'

interface Props {
  initialRole: 'student' | 'mentor'
  onSwitchRole: (role: 'student' | 'mentor') => void
}

export default function SignupForm({ initialRole, onSwitchRole }: Props) {
  const {
    step,
    loading,
    stepOneData,
    stepTwoData,
    stepThreeData,
    handleNext,
    handleContinue,
    handleSubmit,
    handleStepOneChange,
    handleStepTwoChange,
    handleStepThreeChange,
  } = useSignupForm({ initialRole, onSwitchRole })

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
              : '/assets/images/Sign up-rafiki 1.svg'
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
            <h2 className='text-xl'>I Went To</h2>
            <StepOneForm data={stepOneData} onChange={handleStepOneChange} />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg cursor-pointer">
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
            <StepTwoForm data={stepTwoData} onChange={handleStepTwoChange} />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg cursor-pointer">
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
            <StepThreeForm data={stepThreeData} onChange={handleStepThreeChange} loading={loading} />
            <button disabled={loading} className="w-full py-3 bg-blue-600 text-white rounded-lg cursor-pointer">
              {loading ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}




