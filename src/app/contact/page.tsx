"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";
import {
  FaEnvelope,
  FaLocationDot,
  FaMessage,
  FaPaperPlane,
} from "react-icons/fa6";

const contactInfo = [
  {
    title: "Email",
    value: "raselahmediu22@gmail.com",
    href: "mailto:raselahmediu22@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Location",
    value: "Dhaka, Bangladesh",
    href: "https://www.google.com/maps/search/?api=1&query=Dhaka%2C%20Bangladesh",
    icon: FaLocationDot,
  },
];

export default function ContactPage() {
  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(
      event.currentTarget
    );

    const name = String(
      formData.get("name") ?? ""
    );

    const email = String(
      formData.get("email") ?? ""
    );

    const subject = String(
      formData.get("subject") ?? ""
    );

    const message = String(
      formData.get("message") ?? ""
    );

    const body = `
Name: ${name}
Email: ${email}

${message}
    `.trim();

    window.location.href = `mailto:raselahmediu22@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Heading */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-slate-100 px-4 py-16 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-2xl"
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E] text-white">
            <FaMessage size={23} />
          </span>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Contact Rentora
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            How can we help?
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Contact us regarding your account,
            property listings, or general platform
            questions.
          </p>
        </motion.div>
      </section>

      {/* Contact content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#0F766E] p-7 text-white sm:p-9"
          >
            <h2 className="text-2xl font-bold">
              Get in touch
            </h2>

            <p className="mt-3 leading-7 text-white/75">
              We will respond to your message as soon
              as possible.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={
                      item.title === "Location"
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F766E]">
                      <Icon size={18} />
                    </span>

                    <span>
                      <span className="block text-xs text-white/65">
                        {item.title}
                      </span>

                      <span className="mt-1 block text-sm font-semibold">
                        {item.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              Send a message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the form and your email application
              will open.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField
                  id="name"
                  label="Full name"
                  type="text"
                  placeholder="Your name"
                />

                <InputField
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <InputField
                id="subject"
                label="Subject"
                type="text"
                placeholder="How can we help?"
              />

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/15"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0F766E] text-sm font-bold text-white transition hover:bg-[#115E59]"
              >
                Send Message
                <FaPaperPlane size={15} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

function InputField({
  id,
  label,
  type,
  placeholder,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm outline-none transition focus:border-[#0F766E] focus:bg-white focus:ring-2 focus:ring-[#0F766E]/15"
      />
    </div>
  );
}