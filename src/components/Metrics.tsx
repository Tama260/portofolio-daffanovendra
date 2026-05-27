import { useEffect, useRef, useState } from "react";

type Metric = { value: number; suffix?: string; prefix?: string; label: string; raw?: string };

const METRICS: Metric[] = [
  { value: 200, suffix: "+", label: "Daily Trends Processed" },
  { value: 100, suffix: "+", label: "Automated Inquiries/Day" },
  { value: 10, suffix: "+", label: "AI Workflows Built" },
  { value: 5, suffix: "+", label: "Production Systems Live" },
  { value: 0, prefix: "$", label: "Serverless Monthly Cost" },
];

function Counter({ m }: { m: Metric }) {
  const [v, setV] = useState(0);
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
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1500, 1);
            setV(m.value * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [m.value]);
  return (
    <div
      ref={ref}
      className="bg-white/10 backdrop-blur border border-white/20 text-white rounded-2xl p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-black">
        {m.prefix ?? ""}
        {Math.floor(v)}
        {m.suffix ?? ""}
      </div>
      <div className="mt-2 text-sm text-purple-100">{m.label}</div>
    </div>
  );
}

export default function Metrics() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#6c3fc5] via-purple-700 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center">
          System Performance Metrics
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {METRICS.map((m) => (
            <Counter key={m.label} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
