// app/products/page.tsx

import { ArrowDown, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

export default function ProductsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        {/* GRID */}
        <div className="absolute inset-0 bg-grid-slate-100/[0.4] bg-[size:40px_40px]" />

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              MarkReader Product Portfolio
            </div>

            <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-7xl leading-tight">
              Professional OMR
              <span className="text-primary">
                {" "}
                Scanners
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              Explore high-performance
              MarkReader OMR scanners built
              for educational institutions,
              recruitment agencies,
              enterprises and government
              examination workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#products-grid"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Explore Products
                <ArrowDown className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                Request Consultation
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "High-Speed Processing",
              "Enterprise Grade Accuracy",
              "Scalable OMR Infrastructure",
              "Automated Evaluation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />

                  <p className="text-sm font-semibold text-foreground">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products-grid"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="max-w-3xl">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
            Explore Products
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            OMR Scanner Products
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Reliable and scalable OMR
            hardware solutions for
            examination, survey and data
            collection workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
  {products.map((product) => (
    <Link
      key={product.slug}
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-[32px] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden border-b border-border">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold text-primary shadow-lg">
            {product.category}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition">
            {product.name}
          </h3>

          <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
        </div>

        <p className="mt-5 leading-7 text-muted-foreground">
          {product.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-8 space-y-4">
          {product.highlights.map(
            (highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />

                <span className="text-sm font-medium text-muted-foreground">
                  {highlight}
                </span>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
          View Product
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  ))}
</div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-primary px-8 py-16 text-primary-foreground lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight leading-tight">
                  Need help choosing the
                  right OMR solution?
                </h2>

                <p className="mt-5 text-lg text-primary-foreground/80">
                  Our team can help you
                  select the ideal
                  MarkReader scanner and
                  workflow solution based on
                  your processing
                  requirements.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
                >
                  Contact Sales
                </Link>

                <button className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-primary-foreground/20">
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