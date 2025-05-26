import Hero from '@/components/Hero'
import HowIWork from '@/components/HowIWork'
import CaseStudies from '@/components/CaseStudies'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  return (
    <main className="bg-dark text-white min-vh-75">
      <Navbar/>
      <Hero />
      <HowIWork />
      <CaseStudies />
    </main>
  )
}
