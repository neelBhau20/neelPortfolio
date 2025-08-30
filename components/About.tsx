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
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Personal Philosophy & Approach</h3>
            <ul className="space-y-3 text-gray-400">
              <li><strong className="text-gray-200">Proactive & Self-Driven:</strong> Actively seeking mentors and building a strong portfolio to overcome challenges and achieve goals.</li>
              <li><strong className="text-gray-200">Practical Learner:</strong> Passionate about hands-on application and building real-world projects to solidify theoretical concepts.</li>
              <li><strong className="text-gray-200">Balanced Skill Set:</strong> A unique blend of technical expertise in software development and non-technical skills in digital marketing and community leadership.</li>
            </ul>
          </div>
        </AnimatedSection>
        <AnimatedSection initialClass="opacity-0 translate-x-10" finalClass="opacity-100 translate-x-0">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 glow-on-hover transition-shadow duration-300 h-full">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Career Trajectory & Goals</h3>
            <ul className="space-y-3 text-gray-400">
               <li><strong className="text-gray-200">Aspiring Software Engineer:</strong> Aiming for a challenging software engineer role with a target package of 16 LPA.</li>
               <li><strong className="text-gray-200">Strategic Preparation:</strong> Following a clear roadmap for interview preparation, starting in December 2025 for placements in August 2026.</li>
               <li><strong className="text-gray-200">Effective Networking:</strong> Leveraging connections and seeking advice from experienced seniors to navigate the tech industry successfully.</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
