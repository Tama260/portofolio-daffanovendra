import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(target: number, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1500;
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setValue(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return { ref, display: decimals ? value.toFixed(decimals) : Math.floor(value).toString() };
}

function StatCard({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const { ref, display } = useCountUp(value, decimals);
  return (
    <div
      ref={ref}
      className="backdrop-blur-md bg-white/70 border border-purple-100 rounded-2xl p-6 text-center hover:scale-105 hover:border-purple-300 transition shadow-lg shadow-purple-500/5"
    >
      <div className="text-4xl font-black bg-gradient-to-br from-[#6c3fc5] to-indigo-500 bg-clip-text text-transparent">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a2e]">About Me</h2>
          <div className="mt-4 pl-4 border-l-[3px] border-[#6c3fc5] text-gray-600 max-w-3xl">
            Building scalable AI-powered content systems and workflow automation.
          </div>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-4 text-gray-600 text-base leading-relaxed"
          >
            <p>
              AI Content Automation Specialist with a background in Agrotechnology from UPN
              Veteran Jawa Timur (GPA 3.80/4.00), specializing in building AI-powered workflow
              systems and scalable content automation infrastructure.
            </p>
            <p>
              Experienced in designing serverless automation pipelines integrating LLMs, APIs,
              databases, and deployment platforms to solve modern content production and
              operational challenges.
            </p>
            <p>
              Built and deployed multiple AI systems ranging from multi-platform content
              engines, automated recruitment pipelines, AI-powered video production systems, to
              personal brand operating systems — all optimized for efficiency, scalability, and
              low operational cost.
            </p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <StatCard value={12} suffix="+" label="Projects Built" />
            <StatCard value={6} label="AI Systems Live" />
            <StatCard value={3.8} decimals={2} label="GPA Score" />
            <StatCard value={2} suffix="+" label="Years Experience" />
          </div>
        </div>
      </div>
    </section>
  );
}
