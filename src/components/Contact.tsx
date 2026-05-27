import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  Copy,
  Check,
} from "lucide-react";

type ContactCard = {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  copy?: string;
};

const CARDS: ContactCard[] = [
  {
    Icon: Mail,
    label: "Email",
    value: "daffanovendraa@gmail.com",
    copy: "daffanovendraa@gmail.com",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/daffanovendraaditama",
    href: "https://linkedin.com/in/daffanovendraaditama",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "github.com/Tama260",
    href: "https://github.com/Tama260",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "0859-5530-3665",
    href: "https://wa.me/6285955303665",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a2e]">
            Let's Work Together
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl">
            Open for AI content automation projects, remote opportunities, and creative
            technology collaborations.
          </p>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            {CARDS.map((c) => {
              const inner = (
                <div className="flex items-center gap-4 bg-white/70 backdrop-blur border border-purple-100 rounded-xl p-4 hover:border-purple-300 hover:shadow-md transition">
                  <div className="w-11 h-11 rounded-lg bg-purple-100 text-[#6c3fc5] flex items-center justify-center shrink-0">
                    <c.Icon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium text-[#1a1a2e] truncate">
                      {c.value}
                    </div>
                  </div>
                  {c.copy && (
                    <span className="text-gray-400">
                      {copied === c.copy ? <Check size={16} /> : <Copy size={16} />}
                    </span>
                  )}
                </div>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <button
                  key={c.label}
                  onClick={() => c.copy && handleCopy(c.copy)}
                  className="w-full text-left"
                >
                  {inner}
                </button>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur border border-purple-100 rounded-2xl p-6 space-y-4 shadow-lg shadow-purple-500/10"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-2.5 rounded-lg border border-purple-100 bg-white focus:outline-none focus:border-purple-400 transition text-sm"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="px-4 py-2.5 rounded-lg border border-purple-100 bg-white focus:outline-none focus:border-purple-400 transition text-sm"
              />
            </div>
            <input
              required
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-purple-100 bg-white focus:outline-none focus:border-purple-400 transition text-sm"
            />
            <textarea
              required
              rows={4}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-purple-100 bg-white focus:outline-none focus:border-purple-400 transition text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#6c3fc5] hover:bg-purple-700 text-white rounded-xl px-8 py-3 font-medium transition shadow-lg shadow-purple-500/30"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
