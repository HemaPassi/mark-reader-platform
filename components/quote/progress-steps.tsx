export default function ProgressSteps() {
  const steps = [
    'Organization',
    'Requirements',
    'Solutions',
    'Contact',
  ]

  return (
    <div className="mb-10 flex flex-wrap items-center gap-5">
      {steps.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-sm font-semibold text-blue-300">
            0{index + 1}
          </div>

          <span className="text-sm text-slate-400">
            {item}
          </span>
        </div>
      ))}
    </div>
  )
}