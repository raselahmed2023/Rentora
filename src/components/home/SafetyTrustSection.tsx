import {
  BadgeCheck,
  FileCheck2,
  KeyRound,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type SafetyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const safetyItems: SafetyItem[] = [
  {
    title: "Verify Property Details",
    description:
      "Check the property address, rent, facilities, and availability before making a decision.",
    icon: BadgeCheck,
  },
  {
    title: "Review Rental Terms",
    description:
      "Read the rental conditions, advance payment, utility costs, and agreement period carefully.",
    icon: FileCheck2,
  },
  {
    title: "Visit Before Payment",
    description:
      "Visit the property and communicate directly with the owner before sending any payment.",
    icon: KeyRound,
  },
];

export default function SafetyTrustSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0F766E]/10 px-4 py-2 text-sm font-bold text-[#0F766E]">
              <ShieldCheck size={18} />
              Safety & Trust
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Make informed rental decisions with confidence
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Rentora encourages renters to review important property
              information and communicate clearly before confirming a
              rental.
            </p>

            <div className="mt-8 rounded-2xl border border-[#0F766E]/20 bg-[#0F766E] p-6 text-white">
              <h3 className="text-xl font-bold">
                Important rental reminder
              </h3>

              <p className="mt-3 leading-7 text-white/80">
                Never send advance payment without verifying the
                property, owner information, and rental agreement.
              </p>
            </div>
          </div>

          {/* Right safety cards */}
          <div className="space-y-5">
            {safetyItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0F766E]/40 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0F766E]/10 text-[#0F766E] transition group-hover:bg-[#0F766E] group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#0F766E]">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}