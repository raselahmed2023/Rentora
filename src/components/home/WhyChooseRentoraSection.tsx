import {
  BadgeCheck,
  LayoutGrid,
  Smartphone,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Clear Information",
    description:
      "Property details are presented in a structured way so renters can understand important information quickly.",
    icon: BadgeCheck,
  },
  {
    title: "Simple Experience",
    description:
      "A clean and straightforward interface helps users explore rental options without unnecessary complexity.",
    icon: LayoutGrid,
  },
  {
    title: "Responsive Design",
    description:
      "Rentora is designed to provide a consistent experience across mobile, tablet, and desktop devices.",
    icon: Smartphone,
  },
  {
    title: "Built for Everyone",
    description:
      "The platform supports both renters searching for a home and owners who want to manage their properties.",
    icon: UsersRound,
  },
];

export default function WhyChooseRentoraSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            Why Rentora
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            A simpler way to explore rental properties
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Rentora focuses on clarity, usability, and a consistent
            rental experience for property seekers and owners.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E] transition duration-300 group-hover:bg-[#0F766E] group-hover:text-white">
                  <Icon size={27} />
                </span>

                <div className="mt-auto pt-8">
                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-10 rounded-2xl border border-[#0F766E]/20 bg-[#0F766E] px-6 py-8 text-center text-white sm:px-10">
          <h3 className="text-2xl font-bold">
            Rental discovery should feel simple
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-white/80">
            Rentora keeps the experience focused so users can spend
            less time navigating and more time making informed rental
            decisions.
          </p>
        </div>
      </div>
    </section>
  );
}