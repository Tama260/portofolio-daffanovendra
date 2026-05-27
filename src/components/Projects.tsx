import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

type Category = "AI Automation" | "Content Tools" | "Web Platform" | "Python";

type Project = {
  title: string;
  category: Category;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  flow?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "OmniServe AI",
    category: "AI Automation",
    description:
      "Autonomous Telegram chatbot handling 100+ inquiries/day with <2 sec response and zero operational cost.",
    tags: ["Groq LLaMA", "Pipedream", "Telegram API", "Node.js"],
    github: "https://github.com/Tama260/OmniServe-AI",
    live: "https://t.me/omniservecs_bot",
    flow: "Message → Parse → AI Process → Reply → Log → Alert",
  },
  {
    title: "SmartRecruit AI",
    category: "AI Automation",
    description:
      "End-to-end hiring automation system scoring candidates 0–100 using AI and dispatching emails automatically.",
    tags: ["Groq LLaMA", "Pipedream", "Google Forms", "Brevo API"],
    github: "https://github.com/Tama260/Smartrecruit-AI",
    live: "https://forms.gle/FvaQsB4Ke2djyZKf7",
    flow: "Form → Validate → AI Score → Database → Email",
  },
  {
    title: "AutoContent AI",
    category: "AI Automation",
    description:
      "Serverless engine publishing AI-generated posts and visuals to Telegram and Slack automatically every day.",
    tags: ["Groq LLaMA", "Pipedream", "Pollinations.ai", "Google Sheets"],
    github: "https://github.com/Tama260/Autocontent-AI",
    live: "https://t.me/autocontent_DNA",
    flow: "Schedule → History Check → AI Generate → Image → Publish",
  },
  {
    title: "Automated Order Management",
    category: "AI Automation",
    description:
      "Zero-backend order pipeline with automatic Order ID generation, Supabase database storage, and instant Telegram admin notifications.",
    tags: ["Pipedream", "Supabase", "Telegram API", "Netlify"],
    live: "https://batikasshafa-order-form.netlify.app/",
    flow: "Form Submit → Parse → Save DB → Notify Admin",
  },
  {
    title: "AI Repurposing Engine",
    category: "Content Tools",
    featured: true,
    description:
      "Transform one piece of content into five platform-specific formats simultaneously — Twitter thread, Instagram caption, LinkedIn post, TikTok script, Telegram post.",
    tags: ["React", "Groq LLaMA", "Vite", "Tailwind CSS"],
    github: "https://github.com/Tama260/AI-Repurposing-Engine",
    live: "https://ai-repurposing-engine.netlify.app/",
    flow: "Input → Single API Call → Parse JSON → 5 Platform Outputs",
  },
  {
    title: "AI Video Content Pipeline",
    category: "Content Tools",
    featured: true,
    description:
      "Generate three complete video production packages including scripts, visuals, SEO metadata, and production notes. MongoDB Atlas persistence.",
    tags: ["Node.js", "Groq LLaMA", "MongoDB Atlas", "Express.js"],
    github: "https://github.com/Tama260/AI-Video-Content-Pipeline",
    live: "https://tinyurl.com/AI-Video-Content",
    flow: "Topic → AI Generation → 3 Packages → MongoDB → Display",
  },
  {
    title: "CCC-AI Gen",
    category: "Content Tools",
    description:
      "Marketing campaign generator turning one idea into headlines, captions, and visuals in seconds.",
    tags: ["Lovable", "Groq", "Pipedream", "Vercel"],
    live: "https://cccaigen.dpdns.org/",
    flow: "Idea → AI Generate → Text + Image → Campaign Kit",
  },
  {
    title: "Video Script Factory",
    category: "Content Tools",
    featured: true,
    description:
      "AI-powered multi-platform video production pipeline generating complete production packages in under 60 seconds with AI storyboard.",
    tags: ["Groq", "Pipedream", "Pollinations.ai", "Netlify"],
    live: "https://videoscript-factory.netlify.app/",
    flow: "Topic → Script → Storyboard → Package → Public URL",
  },
  {
    title: "Personal Brand-OS",
    category: "Content Tools",
    featured: true,
    description:
      "Autonomous personal branding operating system with AI-generated daily publishing, brand voice QA scoring, and weekly strategic reporting.",
    tags: ["Groq", "Pipedream", "Telegram", "Pollinations.ai"],
    live: "https://personal-bos.netlify.app/",
    flow: "Schedule → Load Profile → Generate → QA Score → Publish",
  },
  {
    title: "VICE-AI",
    category: "Content Tools",
    featured: true,
    description:
      "AI-powered viral trend intelligence engine analyzing 200+ global trends daily and generating automated multi-platform content outputs.",
    tags: ["Groq", "Pipedream", "Reddit RSS", "Telegram"],
    live: "https://vice-ai.netlify.app/",
    flow: "Fetch Trends → AI Score → Generate Content → Publish → Dashboard",
  },
  {
    title: "As-Shafa Shop",
    category: "Web Platform",
    description:
      "Modern e-commerce platform with dynamic product catalog, customer testimonials, and integrated automated order system with custom domain.",
    tags: ["Lovable", "Supabase", "Vercel", "Cloudflare"],
    live: "https://asshafashop.dpdns.org/",
  },
  {
    title: "Kicks Atlas",
    category: "Web Platform",
    description:
      "Sneaker catalog platform showcasing top 3 best-selling products from 5 major global brands with Buy Now routing to official stores.",
    tags: ["Bolt.new", "HTML/CSS/JS", "GitHub"],
    live: "https://kicksatlas.bolt.host/",
  },
  {
    title: "E-Book Library System",
    category: "Python",
    description:
      "Python CLI library management system with modular CRUD architecture — separated Database, Operations, and View layers. Input validation and exit confirmation.",
    tags: ["Python", "CLI", "Git", "GitHub"],
    github: "https://github.com/Tama260/Library-Python",
  },
];

const FILTERS = ["All", "AI Automation", "Content Tools", "Web Platform", "Python"] as const;

const BADGE_COLOR: Record<Category, string> = {
  "AI Automation": "bg-green-100 text-green-700 border-green-200",
  "Content Tools": "bg-blue-100 text-blue-700 border-blue-200",
  "Web Platform": "bg-orange-100 text-orange-700 border-orange-200",
  Python: "bg-gray-100 text-gray-700 border-gray-200",
};

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-[#1a1a2e]"
        >
          Projects
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                filter === f
                  ? "bg-[#6c3fc5] text-white shadow-md shadow-purple-500/30"
                  : "border border-purple-200 text-purple-600 hover:bg-purple-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
                className={`relative bg-white border rounded-2xl p-6 transition-all ${
                  p.featured
                    ? "border-purple-300 shadow-lg shadow-purple-500/10"
                    : "border-gray-100 hover:border-purple-300 hover:shadow-lg"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#6c3fc5] to-indigo-500 text-white text-[10px] font-semibold">
                    <Sparkles size={10} /> FEATURED
                  </div>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#1a1a2e]">{p.title}</h3>
                  <span
                    className={`shrink-0 text-[11px] px-2 py-0.5 rounded-full border ${BADGE_COLOR[p.category]}`}
                  >
                    {p.category}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.flow && (
                  <div className="mt-3 text-[11px] text-gray-500 font-mono">{p.flow}</div>
                )}

                <div className="mt-4 flex gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6c3fc5] text-white text-xs font-medium hover:bg-purple-700 transition"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-300 text-purple-700 text-xs font-medium hover:bg-purple-50 transition"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
