import { motion } from "framer-motion";
import { TrendingUp, UserCheck, Video, ArrowRight, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type System = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  flow: string[];
  stack: string[];
  link: string;
};

const SYSTEMS: System[] = [
  {
    Icon: TrendingUp,
    title: "VICE-AI",
    subtitle: "Viral Content Intelligence Engine",
    description:
      "Autonomous AI trend intelligence engine analyzing 200+ daily trends and generating multi-platform content packages automatically.",
    metrics: ["200+ trends/day", "Autonomous publishing", "Multi-platform outputs", "$0 operational cost"],
    flow: ["Trigger", "AI Analysis", "Virality Scoring", "Content Generation", "Publishing Dashboard"],
    stack: ["Groq LLaMA", "Pipedream", "Reddit RSS", "Pollinations.ai", "Google Sheets", "Telegram"],
    link: "https://vice-ai.netlify.app/",
  },
  {
    Icon: UserCheck,
    title: "Personal Brand-OS",
    subtitle: "Autonomous Branding Operating System",
    description:
      "Fully autonomous AI-powered personal branding operating system generating daily content and weekly performance reports automatically.",
    metrics: ["Daily publishing", "AI brand scoring", "Weekly reports", "Automated workflow"],
    flow: ["Content Planning", "AI Generation", "Brand QA", "Publishing", "Analytics Dashboard"],
    stack: ["Groq", "Pipedream", "Pollinations.ai", "Telegram", "Google Sheets"],
    link: "https://personal-bos.netlify.app/",
  },
  {
    Icon: Video,
    title: "Video Script Factory",
    subtitle: "AI Video Production Pipeline",
    description:
      "AI-powered multi-platform video production system generating complete production packages in under 60 seconds.",
    metrics: ["<60 sec generation", "Multi-format support", "Automated publishing", "AI storyboard visuals"],
    flow: ["Topic Input", "AI Script", "Storyboard Creation", "Packaging", "Public URL Deployment"],
    stack: ["Groq", "Pipedream", "Pollinations.ai", "Netlify", "GitHub Pages"],
    link: "https://videoscript-factory.netlify.app/",
  },
];

export default function FeaturedSystems() {
  return (
    <section id="featured" className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a2e]">Featured AI Systems</h2>
          <p className="mt-4 text-gray-600">
            Production-ready AI-powered automation systems designed for scalable content operations.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEMS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white/80 backdrop-blur-md border border-purple-100 rounded-2xl p-8 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 transition flex flex-col"
            >
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE
              </span>

              <div className="w-12 h-12 rounded-xl bg-purple-100 text-[#6c3fc5] flex items-center justify-center mb-4">
                <s.Icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#1a1a2e]">{s.title}</h3>
              <div className="text-sm text-purple-600 font-medium">{s.subtitle}</div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold mb-2">
                  Architecture
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {s.flow.map((step, idx) => (
                    <span key={step} className="inline-flex items-center gap-1.5">
                      <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#1a1a2e] text-white">
                        {step}
                      </span>
                      {idx < s.flow.length - 1 && (
                        <ArrowRight size={12} className="text-purple-400" />
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded bg-gray-100 text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#6c3fc5] hover:text-purple-700"
              >
                View live system <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
