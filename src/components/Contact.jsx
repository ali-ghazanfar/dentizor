import { Mail, MessageCircle, Send } from "lucide-react";
import { getWhatsAppUrl, whatsappDisplayNumber } from "../utils/whatsapp";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Dentizor enquiry from ${formData.get("name")}`;
    const body =
      [
        `Name: ${formData.get("name")}`,
        `Clinic: ${formData.get("clinic")}`,
        `Email: ${formData.get("email")}`,
        `Phone / WhatsApp: ${formData.get("phone")}`,
        "",
        "Message:",
        formData.get("message"),
      ].join("\n");

    const composeUrl = `https://mail.google.com/mail/?${new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "hello.dentizor@gmail.com",
      su: subject,
      body,
    })}`;

    const composeWindow = window.open(composeUrl, "_blank");
    if (composeWindow) {
      composeWindow.opener = null;
    } else {
      window.location.href = composeUrl;
    }
  };

  return (
    <section id="contact" className="px-6 py-24 bg-brand-50 border-t border-brand-100 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
        <div>
          <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">Contact us</span>
          <h2 className="text-[38px] md:text-[50px] font-heading text-black tracking-[-0.035em] leading-tight mb-6">
            Let’s simplify your dental practice.
          </h2>
          <p className="text-lg text-black/65 leading-relaxed max-w-lg">
            Tell us about your team and the daily work you want to improve. We’ll help you shape the right Dentizor setup.
          </p>

          <div className="mt-9 space-y-3">
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hello.dentizor@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[14px] border border-brand-200 bg-white p-3.5 text-black/70 shadow-[0_8px_22px_rgba(32,33,36,0.04)] transition-all hover:border-brand-300 hover:text-brand-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-black/45">Email</span>
                <span className="block mt-0.5 font-semibold">hello.dentizor@gmail.com</span>
              </span>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[14px] border border-brand-200 bg-white p-3.5 text-black/70 shadow-[0_8px_22px_rgba(32,33,36,0.04)] transition-all hover:border-brand-300 hover:text-brand-primary">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-primary">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-black/45">WhatsApp</span>
                <span className="block mt-0.5 font-semibold">{whatsappDisplayNumber}</span>
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[20px] border border-brand-200 bg-white p-7 shadow-[0_18px_48px_rgba(32,33,36,0.1)] md:p-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-semibold text-black">Your name<span className="text-rose-600" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></span>
              <input name="name" type="text" required autoComplete="name" className="mt-2 w-full rounded-[10px] border border-brand-200 bg-brand-50/40 px-4 py-3 text-black outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-100" placeholder="Full name" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-black">Clinic name<span className="text-rose-600" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></span>
              <input name="clinic" type="text" required autoComplete="organization" className="mt-2 w-full rounded-[10px] border border-brand-200 bg-brand-50/40 px-4 py-3 text-black outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-100" placeholder="Your clinic name" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-black">Work email<span className="text-rose-600" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></span>
              <input name="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-[10px] border border-brand-200 bg-brand-50/40 px-4 py-3 text-black outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-100" placeholder="name@clinic.com" />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-black">Phone / WhatsApp<span className="text-rose-600" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></span>
              <input name="phone" type="tel" required autoComplete="tel" className="mt-2 w-full rounded-[10px] border border-brand-200 bg-brand-50/40 px-4 py-3 text-black outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-100" placeholder="+92" />
            </label>
          </div>

          <label className="block mt-5">
            <span className="text-sm font-semibold text-black">How can we help?<span className="text-rose-600" aria-hidden="true"> *</span><span className="sr-only"> (required)</span></span>
            <textarea name="message" required rows="5" className="mt-2 w-full resize-y rounded-[10px] border border-brand-200 bg-brand-50/40 px-4 py-3 text-black outline-none transition-all focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-100" placeholder="Tell us about your practice and the workflows you want to improve." />
          </label>

          <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-bold text-white transition-all hover:opacity-90">
            Send enquiry
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
