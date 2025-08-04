import Link from 'next/link';
// import { Button } from 'shadcn/ui/button';
import { Button } from '@/components/ui/button';


export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/images/logo.svg" alt="FOMO Logo" className="h-8" />
        <span className="text-xl font-bold">FOMO</span>
      </div>
      <nav className="flex items-center gap-4">
        <Link href="#" className="font-medium">تسجيل الدخول</Link>
        <Button>انضم الآن</Button>
      </nav>
    </header>
  );
}