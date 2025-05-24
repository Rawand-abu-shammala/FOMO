import Link from 'next/link'
import Logo from '@/components/icons/logo2'
import { Facebook, Instagram, Twitter, Linkedin, Call, Sms2 } from '@/components/icons'

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="container mx-auto px-8 py-12
                      grid grid-cols-1 lg:grid-cols-2
                      gap-y-16
                      gap-x-1    
                      items-start">
        
        <div className="flex flex-col space-y-6 px-4 max-w-xs">
          <Link href="/" className="flex items-center space-x-2 text-3xl">
            <Logo className="w-10 h-10 text-white" />
            <span>FOMO</span>
          </Link>
          <p className="leading-snug">
            FOMO Techno helps students explore tech fields
            and start their careers with the right
            guidance and resources.
          </p>
          <div className="flex items-center space-x-4">
            <Call className="w-5 h-5" />
            <span>+1 234 567 8900</span>
          </div>
          <div className="flex items-center space-x-4">
            <Sms2 className="w-5 h-5" />
            <span>fomo@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-24">
          {/* First list */}
          <div className="flex flex-col space-y-3 lg:mt-6">
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

          {/* Second list */}
          <div className="flex flex-col space-y-3 lg:mt-6">
            {['Terms & Conditions', 'Privacy Policy', 'Feedback'].map(item => (
              <Link
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/&|\s+/g, match => (match === '&' ? 'and' : '-'))}`}
                className="hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center sm:justify-start lg:justify-end">
            <Facebook className="w-6 h-6 text-white hover:text-gray-200" />
            <Instagram className="w-6 h-6 text-white hover:text-gray-200" />
            <Twitter className="w-6 h-6 text-white hover:text-gray-200" />
            <Linkedin className="w-6 h-6 text-white hover:text-gray-200" />
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm">
        © {new Date().getFullYear()} FOMO Tech. All rights reserved.
      </div>
    </footer>
  )
}
