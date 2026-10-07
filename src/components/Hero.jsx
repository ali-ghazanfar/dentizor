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
            <h1 className="mb-6 font-heading text-[44px] font-extrabold leading-[1.02] tracking-[-0.04em] text-brand-charcoal sm:text-[56px] xl:text-[68px]">
              Your dental practice, <span className="text-brand-primary">on one screen.</span>
            </h1>

            <p className="mb-10 max-w-[560px] text-lg leading-relaxed text-brand-charcoal/75 md:text-xl">
              Appointments, patient records, charting, treatment plans, lab orders and billing in one system, so your team can focus on patients, not paperwork.
            </p>
          </div>

          <ScreenSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
