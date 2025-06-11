// 'use client'
// import { useState } from 'react'
// import Link from 'next/link'
// import Menu from '@/components/icons/menu-svgrepo-com'
// import X    from '@/components/icons/close-svgrepo-com'
// import Profile from '@/components/icons/profile-circle'
// import Logo    from '@/components/icons/logo'
// import { Button } from '@/components/ui/button'

// export default function Header() {
//   const [open, setOpen] = useState(false)

//   const navItems = ['Home', 'Mentors', 'Favourite', 'Saved']

//   return (
//     <header className="bg-white shadow sticky top-0 z-20 border-b-0 h-16">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* LEFT GROUP: Logo + Nav */}
//         <div className="flex items-center space-x-12">
//           <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
//             <Logo className="w-8 h-8" />
//             <span>FOMO</span>
//           </Link>
//           <nav className="hidden md:flex space-x-6 text-gray-700">
//             {navItems.map((t) => (
//               <Link
//                 key={t}
//                 href={t === 'Home' ? '/' : `/${t.toLowerCase()}`}
//                 className="hover:text-blue-600"
//               >
//                 {t}
//               </Link>
//             ))}
//           </nav>
//         </div>

//         {/* RIGHT GROUP: Profile + Mobile Button */}
//         <div className="flex items-center space-x-2">
//           {/* Desktop profile */}
//           <div className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600">
//             <Link href="/profile" className="flex items-center space-x-1">
//               <Profile className="w-5 h-5" />
//               <span>My Profile</span>
//             </Link>
//           </div>
//           {/* Mobile menu button */}
//           <Button variant="ghost" className="md:hidden" onClick={() => setOpen(!open)}>
//             {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile nav */}
//       {open && (
//         <nav className="md:hidden bg-white">
//           {[...navItems, 'My Profile'].map((t) => {
//             const href =
//               t === 'My Profile'
//                 ? '/profile'
//                 : t === 'Home'
//                 ? '/'
//                 : `/${t.toLowerCase()}`

//             return (
//               <Link
//                 key={t}
//                 href={href}
//                 className="flex items-center p-4 border-t space-x-2 text-gray-700 hover:bg-gray-50"
//               >
//                 {t === 'My Profile' && <Profile className="w-5 h-5" />}
//                 <span>{t}</span>
//               </Link>
//             )
//           })}
//         </nav>
//       )}
//     </header>
//   )
// }




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
import { Input } from '@/components/ui/input' // أو استخدم <input> عادي إذا لم تملك Input من shadcn/ui
import { Search } from 'lucide-react' // أو أي أيقونة تبحث عنها

export default function Header() {
  const [open, setOpen] = useState(false)
  const navItems = ['Home', 'Mentors', 'Favourite', 'Saved']

  // Next.js navigation hooks
  const pathname = usePathname() || ''
  const searchParams = useSearchParams()
  const router = useRouter()

  // نريد إظهار البحث فقط في صفحة القائمة /track
  const showSearch = pathname === '/track'

  // القيمة الابتدائية للبحث إذا هناك query param
  const initialSearch = showSearch ? (searchParams.get('search') || '') : ''
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  // عند تغيير المسار أو query params، نحدث الحالة
  useEffect(() => {
    if (pathname === '/track') {
      setSearchTerm(searchParams.get('search') || '')
    } else {
      // إذا خرجنا من صفحة /track، نمسح القيمة
      setSearchTerm('')
      // وأغلِق القوائم المفتوحة
      setOpen(false)
    }
  }, [pathname, searchParams])

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = searchTerm.trim()
    // إذا الحقل فارغ، نذهب إلى /track بدون query، أما إذا فيه نص نمرره
    const base = '/track'
    const target = trimmed
      ? `${base}?search=${encodeURIComponent(trimmed)}`
      : base
    // توجه إلى صفحة المسارات مع query param
    router.push(target)
    // إذا نريد إغلاق الموبايل منيو بعد البحث:
    setOpen(false)
  }

  return (
    <header className="bg-white shadow sticky top-0 z-20 border-b-0 h-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* LEFT GROUP: Logo + Nav */}
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Logo className="w-8 h-8" />
            <span>FOMO</span>
          </Link>
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
            {/* يمكن إضافة رابط للمسارات هنا */}
            <Link
              href="/track"
              className={`hover:text-blue-600 ${pathname === '/track' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Track
            </Link>
          </nav>
        </div>

        {/* MIDDLE/OPTIONAL: Search only on /track */}
        {showSearch && (
          <form
            onSubmit={onSearchSubmit}
            className="relative hidden md:block mx-4 flex-shrink-0"
          >
            <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={16} />
            <Input
              type="text"
              placeholder="Search for track..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-1 text-sm w-64"
            />
          </form>
        )}

        {/* RIGHT GROUP: Profile + Mobile Button */}
        <div className="flex items-center space-x-2">
          {/* Desktop profile */}
          <div className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600">
            <Link href="/profile" className="flex items-center space-x-1">
              <Profile className="w-5 h-5" />
              <span>My Profile</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-white border-t">
          {/* إذا في صفحة track ونريد عرض حقل البحث ضمن الموبايل: */}
          {showSearch && (
            <form onSubmit={onSearchSubmit} className="relative p-4">
              <Search className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search for track..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-3 py-2 w-full text-sm"
              />
            </form>
          )}

          {[...navItems, 'Track', 'My Profile'].map((t) => {
            let href: string
            if (t === 'My Profile') href = '/profile'
            else if (t === 'Home') href = '/'
            else if (t === 'Track') href = '/track'
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
