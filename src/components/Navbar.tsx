import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl">
      <div className="glass rounded-2xl px-6 md:px-10 py-4 flex items-center justify-between backdrop-blur-2xl">
        <div className="font-display text-2xl tracking-[3px] text-off-white uppercase group cursor-pointer">
          Mind <span className="text-green group-hover:text-accent transition-colors">&</span> Muscle
        </div>
        
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li><a href="#story" className="group flex flex-col items-center"><span className="text-[0.6rem] text-accent/50 font-mono mb-1">01</span><span className="text-[0.65rem] font-bold tracking-[2px] text-muted uppercase group-hover:text-accent transition-colors">Story</span></a></li>
          <li><a href="#stats" className="group flex flex-col items-center"><span className="text-[0.6rem] text-accent/50 font-mono mb-1">02</span><span className="text-[0.65rem] font-bold tracking-[2px] text-muted uppercase group-hover:text-accent transition-colors">Research</span></a></li>
          <li><a href="#tips" className="group flex flex-col items-center"><span className="text-[0.6rem] text-accent/50 font-mono mb-1">03</span><span className="text-[0.65rem] font-bold tracking-[2px] text-muted uppercase group-hover:text-accent transition-colors">Habits</span></a></li>
          <li><a href="#schedule" className="group flex flex-col items-center"><span className="text-[0.6rem] text-accent/50 font-mono mb-1">04</span><span className="text-[0.65rem] font-bold tracking-[2px] text-muted uppercase group-hover:text-accent transition-colors">Routine</span></a></li>
        </ul>

        <motion.a
          href="#calculator"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green text-dark px-6 py-2.5 rounded-xl text-[0.75rem] font-bold uppercase tracking-[2px] hover:bg-accent transition-colors shadow-lg shadow-green/10"
        >
          Audit Now
        </motion.a>
      </div>
    </nav>
  );
}
