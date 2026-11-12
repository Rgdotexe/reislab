"use client";

import { useState, FormEvent } from "react";
import { services } from "@/data/services";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // In production this posts to /api/inquiry which saves to Prisma/MySQL
    // For now we simulate success
    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Inquiry:", Object.fromEntries(formData));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 text-gold/70 text-sm tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-gold/40" />
                Get in Touch
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight">
                Let&apos;s build
                <br />
                something
                <br />
                remarkable
              </h2>
            </div>

            <p className="text-cream/60 text-lg max-w-md">
              Tell us about your project. We&apos;ll respond within 24 hours
              with next steps and a tailored quote.
            </p>

            <div className="space-y-4 text-cream/70">
              <div className="flex items-start gap-3">
                <span className="text-gold mt-1">✦</span>
                <div>
                  <p className="text-sm text-cream/40 uppercase tracking-wider">
                    Location
                  </p>
                  <p>Uttara, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-1">✦</span>
                <div>
                  <p className="text-sm text-cream/40 uppercase tracking-wider">
                    Founders
                  </p>
                  <p>Roni Hassan · Mohammad Shifat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-black-soft/50 border border-white/10 rounded-2xl p-8">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-4xl text-gold">✦</div>
                <h3 className="font-serif text-2xl text-cream">
                  Message received
                </h3>
                <p className="text-cream/60">
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-gold text-sm hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-cream/50 mb-1.5">
                      Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-cream/50 mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-cream/50 mb-1.5">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="+880 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-cream/50 mb-1.5">
                    Service *
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / Not sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-cream/50 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-gold py-3.5 bg-gold text-black font-medium rounded-full hover:bg-gold-light transition-colors disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or use WhatsApp.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
