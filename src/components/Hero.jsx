import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";
import ScreenSlider from "./ScreenSlider";

const Hero = () => {
  return (
    <section id="platform" className="px-6 scroll-mt-24">
      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-brand-50 via-white to-brand-100 px-6 py-14 sm:px-10 md:py-20 lg:px-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-charcoal">
              Dental practice management software for Pakistan
            </p>

            <h1 className="mb-6 font-heading text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-brand-charcoal sm:text-[56px] xl:text-[68px]">
              Your dental practice, <span className="text-brand-primary">on one screen.</span>
            </h1>

            <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-brand-charcoal/75 md:text-xl">
              Appointments, patient records, charting, treatment plans, lab orders and billing in one system, so your team can focus on patients, not paperwork.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-charcoal px-8 py-4 text-base font-bold text-white shadow-[0_12px_28px_-10px_rgba(30,36,35,0.6)] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={getWhatsAppUrl("Hello Dentizor, I would like to discuss your dental practice management software and book a demo.")}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-8 py-4 text-base font-semibold text-brand-primary transition-all hover:-translate-y-0.5 hover:border-brand-primary active:translate-y-0"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <ScreenSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
