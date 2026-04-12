/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Stats from './components/Stats';
import Tips from './components/Tips';
import Schedule from './components/Schedule';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-dark font-sans selection:bg-accent selection:text-dark">
      <Navbar />
      
      <main>
        <Hero />
        <Story />
        <Stats />
        <Tips />
        <Schedule />
        <Calculator />
        
        {/* Final CTA Section */}
        <section className="py-24 px-4 md:px-16 text-center bg-dark border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-green text-[0.7rem] font-bold tracking-[3px] uppercase mb-4">Start Today</div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-6 uppercase">
              Your Best Semester<br />Starts with <span className="text-green">One Decision</span>
            </h2>
            <p className="text-muted text-[1rem] leading-relaxed max-w-[480px] mx-auto mb-10">
              You don't need to overhaul your life. Pick one tip. Schedule one workout. Take one walk. That's balance beginning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#tips" className="bg-green text-dark px-8 py-3.5 rounded-[4px] font-bold text-[0.9rem] uppercase tracking-widest hover:bg-accent transition-all transform hover:-translate-y-1">
                Get the Tips
              </a>
              <a href="#schedule" className="border border-white/20 text-off-white px-8 py-3.5 rounded-[4px] font-bold text-[0.9rem] uppercase tracking-widest hover:bg-white/5 transition-all transform hover:-translate-y-1">
                See the Schedule
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

