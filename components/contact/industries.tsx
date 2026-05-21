const industries = [
  'Universities',
  'Educational Institutions',
  'Government Organizations',
  'Recruitment Agencies',
  'Research Institutions',
  'Corporate Enterprises',
]

export default function Industries() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Industries We Serve
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
              Trusted Enterprise Assessment Infrastructure
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Mark Reader supports enterprise assessment ecosystems
              with scalable OMR infrastructure and intelligent
              evaluation systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {industries.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}