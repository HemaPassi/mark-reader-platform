import Link from "next/link";

const features = [
  {
    title: "Drag & Drop OMR Builder",
    description:
      "Create professional OMR sheets visually with customizable sections, fields, bubbles, and layouts.",
  },
  {
    title: "Multiple Exam Formats",
    description:
      "Support MCQ tests, surveys, attendance sheets, evaluation forms, and hybrid assessments.",
  },
  {
    title: "Print-Optimized Templates",
    description:
      "Generate perfectly aligned high-resolution OMR sheets for accurate scanning and evaluation.",
  },
  {
    title: "AI Validation",
    description:
      "Automatically detect spacing issues, alignment errors, and invalid configurations before export.",
  },
  {
    title: "Instant PDF Export",
    description:
      "Download production-ready OMR sheets instantly in secure PDF format.",
  },
  {
    title: "Custom Branding",
    description:
      "Add institute logos, headers, instructions, signatures, and watermarking support.",
  },
];

export default function OMRSheetDesignPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
              OMR Sheet Design
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Design intelligent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                OMR sheets in minutes
              </span>
            </h1>

            <p className="mt-8 text-lg text-zinc-400 leading-relaxed">
              Build enterprise-ready OMR sheets with AI-powered validation,
              instant PDF export, customizable layouts, and print-perfect
              precision for examinations, surveys, and assessments.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/demo"
                className="rounded-2xl bg-white text-black px-6 py-4 font-medium hover:scale-[1.02] transition"
              >
                Start Designing
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium hover:bg-white/10 transition"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-400 font-medium">
                Smart OMR Creation
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
                Designed for institutions at scale
              </h2>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                Create thousands of exam-ready OMR sheets with perfect alignment,
                optimized scanning zones, configurable answer sections, and AI
                assisted validations to eliminate costly printing mistakes.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Custom question layouts",
                  "Barcode & roll number support",
                  "Section-wise answer bubbles",
                  "Multi-language compatibility",
                  "Auto alignment optimization",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                    <p className="text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MOCKUP */}
            <div className="relative">
              <div className="absolute inset-0 blur-3xl bg-indigo-500/10 rounded-full" />

              <div className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-2xl">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">Template</p>
                      <h3 className="mt-1 text-xl font-semibold">
                        Engineering Entrance Exam
                      </h3>
                    </div>

                    <div className="rounded-xl bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
                      Ready
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[1, 2, 3, 4, 5].map((row) => (
                      <div
                        key={row}
                        className="flex items-center justify-between border border-white/5 rounded-xl px-4 py-4 bg-white/[0.02]"
                      >
                        <span className="text-zinc-400">
                          Question {row}
                        </span>

                        <div className="flex gap-3">
                          {["A", "B", "C", "D"].map((opt) => (
                            <div
                              key={opt}
                              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-zinc-400"
                            >
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 p-[1px]">
                    <div className="rounded-2xl bg-black px-6 py-4 flex items-center justify-between">
                      <span className="text-sm text-zinc-400">
                        AI Validation Status
                      </span>

                      <span className="text-sm text-green-400">
                        Layout Optimized ✓
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-indigo-400 font-medium">Features</p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
              Everything required to build modern OMR workflows
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-lg font-semibold">
                  0{index + 1}
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Start building smarter OMR sheets
            </h2>

            <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Accelerate exam creation, reduce manual effort, and generate
              production-ready OMR sheets with enterprise-grade precision.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/demo"
                className="rounded-2xl bg-white text-black px-6 py-4 font-medium hover:scale-[1.02] transition"
              >
                Launch Builder
              </Link>

              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-medium hover:bg-white/10 transition"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}