import { motion } from "motion/react";
import { ExternalLink, Palette, PenTool, Layout, MonitorPlay } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";

const projects = [
  {
    id: 1,
    title: "Brand Identity Strategy",
    category: "Brand Strategy",
    description: "Comprehensive branding and positioning strategy tailored for high-growth tech startups.",
    icon: <Palette className="w-5 h-5 text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Performance Ads Campaign",
    category: "Marketing",
    description: "High-conversion ad creatives delivering exceptional ROI for global e-commerce brands.",
    icon: <MonitorPlay className="w-5 h-5 text-fuchsia-400" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Digital UI Architecture",
    category: "Web Design",
    description: "Sleek, modern user interfaces focused on deep engagement and aesthetic perfection.",
    icon: <Layout className="w-5 h-5 text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "3D Product Visuals",
    category: "Graphic Design",
    description: "Immersive vector illustrations and 3D renders for digital marketing assets.",
    icon: <PenTool className="w-5 h-5 text-amber-400" />,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="text-cyan-400 text-glow">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            A selection of my best projects showcasing my expertise as a creative designer and marketing strategist.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard glow className="h-full bg-neutral-900 border border-white/10 p-0 overflow-hidden flex flex-col group">
                <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 z-20">
                     <a href="#" className="p-2.5 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors inline-block">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 p-2.5 bg-neutral-950/80 backdrop-blur-md border border-white/10 rounded-xl">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
