import { motion } from "framer-motion";

type Entry = {
  role: string;
  company: string;
  period: string;
  badge: string;
  badgeColor: string;
  bullets: string[];
};

const ENTRIES: Entry[] = [
  {
    role: "Independent AI Systems Developer",
    company: "Self-Employed · Freelance · Remote, Indonesia",
    period: "Feb 2026 – Present",
    badge: "AI & Tech",
    badgeColor: "bg-purple-100 text-purple-700",
    bullets: [
      "Designed and deployed 10+ production-grade AI automation systems — content engines, recruitment pipelines, customer service bots, and e-commerce solutions — all live at $0 operational cost",
      "Delivered end-to-end client solutions across multiple industries, replacing manual processes with fully automated serverless pipelines",
      "Integrated LLMs, REST APIs, and cloud infrastructure into production-ready systems handling real operational workloads at scale",
      "Maintained 100% uptime on all deployed systems with zero infrastructure spend through serverless architecture design",
    ],
  },
  {
    role: "Freelance Digital Asset Trader",
    company: "Self-Employed · Remote",
    period: "Jan 2024 – May 2025",
    badge: "Entrepreneurship",
    badgeColor: "bg-indigo-100 text-indigo-700",
    bullets: [
      "Managed and traded 200+ digital asset portfolios including social media accounts and virtual goods through strategic asset valuation and negotiation",
      "Generated ±IDR 10M total revenue through consistent deal-closing across multiple digital marketplaces",
      "Handled international transactions via PayPal with zero dispute record, ensuring full payment security on every deal",
      "Built and maintained strong buyer and seller trust through responsive communication and verified transaction history",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Self-Employed",
    period: "Nov 2024 – Apr 2025",
    badge: "Creative",
    badgeColor: "bg-blue-100 text-blue-700",
    bullets: [
      "Designed brand logos for small businesses, managing the full creative process from concept development through to final delivery",
      "Created product display visuals and storefront layouts to strengthen product presentation and drive customer engagement",
      "Coordinated with clients throughout each project to ensure deliverables aligned precisely with their expectations and brand identity",
      "Produced marketing collateral including social media graphics and promotional materials tailored to each client's target audience",
    ],
  },
  {
    role: "Publication & Documentation Staff (KKN)",
    company: "UPN Veteran Jawa Timur",
    period: "Jun – Aug 2022",
    badge: "Academic",
    badgeColor: "bg-green-100 text-green-700",
    bullets: [
      "Managed end-to-end Instagram content planning, scheduling, and publication for the community service program's public communications",
      "Produced banners, posters, and infographics aligned with program themes for both promotional and archival purposes",
      "Maintained structured digital archives and supported administrative documentation workflows for the team",
      "Coordinated cross-functional documentation tasks to ensure accurate and timely reporting of all program activities",
    ],
  },
  {
    role: "Hydroponics Research Intern (KKP)",
    company: "SEAMEO BIOTROP — Southeast Asian Regional Centre for Tropical Biology · Bogor, West Java",
    period: "Jan – Feb 2022",
    badge: "Research",
    badgeColor: "bg-teal-100 text-teal-700",
    bullets: [
      "Operated a full-cycle Nutrient Film Technique (NFT) hydroponic system for spinach cultivation inside a controlled greenhouse environment under institutional supervision",
      "Prepared AB Mix nutrient solutions and calibrated TDS and pH meters daily to maintain precise plant growth parameters (EC: 1,200–1,500 ppm; pH: 5.5–6.0)",
      "Executed all stages of crop production: seed germination in rockwool media, seedling transplantation, plant health monitoring, and final harvest with post-harvest handling",
      "Collected systematic field data and authored a structured technical report documenting methodologies, findings, and operational recommendations",
    ],
  },
  {
    role: "Cashier & Customer Service Staff",
    company: "Toko Batik & Kosmetik As-Shafa · Serang, Banten",
    period: "Jul 2020 – Dec 2021",
    badge: "Operations",
    badgeColor: "bg-orange-100 text-orange-700",
    bullets: [
      "Managed daily point-of-sale operations, processing all batik and cosmetics transactions accurately with full cash accountability across high-traffic retail hours",
      "Delivered consultative customer service by guiding shoppers through product selection based on preferences and budget, consistently driving repeat visits",
      "Handled customer complaints with professionalism and composure, resolving issues efficiently to preserve customer trust and satisfaction",
      "Built strong product knowledge across batik textiles and cosmetics lines, enabling confident and accurate recommendations to diverse customers",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-[#1a1a2e]"
        >
          Work Experience
        </motion.h2>

        <div className="mt-12 relative pl-10">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />
          <div className="space-y-8">
            {ENTRIES.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative"
              >
                <span className="absolute -left-[34px] top-2 w-3.5 h-3.5 rounded-full bg-[#6c3fc5] ring-4 ring-purple-100" />
                <div className="bg-white border border-gray-100 rounded-xl p-6 hover:border-purple-200 hover:shadow-md transition">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#1a1a2e]">{e.role}</h3>
                      <div className="text-sm text-gray-600">{e.company}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${e.badgeColor}`}
                      >
                        {e.badge}
                      </span>
                      <span className="text-xs text-gray-500">{e.period}</span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
