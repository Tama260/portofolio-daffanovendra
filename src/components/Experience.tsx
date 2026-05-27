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
    role: "Freelance Digital Asset Trader",
    company: "Self-Employed · Remote",
    period: "Jan 2024 – May 2025",
    badge: "Entrepreneurship",
    badgeColor: "bg-purple-100 text-purple-700",
    bullets: [
      "Conducted 200+ digital asset transactions across TikTok accounts and in-game items",
      "Generated approximately IDR 10M total revenue",
      "Managed international transactions using PayPal",
      "Maintained strong buyer trust through responsive communication and verified reviews",
    ],
  },
  {
    role: "Freelance Graphic Designer",
    company: "Self-Employed",
    period: "Nov 2024 – Apr 2025",
    badge: "Creative",
    badgeColor: "bg-blue-100 text-blue-700",
    bullets: [
      "Designed logos and visual branding assets for clients",
      "Created promotional product visuals and marketing layouts",
    ],
  },
  {
    role: "Publication & Documentation Staff (KKN)",
    company: "UPN Veteran Jawa Timur",
    period: "Jun – Aug 2022",
    badge: "Academic",
    badgeColor: "bg-green-100 text-green-700",
    bullets: [
      "Managed social media publication planning and execution",
      "Designed banners, posters, and infographics for community events",
    ],
  },
  {
    role: "Hydroponics Research Intern",
    company: "SEAMEO BIOTROP, Bogor",
    period: "Jan – Feb 2022",
    badge: "Research",
    badgeColor: "bg-teal-100 text-teal-700",
    bullets: [
      "Operated NFT hydroponic systems and monitored plant growth data",
      "Collected and processed field research data",
      "Created technical reports and documentation",
    ],
  },
  {
    role: "Cashier & Customer Service Staff",
    company: "Toko Batik & Kosmetik As-Shafa",
    period: "Jul 2020 – Dec 2021",
    badge: "Operations",
    badgeColor: "bg-orange-100 text-orange-700",
    bullets: [
      "Managed daily POS operations and cash handling",
      "Handled customer service and transaction processing",
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
