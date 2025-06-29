// app/home/page.tsx
import Hero from './Hero';
import Card from '../components/Card';
import { cards } from '../utils/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Explore Learning Paths And Tech Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.slug} {...c} />
          ))}
        </div>
      </section>
    </>
  );
}
