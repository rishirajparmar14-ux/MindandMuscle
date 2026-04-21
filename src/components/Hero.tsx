import { motion } from 'motion/react';
import { Brain, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen grid lg:grid-cols-2 items-center px-4 md:px-16 pt-32 pb-16 overflow-hidden noise">
      {/* Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(45,204,112,0.15)_0%,transparent_60%)] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
      />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
          className="relative z-10"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="inline-flex items-center bg-white/5 border border-white/10 text-accent text-[0.7rem] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            The Modern Student's Edge
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.85] tracking-tight mb-8 text-off-white"
          >
            DON'T JUST <br />
            <span className="text-gradient-green">SURVIVE</span><br />
            COLLEGE.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="text-[1.15rem] font-light text-muted leading-relaxed max-w-[500px] mb-12"
          >
            We know the pressure. The all-nighters, the caffeine loops, the "I'll workout tomorrow" lies. 
            <span className="text-off-white font-medium"> Mind & Muscle</span> is your blueprint to high-performance living without the burnout.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-wrap gap-5"
          >
            <a href="#calculator" className="group relative bg-green text-dark px-10 py-4 rounded-xl font-bold text-[0.95rem] uppercase tracking-widest overflow-hidden transition-all shadow-xl shadow-green/10">
              <span className="relative z-10">Instant Audit</span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#story" className="glass text-off-white px-10 py-4 rounded-xl font-bold text-[0.95rem] uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10">
              Start Journey <span className="text-accent/50 font-mono ml-2">01</span>
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-8 text-muted/40"
          >
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[2px]">Cognitive Focus</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[2px]">Peak Energy</span>
            </div>
          </motion.div>
        </motion.div>

      <div className="hidden lg:flex justify-center items-center relative h-[600px]">
        <div className="relative w-[400px] h-[400px]">
          {/* Floating Cards with Glassmorphism */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 glass rounded-3xl p-8 shadow-2xl z-20 w-[240px]"
          >
            <div className="w-10 h-10 bg-green/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">📈</span>
            </div>
            <div className="font-display text-6xl text-green leading-none">+20%</div>
            <div className="text-[0.8rem] text-muted mt-2 font-medium">GPA increase observed in active students</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 glass rounded-3xl p-8 shadow-2xl z-10 w-[220px]"
          >
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <div className="font-display text-6xl text-accent leading-none">3.5x</div>
            <div className="text-[0.8rem] text-muted mt-2 font-medium">Lower stress levels during finals</div>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/5 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
