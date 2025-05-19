// app/home/page.tsx
import Hero from './Hero'
import  Card  from '../components/Card'

export default function HomePage() {
  return (
    <>
      <Hero  />
       <section className="max-w-7xl mx-auto px-4 py-12">
         <h2 className="text-2xl font-semibold mb-6">Explore Learning Paths And Tech Resources</h2>
         <Card id='' title='' description='' image=''  />
         {/* <Card id="react" title="React" description="..." image="/images/tracks/react.jpg" /> */}

       </section>
     </>
  )
}


