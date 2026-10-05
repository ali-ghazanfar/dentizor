import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Overview", href: "/#platform" },
  { label: "Modules", href: "/modules" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact us", href: "/#contact" },
];

const moduleLinks = [
  "Calendar & Appointments",
  "Cases",
  "Odontogram & Dental Charting",
  "Invoices & Payments",
  "Payroll & Dentist Commissions",
];

const socialChannels = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dentizor", icon: <FaLinkedinIn className="w-4 h-4" aria-hidden="true" /> },
  { label: "Facebook", href: "https://www.facebook.com/dentizor", icon: <FaFacebookF className="w-4 h-4" aria-hidden="true" /> },
  { label: "Instagram", href: "https://www.instagram.com/dentizor_", icon: <FaInstagram className="w-4 h-4" aria-hidden="true" /> },
  { label: "YouTube", href: "https://www.youtube.com/@dentizor", icon: <FaYoutube className="w-4 h-4" aria-hidden="true" /> },
];

const Footer = () => {
  return (
    <footer className="pt-24 pb-10 px-6 bg-brand-charcoal text-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-20 text-left">
          <div className="max-w-md">
            <Link to="/" className="text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white leading-none"><span className="italic">D</span>entizor</Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-sm">
              Focused dental practice management software for clinical, scheduling and business workflows across Pakistan.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialChannels.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={`Dentizor on ${label}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-brand-primary" aria-label={`Dentizor on ${label}`}>
                  {icon}
                </a>
              ))}
            </div>

          </div>

          <div className="md:pt-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] mb-5">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pt-2">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] mb-5">Popular modules</h3>
            <ul className="space-y-3">
              {moduleLinks.map((item) => (
                <li key={item}>
                  <Link to="/modules" className="text-sm text-white/70 hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-7 border-t border-white/25 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs sm:text-sm text-white/70">
          <span>©2026 Dentizor — All rights reserved.</span>
          <nav className="flex items-center gap-5" aria-label="Legal">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
