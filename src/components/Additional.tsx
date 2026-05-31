import { motion } from "framer-motion";
import { Languages } from "lucide-react";

const LANGUAGES = [
  { language: "Indonesian", level: "Native", flag: "🇮🇩" },
  { language: "English", level: "Intermediate (Reading & Writing)", flag: "🇬🇧" },
];

export default function Additional() {
  return (
    <section id="additional" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-[#1a1a2e]"
        >
          Additional
        </motion.h2>

        <div className="mt-10">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-purple-200 hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#6c3fc5] flex items-center justify-center">
                <Languages size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e]">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {LANGUAGES.map((l) => (
                <motion.div
                  key={l.language}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-xl px-4 py-2.5"
                >
                  <span className="text-xl">{l.flag}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#1a1a2e]">{l.language}</div>
                    <div className="text-xs text-gray-500">{l.level}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
