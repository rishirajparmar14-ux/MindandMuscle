import { motion } from 'motion/react';
import { Book, Clock, Coffee, Dumbbell, Moon, Users } from 'lucide-react';

const BENTO_TIPS = [
  {
    title: "The 20-Min Rule",
    desc: "Can't commit to an hour? 20 minutes of high-intensity movement is enough to reset your cognitive clock.",
    icon: <Clock className="w-6 h-6" />,
    size: "md:col-span-2",
    color: "bg-green/10 text-green",
    badge: "Efficiency"
  },
  {
    title: "Active Study",
    desc: "Review flashcards on a treadmill or listen to lectures while walking. Dual-tasking done right.",
    icon: <Book className="w-6 h-6" />,
    size: "md:col-span-1",
    color: "bg-accent/10 text-accent",
    badge: "Hack"
  },
  {
    title: "Sleep is Non-Negotiable",
    desc: "Muscle grows and memory consolidates during REM. 7 hours is your minimum for peak performance.",
    icon: <Moon className="w-6 h-6" />,
    size: "md:col-span-1",
    color: "bg-blue-500/10 text-blue-400",
    badge: "Recovery"
  },
  {
    title: "Social Lifting",
    desc: "Turn your social hour into a gym hour. Accountability makes consistency effortless.",
    icon: <Users className="w-6 h-6" />,
    size: "md:col-span-2",
    color: "bg-rose-500/10 text-rose-400",
    badge: "Community"
  },
  {
    title: "Caffeine Timing",
    desc: "Stop caffeine 8 hours before bed. Your brain needs real rest, not chemical alertness.",
    icon: <Coffee className="w-6 h-6" />,
    size: "md:col-span-1",
    color: "bg-amber-500/10 text-amber-400",
    badge: "Biology"
  },
  {
    title: "Compound Wins",
    desc: "Big lifts (squats, deadlifts) release the most growth hormone, which also aids brain plasticity.",
    icon: <Dumbbell className="w-6 h-6" />,
    size: "md:col-span-2",
    color: "bg-emerald-500/10 text-emerald-400",
    badge: "Science"
  }
];

export default function Tips() {
  return (
    <section id="tips" className="bg-dark px-4 md:px-16 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-green text-[0.7rem] font-bold tracking-[4px] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-green" />
              Strategic Blueprint
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none uppercase">
              How to Win <br /><span className="text-gradient-green">The Long Game</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted text-[1rem] max-w-[340px] md:text-right leading-relaxed font-light"
          >
            These aren't just tips; they're high-leverage habits used by elite student-athletes and top-tier academics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_TIPS.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-[2rem] group hover:border-white/20 transition-all duration-500 ${tip.size}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500 ${tip.color}`}>
                  {tip.icon}
                </div>
                <span className="text-[0.6rem] font-bold tracking-[2px] uppercase text-muted/50 border border-white/5 px-3 py-1 rounded-full">
                  {tip.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-off-white mb-3 group-hover:text-accent transition-colors">
                {tip.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed font-light">
                {tip.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
