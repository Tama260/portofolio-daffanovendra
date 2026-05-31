import { motion } from "framer-motion";
import { Brain, Zap, Plug, Database, Monitor, Wrench, Palette, Table2, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SKILLS: { Icon: LucideIcon; title: string; items: string[] }[] = [
  {
    Icon: Brain,
    title: "AI & LLM",
    items: [
      "Groq AI LLaMA 3.1 & 3.3 70B",
      "Prompt Engineering",
      "Structured Output Design",
      "Generative AI (Text, Image, Video)",
      "AI Scoring Systems",
      "Brand Voice QA",
    ],
  },
  {
    Icon: Zap,
    title: "Automation",
    items: [
      "Pipedream",
      "Google Apps Script",
      "Webhook Architecture",
      "Serverless Pipeline Design",
      "Multi-workflow Orchestration",
    ],
  },
  {
    Icon: Plug,
    title: "API & Integration",
    items: [
      "REST API",
      "Brevo API",
      "Google Sheets API",
      "Google Cloud Console",
      "OAuth2",
      "Service Account Auth",
      "Telegram Bot API",
      "Pollinations.ai",
    ],
  },
  {
    Icon: Database,
    title: "Database & Data",
    items: [
      "Supabase PostgreSQL",
      "MongoDB Atlas",
      "Google Sheets as DB",
      "JSON Pipeline",
      "Data Modeling",
    ],
  },
  {
    Icon: Monitor,
    title: "Frontend & Deploy",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Lovable",
      "Bolt.new",
      "Vercel",
      "Cloudflare",
      "Netlify",
      "GitHub Pages",
      "Custom Domain Setup",
    ],
  },
  {
    Icon: Wrench,
    title: "Dev Tools",
    items: [
      "Python (CLI, CRUD)",
      "Node.js",
      "Express.js",
      "HTML/CSS/JS",
      "Visual Studio Code",
      "Git",
      "GitHub",
    ],
  },
  {
    Icon: Palette,
    title: "Creative & Content",
    items: [
      "Graphic Design (Canva, Picsart, Photoroom)",
      "Video Editing (Adobe Premiere Pro, CapCut)",
      "Logo & Product Visual Design",
    ],
  },
  {
    Icon: Table2,
    title: "Data & Operational",
    items: [
      "Microsoft Excel",
      "Microsoft Word & PowerPoint",
      "Notion",
      "Google Sheets",
    ],
  },
  {
    Icon: Star,
    title: "Soft Skills",
    items: [
      "Creative & Innovative Thinking",
      "Critical Thinking",
      "Problem Solving",
      "Adaptability",
      "Team Collaboration",
      "Attention to Detail",
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
