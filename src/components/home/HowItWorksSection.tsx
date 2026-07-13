import {
  ArrowRight,
  Home,
  MessageCircleMore,
  Search,
  type LucideIcon,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Explore Rentals",
    description:
      "Browse available rental properties and discover options based on your needs.",
    icon: Search,
  },
  {
    number: "02",
    title: "View Property Details",
    description:
      "Check the rent, location, facilities, description, and other important information.",
    icon: Home,
  },
  {
    number: "03",
    title: "Contact the Owner",
    description:
      "Send an inquiry to the property owner and continue the rental discussion.",
    icon: MessageCircleMore,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Find your next rental in three simple steps
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Rentora keeps the rental discovery process clear and easy
            from the first search to contacting the property owner.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Desktop connector line */}
          <div className="absolute left-[17%] right-[17%] top-16 hidden border-t-2 border-dashed border-slate-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative z-10 flex min-h-80 flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-[#0F766E] text-white shadow-md">
                  <Icon size={30} />
                </div>

                <span className="mx-auto mt-5 rounded-full bg-[#0F766E]/10 px-3 py-1 text-xs font-bold text-[#0F766E]">
                  Step {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    size={22}
                    className="mx-auto mt-auto hidden text-[#0F766E] lg:block"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}