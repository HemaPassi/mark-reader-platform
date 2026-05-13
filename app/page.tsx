export default function MarkReaderHomepage() {
  const services = [
    {
      title: 'OMR Sheet Design',
      description:
        'Custom OMR/ICR sheet design optimized for accuracy and scalability.',
    },
    {
      title: 'OMR Printing',
      description:
        'High-quality carbonless OMR printing solutions for institutions and enterprises.',
    },
    {
      title: 'OMR Scanning',
      description:
        'Fast and secure OMR scanning with intelligent processing workflows.',
    },
    {
      title: 'Document Digitization',
      description:
        'Transform physical records into searchable digital workflows.',
    },
    {
      title: 'Data Processing',
      description:
        'Enterprise-grade processing and validation pipelines for large datasets.',
    },
    {
      title: 'Analytics & Reporting',
      description:
        'Generate actionable insights using dashboards and automated reporting.',
    },
  ]

  const workflow = [
    'Design',
    'Print',
    'Scan',
    'Validate',
    'Analyze',
    'Export',
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_40%)]" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              Mark Reader
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#solutions" className="hover:text-white transition">
              Solutions
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#workflow" className="hover:text-white transition">
              Workflow
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <button className="rounded-xl bg-white text-black px-5 py-2 text-sm font-medium hover:scale-105 transition-transform">
            Request Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300 mb-6">
            Trusted by institutions since 2002
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Intelligent OMR & Document Processing Platform
          </h2>

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
              <p className="text-zinc-500 text-sm mt-1">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10M+</h3>
              <p className="text-zinc-500 text-sm mt-1">Sheets Processed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-zinc-500 text-sm mt-1">Clients Served</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-zinc-500 text-sm mt-1">Accuracy</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
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
                <span className="text-sm text-zinc-500">Updated now</span>
              </div>

              <div className="space-y-4">
                {['Government Survey Batch', 'University Exam Sheets', 'Recruitment Assessment'].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                  >
                    <span className="text-sm text-zinc-300">{item}</span>
                    <span className="text-sm text-emerald-300">Completed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-indigo-400 font-medium">Workflow Automation</p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight">
            Streamlined document processing from start to finish
          </h2>

          <p className="text-zinc-400 mt-6 text-lg">
            Simplify large-scale assessment and document workflows using
            intelligent automation and scalable infrastructure.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-6 gap-4">
          {workflow.map((step, index) => (
            <div
              key={step}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/20 flex items-center justify-center text-indigo-300 font-bold mb-6">
                0{index + 1}
              </div>

              <h3 className="font-semibold text-lg">{step}</h3>

              <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                Intelligent and scalable workflow management.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
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

      {/* CTA */}
      <section
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

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-zinc-500">
          <div>
            <h3 className="text-white font-semibold">Mark Reader</h3>
            <p className="mt-2 max-w-sm">
              Modern OMR and document processing solutions for enterprises,
              institutions and government organizations.
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#">Services</a>
            <a href="#">Solutions</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
