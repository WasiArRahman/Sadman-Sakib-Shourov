import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const skills = [
    "Brand Strategy & Identity",
    "Digital Marketing & SEO",
    "UI/UX Design",
    "3D Motion Graphics",
    "Social Media Campaigns",
    "Creative Direction"
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 relative">
              {/* Image Placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 via-neutral-900 to-fuchsia-950" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-neutral-900 border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl"
            >
              <p className="text-4xl font-display font-black text-cyan-400">5+</p>
              <p className="text-sm text-neutral-400 font-medium">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Designing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-glow">Future</span>.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            I bridge the gap between aesthetics and performance. As a Creative Designer and Marketer, I build brand identities that not only look futuristic and stunning but drive real-world engagement.
          </p>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Whether it's crafting a high-end visual layout or executing a full-scale digital advertising campaign, my workflow is optimized for impact, growth, and conversion.
          </p>
          
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                <span className="font-medium text-neutral-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
