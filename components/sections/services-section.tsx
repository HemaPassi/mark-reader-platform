import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-[#020617] py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="container-enterprise relative">
        {/* Header */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise Services
          </div>

          {/* Title */}
          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
            Intelligent OMR &
            <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Assessment Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Enterprise-grade OMR processing, assessment automation,
            document intelligence and analytics infrastructure designed
            for institutions, enterprises and government organizations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-white/[0.05]"
            >
              {/* Hover Glow */}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Top */}
                <div className="flex items-center justify-between">
                  {/* Number Box */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/10 bg-blue-500/10 text-lg font-semibold text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Background Number */}
                  <span className="text-5xl font-bold text-white/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-400">
                  {service.description}
                </p>

                {/* CTA */}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors duration-300 hover:text-white"
                >
                  Learn More

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}