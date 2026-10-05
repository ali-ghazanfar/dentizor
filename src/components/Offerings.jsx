import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { modules } from "../data/modules";
import ModuleCard from "./ModuleCard";

const priorityModuleSlugs = [
  "calendar-appointments",
  "cases",
  "odontogram-charting",
  "treatment-plans",
  "billing-payments",
  "accounts-transactions",
];

const priorityModules = priorityModuleSlugs
  .map((slug) => modules.find((module) => module.slug === slug))
  .filter(Boolean);

const Offerings = () => {
  return (
    <section id="modules" className="pt-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-4">
          <div className="max-w-[860px]">
            <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">Built around dental care</span>
            <h2 className="text-[36px] md:text-[48px] font-heading mb-6 text-brand-charcoal tracking-[-0.03em] leading-tight">
              Everything your dental team needs, connected.
            </h2>
            <p className="text-lg text-brand-charcoal/70 leading-relaxed">
              Dentizor keeps the front desk, dentists and practice owners aligned around the same patient journey from the first booking to completed treatment and the final payment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityModules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/modules" className="inline-flex items-center gap-2 rounded-full border border-brand-primary bg-white px-7 py-3.5 text-sm font-bold text-brand-primary transition-all transform hover:-translate-y-0.5 hover:bg-[#f4f5f7] active:translate-y-0">
            See more modules
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
