import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 items-center">
        <div>
          <div className="text-2xl font-extrabold text-[#a984ff]">DNA</div>
          <div className="mt-1 text-sm text-gray-300">Daffa Novendra Aditama</div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-purple-400 transition"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex md:justify-end gap-4 text-white">
          <a
            href="https://linkedin.com/in/daffanovendraaditama"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Tama260"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <Github size={20} />
          </a>
          <a href="mailto:daffanovendraa@gmail.com" className="hover:text-purple-400 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          Built by Daffa Novendra Aditama © 2026 · Built with React, Tailwind CSS, and
          AI-assisted workflows.
        </div>
      </div>
    </footer>
  );
}
