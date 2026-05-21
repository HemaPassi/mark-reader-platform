// components/quote/quote-form.tsx

'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Upload,
} from 'lucide-react'

const solutions = [
  'OMR Sheet Designing',
  'OMR Sheet Printing',
  'OMR Scanning & Processing',
  'OMR Evaluation System',
  'Assessment Analytics',
  'Enterprise Data Collection',
]

export default function QuoteForm() {
  const [selectedSolutions, setSelectedSolutions] =
    useState<string[]>([])

  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    sheets: '',
    message: '',
    preferredContact: 'Email',
  })

  const toggleSolution = (solution: string) => {
    if (selectedSolutions.includes(solution)) {
      setSelectedSolutions(
        selectedSolutions.filter(
          (item) => item !== solution
        )
      )
    } else {
      setSelectedSolutions([
        ...selectedSolutions,
        solution,
      ])
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // EMAIL TEMPLATE
  const mailtoLink = useMemo(() => {
    const subject = `Enterprise OMR Quote Request - ${form.organization || form.name}`

    const body = `
Name: ${form.name}

Email: ${form.email}

Organization: ${form.organization}

Phone: ${form.phone}

Approx OMR Volume: ${form.sheets}

Preferred Contact Method: ${form.preferredContact}

Solutions Required:
${selectedSolutions.join(', ')}

Requirements:
${form.message}
`

    return `mailto:info@omr.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }, [form, selectedSolutions])

  // WHATSAPP TEMPLATE
  const whatsappLink = useMemo(() => {
    const message = `
Hello Mark Reader,

I would like an enterprise OMR solution quote.

Name: ${form.name}

Email: ${form.email}

Organization: ${form.organization}

Phone: ${form.phone}

Approx OMR Volume: ${form.sheets}

Preferred Contact Method: ${form.preferredContact}

Solutions Required:
${selectedSolutions.join(', ')}

Requirements:
${form.message}
`

    return `https://wa.me/919810392402?text=${encodeURIComponent(
      message
    )}`
  }, [form, selectedSolutions])

  return (
    <section
      id="quote-form"
      className="border-y border-white/5 bg-white/[0.02] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT PANEL */}
          <div>
            {/* LABEL */}
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Enterprise Quote Request
            </p>

            {/* HEADING */}
            <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
              Let’s Build Your
              <span className="block bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                OMR Infrastructure
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-8 text-slate-300">
              Share your assessment workflow requirements and our
              enterprise experts will recommend the ideal OMR
              infrastructure, evaluation systems and processing
              workflows.
            </p>

            {/* TRUST BOXES */}
            <div className="mt-10 space-y-5">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Enterprise Ready Solutions',
                  description:
                    'Scalable OMR ecosystems optimized for institutions and enterprises.',
                },
                {
                  icon: Clock3,
                  title: 'Fast Response Time',
                  description:
                    'Our team usually responds within business hours.',
                },
                {
                  icon: CalendarDays,
                  title: 'Dedicated Consultation',
                  description:
                    'Personalized enterprise workflow recommendations.',
                },
              ].map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={index}
                    className="flex items-start gap-5 rounded-[28px] border border-white/10 bg-[#0b1120] p-6"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                      <Icon className="h-7 w-7 text-blue-400" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* QUICK CONTACT */}
            <div className="mt-10 rounded-[32px] border border-white/10 bg-[#0b1120] p-8">
              <h3 className="text-2xl font-semibold text-white">
                Quick Contact Channels
              </h3>

              <div className="mt-8 space-y-5">
                {/* EMAIL */}
                <a
                  href="mailto:info@omr.in"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email Support
                    </p>

                    <h4 className="font-semibold text-white">
                      info@omr.in
                    </h4>
                  </div>
                </a>

                {/* WHATSAPP */}
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                    <MessageCircle className="h-6 w-6 text-green-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      WhatsApp Business
                    </p>

                    <h4 className="font-semibold text-white">
                      Instant Enterprise Inquiry
                    </h4>
                  </div>
                </Link>

                {/* CALL */}
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Enterprise Consultation
                    </p>

                    <h4 className="font-semibold text-white">
                      Request Callback
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[36px] border border-white/10 bg-[#0b1120] p-8 lg:p-10">
            <form className="space-y-6">
              {/* NAME */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* ORGANIZATION */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Organization
                </label>

                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Company / Institution"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* VOLUME */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Approx OMR Volume
                </label>

                <input
                  type="text"
                  name="sheets"
                  value={form.sheets}
                  onChange={handleChange}
                  placeholder="e.g. 50,000 sheets"
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* CONTACT METHOD */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Preferred Contact Method
                </label>

                <select
                  name="preferredContact"
                  value={form.preferredContact}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1120] px-5 py-4 text-white outline-none transition focus:border-blue-500"
                >
                  <option>Email</option>
                  <option>Phone Call</option>
                  <option>WhatsApp</option>
                  <option>Google Meet</option>
                </select>
              </div>

              {/* SOLUTIONS */}
              <div>
                <label className="mb-4 block text-sm font-medium text-slate-300">
                  Solutions Required
                </label>

                <div className="flex flex-wrap gap-3">
                  {solutions.map((solution) => {
                    const active =
                      selectedSolutions.includes(solution)

                    return (
                      <button
                        key={solution}
                        type="button"
                        onClick={() =>
                          toggleSolution(solution)
                        }
                        className={`rounded-full border px-5 py-3 text-sm transition ${
                          active
                            ? 'border-blue-500 bg-blue-500/10 text-blue-300'
                            : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.05]'
                        }`}
                      >
                        {solution}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Project Requirements
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your enterprise OMR workflow..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* FILE UPLOAD */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Upload Requirement Document
                </label>

                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/[0.03] px-5 py-8 transition hover:bg-white/[0.05]">
                  <Upload className="h-5 w-5 text-blue-400" />

                  <span className="text-sm text-slate-400">
                    Upload PDF / DOC / Requirement File
                  </span>

                  <input
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* EMAIL BUTTON */}
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Send Quote Request

                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* WHATSAPP BUTTON */}
                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-green-500"
                >
                  WhatsApp Inquiry

                  <MessageCircle className="h-4 w-4" />
                </Link>
              </div>

              {/* FOOT NOTE */}
              <p className="pt-4 text-sm leading-7 text-slate-500">
                Mark Reader enterprise specialists typically respond
                within business hours for OMR software, evaluation
                systems and intelligent assessment infrastructure
                inquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}