import ContactHero from '@/components/contact/hero'
import ContactCards from '@/components/contact/contact-cards'
import ContactForm from '@/components/contact/contact-form'
import Industries from '@/components/contact/industries'
import FAQ from '@/components/contact/faq'
import CTA from '@/components/contact/cta'

export const metadata = {
  title:
    'Contact Mark Reader | Enterprise OMR Solutions & OMR Software India',

  description:
    'Contact Mark Reader for enterprise OMR software, OMR scanning, OMR evaluation and intelligent assessment infrastructure solutions.',

  keywords: [
    'Contact Mark Reader',
    'OMR Software India',
    'OMR Solutions',
    'OMR Scanner',
    'OMR Evaluation',
    'Enterprise OMR',
  ],

  alternates: {
    canonical: 'https://omr.in/contact',
  },

  openGraph: {
    title:
      'Contact Mark Reader | Enterprise OMR Solutions',

    description:
      'Get in touch for enterprise OMR software and intelligent assessment infrastructure.',

    url: 'https://omr.in/contact',

    siteName: 'Mark Reader',

    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-[#020617] text-white">
      <ContactHero />

      <ContactCards />

      <ContactForm />

      <Industries />

      <FAQ />

      <CTA />
    </main>
  )
}