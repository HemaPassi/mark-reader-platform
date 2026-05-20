import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ScanSearch,
  BarChart3,
  Cpu,
} from "lucide-react";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const services = {
  "omr-sheets-printing": {
    title: "OMR Sheets Printing",
    subtitle:
      "Enterprise-grade OMR printing solutions for institutions and government organizations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Professional OMR sheet printing services with precision alignment, enterprise quality standards and scalable infrastructure for large-scale examinations and assessments.",
  },

  "omr-sheets-scanning": {
    title: "OMR Sheets Scanning",
    subtitle:
      "High-speed intelligent OMR scanning and evaluation infrastructure.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Advanced OMR scanning systems with AI-powered validation, enterprise workflow automation and real-time analytics infrastructure.",
  },

  "omr-sheets-designing": {
    title: "OMR Sheets Designing",
    subtitle:
      "Custom OMR designing solutions optimized for enterprise assessments.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Professional OMR sheet designing services tailored for educational institutions, recruitment workflows and enterprise evaluation systems.",
  },

  "scanner-services": {
    title: "Scanner Services",
    subtitle:
      "Enterprise document scanning and workflow automation infrastructure.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Enterprise-grade scanner services designed for high-volume document processing, workflow automation and intelligent assessment operations.",
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServiceSlugPage({
  params,
}: ServicePageProps) {
  const { slug } = await params;

  const service =
    services[slug as keyof typeof services];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Service Not Found
          </h1>

          <Link
            href="/services"
            className="mt-6 inline-flex text-blue-400"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#020617] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-10"
          />

          <div className="absolute inset-0 bg-[#020617]/95" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_30%)]" />
        </div>

        <div className="container-enterprise relative py-28">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Enterprise Service Solution
            </div>

            {/* Title */}
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-slate-300">
              {service.subtitle}
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Request Demo

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/[0.06]"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.08),transparent_28%)]" />

        <div className="container-enterprise relative">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                Service Overview
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Intelligent Enterprise
                <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  Workflow Infrastructure
                </span>
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                {service.overview}
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Designed for high-volume operational environments with
                enterprise-grade scalability, automation and workflow
                optimization.
              </p>

              {/* Points */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "High Accuracy Processing",
                  "Scalable Enterprise Infrastructure",
                  "Workflow Automation",
                  "Real-Time Analytics",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-400" />

                    <span className="text-sm text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[32px] bg-blue-500/10 blur-3xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-2xl">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Enterprise Dashboard
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Service Infrastructure
                    </h3>
                  </div>

                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                    Active
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-5">
                  <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                    <p className="text-sm text-slate-400">
                      Accuracy
                    </p>

                    <h4 className="mt-3 text-4xl font-bold">
                      99.9%
                    </h4>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[96%] rounded-full bg-blue-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-black/20 p-5">
                    <p className="text-sm text-slate-400">
                      Reliability
                    </p>

                    <h4 className="mt-3 text-4xl font-bold">
                      24/7
                    </h4>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[92%] rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 space-y-4">
                  {[
                    {
                      icon: ScanSearch,
                      title: "High-Speed Processing",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Enterprise Security",
                    },
                    {
                      icon: BarChart3,
                      title: "Real-Time Analytics",
                    },
                    {
                      icon: Cpu,
                      title: "Workflow Automation",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>

                        <div>
                          <h4 className="font-medium text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}