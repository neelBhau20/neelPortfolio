import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedSection initialClass="opacity-0 -translate-x-10" finalClass="opacity-100 translate-x-0">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 glow-on-hover transition-shadow duration-300 h-full">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Marketing-Data Synergy</h3>
            <p className="text-gray-400 mb-6">
              I don't just see numbers; I see patterns of human behavior. To me, data and marketing go hand-in-hand. My goal is to master this fusion, using technical precision to guide creative strategy.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li><strong className="text-gray-200">The Fusion:</strong> Data provides the "what" and marketing provides the "why". I bridge that gap.</li>
              <li><strong className="text-gray-200">Analytical Storytelling:</strong> Transforming raw SQL outputs into compelling growth narratives.</li>
              <li><strong className="text-gray-200">Cross-Disciplinary:</strong> Applying Computer Science fundamentals to solve complex marketing challenges.</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 glow-on-hover transition-shadow duration-300 h-full">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Career Vision</h3>
            <p className="text-gray-400 mb-6">
              Currently deep-diving into the world of Data Analytics, I am focusing on building a robust toolkit that serves the modern digital ecosystem.
            </p>
            <ul className="space-y-3 text-gray-400">
               <li><strong className="text-gray-200">Aspiring Data Analyst:</strong> Targeting roles that demand both technical rigor and strategic intuition.</li>
               <li><strong className="text-gray-200">Strategic Milestone:</strong> Successfully mastered SQL and moving into advanced statistical modeling.</li>
               <li><strong className="text-gray-200">Continuous Growth:</strong> Dedicated to learning how modern AI models can revolutionize consumer engagement.</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;