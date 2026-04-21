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
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <a href="#tips" className="bg-green text-dark px-8 py-3.5 rounded-[4px] font-bold text-[0.9rem] uppercase tracking-widest hover:bg-accent transition-all transform hover:-translate-y-1">
                Get the Tips
              </a>
              <a href="#schedule" className="border border-white/20 text-off-white px-8 py-3.5 rounded-[4px] font-bold text-[0.9rem] uppercase tracking-widest hover:bg-white/5 transition-all transform hover:-translate-y-1">
                See the Schedule
              </a>
            </div>

            <div className="glass p-8 rounded-3xl max-w-2xl mx-auto border-white/10">
              <div className="text-rose-400 text-[0.65rem] font-bold tracking-[2px] uppercase mb-4">Immediate Support</div>
              <h3 className="font-display text-2xl text-off-white uppercase mb-4 tracking-wider">Need more than just a routine?</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                If burnout is affecting your mental health or you're feeling overwhelmed, please reach out to experts who can help. You don't have to carry the weight alone.
              </p>
              <a 
                href="https://jedfoundation.org/mental-health-resource-center/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-off-white text-dark px-8 py-3 rounded-xl font-bold text-[0.75rem] uppercase tracking-[2px] hover:bg-rose-400 hover:text-white transition-all inline-block"
              >
                Visit The Jed Foundation
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

