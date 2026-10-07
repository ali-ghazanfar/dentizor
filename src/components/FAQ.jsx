import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/faqs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white scroll-mt-20">
      <div className="max-w-[800px] mx-auto">
        <div className="mb-12 text-center">
          <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">Common questions</span>
          <h2 className="text-[36px] md:text-[48px] font-heading text-brand-charcoal tracking-[-0.03em] leading-tight">
            Dental software FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question} 
              className={`overflow-hidden rounded-[18px] border transition-all duration-300 ${openIndex === index ? 'border-brand-deep bg-brand-deep text-white shadow-[0_16px_36px_rgba(109,63,143,0.22)]' : 'border-brand-200 bg-white shadow-[0_8px_24px_rgba(30,36,35,0.06)]'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full cursor-pointer items-center justify-between gap-5 p-6 text-left md:px-7"
              >
                <span className={`text-[18px] font-heading font-semibold leading-[1.5] ${openIndex === index ? 'text-white' : 'text-brand-charcoal'}`}>{faq.question}</span>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${openIndex === index ? 'bg-white/15 text-white' : 'bg-brand-100 text-brand-primary'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-7 text-[16px] leading-[1.7] text-white/80 animate-in fade-in slide-in-from-top-2 duration-300 md:px-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
