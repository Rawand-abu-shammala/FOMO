// app/page.jsx
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      
      <section className="-mt-16 pt-16 bg-blue-50 rounded-b-xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, Hala Alastal!<br />Your Tech Journey Starts Here
          </h1>
          <p className="text-gray-700 mb-6">
            FOMO techno is a guidance platform designed to help arab students explore software engineering...
          </p>
          <Button className='bg-blue-600 text-white' size="lg">Start Exploring</Button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/images/hero.png"
            alt="Hero"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

    </>
  )
}


