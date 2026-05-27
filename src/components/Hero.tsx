import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import profilePhoto from "../assets/images/profile-photo.jpg";

const PORTFOLIO_URL =
  "https://drive.google.com/file/d/1_mdgUAaRs-XoBKza0mUhMmPNtQWqLwSu/view?usp=drive_link";

const ROLES = [
  "AI Content Automation Specialist",
  "AI-Powered Content Creator",
  "Workflow Systems Builder",
];

// TO ADD YOUR PHOTO: Replace public/profile-photo.jpg with your actual photo file
const ProfileImage = () => {
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden border border-purple-200 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
      <img
        src={profilePhoto}
        alt="Daffa Novendra Aditama"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML =
              '<div class="w-full h-full flex items-center justify-center text-7xl font-black text-[#6c3fc5]">DNA</div>';
          }
        }}
      />
    </div>
  );
};

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : 70,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 px-4 py-1 text-sm font-medium">
            🟢 Available for Remote Work
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-[#1a1a2e] leading-tight">
            Daffa Novendra <br /> Aditama
          </h1>

          <div className="text-2xl md:text-3xl text-purple-600 font-semibold h-10">
            {typed}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            AI Content Automation Specialist focused on building scalable AI-powered content
            systems — from automated content generation and multi-platform repurposing to
            workflow automation and production-ready deployment. Experienced in integrating
            LLMs, APIs, and creative automation pipelines to help brands and businesses produce
            content faster, smarter, and more consistently.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl bg-[#6c3fc5] text-white font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-500/30"
            >
              View Projects
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl border border-purple-300 text-purple-700 font-medium hover:bg-purple-50 transition"
            >
              Contact Me
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="/profile-photo.jpg"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-300 text-purple-700 font-medium hover:bg-purple-50 transition"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-300 text-purple-700 font-medium hover:bg-purple-50 transition"
            >
              <ExternalLink size={18} /> View Portfolio
            </a>
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-500">
            <a
              href="https://linkedin.com/in/daffanovendraaditama"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/Tama260"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:daffanovendraa@gmail.com"
              className="hover:text-purple-600 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-indigo-200/30 rounded-full blur-3xl animate-float" />
          <div className="relative">
            <ProfileImage />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
