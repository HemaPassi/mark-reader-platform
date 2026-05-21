const points = [
  'Enterprise Security',
  'AI-Powered Evaluation',
  'Dedicated Support',
  'High-Speed OMR Processing',
]

export default function EnterpriseAssurance() {
  return (
    <section className="border-y border-white/5 bg-[#0b1120] py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 text-sm text-slate-400">
        {points.map((item) => (
          <span key={item}>
            ✓ {item}
          </span>
        ))}
      </div>
    </section>
  )
}