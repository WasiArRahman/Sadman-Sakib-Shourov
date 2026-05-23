import { motion } from "motion/react";
import { ArrowRight, User } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-fuchsia-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-sm font-medium w-fit mx-auto lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for New Projects
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tight"
          >
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-glow">Designer</span> <br />
            & Marketer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto lg:mx-0"
          >
            Professional Graphic Designer and Marketing Expert with 5+ years of experience transforming visions into futuristic, engaging digital realities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 justify-center lg:justify-start mt-4"
          >
            <a 
              href="#portfolio"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-semibold hover:bg-neutral-200 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative perspective-[1000px]"
        >
          <TiltCard glow className="w-full aspect-square md:aspect-[4/3] flex flex-col justify-center items-center bg-gradient-to-br from-neutral-900 to-neutral-950 text-center border-white/5">
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
             <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-cyan-400/50 bg-glow overflow-hidden mb-8 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-900 to-fuchsia-900 flex items-center justify-center">
                   <User className="w-16 h-16 md:w-24 md:h-24 text-white/50" />
                </div>
             </div>
             <h3 className="text-2xl font-display font-bold">Sadman Sakib Saurav</h3>
             <p className="text-cyan-400 font-medium mt-2">Marketing Expert</p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
