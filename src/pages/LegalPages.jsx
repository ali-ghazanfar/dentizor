import { useEffect } from "react";
import Seo from "../components/Seo";

const policies = {
  privacy: {
    title: "Privacy Policy",
    description: "How Dentizor handles information shared through this website and its dental practice software services.",
    sections: [
      {
        title: "Information we receive",
        paragraphs: [
          "We may receive contact details, clinic information and enquiry content when you communicate with Dentizor or request a demonstration.",
          "Information entered into Dentizor is handled according to the service agreement and configuration agreed with the subscribing dental practice.",
        ],
      },
      {
        title: "How information is used",
        paragraphs: [
          "We use information to respond to enquiries, provide and improve our services, support implementation, maintain security and meet applicable operational or legal requirements.",
        ],
      },
      {
        title: "Access and sharing",
        paragraphs: [
          "We do not sell personal information. Access is limited to authorised people and service providers who require it for an agreed business purpose. Information may also be disclosed when required by law.",
        ],
      },
      {
        title: "Security and retention",
        paragraphs: [
          "Dentizor uses organisational and technical safeguards appropriate to the information being handled. Information is retained only for as long as it is required for the relevant service, support or legal purpose.",
        ],
      },
      {
        title: "Your choices",
        paragraphs: [
          "You may contact us to ask about your information, request a correction or raise a privacy concern. Some requests may need to be directed through the dental practice responsible for the relevant patient record.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For privacy questions, contact hello.dentizor@gmail.com.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "The basic terms governing use of the Dentizor website and related software services.",
    sections: [
      {
        title: "Using Dentizor",
        paragraphs: [
          "You may use this website for lawful business and informational purposes. Access to Dentizor software is subject to an authorised account and the service agreement accepted by the subscribing dental practice.",
        ],
      },
      {
        title: "Accounts and authorised access",
        paragraphs: [
          "Users are responsible for protecting their account credentials and using the system only within their assigned role. Suspected unauthorised access should be reported promptly.",
        ],
      },
      {
        title: "Clinical and organisational responsibility",
        paragraphs: [
          "Dentizor supports dental practice workflows but does not replace professional clinical judgement. Subscribing practices remain responsible for the accuracy of information entered, their operational decisions and the permissions granted to their users.",
        ],
      },
      {
        title: "Service availability",
        paragraphs: [
          "We work to provide reliable services, but availability may be affected by maintenance, infrastructure, third-party services or events outside reasonable control. Specific support and availability commitments are defined in the applicable service agreement.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The Dentizor name, website, software, documentation and related materials are protected intellectual property. They may not be copied, resold or modified except where written permission or an applicable agreement allows it.",
        ],
      },
      {
        title: "Updates and contact",
        paragraphs: [
          "These terms may be updated as the website and services evolve. For questions about these terms, contact hello.dentizor@gmail.com.",
        ],
      },
    ],
  },
};

const LegalPage = ({ type }) => {
  const policy = policies[type];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const path = type === "privacy" ? "/privacy-policy" : "/terms-and-conditions";

  return (
    <main className="bg-white px-6 pt-12 pb-16 md:pb-20">
      <Seo title={`${policy.title} | Dentizor`} description={policy.description} path={path} />
      <div className="mx-auto max-w-[780px]">
        <h1 className="mb-5 text-[42px] font-heading leading-tight tracking-[-0.035em] text-black md:text-[54px]">
          {policy.title}
        </h1>
        <p className="max-w-[720px] text-lg leading-relaxed text-black/65">{policy.description}</p>
        <p className="mt-3 text-sm text-black/45">Last updated: September 20, 2026</p>

        <div className="mt-12 space-y-10">
          {policy.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-heading text-black">{section.title}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[16px] leading-7 text-black/70">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export const PrivacyPolicy = () => <LegalPage type="privacy" />;
export const TermsConditions = () => <LegalPage type="terms" />;
