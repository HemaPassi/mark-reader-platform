// components/quote/quick-contact.tsx

import Link from 'next/link'
import {
  CalendarDays,
  Mail,
  MessageCircle,
  Phone,
  Clock3,
  ArrowRight,
} from 'lucide-react'

const contactOptions = [
  {
    title: 'Email Support',
    description:
      'Connect with our enterprise OMR specialists via email.',
    value: 'info@omr.in',
    href: 'mailto:info@omr.in',
    icon: Mail,
    color:
      'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  },
  {
    title: 'WhatsApp Business',
    description:
      'Get faster responses for enterprise inquiries and OMR consultations.',
    value: 'Instant Business Chat',
    href: 'https://wa.me/919999999999',
    icon: MessageCircle,
    color:
      'from-green-500/10 to-emerald-500/10 border-green-500/20',
  },
  {
    title: 'Enterprise Consultation',
    description:
      'Schedule a callback for enterprise assessment infrastructure discussions.',
    value: '+91 XXXXX XXXXX',
    href: 'tel:+919999999999',
    icon: Phone,
    color:
      'from-orange-500/10 to-yellow-500/10 border-orange-500/20',
  },
  {
    title: 'Book A Meeting',
    description:
      'Schedule a dedicated consultation session with our experts.',
    value: 'Google Meet / Zoom',
    href: '/contact',
    icon: CalendarDays,
    color:
      'from-purple-500/10 to-pink-500/10 border-purple-500/20',
  },
]

const supportFeatures = [
  'Dedicated Enterprise Support',
  'Fast Response Time',
  'Secure Communication',
  'Technical Consultation',
]

export default function QuickContact() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Quick Communication Channels
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Connect With Our
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Enterprise Experts
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Choose the fastest and most convenient way to discuss your
            OMR software, OMR evaluation and enterprise assessment
            infrastructure requirements.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactOptions.map((item, index) => {
            const Icon = item.icon

            return (
              <Link
                key={index}
                href={item.href}
                target={
                  item.href.startsWith('http')
                    ? '_blank'
                    : undefined
                }
                className={`group relative overflow-hidden rounded-[32px] border bg-gradient-to-br ${item.color} p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
              >
                {/* NUMBER */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-white/[0.04]">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <p className="text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:translate-x-1">
                    Connect Now

                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* BOTTOM PANEL */}
        <div className="mt-20 rounded-[40px] border border-white/10 bg-[#0b1120] p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
                Enterprise Support
              </p>

              <h3 className="mt-5 text-4xl font-bold leading-tight">
                Dedicated OMR Consultation Team
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Our enterprise support specialists help organizations
                design scalable OMR workflows, evaluation systems and
                intelligent assessment infrastructure.
              </p>

              {/* FEATURES */}
              <div className="mt-10 flex flex-wrap gap-4">
                {supportFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-blue-400" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Clock3 className="h-7 w-7 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Enterprise Response Time
                  </p>

                  <h4 className="text-2xl font-bold text-white">
                    Within Business Hours
                  </h4>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-[#020617] p-5">
                  <p className="text-sm text-slate-500">
                    OMR Software Consultation
                  </p>

                  <h5 className="mt-2 text-lg font-semibold text-white">
                    Enterprise Workflow Planning
                  </h5>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#020617] p-5">
                  <p className="text-sm text-slate-500">
                    OMR Infrastructure
                  </p>

                  <h5 className="mt-2 text-lg font-semibold text-white">
                    Scalable Assessment Ecosystems
                  </h5>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#020617] p-5">
                  <p className="text-sm text-slate-500">
                    Technical Support
                  </p>

                  <h5 className="mt-2 text-lg font-semibold text-white">
                    Dedicated Enterprise Assistance
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}