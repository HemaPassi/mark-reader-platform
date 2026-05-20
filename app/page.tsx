import Link from "next/link";
import Hero from "@/components/sections/hero-section";
import WorkFlow from "@/components/sections/workflow-section";
import Services from "@/components/sections/services-section";
import BookNow from "@/components/sections/book-now";
import About from "@/components/sections/about-section";
import Strength from "@/components/sections/strength-section";
import Testimonials from '@/components/sections/testimonial'

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      <Hero />
      <About />
      <WorkFlow />
      <Services />
      <Strength />
      <Testimonials />
      <BookNow />
    </main>
  );
}
