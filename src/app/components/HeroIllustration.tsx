'use client';
import Image from 'next/image';

export default function HeroIllustration() {
  return (
    <Image
      src="/assets/images/contact.svg"
      alt="Contact Us Illustration"
      fill
      className="object-contain rounded-lg"
    />
  );
}
