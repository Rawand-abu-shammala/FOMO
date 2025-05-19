// app/not-found.tsx
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-500 mb-6">
        Page Not Found
      </p>
      <Link
        href="/"
        className="text-xl underline text-blue-700 hover:text-blue-900 transition"
      >
        Go to home page
      </Link>
    </div>
  )
}
