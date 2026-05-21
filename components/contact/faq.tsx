const faqs = [
  {
    question: 'What services does Mark Reader provide?',
    answer:
      'Mark Reader provides enterprise-grade OMR software, OMR scanning, OMR evaluation and intelligent assessment infrastructure.',
  },
  {
    question: 'Who uses Mark Reader solutions?',
    answer:
      'Universities, institutions, enterprises and government organizations use our scalable OMR ecosystems.',
  },
]

export default function FAQ() {
  return (
    <section className="border-t border-white/5 py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            FAQs
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </header>

        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="text-2xl font-semibold">
                {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}