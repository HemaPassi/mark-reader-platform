"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock3,
  Building2,
  Send,
  ChevronRight,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // =========================================
  // EMAIL SUBMIT
  // =========================================
  const handleEmailSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  // =========================================
  // WHATSAPP
  // =========================================
  const handleWhatsApp = () => {
    const phoneNumber = "919810392402";

    const message = `
Hello OMR India,

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Service: ${form.service}

Message:
${form.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#3b82f6,_transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-4 py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm">
              <MessageCircle className="w-4 h-4" />
              Fast Response Within Business Hours
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Let’s Simplify Your
              <span className="text-blue-400">
                {" "}
                OMR Workflow
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-3xl">
              Connect with OMR India for OMR
              sheet designing, scanning,
              evaluation systems, data
              processing, recruitment exams,
              survey automation, and
              enterprise workflow solutions.
            </p>

            {/* QUICK ACTIONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="tel:+919810392402"
                className="bg-white text-slate-900 hover:bg-slate-200 px-6 py-4 rounded-2xl font-semibold transition flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-2xl font-semibold transition flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2">
            <span className="text-blue-600 uppercase tracking-widest font-semibold">
              Quick Connect
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight">
              Speak With Our OMR Experts
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed">
              Whether you need high-volume
              examination processing,
              customized OMR sheets, or
              enterprise-level automation,
              our team is ready to assist you.
            </p>

            {/* CONTACT CARDS */}
            <div className="mt-10 space-y-5">
              <div className="border rounded-3xl p-6 flex gap-5 hover:shadow-lg transition">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl h-fit">
                  <Phone className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Phone Support
                  </h3>

                  <p className="text-slate-600 mt-1">
                     +91-9810392402, +91-9971543678
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    Instant assistance during
                    business hours.
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-6 flex gap-5 hover:shadow-lg transition">
                <div className="bg-green-100 text-green-600 p-4 rounded-2xl h-fit">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    WhatsApp
                  </h3>

                  <p className="text-slate-600 mt-1">
                    Quick business inquiry &
                    support
                  </p>

                  <button
                    onClick={handleWhatsApp}
                    className="text-green-600 font-semibold flex items-center gap-1 mt-3"
                  >
                    Start Chat
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="border rounded-3xl p-6 flex gap-5 hover:shadow-lg transition">
                <div className="bg-orange-100 text-orange-600 p-4 rounded-2xl h-fit">
                  <Mail className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-slate-600 mt-1">
                    info@omr.in
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    Best for enterprise and
                    bulk inquiries.
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-6 flex gap-5 hover:shadow-lg transition">
                <div className="bg-purple-100 text-purple-600 p-4 rounded-2xl h-fit">
                  <MapPin className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Office Location
                  </h3>

                  <p className="text-slate-600 mt-1">
                   Delhi, India
                  </p>
                </div>
              </div>

              <div className="border rounded-3xl p-6 flex gap-5 hover:shadow-lg transition">
                <div className="bg-pink-100 text-pink-600 p-4 rounded-2xl h-fit">
                  <Clock3 className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    Business Hours
                  </h3>

                  <p className="text-slate-600 mt-1">
                    Monday - Saturday
                  </p>

                  <p className="text-slate-600">
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3 bg-white border rounded-[32px] p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <Send className="w-6 h-6 text-blue-600" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  Send Inquiry
                </h3>

                <p className="text-slate-600 mt-1">
                  Our team will respond
                  shortly.
                </p>
              </div>
            </div>

            <form
              onSubmit={handleEmailSubmit}
              className="mt-10 space-y-6"
            >
              {/* ROW */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-slate-700">
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
                    placeholder="John Doe"
                    className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
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
                    placeholder="john@example.com"
                    className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* ROW */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone:
                          e.target.value,
                      })
                    }
                    placeholder="+91 9876543210"
                    className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Organization
                  </label>

                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        company:
                          e.target.value,
                      })
                    }
                    placeholder="School / Company"
                    className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Interested Service
                </label>

                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service:
                        e.target.value,
                    })
                  }
                  className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">
                    Select Service
                  </option>

                  <option>
                    OMR Sheet Designing
                  </option>

                  <option>
                    OMR Scanning
                  </option>

                  <option>
                    Examination Processing
                  </option>

                  <option>
                    Survey Automation
                  </option>

                  <option>
                    Recruitment Assessment
                  </option>

                  <option>
                    Enterprise Workflow
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message:
                        e.target.value,
                    })
                  }
                  placeholder="Tell us about your project or requirement..."
                  className="w-full mt-2 border rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* BUTTONS */}
              <div className="grid md:grid-cols-2 gap-5">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-semibold transition"
                >
                  {loading
                    ? "Sending..."
                    : "Send Email"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >
                  Send WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <span className="text-blue-600 uppercase tracking-widest font-semibold">
              Visit Us
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4">
              Our Office Location
            </h2>

            <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
              Connect with our team for OMR
              consultation, onboarding, and
              enterprise workflow solutions.
            </p>
          </div>

          <div className="mt-14 rounded-[32px] overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48177722894!2d76.76356959999999!3d28.4231876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1864f2a4c2c9%3A0x94e7f5c5f5f5f5f5!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716200000000"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-5 rounded-full shadow-2xl transition z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </main>
  );
}