// src/components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Menu from '@/components/icons/menu-svgrepo-com'
import X from '@/components/icons/close-svgrepo-com'
import Profile from '@/components/icons/profile-circle'
import Logo from '@/components/icons/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'Mentors', 'Favourite', 'Saved']

  // Next.js navigation hooks
  const pathname = usePathname() || ''
  const searchParams = useSearchParams()
  const router = useRouter()

  // Show search only on /tracks
  const showSearch = pathname === '/tracks'

  const initialSearch = showSearch ? (searchParams.get('search') || '') : ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  useEffect(() => {
    if (pathname === '/tracks') {
      setSearchTerm(searchParams.get('search') || '')
    } else {
      setSearchTerm('')
      setOpen(false)
    }
  }, [pathname, searchParams])

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = searchTerm.trim()
    const base = '/tracks'
    const target = trimmed
      ? `${base}?search=${encodeURIComponent(trimmed)}`
      : base
    router.push(target)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 bg-white shadow">
      <div className="container mx-auto flex min-h-16 items-center justify-between gap-2 px-4 py-2">
        {/* LEFT GROUP: Logo + Nav */}
        <div className="flex min-w-0 shrink items-center gap-4 xl:gap-12">
          <Link href="/home" className="flex shrink-0 items-center gap-2 text-2xl font-bold text-blue-600">
            <Logo className="w-8 h-8" />
            <span>FOMO</span>
          </Link>
          <nav className="hidden xl:flex gap-6 text-gray-700">
            {navItems.map((t) => (
              <Link
                key={t}
                href={t === 'Home' ? '/home' : `/${t.toLowerCase()}`}
                className="hover:text-blue-600"
              >
                {t}
              </Link>
            ))}
          </nav>
        </div>

        {/* MIDDLE/OPTIONAL: Search only on /tracks */}
        {showSearch && (
          <>
            {/* Mobile & Tablet: visible below lg */}
            <form
              onSubmit={onSearchSubmit}
              className="relative mx-1 min-w-0 flex-1 xl:hidden"
            >
              <Input
                type="text"
                placeholder="Search for track..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-3 pr-3 py-1 text-sm w-full"
              />
            </form>
            {/* Desktop: visible at lg+ */}
            <form
              onSubmit={onSearchSubmit}
              className="relative mx-4 hidden shrink-0 xl:block"
            >
              <Input
                type="text"
                placeholder="Search for track..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-1 text-sm w-40 md:w-64"
              />
            </form>
          </>
        )}

        {/* RIGHT GROUP: Profile + Mobile Button */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Desktop profile */}
          <div className="hidden xl:flex items-center gap-1 text-gray-700 hover:text-blue-600">
            <Link href="/my-profile" className="flex items-center gap-1 whitespace-nowrap">
              <Profile className="w-5 h-5" />
              <span className="whitespace-nowrap">My Profile</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <Button variant="ghost" className="cursor-pointer xl:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="xl:hidden bg-white border-t">
          {[...navItems, 'Tracks', 'My Profile'].map((t) => {
            let href: string
            if (t === 'My Profile') href = '/profile'
            else if (t === 'Home') href = '/'
            else if (t.toLowerCase() === 'tracks') href = '/tracks'
            else href = `/${t.toLowerCase()}`
            const isActive = pathname === href
            return (
              <Link
                key={t}
                href={href}
                className={`flex items-center p-4 border-t space-x-2 text-gray-700 hover:bg-gray-50 ${
                  isActive ? 'bg-gray-100 font-semibold text-blue-600' : ''
                }`}
                onClick={() => setOpen(false)}
              >
                {t === 'My Profile' && <Profile className="w-5 h-5" />}
                <span>{t}</span>
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}


