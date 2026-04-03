"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "new-project",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", purpose: "new-project", message: "" });
      setSubmitted(false);
    }, 2000);
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
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            I believe the best software is built through collaboration and personal
            connection. Whether you have a specific project or just want to chat,
            I'm all ears.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Drop a Line Card */}
          <div className="glass-card rounded-3xl p-8 border border-outline-variant/20">
            <p className="text-primary text-xs font-headline uppercase tracking-widest mb-3">
              📧 DROP A LINE
            </p>
            <p className="text-on-surface text-lg font-medium">
              hello@nikhilkumar.dev
            </p>
          </div>

          {/* Currently At Card */}
          <div className="glass-card rounded-3xl p-8 border border-outline-variant/20">
            <p className="text-secondary text-xs font-headline uppercase tracking-widest mb-3">
              📍 CURRENTLY AT
            </p>
            <p className="text-on-surface text-lg font-medium">
              San Francisco, CA
            </p>
            <p className="text-on-surface-variant text-sm mt-2">
              Available for remote world-wide
            </p>
          </div>
        </div>

        {/* Career Update */}
        <div className="glass-card rounded-3xl p-8 border border-outline-variant/20 mb-12">
          <div className="flex gap-4">
            <span className="text-3xl">🚀</span>
            <div>
              <h3 className="text-on-surface text-lg font-bold mb-2">
                Career Update
              </h3>
              <p className="text-on-surface-variant">
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

        {/* Contact Form */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-outline-variant/20">
          <h2 className="text-2xl font-headline font-bold mb-8 flex items-center gap-2">
            <span>✉️</span>
            Send a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-on-surface font-medium text-sm mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Who's writing?"
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-on-surface font-medium text-sm mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Purpose Selection */}
            <div>
              <label className="block text-on-surface font-medium text-sm mb-4">
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
                        ? "bg-primary-container border-primary text-primary"
                        : "border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:border-outline-variant/50 hover:text-on-surface"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-on-surface font-medium text-sm mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="6"
                className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className={`w-full py-4 rounded-2xl font-headline font-bold text-white text-lg transition-all ${
                  submitted
                    ? "bg-secondary/80"
                    : "hero-gradient hover:scale-[1.02] shadow-lg shadow-primary/20"
                }`}
              >
                {submitted ? "✓ Message Sent" : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
