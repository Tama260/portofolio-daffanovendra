import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const PORTFOLIO_URL =
  "https://drive.google.com/file/d/1IYwraTgTDulSABKdbgpBmKFh5-_uHUbk/view?usp=drive_link";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(l.id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-extrabold text-[#6c3fc5] tracking-tight"
        >
          DNA
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative text-sm font-medium transition-colors ${
                active === l.id ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
              }`}
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-300 text-purple-700 text-sm font-medium hover:bg-purple-50 transition"
          >
            <Download size={16} /> View CV
          </a>
          <a
            href={PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c3fc5] text-white text-sm font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
          >
            <ExternalLink size={16} /> View Portfolio
          </a>
        </div>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur border-t border-purple-100"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left text-gray-700 hover:text-purple-600 font-medium py-1"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="/profile-photo.jpg"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-300 text-purple-700 text-sm font-medium"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                href={PORTFOLIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6c3fc5] text-white text-sm font-medium"
              >
                <ExternalLink size={16} /> View Portfolio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
