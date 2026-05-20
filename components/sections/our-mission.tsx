import { stats } from '@/lib/constants'
export default function Mission() {
    return (
        <section className="border-t border-white/5 bg-[#0b1120] py-24">
        <div className="container-enterprise grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Our Mission
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Delivering Scalable &
              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Reliable Assessment Systems
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Our mission is to simplify and modernize large-scale assessment,
              evaluation and document processing operations through intelligent
              OMR infrastructure and enterprise-grade automation technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              We focus on accuracy, scalability, security and operational
              excellence to support educational institutions, enterprises
              and government organizations with future-ready assessment
              ecosystems.
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map(stat => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
              >
                <h3 className="text-5xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className="mt-4 text-lg text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}