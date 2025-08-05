import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';

export default function Navbar() {
  return (
    <header className="relative mx-auto top-4 z-20 w-full max-w-7xl flex items-center justify-between px-4 sm:px-10 py-2 sm:py-4 bg-white rounded-4xl shadow-lg">
      <div className="flex items-center gap-1">
        <Logo className="h-6 sm:h-10 w-auto" />
        <span className="text-lg sm:text-2xl font-extrabold text-blue-600">
          FOMO
        </span>
      </div>

      <nav className="flex items-center gap-3 sm:gap-6">
        <Button className="text-sm sm:text-base font-medium text-blue-600 border border-blue-600 rounded-full w-24 sm:w-32 text-center py-1 sm:py-2 hover:bg-blue-50 transition-colors">

        <Link href="/login"> 
          Login
        </Link>
        </Button>
        <Button className="bg-blue-600 text-white rounded-full w-24 sm:w-32 py-1 sm:py-2 text-sm sm:text-base hover:bg-blue-700 transition-colors">
         <Link href="/signup">Join Now</Link>
        </Button>
      </nav>
    </header>
  );
}
