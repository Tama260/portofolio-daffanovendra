import { motion } from "framer-motion";
import { Zap, Cpu, GitMerge, Code2, Database, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SKILLS: { Icon: LucideIcon; title: string; items: string[] }[] = [
  {
    Icon: Zap,
    title: "AI Content Automation",
    items: [
      "Content Repurposing",
      "Workflow Automation",
      "Multi-Platform Publishing",
      "AI Content Pipelines",
      "Prompt Engineering",
    ],
  },
  {
    Icon: Cpu,
    title: "AI Tools & LLMs",
    items: [
      "Groq LLaMA 3.3 70B",
      "Generative AI",
      "Pollinations.ai",
      "Structured Prompting",
      "AI Content Generation",
    ],
  },
  {
    Icon: GitMerge,
    title: "Automation & Integration",
    items: ["Pipedream", "n8n", "REST API", "Google Apps Script", "Webhook Automation"],
  },
  {
    Icon: Code2,
    title: "Development & Deployment",
    items: ["React", "Node.js", "Vite", "Tailwind CSS", "Netlify", "GitHub"],
  },
  {
    Icon: Database,
    title: "Database & Infrastructure",
    items: [
      "MongoDB Atlas",
      "Supabase",
      "Google Sheets Database",
      "Serverless Workflow",
      "Deployment Systems",
    ],
  },
  {
    Icon: Palette,
    title: "Creative & Content",
    items: [
      "Canva",
      "Adobe Premiere Pro",
      "CapCut",
      "Content Strategy",
      "Social Media Content",
      "Visual Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-[#1a1a2e]"
        >
          Core Skills
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white/70 backdrop-blur border border-purple-100 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg shadow-purple-500/10 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-100 text-[#6c3fc5] flex items-center justify-center mb-3">
                <s.Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e]">{s.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
