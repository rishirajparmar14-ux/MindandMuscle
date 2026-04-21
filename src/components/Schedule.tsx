import { motion } from 'motion/react';
import { WEEKLY_SCHEDULE } from '../constants';

export default function Schedule() {
  return (
    <section id="schedule" className="px-4 md:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-green text-[0.7rem] font-bold tracking-[3px] uppercase mb-4 flex items-center gap-3">
          <span className="text-accent/40 font-mono text-xs">04</span>
          <span className="w-8 h-px bg-green" />
          Sample Schedule
        </div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-4 uppercase">
          A Week That Actually Works
        </h2>
        <p className="text-[1rem] text-muted max-w-[520px] leading-relaxed mb-12">
          A realistic student schedule that integrates fitness without sacrificing academic performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-xl overflow-hidden glass"
      >
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-[100px_1fr_1fr] bg-green/10 text-green text-[0.7rem] font-bold tracking-widest uppercase">
              <div className="p-4 border-r border-white/5">Day</div>
              <div className="p-4 border-r border-white/5">Morning / Afternoon</div>
              <div className="p-4">Evening</div>
            </div>

            {WEEKLY_SCHEDULE.map((row, i) => (
              <div key={i} className="grid grid-cols-[100px_1fr_1fr] border-t border-white/5 hover:bg-white/5 transition-colors group">
                <div className="p-4 border-r border-white/5 font-bold text-[0.8rem] flex items-center text-off-white">{row.day}</div>
                <div className="p-4 border-r border-white/5 text-[0.85rem] leading-relaxed flex flex-wrap items-center gap-2 text-muted">
                  {row.morning.includes('Fitness') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-green/10 text-green px-2 py-0.5 rounded">Fitness</span>}
                  {row.morning.includes('Study') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded">Study</span>}
                  {row.morning.includes('Rest') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-white/5 text-muted px-2 py-0.5 rounded">Rest</span>}
                  <span>{row.morning.split(': ')[1]}</span>
                </div>
                <div className="p-4 text-[0.85rem] leading-relaxed flex flex-wrap items-center gap-2 text-muted">
                  {row.evening.includes('Fitness') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-green/10 text-green px-2 py-0.5 rounded">Fitness</span>}
                  {row.evening.includes('Study') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded">Study</span>}
                  {row.evening.includes('Rest') && <span className="text-[0.6rem] font-bold uppercase tracking-wider bg-white/5 text-muted px-2 py-0.5 rounded">Rest</span>}
                  <span>{row.evening.split(': ')[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>


    </section>
  );
}
