// app/products/[slug]/page.tsx
// Add these imports at top

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { notFound } from "next/navigation";
import {
  ScanSearch,
  Database,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  Building2,
  ClipboardList,
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
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    brochure: "MarkReader.pdf",
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

  const product = products[slug as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div>
        <Link href="/products" className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
        <ArrowLeft className="h-4 w-4" />Back to Products 
        </Link></div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* Content */}
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600 shadow-sm">
                {product.category}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {product.name}
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                {product.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Request Demo
                </button>

                <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Download Brochure
                  <a
  href={product.brochure}
  download
  className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
  Download Brochure
</a>
                </button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "High Accuracy",
                  "Fast Processing",
                  "Reliable Performance",
                  "Enterprise Ready",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Product Overview
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {product.description}
            </p>
          </div>

          {/* Specifications */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                Technical Specifications
              </h3>
            </div>

            {product.specifications.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between px-6 py-5 ${
                  index !== product.specifications.length - 1
                    ? "border-b border-slate-100"
                    : ""
                }`}
              >
                <span className="font-medium text-slate-600">
                  {spec.label}
                </span>

                <span className="text-right font-semibold text-slate-900">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Key Features
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Built for reliable and scalable OMR processing operations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {product.features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    <Icon className="h-7 w-7 text-slate-900" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Ideal Use Cases
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Trusted across educational, enterprise and government sectors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                  <Icon className="h-7 w-7 text-slate-900" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] bg-slate-900 px-8 py-16 text-white lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to automate your OMR workflow?
                </h2>

                <p className="mt-4 text-lg text-slate-300">
                  Streamline examination evaluation, surveys and bulk data
                  processing with {product.name}.
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