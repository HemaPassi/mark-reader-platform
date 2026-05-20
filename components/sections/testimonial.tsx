import {testimonials} from '@/lib/constants'

const Testimonials = () => {
    return <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-indigo-400 font-medium">
              Success Stories
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Trusted by modern institutions
            </h2>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-zinc-300 text-lg leading-relaxed">
                  "{item.text}"
                </p>

                <div className="mt-8">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Enterprise Client
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
}

export default Testimonials