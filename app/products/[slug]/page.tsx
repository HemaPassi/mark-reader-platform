// app/products/[slug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  CheckCircle2,
  ScanSearch,
  Database,
  BarChart3,
  GraduationCap,
  Building2,
  ClipboardList,
  ArrowRight,
  Download,
} from "lucide-react";

const products = {
  axm960: {
    name: "MarkReader AXM960",
    category: "Professional OMR Scanner",
    brochure: "MarkReader.pdf",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    shortDescription:
      "High-speed OMR scanner designed for examinations, surveys, recruitment workflows and enterprise data collection.",

    description:
      "The MarkReader AXM960 is a professional-grade Optical Mark Recognition scanner built for high-volume examination processing and enterprise data collection workflows. It delivers reliable performance, accurate mark detection and scalable OMR processing capabilities.",

    features: [
      {
        title: "Automatic Sheet Feeding",
        description:
          "Continuous high-speed document feeding for large-scale processing operations.",
        icon: ScanSearch,
      },
      {
        title: "High Accuracy Detection",
        description:
          "Precise bubble and checkbox recognition with optimized OMR algorithms.",
        icon: CheckCircle2,
      },
      {
        title: "Bulk Data Processing",
        description:
          "Efficiently process thousands of OMR sheets with minimal manual intervention.",
        icon: Database,
      },
      {
        title: "Analytics & Reporting",
        description:
          "Generate reports, insights and result analytics with seamless export capabilities.",
        icon: BarChart3,
      },
    ],

    specifications: [
      {
        label: "Scanner Type",
        value: "Optical Mark Reader (OMR)",
      },
      {
        label: "Feeding System",
        value: "Automatic Document Feeder",
      },
      {
        label: "Processing Capacity",
        value: "Medium to High Volume",
      },
      {
        label: "Applications",
        value: "Exams, Surveys & Recruitment",
      },
      {
        label: "Deployment",
        value: "Educational, Enterprise & Government",
      },
    ],
  },

  axm950: {
    name: "MarkReader AXM950",
    category: "Enterprise OMR Scanner",
    brochure: "MarkReader.pdf",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    shortDescription:
      "Enterprise-ready OMR scanner optimized for scalable assessment and evaluation workflows.",

    description:
      "The AXM950 offers reliable and scalable OMR processing capabilities for institutions and organizations conducting high-volume assessments, surveys and examination workflows.",

    features: [
      {
        title: "Fast Batch Processing",
        description:
          "Optimized batch scanning infrastructure for large examination operations.",
        icon: ScanSearch,
      },
      {
        title: "Reliable Recognition",
        description:
          "Consistent and accurate OMR detection across multiple form types.",
        icon: CheckCircle2,
      },
      {
        title: "Secure Data Handling",
        description:
          "Process and export examination data securely and efficiently.",
        icon: Database,
      },
      {
        title: "Automated Reporting",
        description:
          "Generate automated reports and evaluation summaries instantly.",
        icon: BarChart3,
      },
    ],

    specifications: [
      {
        label: "Scanner Type",
        value: "Enterprise OMR Scanner",
      },
      {
        label: "Feeding System",
        value: "Automatic Sheet Feeding",
      },
      {
        label: "Processing Capacity",
        value: "High Volume",
      },
      {
        label: "Applications",
        value: "Exams, Surveys & Evaluation",
      },
      {
        label: "Deployment",
        value: "Institutions & Enterprises",
      },
    ],
  },

  axm900: {
    name: "MarkReader AXM900",
    category: "Compact OMR Solution",
    brochure: "MarkReader.pdf",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",

    shortDescription:
      "Compact and reliable desktop OMR scanner for schools and coaching institutes.",

    description:
      "The AXM900 is designed for smaller-scale evaluation environments requiring reliable OMR processing with a compact and easy-to-maintain form factor.",

    features: [
      {
        title: "Compact Design",
        description:
          "Desktop-friendly design suitable for schools and training centers.",
        icon: ScanSearch,
      },
      {
        title: "Reliable Accuracy",
        description:
          "Consistent mark recognition performance for objective evaluations.",
        icon: CheckCircle2,
      },
      {
        title: "Easy Processing",
        description:
          "Simple setup and workflow management for daily assessment operations.",
        icon: Database,
      },
      {
        title: "Result Generation",
        description:
          "Generate student results and reports quickly and efficiently.",
        icon: BarChart3,
      },
    ],

    specifications: [
      {
        label: "Scanner Type",
        value: "Desktop OMR Scanner",
      },
      {
        label: "Feeding System",
        value: "Manual / Semi-Automatic",
      },
      {
        label: "Processing Capacity",
        value: "Low to Medium Volume",
      },
      {
        label: "Applications",
        value: "Schools & Coaching Institutes",
      },
      {
        label: "Deployment",
        value: "Educational Institutions",
      },
    ],
  },
};

const industries = [
  {
    title: "Educational Institutions",
    description:
      "Schools, colleges, universities and coaching institutes for examination processing.",
    icon: GraduationCap,
  },
  {
    title: "Government & Recruitment",
    description:
      "Recruitment examinations, surveys and citizen data collection workflows.",
    icon: Building2,
  },
  {
    title: "Enterprise & Research",
    description:
      "Enterprise feedback forms, attendance and survey processing solutions.",
    icon: ClipboardList,
  },
];

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product =
    products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
     
      <section className="relative overflow-hidden border-b border-border bg-background">
        {/* GRID */}
        
        <div className="absolute inset-0 bg-grid-slate-100/[0.4] bg-[size:40px_40px]" />

        {/* GLOW */}
        <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-3xl" />

       <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 lg:px-8">
          <Link
  href="/products"
  className="mb-10 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition hover:bg-muted"
>
  <ArrowLeft className="h-4 w-4" />
  Back to Products
</Link>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* CONTENT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary shadow-sm">
                {product.category}
              </div>

              <h1 className="mt-8 text-5xl font-bold tracking-tight leading-tight sm:text-6xl">
                {product.name}
              </h1>

              <p className="mt-8 text-xl leading-8 text-muted-foreground">
                {product.shortDescription}
              </p>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                  Request Demo
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={product.brochure}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>
              </div>

              {/* STATS */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  "High Accuracy",
                  "Fast Processing",
                  "Reliable Performance",
                  "Enterprise Ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-primary/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-border bg-card shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={900}
                  height={700}
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
              Product Overview
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Enterprise OMR Infrastructure
            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {product.description}
            </p>
          </div>

          {/* SPECS */}
          <div className="overflow-hidden rounded-[32px] border border-border bg-card shadow-sm">
            <div className="border-b border-border px-8 py-6">
              <h3 className="text-2xl font-bold">
                Technical Specifications
              </h3>
            </div>

            {product.specifications.map(
              (spec, index) => (
                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-8 py-6 ${
                    index !==
                    product.specifications
                      .length -
                      1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <span className="font-medium text-muted-foreground">
                    {spec.label}
                  </span>

                  <span className="text-right font-semibold text-foreground">
                    {spec.value}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
              Key Features
            </span>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              Built For Scalable Operations
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Designed for high-volume,
              accurate and enterprise-grade
              OMR workflows.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {product.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[32px] border border-border bg-card p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">
            Use Cases
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Ideal Industry Applications
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Trusted across educational,
            enterprise and government
            sectors.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-[32px] border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-8 w-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[40px] bg-primary px-8 py-16 text-primary-foreground lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold tracking-tight leading-tight">
                  Ready to automate your OMR
                  workflow?
                </h2>

                <p className="mt-5 text-lg text-primary-foreground/80">
                  Streamline examination
                  evaluation, surveys and
                  bulk data processing with{" "}
                  {product.name}.
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