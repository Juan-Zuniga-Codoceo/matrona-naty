import Navbar from '@/components/layout/navbar'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Pricing from '@/components/sections/pricing'
export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
    </main>
  )
}