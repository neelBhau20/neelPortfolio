import React from 'react';
import type { SkillCategory } from '../types';
import AnimatedSection from './AnimatedSection';

interface SkillsProps {
  skillsData: SkillCategory[];
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  return (
    <section id="skills" className="py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Skills</h2>
      </AnimatedSection>
      <div className="space-y-8">
        {skillsData.map((category) => (
          <AnimatedSection key={category.title}>
            <div>
              <h3 className="text-2xl font-semibold text-emerald-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="bg-slate-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-emerald-500 hover:text-slate-900 glow-on-hover"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;
