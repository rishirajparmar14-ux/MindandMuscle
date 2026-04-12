import { motion } from 'motion/react';
import { RESEARCH_STATS } from '../constants';

export default function Stats() {
  return (
    <section id="stats" className="px-4 md:px-16 py-32 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-green text-[0.7rem] font-bold tracking-[4px] uppercase mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-green" />
          The Evidence
          <span className="w-8 h-px bg-green" />
        </div>
        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] mb-6 uppercase">
          Science Says Move More,<br /><span className="text-gradient-green">Learn Better</span>
        </h2>
        <p className="text-[1.1rem] text-muted max-w-[600px] mx-auto leading-relaxed mb-20 font-light">
          These aren't motivational quotes — they're peer-reviewed findings from exercise science and neuroscience research.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {RESEARCH_STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-[2.5rem] p-12 transition-all duration-500 hover:border-green/30 group relative overflow-hidden"
          >
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="font-display text-8xl text-off-white leading-none mb-6 group-hover:text-green transition-colors duration-500">
                {stat.num}
              </div>
              <div className="text-[1rem] text-muted leading-relaxed mb-6 font-medium group-hover:text-off-white transition-colors duration-500">
                {stat.desc}
              </div>
              <div className="inline-block text-[0.65rem] text-muted/40 italic uppercase tracking-[2px] border-t border-white/5 pt-4 w-full">
                Source: {stat.source}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
