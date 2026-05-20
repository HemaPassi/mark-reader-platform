import About from "@/components/sections/about-section";
import {highlights }  from '@/lib/constants'
import  Mission  from '@/components/sections/our-mission'
import CompanyOverview from '@/components/sections/company-overview'
import Testimonials from '@/components/sections/testimonial'



export default function AboutPage() {
  return (
    <main className="bg-[#020617] text-white">
      {/* <About /> */}
     <CompanyOverview />
      {/* Mission Section */}
      <Mission />
       <Testimonials />
    </main>
  );
}