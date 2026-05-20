"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Open WhatsApp
        window.open(
          `https://wa.me/919871698968?text=${encodeURIComponent(
            `Hello OMR India,

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}`,
          )}`,
          "_blank",
        );

        alert("Message sent successfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const contactInfo = [
    {
      title: "Office Address",
      value: "OMR India, New Delhi, India",
    },
    {
      title: "Email Address",
      value: "info@omr.in",
    },
    {
      title: "Phone Number",
      value: "+91 9810392402, +91 9971543678",
    },
    {
      title: "Working Hours",
      value: "Mon - Sat : 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2200&auto=format&fit=crop"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.4em] text-sm text-orange-400 mb-6 font-medium">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Let’s Build Future-Ready Industrial Solutions Together
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-9 max-w-xl">
               Connect with OMR India for engineering
               excellence, manufacturing support, and industrial 
               innovation tailored to your business.
            </p>
          </div>
        </div>
      </section>

     
      {/* Contact Section */}
<section className="relative bg-white pt-0 pb-24 z-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Side */}
      <div className="pt-10">
        <p className="uppercase tracking-[0.35em] text-sm text-orange-500 font-semibold mb-4">
          Get In Touch
        </p>

        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
          We’re Ready To Support Your Industrial Growth
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          Whether you need engineering consultation, manufacturing support,
          automation services, or technical assistance, our team is ready to
          help.
        </p>

        <div className="space-y-6 mt-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-slate-50 border border-slate-100 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-xl font-bold flex-shrink-0">
                0{index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 leading-7">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Form */}
     <div className="relative lg:-mt-52 z-30">
        <div
          className="
            relative
            glass-card
            rounded-[2.5rem]
            p-8
            lg:p-10
            shadow-[0_30px_80px_rgba(0,0,0,0.45)]
            border
            border-orange-500/20
            overflow-hidden
            bg-slate-950
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />

          <div className="relative z-10">
            <p className="uppercase tracking-[0.35em] text-sm text-orange-400 font-semibold">
              Send Message
            </p>

            <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-white leading-tight">
              Request A Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 mt-10">

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-orange-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-orange-500"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500"
                >
                  <option value="" className="bg-slate-900">
                    Select Service
                  </option>

                  <option value="Engineering" className="bg-slate-900">
                    Industrial Engineering
                  </option>

                  <option value="Manufacturing" className="bg-slate-900">
                    Manufacturing Solutions
                  </option>

                  <option value="Automation" className="bg-slate-900">
                    Automation Systems
                  </option>
                </select>
              </div>

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-orange-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold py-4 rounded-2xl shadow-xl hover:shadow-orange-500/30"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 h-[500px] relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48177671552!2d77.06889995382917!3d28.527280343873994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194f8b90d1d5%3A0x4c63c7e7c8e8c7f3!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
