import React from 'react';
import type { Experience } from '../types';
import AnimatedSection from './AnimatedSection';

interface ExperienceProps {
  experienceData: Experience[];
}

const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="mb-8 flex justify-between items-center w-full group">
      {/* Desktop: Alternating layout */}
      <div className={`hidden md:flex w-5/12 ${isLeft ? 'order-1 text-right' : 'order-3 text-left'}`}>
        {/* Placeholder for potential future content, or just for spacing */}
      </div>

      {/* Timeline Connector */}
      <div className="z-10 flex items-center order-2">
        <div className="w-4 h-4 rounded-full bg-slate-900 border-2 border-emerald-500 transition-all duration-300 group-hover:bg-emerald-500 group-hover:shadow-[0_0_12px_theme(colors.emerald.400)]"></div>
      </div>
      
      {/* Experience Card */}
      <div className={`bg-slate-800 rounded-lg p-6 border border-slate-700 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 w-full md:w-5/12 ${isLeft ? 'order-3' : 'order-1'}`}>
        <p className="font-semibold text-emerald-400 mb-1 text-sm">{experience.duration}</p>
        <h3 className="text-xl font-bold text-slate-100 mb-1">{experience.role}</h3>
        <p className="text-slate-400 mb-4">{experience.company}</p>
        <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm mb-4">
          {experience.description.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {experience.tags && (
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceComponent: React.FC<ExperienceProps> = ({ experienceData }) => {
  return (
    <section id="experience" className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Work Experience</h2>
      </AnimatedSection>
      <div className="relative container mx-auto px-6">
        {/* The timeline vertical line */}
        <div className="hidden md:block absolute w-1 bg-slate-700 h-full left-1/2 transform -translate-x-1/2"></div>
         <div className="md:hidden absolute w-0.5 bg-slate-700 h-full left-3.5"></div>
        
        <div className="space-y-0 md:space-y-8">
          {experienceData.map((exp, index) => (
            <AnimatedSection key={index}>
              <TimelineItem experience={exp} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;