import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator as CalcIcon, RefreshCcw, Info, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export default function Calculator() {
  const [studyHours, setStudyHours] = useState(6);
  const [workoutHours, setWorkoutHours] = useState(2);
  const [sleepHours, setSleepHours] = useState(7);
  const [stressLevel, setStressLevel] = useState(5);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateScore = () => {
    // 1. Study Component (Max 25 pts)
    // Research: 4-6 hours is the cognitive ceiling.
    let studyPts = 0;
    if (studyHours >= 4 && studyHours <= 6) studyPts = 25;
    else if (studyHours > 0 && studyHours < 4) studyPts = 15;
    else if (studyHours > 6 && studyHours <= 9) studyPts = 15; // Diminishing returns
    else if (studyHours > 9) studyPts = 5; // Serious burnout risk

    // 2. Workout Component (Max 25 pts)
    // WHO: 150-300 mins (2.5 - 5h) per week.
    let workoutPts = 0;
    if (workoutHours >= 2.5 && workoutHours <= 5) workoutPts = 25;
    else if (workoutHours > 0 && workoutHours < 2.5) workoutPts = 15;
    else if (workoutHours > 5 && workoutHours <= 8) workoutPts = 20;
    else if (workoutHours > 8) workoutPts = 10;

    // 3. Sleep Component (Max 30 pts)
    // NSF: 7-9 hours for young adults.
    let sleepPts = 0;
    if (sleepHours >= 7 && sleepHours <= 9) sleepPts = 30;
    else if (sleepHours === 6) sleepPts = 20;
    else if (sleepHours > 9) sleepPts = 20; // OVERSLEEPING
    else if (sleepHours < 6) sleepPts = 5; // Chronic deprivation

    // 4. Recovery/Stress Component (Max 20 pts)
    // Stress Level 1-10 (Lower is better)
    let stressPts = Math.max(0, 20 - (stressLevel - 1) * 2.5);

    return Math.round(studyPts + workoutPts + sleepPts + stressPts);
  };

  const handleGenerateReport = () => {
    setIsCalculating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  const getFeedback = (score: number, study: number, workout: number, sleep: number, stress: number) => {
    // 1. High Performance (Optimal)
    if (score >= 75) return { 
      title: "Flow State Achieved", 
      desc: "You are leveraging your physiology to fuel your academics. You're in the 'Goldilocks' zone for high-performance living.", 
      color: "text-green", 
      icon: <CheckCircle2 className="w-6 h-6" /> 
    };

    // 2. Developing (Steady)
    if (score >= 45) {
      if (sleep < 7) return { 
        title: "Foundation Warning", 
        desc: "You're working hard, but sleep deprivation is capping your cognitive potential. Prioritize the 7-hour floor.", 
        color: "text-accent", 
        icon: <Info className="w-6 h-6" /> 
      };
      if (study > 8) return { 
        title: "Overload Threat", 
        desc: "You're hitting the point of diminishing returns. 2 hours of rest now will make your 4 hours of study tomorrow 2x more effective.", 
        color: "text-accent", 
        icon: <Info className="w-6 h-6" /> 
      };
      return { 
        title: "Steady Progress", 
        desc: "You have the basics down. To reach the next level, tighten your workout consistency and manage your stress spikes.", 
        color: "text-accent", 
        icon: <Info className="w-6 h-6" /> 
      };
    }

    // 3. Burnout Risk (Critical)
    if (stress > 7) return { 
      title: "System Redline", 
      desc: "Your stress levels are overwhelming your recovery. Focus on breathwork or light walking immediately to lower cortisol.", 
      color: "text-rose-400", 
      icon: <AlertCircle className="w-6 h-6" /> 
    };
    return { 
      title: "Resilience Audit Needed", 
      desc: "This pace is unsustainable. You're trading long-term health for short-term checkboxes. It's time for a radical schedule reset.", 
      color: "text-rose-400", 
      icon: <AlertCircle className="w-6 h-6" /> 
    };
  };

  const score = calculateScore();
  const feedback = getFeedback(score, studyHours, workoutHours, sleepHours, stressLevel);

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
                <span className="text-accent/40 font-mono text-xs">05</span>
                <span className="w-8 h-px bg-green" />
                Performance Audit
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-off-white mb-4 uppercase">
                Analyze Your <br /><span className="text-gradient-green">Daily Momentum</span>
              </h2>
              <p className="text-muted text-lg font-light leading-relaxed">
                Check how your recovery cycles align with your output. High performance isn't about working more—it's about managing your internal resources effectively.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Study Input */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-[0.65rem] mb-1 block">Focused Study</label>
                    <p className="text-muted text-[0.7rem]">Daily hours of high-intensity focus.</p>
                  </div>
                  <span className="text-2xl font-display text-accent">{studyHours}h</span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${(studyHours / 16) * 100}%` }}
                  />
                  <input
                    type="range" min="0" max="16" value={studyHours}
                    onChange={(e) => setStudyHours(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              {/* Workout Input */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-[0.65rem] mb-1 block">Weekly Exercise</label>
                    <p className="text-muted text-[0.7rem]">Total hours of movement per week.</p>
                  </div>
                  <span className="text-2xl font-display text-green">{workoutHours}h</span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${(workoutHours / 20) * 100}%` }}
                  />
                  <input
                    type="range" min="0" max="20" value={workoutHours}
                    onChange={(e) => setWorkoutHours(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              {/* Sleep Input */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-[0.65rem] mb-1 block">Nightly Sleep</label>
                    <p className="text-muted text-[0.7rem]">The average hours of rest per night.</p>
                  </div>
                  <span className="text-2xl font-display text-blue-400">{sleepHours}h</span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(sleepHours / 12) * 100}%` }}
                  />
                  <input
                    type="range" min="0" max="12" value={sleepHours}
                    onChange={(e) => setSleepHours(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              {/* Stress Input */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <label className="font-bold text-off-white uppercase tracking-widest text-[0.65rem] mb-1 block">Stress Level</label>
                    <p className="text-muted text-[0.7rem]">1 (Zen) to 10 (Redline overload).</p>
                  </div>
                  <span className={`text-2xl font-display ${stressLevel > 7 ? 'text-rose-400' : 'text-amber-400'}`}>{stressLevel}/10</span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-amber-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${(stressLevel / 10) * 100}%` }}
                  />
                  <input
                    type="range" min="1" max="10" value={stressLevel}
                    onChange={(e) => setStressLevel(parseInt(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
              </div>

              <button
                onClick={handleGenerateReport}
                disabled={isCalculating}
                className="group relative w-full bg-off-white text-dark py-6 rounded-2xl font-bold text-lg uppercase tracking-[3px] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isCalculating ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Syncing Bio-Data...</span>
                    </>
                  ) : (
                    <span>Analyze My Balance</span>
                  )}
                </div>
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
                className="mt-16 p-10 bg-dark/50 backdrop-blur-md rounded-[2.5rem] border border-white/10 shadow-3xl text-left"
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className={`text-5xl font-display tracking-widest ${feedback.color}`}>{score}</span>
                      <span className="text-[0.6rem] font-bold text-muted uppercase tracking-[2px]">Index Score</span>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className={`inline-flex items-center gap-2 mb-4 ${feedback.color}`}>
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                      >
                        {feedback.icon}
                      </motion.div>
                      <motion.h3 
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-3xl font-display tracking-widest uppercase"
                      >
                        {feedback.title}
                      </motion.h3>
                    </div>
                    <motion.p 
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="text-muted text-lg font-light leading-relaxed mb-8"
                    >
                      {feedback.desc}
                    </motion.p>
                    <div className="flex flex-wrap gap-4">
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
