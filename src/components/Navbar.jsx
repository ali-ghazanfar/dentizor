import { Link } from "react-router-dom";
import { getWhatsAppUrl } from "../utils/whatsapp";

const Navbar = () => {
  return (
    <nav className="relative z-40 h-24 flex items-center bg-white">
      <div className="w-full px-6 md:px-[50px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-3xl sm:text-4xl font-sans font-bold tracking-[-0.04em] text-brand-primary" aria-label="Dentizor home">
            <span className="italic">D</span>entizor
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex h-24 items-center gap-10">
            <Link to="/modules" className="text-[16px] text-black transition-colors hover:text-black/80">
              Modules
            </Link>
            <a href="/#faq" className="text-[16px] text-black transition-colors hover:text-black/80">
              FAQs
            </a>
            <a href="/#contact" className="text-[16px] text-black transition-colors hover:text-black/80">
              Contact Us
            </a>
          </div>

          <a
            href={getWhatsAppUrl("Hello Dentizor, I would like to discuss your dental practice management software and book a demo.")}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-primary px-5 sm:px-6 py-3 cursor-pointer rounded-full text-[15px] sm:text-[16px] font-bold text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
