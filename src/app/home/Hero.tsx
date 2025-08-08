// app/home/Hero.tsx
'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import type { Role } from '../utils/type'

export default function Hero({ role }: { role?: Role }) {
  const isMentor = role === 'mentor'

  const title = isMentor
    ? 'Welcome back, [Rawand Abu Shammala]!'
    : 'Welcome, Rawand Abu Shammala! Your Tech Journey Starts Here'

  const subtitle = isMentor
  ? 'You are an essential part of helping Arab students understand their academic and career paths in tech.On FOMO Techno , you can share your expertise, publish articles, and answer student inquiries to guide them toward informed decisions.'
  : 'FOMO Techno is a guidance platform designed to help Arab students explore software engineering, computer science, and IT fields. It provides essential resources, mentorship, and career insights to bridge the gap between academia and the job market, empowering students to make informed career decisions.'

  const imgSrc = isMentor ? '/assets/images/mentor-hero.svg' : '/assets/images/hero.svg'
  const ctaLabel = isMentor ? 'Get Started Now' : 'Start Exploring'
  const ctaHref = isMentor ? '/signup/mentor' : '/signup/student'

  return (
    <section className="-mt-16 pt-16 bg-blue-50 rounded-b-xl p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-gray-700 mb-6">
          {subtitle}
        </p>
        <Button asChild className="bg-blue-600 text-white" size="lg">
          {/* If your Button supports asChild (shadcn), otherwise use <a> or Link */}
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
      <div className="flex-1">
        <Image
          src={imgSrc}
          alt={isMentor ? 'Mentor hero' : 'Hero'}
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  )
}


