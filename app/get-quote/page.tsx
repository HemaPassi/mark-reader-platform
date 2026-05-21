import Hero from '@/components/quote/hero'
import QuoteForm from '@/components/quote/quote-form'
import TrustPanel from '@/components/quote/trust-panel'
import QuickContact from '@/components/quote/quick-contact'
import FAQ from '@/components/quote/faq'
import CTA from '@/components/quote/cta'

import EnterpriseAssurance from '@/components/quote/enterprise-assurance'

import FloatingWhatsapp from '@/components/global/floating-whatsapp'

import ServiceJsonLd from '@/components/seo/service-jsonld'

export const metadata = {
  title:
    'Get Enterprise OMR Quote | OMR Software & Assessment Solutions India',

  description:
    'Request enterprise OMR software, OMR scanning, OMR evaluation and intelligent assessment infrastructure quote from Mark Reader.',

  keywords: [
    'OMR Quote',
    'OMR Software Quote',
    'Enterprise OMR',
    'OMR Scanner',
    'OMR Evaluation',
    'Assessment Infrastructure',
    'OMR India',
  ],

  alternates: {
    canonical: 'https://omr.in/get-quote',
  },
}

export default function GetQuotePage() {
  return (
    <>
      <ServiceJsonLd />

      <FloatingWhatsapp />

      <main className="bg-[#020617] text-white">
        <Hero />

        <EnterpriseAssurance />

        <QuoteForm />

        <TrustPanel />

        <QuickContact />

        <FAQ />

        <CTA />
      </main>
    </>
  )
}