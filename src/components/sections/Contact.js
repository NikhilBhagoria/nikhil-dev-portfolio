"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { use3DTilt } from "@/hooks/use3DTilt";

/**
 * Enterprise Production-level Contact section.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "new-project",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contactApiUrl) {
      setErrorMessage("Contact service is not configured yet.");
      return;
    }

    setIsSending(true);
    setErrorMessage("");
    setSubmitted(false);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()+ " - " + formData.purpose,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Request failed with status ${response.status}`);
      }

      setFormData({ name: "", email: "", purpose: "new-project", message: "" });
      setSubmitted(true);
    } catch (error) {
      console.error("Failed to send contact message:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Let's Build Something
            <br />
            <span className="gradient-text">Great</span>
          </h1>
          <p className="text-on-surface-variant/90 text-lg max-w-2xl mx-auto leading-relaxed">
            I believe the best software is built through collaboration and personal
            connection. Whether you have a specific project or just want to chat,
            I'm all ears.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Drop a Line Card */}
          <ContactInfoCard type="email" />

          {/* Currently At Card */}
          <ContactInfoCard type="location" />
        </div>

        {/* Career Update */}
        <CareerUpdateCard />

        {/* Contact Form */}
        <div className="bg-[#121420] rounded-[1.75rem] p-8 md:p-12 border border-[#1f2438]/50 shadow-xl">
          <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-2 text-white">
            <span>✉️</span>
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-on-surface-variant/90 font-medium text-sm mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Who's writing?"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c13] border border-[#1f2438]/60 text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#00d1ff]/50 transition-colors"
                  required
                  disabled={isSending}
                />
              </div>
              <div>
                <label className="block text-on-surface-variant/90 font-medium text-sm mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0c13] border border-[#1f2438]/60 text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#00d1ff]/50 transition-colors"
                  required
                  disabled={isSending}
                />
              </div>
            </div>

            {/* Purpose Selection */}
            <div>
              <label className="block text-on-surface-variant/90 font-medium text-sm mb-4">
                What's on your mind?
              </label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: "new-project", label: "New Project" },
                  { value: "consulting", label: "Consulting" },
                  { value: "just-saying-hi", label: "Just Saying Hi" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        purpose: option.value,
                      }))
                    }
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                      formData.purpose === option.value
                        ? "bg-[#1b2030] border-[#00d1ff] text-[#00d1ff]"
                        : "border-[#1f2438]/60 bg-[#0b0c13] text-on-surface-variant hover:border-[#1f2438] hover:text-white"
                    } ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                    disabled={isSending}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-on-surface-variant/90 font-medium text-sm mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="6"
                className="w-full px-4 py-3 rounded-xl bg-[#0b0c13] border border-[#1f2438]/60 text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-[#00d1ff]/50 transition-colors resize-none"
                required
                disabled={isSending}
              ></textarea>
            </div>

            {(submitted || errorMessage) && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm ${
                  submitted
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-300"
                }`}
                aria-live="polite"
              >
                {submitted
                  ? "Your message was sent successfully. I’ll get back to you soon."
                  : errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                variant={submitted ? "primary" : "gradient"}
                size="lg"
                className="w-full"
                loading={isSending}
              >
                {submitted ? "✓ Message Sent Successfully" : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Contact Info Cards with 3D Tilt
function ContactInfoCard({ type }) {
  const tilt = use3DTilt(5, 1.02);

  if (type === "email") {
    return (
      <div
        {...tilt}
        className="bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 shadow-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.04)]"
      >
        <p className="text-primary text-xs font-headline uppercase tracking-widest mb-3">
          📧 DROP A LINE
        </p>
        <p className="text-white text-lg font-medium">
          nikhilkumar2450@gmail.com
        </p>
      </div>
    );
  }

  return (
    <div
      {...tilt}
      className="bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 shadow-lg transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.04)]"
    >
      <p className="text-secondary text-xs font-headline uppercase tracking-widest mb-3">
        📍 CURRENTLY AT
      </p>
      <p className="text-white text-lg font-medium">
        India
      </p>
      <p className="text-on-surface-variant/80 text-sm mt-2">
        Available for remote world-wide
      </p>
    </div>
  );
}

// Sub-component for Career Update Card with 3D Tilt
function CareerUpdateCard() {
  const tilt = use3DTilt(4, 1.01);

  return (
    <div
      {...tilt}
      className="bg-[#121420] rounded-[1.75rem] p-8 border border-[#1f2438]/50 hover:border-[#00d1ff]/40 shadow-lg mb-12 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,209,255,0.04)]"
    >
      <div className="flex gap-4">
        <span className="text-3xl">🚀</span>
        <div>
          <h3 className="text-white text-lg font-bold mb-2">
            Career Update
          </h3>
          <p className="text-on-surface-variant/90">
            I'm currently looking for{" "}
            <span className="text-primary font-semibold">
              Senior Engineering roles
            </span>{" "}
            or high-impact consulting projects. Let's create something
            meaningful together!
          </p>
        </div>
      </div>
    </div>
  );
}
