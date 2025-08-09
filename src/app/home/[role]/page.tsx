// app/home/[role]/page.tsx
import Hero from '../Hero'
import Card from '../../components/Card'
import { getCardsForRole } from '../../utils/data'
import type { Role, CardType } from '../../utils/type'
import { notFound } from 'next/navigation'

// Next.js 15: params is a Promise, so type it and await it inside the component
type PageProps = {
  params: Promise<{ role: string }>
}

export default async function HomeByRole({ params }: PageProps) {
  const { role: rawRole } = await params

  // validate role
  if (rawRole !== 'student' && rawRole !== 'mentor') return notFound()

  const role = rawRole as Role
  const cards: CardType[] = getCardsForRole(role)

  return (
    <>
      <Hero role={role} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          {role === 'student' ? 'Discover learning paths for students' : 'Explore resources for mentors'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.slug} {...c} />
          ))}
        </div>
      </section>
    </>
  )
}


