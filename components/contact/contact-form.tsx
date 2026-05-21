// components/contact/contact-form.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // MAILTO LINK
  const mailtoLink = `mailto:info@omr.in?subject=${encodeURIComponent(
    `Inquiry from ${form.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(`
Name: ${form.name}

Email: ${form.email}

Organization: ${form.organization}

Phone: ${form.phone}

Message:
${form.message}
`)}`

  // WHATSAPP LINK
  const whatsappMessage = `
Hello Mark Reader,

I would like to know more about your enterprise OMR solutions.

Name: ${form.name}
Email: ${form.email}
Organization: ${form.organization}
Phone: ${form.phone}

Message:
${form.message}
`

  const whatsappLink = `https://wa.me/919810392402?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Contact Form
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight lg:text-5xl">
              Talk To Our Experts
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Connect with Mark Reader for enterprise-grade OMR software,
              OMR evaluation systems, OMR scanning infrastructure and
              intelligent assessment workflows.
            </p>

            <div className="mt-10 space-y-5">
              {/* EMAIL */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:info@omr.in"
                    className="mt-2 block text-lg font-medium text-white transition hover:text-blue-400"
                  >
                    info@omr.in
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    Enterprise Support
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    Fast Response Available
                  </p>
                </div>
              </div>

              {/* WHATSAPP */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                    WhatsApp Support
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    Instant Business Inquiry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
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

              {/* MESSAGE */}
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-300">
                  Your Requirement
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your OMR requirement..."
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition focus:border-blue-500 placeholder:text-slate-500"
                />
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-4 pt-4">
                {/* EMAIL BUTTON */}
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Send Email

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

              {/* QUICK NOTE */}
              <p className="pt-4 text-sm leading-7 text-slate-500">
                Our enterprise support team usually responds within
                business hours for OMR software, OMR evaluation and
                assessment infrastructure inquiries.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}