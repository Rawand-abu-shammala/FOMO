// app/signup/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupIndex() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/signup/student')
  }, [router])

  return null
}
