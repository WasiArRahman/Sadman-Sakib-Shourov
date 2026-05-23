import { motion } from "motion/react";
import { Mail, MessageCircle, User } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-neutral-950/50 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-cyan-400 bg-glow flex items-center justify-center">
          <span className="font-display font-bold text-neutral-950">S</span>
        </div>
        <span className="font-display font-bold text-lg tracking-wider text-white">
          SADMAN SAKIB
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
        <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/8801729385991" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-cyan-400" />
        </a>
        <a 
          href="mailto:abdlmzd49@gmail.com"
          className="p-2 rounded-full border border-white/10 hover:border-fuchsia-400/50 hover:bg-fuchsia-400/10 transition-colors"
        >
          <Mail className="w-5 h-5 text-fuchsia-400" />
        </a>
      </div>
    </motion.nav>
  );
}
