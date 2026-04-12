import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="bg-mid px-4 md:px-16 py-32 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 font-display text-[20rem] text-white/[0.02] select-none pointer-events-none -translate-x-1/4 -translate-y-1/4">
        REALITY
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-green text-[0.7rem] font-bold tracking-[4px] uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-green" />
            The Student Struggle
          </div>
          
          <div className="relative">
            <Quote className="absolute -top-8 -left-8 w-16 h-16 text-white/5" />
            <blockquote className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] italic leading-[1.3] text-off-white mb-10">
              "I thought I had to choose. Either I'm a <span className="text-accent underline decoration-accent/30 underline-offset-8">top student</span> or I'm <span className="text-green underline decoration-green/30 underline-offset-8">fit</span>. I couldn't be both."
            </blockquote>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green to-accent p-[1px]">
              <div className="w-full h-full rounded-full bg-mid flex items-center justify-center text-xl">🎓</div>
            </div>
            <div>
              <div className="font-bold text-off-white">Maya Rodriguez</div>
              <div className="text-muted text-xs uppercase tracking-widest">Junior, Pre-Med Student</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="font-display text-4xl text-off-white uppercase tracking-wider">The "Burnout Loop"</h3>
          <p className="text-[1.1rem] leading-[1.8] text-muted font-light">
            We've all been there. You skip the gym to finish a paper. You skip sleep to cram for a test. You eat whatever is fastest. 
            <span className="text-off-white font-medium"> It feels like productivity, but it's actually a slow-motion crash.</span>
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl">
              <div className="text-accent font-bold text-sm mb-2 uppercase tracking-widest">The Myth</div>
              <p className="text-xs text-muted leading-relaxed">"I don't have time to exercise. Every hour counts for my GPA."</p>
            </div>
            <div className="glass p-6 rounded-2xl border-green/20">
              <div className="text-green font-bold text-sm mb-2 uppercase tracking-widest">The Truth</div>
              <p className="text-xs text-muted leading-relaxed">20 minutes of movement increases focus by 40% for the next 4 hours.</p>
            </div>
          </div>

          <p className="text-[1.1rem] leading-[1.8] text-muted font-light">
            Balance isn't about doing everything perfectly. It's about realizing that <span className="text-green font-medium italic">your brain is a part of your body</span>. When you move, you think better. When you rest, you learn faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
