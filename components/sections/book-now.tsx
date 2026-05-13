export default function BookNow() {
    return <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/20 to-transparent p-12 text-center backdrop-blur-xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto">
            Ready to modernize your assessment and document workflows?
          </h2>

          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Build scalable and intelligent processing systems with modern OMR,
            analytics and enterprise workflow solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white text-black px-6 py-3 font-medium hover:scale-105 transition-transform">
              Request Demo
            </button>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium hover:border-white/30 transition">
              Contact Team
            </button>
          </div>
        </div>
      </section>
}