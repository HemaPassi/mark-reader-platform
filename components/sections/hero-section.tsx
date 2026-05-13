export default function Hero() {
    return <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-500 mb-6">
  Trusted since 2002
</div>

         <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
  Intelligent OMR & Document Processing Platform
</h1>

          <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
  Modernize assessment workflows with scalable OMR scanning,
  document digitization and enterprise-grade analytics solutions.
</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition px-6 py-3 font-medium">
  Book a Demo
</button>

           <button className="rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 px-6 py-3 font-medium transition">
  Explore Solutions
</button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-zinc-400 text-sm mt-1">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10M+</h3>
              <p className="text-zinc-400 text-sm mt-1">Sheets Processed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-zinc-400 text-sm mt-1">Clients Served</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-zinc-400 text-sm mt-1">Accuracy</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-zinc-400">Processing Overview</p>
                <h3 className="text-xl font-semibold mt-1">
                  Enterprise Dashboard
                </h3>
              </div>

              <div className="rounded-xl bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300 border border-emerald-500/20">
                Live
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-black/40 border border-white/5 p-5">
                <p className="text-zinc-400 text-sm">Documents Processed</p>
                <h4 className="text-3xl font-bold mt-2">24,891</h4>
              </div>

              <div className="rounded-2xl bg-black/40 border border-white/5 p-5">
                <p className="text-zinc-400 text-sm">Scan Accuracy</p>
                <h4 className="text-3xl font-bold mt-2">99.8%</h4>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-black/40 border border-white/5 p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Recent Processing Queue</h4>
                <span className="text-sm text-zinc-400">Updated now</span>
              </div>

              <div className="space-y-4">
                {['Government Survey Batch', 'University Exam Sheets', 'Recruitment Assessment'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-zinc-400">{item}</span>
                    <span className="text-sm text-emerald-300">Completed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
}
