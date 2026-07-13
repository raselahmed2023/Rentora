"use client";

import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How can I find a rental property on Rentora?",
    answer:
      "Visit the Browse Rentals page to explore available properties. You will be able to search and filter listings by location, property type, and price when the listing features are completed.",
  },
  {
    question: "Do I need an account to browse properties?",
    answer:
      "No. Rental listings and property details are publicly accessible. An account will be required for actions such as adding, managing, or saving properties.",
  },
  {
    question: "Who can list a property on Rentora?",
    answer:
      "Registered property owners will be able to add rental listings with complete information, including rent, location, description, facilities, and images.",
  },
  {
    question: "Does Rentora collect rental payments?",
    answer:
      "No. Rentora is designed to help renters discover properties and communicate with property owners. Payments and rental agreements should be handled carefully between both parties.",
  },
  {
    question: "How can I stay safe before renting a property?",
    answer:
      "Visit the property, verify the owner and address, review all rental terms, and avoid sending advance payment before confirming the property and agreement.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F766E]/10 px-4 py-2 text-sm font-bold text-[#0F766E]">
              <HelpCircle size={18} />
              Frequently Asked Questions
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Common questions about Rentora
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Learn how Rentora supports renters and property owners
              through a clear and organized rental experience.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">
                Still need assistance?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact the Rentora support team for questions about
                accounts, listings, or platform usage.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0F766E] hover:underline"
              >
                Contact Support
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-bold text-slate-900">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={21}
                      className={`shrink-0 text-[#0F766E] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-5 sm:px-6">
                      <p className="text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0F766E] px-6 py-10 text-center text-white sm:px-10 sm:py-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to begin your rental journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Explore rental opportunities or create an account to list
            and manage your property through Rentora.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/rentals"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#0F766E] transition hover:bg-slate-100"
            >
              Browse Rentals
              <ArrowRight size={19} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}