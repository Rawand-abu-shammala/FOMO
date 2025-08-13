'use client'

// app/error.tsx
import { useEffect } from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Error thrown in a route segment:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="text-4xl font-semibold text-red-600 mb-4">
        Something went wrong
      </div>
      <p className="text-lg text-gray-700 mb-6">
        {error.message}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition cursor-pointer"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block text-blue-700 underline text-lg self-center"
        >
          Go to home page
        </Link>
      </div>
    </div>
  )
}


