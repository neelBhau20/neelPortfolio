import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

interface ProjectsProps {
  projectsData: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg p-6 flex flex-col justify-between border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 glow-on-hover h-full">
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <div className="flex space-x-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 icon-glow-on-hover">
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 icon-glow-on-hover">
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto pt-4">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs font-semibold bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);


const Projects: React.FC<ProjectsProps> = ({ projectsData }) => {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <AnimatedSection>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <AnimatedSection key={project.title} className={`delay-[${index * 100}ms]`}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Projects;