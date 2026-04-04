"use client";

import EnergyBeam from "@/components/ui/energy-beam";
import { motion } from "framer-motion";

export default function EnergyShowcase() {
  return (
    <div className="relative">
      {/* Energy Beam Background */}
      <div className="fixed inset-0 z-0">
        <EnergyBeam />
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center pointer-events-none"
        >
          <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 mb-6">
            Unicorn Studio &middot; WebGL &middot; Real-time
          </p>
          <h1 className="text-[60px] md:text-[100px] lg:text-[140px] font-black text-white tracking-tighter leading-none">
            ENERGY
          </h1>
          <p className="mt-6 text-base text-white/30 max-w-md mx-auto leading-relaxed">
            Dynamic energy beams rendered in real-time. Interactive WebGL powered by Unicorn Studio.
          </p>
        </motion.div>
      </section>

      {/* Info section */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Real-time Energy Visualization
            </h2>
            <p className="text-white/30 leading-relaxed mb-8">
              Powered by Unicorn Studio&apos;s WebGL engine, this showcase demonstrates
              how complex particle and beam effects can run at 60fps directly in the browser
              with zero performance overhead on the main thread.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["WEBGL", "GPU PARTICLES", "REAL-TIME", "60FPS", "INTERACTIVE"].map(t => (
                <span key={t} className="text-[8px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/[0.06] rounded-full text-white/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
