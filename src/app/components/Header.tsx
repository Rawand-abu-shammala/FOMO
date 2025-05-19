'use client'
import { useState } from 'react'
import Link from 'next/link'
import Menu from '@/components/icons/menu-svgrepo-com'
import X    from '@/components/icons/close-svgrepo-com'
import Profile from '@/components/icons/profile-circle'
import Logo    from '@/components/icons/logo'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = ['Home', 'Mentors', 'Favourite', 'Saved']

  return (
    <header className="bg-white shadow sticky top-0 z-20 bg-white border-b-0 h-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo + FOMO */}
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
          <Logo className="w-8 h-8" />
          <span>FOMO</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          {navItems.map((t) => (
            <Link
              key={t}
              href={t === 'Home' ? '/' : `/${t.toLowerCase()}`}
              className="hover:text-blue-600"
            >
              {t}
            </Link>
          ))}
        </nav>

        {/* Desktop profile */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            href="/profile"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <Profile className="w-5 h-5" />
            <span>My Profile</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-white">
          {[...navItems, 'My Profile'].map((t) => {
            const href =
              t === 'My Profile'
                ? '/profile'
                : t === 'Home'
                ? '/'
                : `/${t.toLowerCase()}`

            return (
              <Link
                key={t}
                href={href}
                className="flex items-center p-4 border-t space-x-2 text-gray-700 hover:bg-gray-50"
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




