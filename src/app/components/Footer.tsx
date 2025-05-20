// components/Footer.tsx
import Link from 'next/link'
import Logo from '@/components/icons/logo2'
import { Facebook, Instagram, Twitter, Linkedin, Call, Sms2 } from '@/components/icons'

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Logo + info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Logo className="w-8 h-8 text-white" />
            <span>FOMO</span>
          </Link>
          <p>Empowering students to dive into tech fields with confidence.</p>
          <div className="flex items-center space-x-2">
            <Call className="w-5 h-5" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sms2 className="w-5 h-5" />
            <span>fomo@gmail.com</span>
          </div>
        </div>

        {/* Column 2: Company links */}
        <div className="flex flex-col space-y-3 pl-8">
          <h4 className="font-semibold">Company</h4>
          {['Home', 'About Us', 'Contact Us'].map(item => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Column 3: Legal links */}
        <div className="flex flex-col space-y-3 pl-8">
          <h4 className="font-semibold">Legal</h4>
          {['Terms & Conditions', 'Privacy Policy', 'Feedback'].map(item => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/&|\s+/g, match => match === '&' ? 'and' : '-')}`}
              className="hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Column 4: Social icons */}
        <div className="flex items-center space-x-4 justify-start sm:justify-end">
          <Facebook className="w-6 h-6 text-white hover:text-gray-200" />
          <Instagram className="w-6 h-6 text-white hover:text-gray-200" />
          <Twitter className="w-6 h-6 text-white hover:text-gray-200" />
          <Linkedin className="w-6 h-6 text-white hover:text-gray-200" />
        </div>
      </div>

      <div className="text-center py-4 text-sm">
        © {new Date().getFullYear()} FOMO Tech. All rights reserved.
      </div>
    </footer>
  )
}



