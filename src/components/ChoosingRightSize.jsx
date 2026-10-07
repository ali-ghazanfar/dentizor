const comparisonRows = [
  {
    label: "Best suited to",
    clinic: "A solo dentist with a small front desk",
    group: "Clinics with several dentists, assistants and reception staff",
  },
  {
    label: "Typical patient journey",
    clinic: "Booking → case → charting → treatment → invoice → payment",
    group: "The same connected journey, with each dentist on their own calendar hours",
  },
  {
    label: "Revenue workflow",
    clinic: "Invoices from the treatment plan, part payments and patient dues",
    group: "Dentist commissions, monthly payroll, accounts and profit and loss",
  },
  {
    label: "Operational depth",
    clinic: "Lab orders, stock and clinic accounts without extra staff",
    group: "Role permissions for reception, dentists, assistants and the owner",
  },
];

const ChoosingRightSize = () => (
  <section id="choosing-right-fit" className="px-6 py-24 bg-white scroll-mt-20">
    <div className="max-w-[1200px] mx-auto">
      <div className="max-w-[860px] mx-auto mb-12 text-center">
        <span className="text-brand-primary tracking-[0.2em] uppercase text-sm mb-4 block">Choosing the right fit</span>
        <h2 className="text-[36px] md:text-[48px] font-heading text-brand-charcoal tracking-[-0.03em] leading-tight">
          A solo practice or a multi-dentist clinic, which setup fits you?
        </h2>
      </div>

      <div className="overflow-x-auto rounded-[18px] border border-brand-200 bg-white shadow-[0_16px_44px_rgba(30,36,35,0.08)]">
        <table className="w-full min-w-[780px] border-collapse text-left">
          <thead className="bg-brand-charcoal text-white">
            <tr>
              <th className="w-[22%] p-5" aria-label="Comparison criteria" />
              <th className="w-[39%] border-l border-white/15 p-5 text-lg font-heading font-semibold">Independent clinic</th>
              <th className="w-[39%] border-l border-white/15 p-5 text-lg font-heading font-semibold">Multi-dentist practice</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, index) => (
              <tr key={row.label} className="border-t border-brand-200">
                <th className={`p-5 align-top text-sm font-bold text-brand-800 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-50'}`}>{row.label}</th>
                <td className={`border-l border-brand-200 p-5 align-top text-[15px] leading-[1.65] text-black/65 ${index % 2 === 0 ? 'bg-brand-50' : 'bg-white'}`}>{row.clinic}</td>
                <td className={`border-l border-brand-200 p-5 align-top text-[15px] leading-[1.65] text-black/65 ${index % 2 === 0 ? 'bg-white' : 'bg-brand-50'}`}>{row.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ChoosingRightSize;
