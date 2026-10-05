import { useEffect } from "react";
import ModuleCard from "../components/ModuleCard";
import { modules } from "../data/modules";
import { getWhatsAppUrl } from "../utils/whatsapp";
import Seo, { siteUrl } from "../components/Seo";

const modulesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Dentizor Dental Software Modules",
  url: `${siteUrl}/modules`,
  description: "Dental software modules for appointments, patient records, cases, odontogram charting, treatment planning, lab orders, billing, inventory and business in Pakistan.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: modules.length,
    itemListElement: modules.map((module, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: module.title,
      description: module.description,
    })),
  },
};

const Modules = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 pt-12 pb-24 bg-white">
      <Seo
        title="Dental Practice Software Modules Pakistan | Dentizor"
        description="Explore Dentizor modules for appointments, patient records, cases, odontogram charting, treatment plans, lab orders, billing, inventory, payroll and reports."
        path="/modules"
        keywords={["dental software modules Pakistan", "odontogram software", "dental treatment planning", "dental billing software", "dentist practice software"]}
        schema={modulesSchema}
      />
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[860px] mx-auto text-center mb-12">
          <h1 className="text-[42px] md:text-[58px] font-heading text-brand-charcoal tracking-[-0.035em] leading-tight mb-6">
            Every module, <br /> connected around your practice.
          </h1>
          <p className="text-lg text-brand-charcoal/70 leading-relaxed">
            Explore the complete Dentizor workspace across scheduling, patient care, dental charting, treatment planning, lab work, billing, inventory, business and administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.slug} module={module} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[20px] border border-brand-200 bg-gradient-to-r from-brand-50 to-white p-8 text-center shadow-[0_14px_38px_rgba(32,33,36,0.08)] md:flex-row md:p-10 md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading text-black mb-2">Want these modules for your clinic?</h2>
            <p className="text-black/65 leading-relaxed">Tell us how your dental practice works, and we’ll help you plan the right Dentizor setup.</p>
          </div>
          <a href={getWhatsAppUrl("Hello Dentizor, I would like to discuss the modules needed for my dental practice.")} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-deep">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Modules;
