import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator as CalcIcon, RefreshCcw, Info, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Calculator() {
  const [studyHours, setStudyHours] = useState(6);
  const [workoutHours, setWorkoutHours] = useState(2);
  const [showResult, setShowResult] = useState(false);

  const calculateScore = () => {
    let studyScore = 0;
    let workoutScore = 0;

    if (studyHours >= 4 && studyHours <= 8) studyScore = 50;
    else if (studyHours > 0 && studyHours < 4) studyScore = 30;
    else if (studyHours > 8 && studyHours <= 12) studyScore = 30;
    else if (studyHours > 12) studyScore = 10;

    if (workoutHours >= 3 && workoutHours <= 7) workoutScore = 50;
    else if (workoutHours > 0 && workoutHours < 3) workoutScore = 25;
    else if (workoutHours > 7 && workoutHours <= 15) workoutScore = 35;
    else if (workoutHours > 15) workoutScore = 15;
    else if (workoutHours === 0) workoutScore = 0;

    return studyScore + workoutScore;
  };

  const getFeedback = (score: number) => {
    if (score >= 90) return { title: "Elite Balance", desc: "You're living the dream. Your brain is primed for learning and your body is resilient. Keep this momentum!", color: "text-green", icon: <CheckCircle2 className="w-6 h-6" /> };
    if (score >= 70) return { title: "Steady Growth", desc: "You're doing better than 80% of students. A few small tweaks to your recovery could make you unstoppable.", color: "text-accent", icon: <Info className="w-6 h-6" /> };
    if (score >= 40) return { title: "Yellow Zone", desc: "You're leaning into burnout. Your grades might be okay now, but your energy is leaking. Time to prioritize movement.", color: "text-amber-500", icon: <AlertCircle className="w-6 h-6" /> };
    return { title: "Critical Alert", desc: "This path leads to a crash. You're sacrificing your long-term health for short-term tasks. Let's fix this together.", color: "text-rose-400", icon: <AlertCircle className="w-6 h-6" /> };
  };

  const score = calculateScore();
  const feedback = getFeedback(score);

  return (
    <section id="calculator" className="px-4 md:px-16 py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green/5 blur-[120px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <CalcIcon className="w-64 h-64" />
          </div>

          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="text-green text-[0.7rem] font-bold tracking-[4px] uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-green" />
                Interactive Audit
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-off-white mb-4 uppercase">
                Audit Your <br /><span className="text-gradient-green">Lifestyle Balance</span>
              </h2>
              <p className="text-muted text-lg font-light leading-relaxed">
                Be honest with yourself. This isn't a test; it's a mirror. See where you stand on the spectrum of high-performance living.
              </p>
            </motion.div>

            <div className="space-y-16">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-xs mb-1 block">Study Intensity</label>
                    <p className="text-muted text-xs">Average hours spent focused on academics daily.</p>
                  </div>
                  <span className="text-3xl font-display text-accent">{studyHours}h</span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${(studyHours / 16) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="16"
                    value={studyHours}
                    onChange={(e) => setStudyHours(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-xs mb-1 block">Physical Resilience</label>
                    <p className="text-muted text-xs">Total hours of intentional movement per week.</p>
                  </div>
                  <span className="text-3xl font-display text-green">{workoutHours}h</span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${(workoutHours / 20) * 100}%` }}
                  />
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={workoutHours}
                    onChange={(e) => setWorkoutHours(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              <button
                onClick={() => setShowResult(true)}
                className="group relative w-full bg-off-white text-dark py-6 rounded-2xl font-bold text-lg uppercase tracking-[3px] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Generate My Audit Report</span>
                <div className="absolute inset-0 bg-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mt-16 p-10 bg-dark/50 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-3xl"
              >
                <div className="grid md:grid-cols-[200px_1fr] gap-12 items-center">
                  <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-white/5" />
                      <motion.circle
                        cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="16" fill="transparent"
                        strokeDasharray={552.9}
                        initial={{ strokeDashoffset: 552.9 }}
                        animate={{ strokeDashoffset: 552.9 - (552.9 * score) / 100 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={feedback.color.replace('text-', 'stroke-')}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-5xl font-display tracking-widest ${feedback.color}`}>{score}%</span>
                      <span className="text-[0.6rem] font-bold text-muted uppercase tracking-[2px]">Balance Score</span>
                    </div>
                  </div>

                  <div className="text-center md:text-left">
                    <div className={`inline-flex items-center gap-2 mb-4 ${feedback.color}`}>
                      {feedback.icon}
                      <h3 className="text-3xl font-display tracking-widest uppercase">{feedback.title}</h3>
                    </div>
                    <p className="text-muted text-lg font-light leading-relaxed mb-8">{feedback.desc}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <button
                        onClick={() => setShowResult(false)}
                        className="text-[0.7rem] font-bold text-off-white/60 hover:text-accent uppercase tracking-[2px] flex items-center gap-2 transition-colors"
                      >
                        <RefreshCcw className="w-3.5 h-3.5" />
                        Recalculate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
