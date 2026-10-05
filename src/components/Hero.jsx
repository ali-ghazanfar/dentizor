import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section id="platform" className="px-6 scroll-mt-24">
      <div className="relative h-[680px] rounded-[22px] overflow-hidden bg-brand-charcoal flex flex-col items-center justify-center text-center p-8">
        <img className="absolute inset-0 h-full w-full object-cover" src="/dentizor-dental-clinic-hero.png" alt="Modern dental treatment room with digital imaging equipment" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/82 to-brand-charcoal/45" aria-hidden="true" />
        <div className="relative z-20 max-w-[1050px]">
          <p className="text-white/75 text-sm font-semibold uppercase tracking-[0.22em] mb-6">
            Dental practice management software for Pakistan
          </p>
          <h1 className="text-white text-[46px] sm:text-[56px] md:text-[72px] font-heading mb-8 leading-[0.98] tracking-[-0.035em]">
            Your dental practice, <br /> on one screen.
          </h1>

          <p className="text-white text-lg md:text-xl mb-12 max-w-[760px] mx-auto leading-relaxed">
            Bring appointments, patient records, charting, treatment plans, lab orders, billing and clinic business together, so your team can focus on patients, not paperwork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={getWhatsAppUrl("Hello Dentizor, I would like to discuss your dental practice management software and book a demo.")} target="_blank" rel="noreferrer" className="flex items-center gap-2 cursor-pointer bg-white text-brand-primary px-8 py-4 rounded-full text-base font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              WhatsApp Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="/#contact" className="flex items-center gap-2 cursor-pointer border border-white/20 text-white px-8 py-4 rounded-full text-base bg-white/10 backdrop-blur-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Book a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
