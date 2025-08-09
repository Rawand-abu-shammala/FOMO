// app/home/page.tsx
import Hero from './Hero'
import Card from '../components/Card'
import { getCardsForRole } from '../utils/data'
import type { CardType } from '../utils/type'
import { getUserRoleFromCookie } from '@/lib/session'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const role = await getUserRoleFromCookie() // 'student' | 'mentor' | null

  const cards: CardType[] = getCardsForRole(role ?? 'student')

  return (
    <>
      <Hero role={role ?? undefined} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          {role === 'mentor'
            ? 'Welcome back — resources for mentors'
            : 'Explore Learning Paths And Tech Resources'}
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

