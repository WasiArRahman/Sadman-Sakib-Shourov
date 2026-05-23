import { motion } from "motion/react";
import { Mail, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-glow">Connect</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Ready to elevate your brand's digital presence? Get in touch and let's craft something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href="https://wa.me/8801729385991"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="block h-full cursor-pointer"
          >
            <TiltCard glow className="bg-neutral-900/40 h-full flex items-center p-8 group">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mr-6 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-display font-bold text-white mb-1 flex items-center gap-2">
                  WhatsApp <ArrowUpRight className="w-4 h-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-neutral-400">+880 1729-385991</p>
              </div>
            </TiltCard>
          </motion.a>

          <motion.a
            href="Not ready yet"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="block h-full cursor-pointer"
          >
            <TiltCard glow className="bg-neutral-900/40 h-full flex items-center p-8 group">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 mr-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-xl font-display font-bold text-white mb-1 flex items-center gap-2">
                  Email <ArrowUpRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-neutral-400">abdlmzd49@gmail.com</p>
              </div>
            </TiltCard>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
