import {
  Building2,
  Mail,
  Phone,
} from 'lucide-react'

const cards = [
  {
    title: 'Enterprise Consultation',
    description:
      'Discuss enterprise OMR infrastructure and intelligent assessment workflows.',
    icon: Building2,
  },
  {
    title: 'Technical Support',
    description:
      'Get support for OMR software and evaluation systems.',
    icon: Phone,
  },
  {
    title: 'Sales Inquiry',
    description:
      'Connect with our experts for enterprise-grade OMR solutions.',
    icon: Mail,
  },
]

export default function ContactCards() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={index}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Icon className="h-7 w-7 text-blue-400" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}