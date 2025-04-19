import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Impact } from "@/components/Impact"
import { Gallery } from "@/components/Gallery"
import { Credibility } from "@/components/Credibility"
import { Donate } from "@/components/Donate"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-24 py-16 md:py-24">
        <Impact />
        <Gallery />
        <Credibility />
        <Donate />
        <Contact />
      </div>
      <Footer />
    </main>
  )
} 