import { Check } from "lucide-react";

const foundations = [
  {
    title: "Built to fit your practice",
    points: [
      "A focused setup for solo dentists and multi-dentist clinics",
      "Connected patient, clinical, scheduling and business workflows",
      "Your own procedures, fees, medicines, stock items and roles",
      "A practical rollout shaped around the way your dental team works",
    ],
  },
  {
    title: "One connected patient journey",
    points: [
      "Every case starts from an appointment and carries on across visits",
      "Completing a procedure charts the tooth and takes its materials out of stock",
      "The treatment plan builds the invoice, and payments land in the right account",
      "Dentist commissions and payroll follow from completed treatment",
    ],
  },
  {
    title: "Access & data protection",
    points: [
      "Role permissions that decide which screens each person can open",
      "Authenticated access to sensitive clinical and business workflows",
      "Controlled visibility for reception, dentists and practice managers",
      "Patient information organised in one consistent practice record",
    ],
  },
  {
    title: "Implementation & support",
    points: [
      "Practice workflow discovery before configuration begins",
      "Setup of procedures, fees, working hours and team access",
      "Role-focused onboarding for dentists, reception and managers",
      "Ongoing support structured around the agreed rollout plan",
    ],
  },
];

const PlatformFoundations = () => (
  <section id="platform-foundations" className="px-6 py-24 bg-[#f4f5f7] border-y border-black/5 scroll-mt-20">
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[860px] mb-12">
        <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">Under the hood</span>
        <h2 className="text-[36px] md:text-[48px] font-heading text-brand-charcoal tracking-[-0.03em] leading-tight mb-6">
          Simple to adopt. Structured to grow.
        </h2>
        <p className="text-lg text-brand-charcoal/70 leading-relaxed">
          Dentizor is built for the daily reality of dental practices in Pakistan, with connected workflows, controlled access and an implementation path shaped around your team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {foundations.map((foundation) => (
          <article key={foundation.title} className="group rounded-[18px] border border-brand-200 bg-white p-7 shadow-[0_10px_30px_rgba(32,33,36,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_42px_rgba(32,33,36,0.1)] md:p-8">
            <h3 className="mb-6 text-[22px] font-heading leading-[1.4] tracking-[-0.015em] text-brand-charcoal">{foundation.title}</h3>
            <ul className="space-y-3.5">
              {foundation.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] leading-[1.65] text-black/65">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFoundations;
