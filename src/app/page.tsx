import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MentorCard from './components/MentorCard';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <HeroSection/>
        <MentorCard />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}

