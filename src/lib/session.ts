import { cookies } from 'next/headers'

export async function getUserRoleFromCookie(): Promise<'student' | 'mentor' | null> {
  try {
    // cookies() returns a Promise in this Next.js version; await it first
    const cookieStore = await cookies();
    const cookie = cookieStore.get('userRole')?.value
    if (!cookie) return null
    if (cookie === 'student' || cookie === 'mentor') return cookie
    return null
  } catch (err) {
    console.error('Error reading userRole cookie', err)
    return null
  }
}