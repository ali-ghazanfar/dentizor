import { Check } from "lucide-react";

const ModuleCard = ({ module }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-brand-200 bg-gradient-to-b from-white to-brand-50/70 p-7 shadow-[0_10px_30px_rgba(30,36,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_18px_42px_rgba(30,36,35,0.11)]">
    <div className="absolute inset-x-0 top-0 h-1 bg-brand-primary" aria-hidden="true" />

    <span className="mb-5 inline-flex w-fit rounded-full bg-brand-100 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-800">
      {module.category}
    </span>
    <h3 className="text-[22px] font-heading leading-[1.4] tracking-[-0.015em] text-brand-charcoal">
      {module.title}
    </h3>
    <p className="mt-3 text-[15px] leading-[1.65] text-black/65">
      {module.description}
    </p>

    <ul className="mt-5 space-y-2 border-t border-brand-200 pt-5">
      {module.highlights.map((highlight) => (
        <li key={highlight} className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-black/65">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
            <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </article>
);

export default ModuleCard;
