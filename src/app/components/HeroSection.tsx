import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-center gap-8 py-16 md:py-20 px-4">
      {/* Image on the left */}
      <div className="hidden md:flex md:flex-shrink-0 md:w-1/5 lg:w-1/6">
        <Image
          src="/assets/images/side-left.svg"
          alt="Side Left"
          width={220}
          height={220}
          className="mx-auto"
        />
      </div>

      {/* Central content */}
      <div className="w-full md:flex-1 text-center px-2 sm:px-4">
        <h1 className="text-4xl font-bold mb-4 max-w-xl mx-auto">
          Start Your Tech Journey with Confidence!
        </h1>

        <p className="mb-6 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Whether you are a university student, a recent graduate, or someone looking to switch careers...
          FOMO Techno will guide you toward the tech path that fits you best.
        </p>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full sm:w-1/2 md:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            <Link href="/signup">Join Now for Free</Link>
          </Button>
        </div>
      </div>

      {/* Image on the right */}
      <div className="hidden md:flex md:flex-shrink-0 md:w-1/5 lg:w-1/6">
        <Image
          src="/assets/images/side-right.svg"
          alt="Side Right"
          width={220}
          height={220}
          className="mx-auto"
        />
      </div>
    </section>
  );
}

