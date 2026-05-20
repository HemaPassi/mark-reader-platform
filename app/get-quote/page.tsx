"use client";

import { useState } from "react";

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.open(
          `https://wa.me/919810392402?text=${encodeURIComponent(
            `Hello MarkReader,

Company: ${formData.company}
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Budget: ${formData.budget}

Message:
${formData.message}`,
          )}`,
          "_blank",
        );

        alert("Quote request submitted successfully");

        setFormData({
          company: "",
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* Hero */}
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2200&auto=format&fit=crop"
            alt="Get Quote"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

        {/* Glow Effects */}
        <div className="orange-glow top-[-120px] left-[-120px]" />

        <div className="orange-glow bottom-[-220px] right-[-120px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.4em] text-sm text-orange-400 mb-6 font-semibold">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Let’s Build Future-Ready
              <br />
              Industrial Solutions
              <br />
              Together
            </h1>

            <p className="mt-10 text-xl text-slate-300 leading-9 max-w-3xl">
              Connect with MarkReader for engineering excellence, manufacturing
              support, and industrial innovation tailored to your business.
            </p>
          </div>
        </div>
      </section>
      {/* Form Section */}
      <section className="relative bg-slate-950 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="pt-10 lg:pt-24">
              <p className="uppercase tracking-[0.35em] text-sm text-orange-400 font-semibold mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Smart Industrial Solutions Backed By Engineering Excellence
              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">
                MarkReader delivers reliable industrial services focused on
                automation, manufacturing, engineering precision, and
                operational efficiency.
              </p>

              <div className="space-y-6 mt-12">
                {[
                  "Advanced Engineering Solutions",
                  "Scalable Manufacturing Support",
                  "Dedicated Technical Assistance",
                  "Fast Project Delivery",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      ✓
                    </div>

                    <p className="text-slate-200 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="relative lg:-mt-32">
              <div
                className="
            relative
            glass-card
            rounded-[2.5rem]
            p-8
            lg:p-10
            border
            border-orange-500/20
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            overflow-hidden
          "
              >
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-6 right-6 z-20 bg-orange-500/20 border border-orange-500/30 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-orange-300 font-medium">
                  Fast Response
                </div>

                <div className="relative z-10">
  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500"
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white outline-none focus:border-orange-500"
      >
        <option value="">Select Service</option>
        <option value="Automation">Automation</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Engineering">Engineering</option>
        <option value="Industrial Consulting">
          Industrial Consulting
        </option>
      </select>

      <select
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white outline-none focus:border-orange-500"
      >
        <option value="">Project Budget</option>
        <option value="Under ₹50K">Under ₹50K</option>
        <option value="₹50K - ₹2L">₹50K - ₹2L</option>
        <option value="₹2L - ₹10L">₹2L - ₹10L</option>
        <option value="Above ₹10L">Above ₹10L</option>
      </select>
    </div>

    <textarea
      name="message"
      rows={6}
      placeholder="Tell us about your project..."
      value={formData.message}
      onChange={handleChange}
      className="w-full rounded-2xl bg-slate-900/70 border border-slate-700 px-5 py-4 text-white placeholder:text-slate-400 outline-none focus:border-orange-500 resize-none"
    />

    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/20"
    >
      {loading ? "Submitting..." : "Request Quote"}
    </button>
  </form>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
