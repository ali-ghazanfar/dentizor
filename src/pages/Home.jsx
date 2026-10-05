import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import ChoosingRightSize from "../components/ChoosingRightSize";
import PlatformFoundations from "../components/PlatformFoundations";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Seo, { siteUrl } from "../components/Seo";
import { faqs } from "../data/faqs";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Dentizor",
      url: siteUrl,
      email: "hello.dentizor@gmail.com",
      telephone: "+92 314 7155433",
      areaServed: { "@type": "Country", name: "Pakistan" },
      sameAs: [
        "https://www.linkedin.com/company/dentizor",
        "https://www.facebook.com/dentizor",
        "https://www.instagram.com/dentizor_",
        "https://www.youtube.com/@dentizor",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Dentizor",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-PK",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Dentizor",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      description: "Dental practice management software for Pakistan connecting appointments, patient records, cases, odontogram charting, treatment plans, billing, inventory and business.",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: { "@type": "Country", name: "Pakistan" },
      featureList: ["Dental appointments", "Patient records", "Cases", "Odontogram charting", "Treatment plans", "Prescriptions", "Lab orders", "Invoices and payments", "Inventory", "Payroll and commissions", "Accounts and reports"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

function Home() {
  return (
    <>
      <Seo
        title="Dentizor | Dental Clinic Management Software Pakistan"
        description="Dentizor is dental practice management software for Pakistan, connecting appointments, patient records, cases, odontogram charting, treatment plans, billing, inventory and business."
        keywords={["dental clinic software Pakistan", "dental practice management software", "dentist software Pakistan", "odontogram software", "dental billing software"]}
        schema={homeSchema}
      />
      <Hero />
      <Offerings />
      <ChoosingRightSize />
      <PlatformFoundations />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
