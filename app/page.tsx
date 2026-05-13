import Hero from '@/components/sections/hero-section'
import WorkFlow from '@/components/sections/workflow-section'
import Services from '@/components/sections/services-section'
import BookNow from  '@/components/sections/book-now'
import Footer from '@/components/sections/footer'
import Header from "@/components/sections/header"


export default function MarkReaderHomepage() {
  
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_40%)]" />

      {/* Navbar */}
      <Header/>

      {/* Hero */}
      <Hero />

      {/* Workflow */}
    <WorkFlow />

      {/* Services */}
      <Services  />

      {/* CTA */}
      <BookNow />

      {/* Footer */}
      <Footer />
    </main>
  )
}
