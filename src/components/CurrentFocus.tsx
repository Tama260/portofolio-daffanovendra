import { motion } from "framer-motion";

const CHIPS = [
  "Autonomous AI Systems",
  "AI Content Operations",
  "Workflow Automation",
  "AI Video Pipelines",
  "Multi-Platform Publishing",
  "Scalable Content Systems",
  "AI Workflow Orchestration",
  "LLM Integration",
  "Serverless Architecture",
];

export default function CurrentFocus() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#6c3fc5] via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300 rounded-full blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto relative text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white">Current Focus</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {CHIPS.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="bg-white/20 backdrop-blur border border-white/30 text-white rounded-full px-5 py-2 text-sm font-medium animate-float"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
