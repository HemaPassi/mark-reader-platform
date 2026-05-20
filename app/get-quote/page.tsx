// app/get-quote/page.tsx

"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const solutions = [
  "OMR Sheet Designing",
  "OMR Sheet Printing",
  "OMR Scanning & Processing",
  "Result Processing",
  "Analytics & Reporting",
  "Enterprise Data Collection",
];

const industries = [
  {
    title: "Educational Institutions",
    icon: GraduationCap,
  },
  {
    title: "Government & Recruitment",
    icon: Building2,
  },
  {
    title: "Enterprise & Research",
    icon: ClipboardList,
  },
];

export default function GetQuotePage() {
  const [loading, setLoading] =
    useState(false);

  const [selectedSolutions, setSelectedSolutions] =
    useState<string[]>([]);

  const [selectedIndustry, setSelectedIndustry] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  // ======================================
  // HANDLE CHECKBOX
  // ======================================
  const handleCheckbox = (value: string) => {
    if (selectedSolutions.includes(value)) {
      setSelectedSolutions(
        selectedSolutions.filter(
          (item) => item !== value
        )
      );
    } else {
      setSelectedSolutions([
        ...selectedSolutions,
        value,
      ]);
    }
  };

  // ======================================
  // EMAIL SUBMIT
  // ======================================
 const handleSubmit = (
  e: React.FormEvent
) => {
  e.preventDefault();

  const subject =
    "New Quote Request - OMR India";

  const body = `
Name: ${form.name}

Organization: ${form.organization}

Email: ${form.email}

Phone: ${form.phone}

Industry:
${selectedIndustry}

Services:
${selectedSolutions.join(", ")}

Requirements:
${form.message}
`;

  const mailtoUrl = `mailto:info@omr.in?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // OPEN EMAIL CLIENT
  window.location.href = mailtoUrl;

  // SUCCESS MESSAGE
  // alert(
  //   "Email draft opened successfully. Please click Send in your email app."
  // );

  // RESET FORM
  setForm({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  setSelectedIndustry("");
  setSelectedSolutions([]);
};

  // ======================================
  // WHATSAPP
  // ======================================
  const handleWhatsApp = () => {
    const phoneNumber = "919810392402";

    const message = `
Hello OMR India,

Name: ${form.name}
Organization: ${form.organization}
Email: ${form.email}
Phone: ${form.phone}

Industry:
${selectedIndustry}

Required Services:
${selectedSolutions.join(", ")}

Project Requirements:
${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-slate-100/[0.4] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              Enterprise OMR Solutions
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Get a Custom
              <span className="text-primary">
                {" "}
                Quote
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              Looking for a complete OMR
              solution for examinations,
              surveys, recruitment or
              enterprise workflows? Share
              your requirements and our team
              will provide a customized
              quotation tailored to your
              operational needs.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT */}
          <div className="overflow-hidden rounded-[36px] border border-border bg-card p-8 shadow-xl">
            <div className="mb-10">
              <h2 className="text-4xl font-bold">
                Request a Quote
              </h2>

              <p className="mt-4 text-muted-foreground">
                Fill in your details and
                we’ll recommend the ideal OMR
                workflow solution.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* NAME */}
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Full Name
                </label>

                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name:
                        e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
                />
              </div>

              {/* ORG */}
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Organization / Institute
                </label>

                <input
                  type="text"
                  required
                  value={form.organization}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      organization:
                        e.target.value,
                    })
                  }
                  placeholder="Organization name"
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium text-foreground">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email:
                          e.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-foreground">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone:
                          e.target.value,
                      })
                    }
                    placeholder="+91 9876543210"
                    className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
                  />
                </div>
              </div>

              {/* INDUSTRIES */}
              <div>
                <label className="mb-4 block text-sm font-medium text-foreground">
                  Select Industry
                </label>

                <div className="grid gap-4 md:grid-cols-3">
                  {industries.map((industry) => {
                    const Icon =
                      industry.icon;

                    const active =
                      selectedIndustry ===
                      industry.title;

                    return (
                      <button
                        key={industry.title}
                        type="button"
                        onClick={() =>
                          setSelectedIndustry(
                            industry.title
                          )
                        }
                        className={`rounded-2xl border p-5 transition ${
                          active
                            ? "border-primary bg-primary/5"
                            : "border-border bg-background hover:border-primary/40"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                              active
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <Icon className="h-7 w-7" />
                          </div>

                          <span className="mt-4 text-sm font-medium">
                            {industry.title}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SERVICES */}
              <div>
                <label className="mb-4 block text-sm font-medium text-foreground">
                  Required Services
                </label>

                <div className="grid gap-4 md:grid-cols-2">
                  {solutions.map(
                    (solution) => (
                      <label
                        key={solution}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition ${
                          selectedSolutions.includes(
                            solution
                          )
                            ? "border-primary bg-primary/5"
                            : "border-border bg-background hover:border-primary/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedSolutions.includes(
                            solution
                          )}
                          onChange={() =>
                            handleCheckbox(
                              solution
                            )
                          }
                          className="h-4 w-4"
                        />

                        <span className="text-sm">
                          {solution}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Project Requirements
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message:
                        e.target.value,
                    })
                  }
                  placeholder="Tell us about your examination, survey or OMR workflow requirements..."
                  className="w-full rounded-2xl border border-border bg-background px-5 py-4 outline-none transition focus:border-primary"
                />
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  {loading
                    ? "Submitting..."
                    : "Submit Quote Request"}

                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-4 text-sm font-semibold transition hover:bg-muted"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* WHY */}
            <div className="rounded-[36px] border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Why MarkReader?
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "High-Speed OMR Processing",
                  "Enterprise Grade Accuracy",
                  "Scalable Infrastructure",
                  "Automated Reporting",
                  "Secure Data Management",
                  "Dedicated Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />

                    <p className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="overflow-hidden rounded-[36px] bg-primary p-8 text-primary-foreground shadow-xl">
              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-primary-foreground/70">
                      Phone
                    </p>

                    <p className="mt-1 font-medium">
                      +91-9810392402
                    </p>

                    <p className="font-medium">
                      +91-9971543678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-foreground/10">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-primary-foreground/70">
                      Email
                    </p>

                    <p className="mt-1 font-medium">
                      info@omr.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 p-5">
                <p className="text-sm leading-7 text-primary-foreground/80">
                  Our experts will analyze
                  your requirements and share
                  the best OMR hardware,
                  software and workflow
                  solution for your
                  organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}