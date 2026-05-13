import { services } from '@/lib/constants'

export default function Services() {
   return <section
        id="services"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="max-w-3xl">
          <p className="text-indigo-400 font-medium">Services</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Enterprise-grade OMR and document intelligence solutions
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 mb-6" />

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-8 text-indigo-300 hover:text-indigo-200 transition">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </section>
}