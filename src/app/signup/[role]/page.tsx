'use client'

import React, { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SignupForm from '../../components/auth/signup/SignupForm'

export default function SignupPage() {
  const { role: initialRole } = useParams() as
    { role: 'student' | 'mentor' }
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [initialRole])

  const switchRole = (newRole: 'student' | 'mentor') => {
    router.push(`/signup/${newRole}`)
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <SignupForm
        initialRole={initialRole}
        onSwitchRole={switchRole}
      />
    </>
  )
}


