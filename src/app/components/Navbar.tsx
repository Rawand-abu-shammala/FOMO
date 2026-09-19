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

      <nav className="flex shrink-0 items-center gap-2 sm:gap-6">
        <Button asChild className="w-20 rounded-full border border-blue-600 py-1 text-center text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50 sm:w-32 sm:py-2 sm:text-base">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild className="w-20 rounded-full bg-blue-600 py-1 text-xs text-white transition-colors hover:bg-blue-700 sm:w-32 sm:py-2 sm:text-base">
          <Link href="/signup">Join Now</Link>
        </Button>
      </nav>
    </header>
  );
}
