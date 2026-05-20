// app/products/page.tsx
import { ArrowDown } from "lucide-react";


import Link from "next/link";
import {
  ArrowRight,
  ScanSearch,
  Database,
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    slug: "axm960",
    name: "MarkReader AXM960",
    category: "Professional OMR Scanner",
    description:
      "High-speed OMR scanner designed for examination processing, surveys, recruitment workflows and enterprise data collection.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Automatic Sheet Feeding",
      "High Accuracy Detection",
      "Bulk OMR Processing",
    ],
  },
  {
    slug: "axm950",
    name: "MarkReader AXM950",
    category: "Enterprise OMR Scanner",
    description:
      "Reliable and scalable OMR processing solution optimized for institutions and assessment centers.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Fast Batch Processing",
      "Easy Maintenance",
      "Survey & Exam Ready",
    ],
  },
  {
    slug: "axm900",
    name: "MarkReader AXM900",
    category: "Compact OMR Solution",
    description:
      "Compact desktop OMR scanner suitable for schools, coaching institutes and small-scale evaluations.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Compact Design",
      "Quick Setup",
      "Reliable Performance",
    ],
  },
];

const solutions = [
  {
    title: "OMR Sheet Designing",
    description:
      "Custom-designed OMR sheets optimized for exams, surveys and enterprise workflows.",
    icon: FileSpreadsheet,
  },
  {
    title: "Scanning & Processing",
    description:
      "High-speed and accurate OMR scanning infrastructure for large-scale operations.",
    icon: ScanSearch,
  },
  {
    title: "Data Management",
    description:
      "Secure processing, validation and export of collected OMR data.",
    icon: Database,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Generate reports, analytics and insights with automated result processing.",
    icon: BarChart3,
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
              MarkReader Product Portfolio
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Professional OMR Scanners & Evaluation Solutions
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore high-performance MarkReader OMR scanners built for
              educational institutions, recruitment agencies, enterprises and
              government examination workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
  href="#products-grid"
  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
>
  Explore Products
  <ArrowDown className="h-4 w-4" />
</Link>

              <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                Request Consultation
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "High-Speed Processing",
              "Enterprise Grade Accuracy",
              "Scalable OMR Infrastructure",
              "Automated Evaluation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-slate-900" />

                  <p className="text-sm font-semibold text-slate-700">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section  id="products-grid" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            OMR Scanner Products
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Reliable and scalable OMR hardware solutions for examination,
            survey and data collection workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="overflow-hidden border-b border-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Content */}
              <div className="p-8">
                <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 space-y-3">
                  {product.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-slate-900" />

                      <span className="text-sm font-medium text-slate-700">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3"
                >
                  View Product
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Complete OMR Ecosystem
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Beyond hardware, MarkReader provides a complete OMR workflow
              solution for educational and enterprise environments.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon className="h-7 w-7 text-slate-900" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] bg-slate-900 px-8 py-16 text-white lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Need help choosing the right OMR solution?
                </h2>

                <p className="mt-4 text-lg text-slate-300">
                  Our team can help you select the ideal MarkReader scanner and
                  workflow solution based on your processing requirements.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Contact Sales
                </button>

                <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}