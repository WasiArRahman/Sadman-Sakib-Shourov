import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function TiltCard({ children, className = "", glow = false }: TiltCardProps) {
  const boundingRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);

  // Smooth springs for tilt
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-1, 1], [15, -15]);
  const rotateY = useTransform(springX, [-1, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundingRef.current) return;
    const rect = boundingRef.current.getBoundingClientRect();
    
    // For Tilt (normalize to -1 to 1)
    const xPct = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const yPct = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    x.set(xPct);
    y.set(yPct);

    // For Glow glow background follows cursor
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={boundingRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm p-6 overflow-hidden ${className}`}
    >
      {glow && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              400px circle at ${glowX}px ${glowY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
          }}
        />
      )}
      {/* Content */}
      <div className="h-full" style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
