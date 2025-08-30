import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { href: 'https://github.com/neelBhau20', icon: <GithubIcon /> },
    { href: 'https://linkedin.com/in/neel-tambe-a4549b30b', icon: <LinkedinIcon /> },
    { href: 'https://youtube.com/c/MarTechwithNeel', icon: <YoutubeIcon /> },
    { href: 'https://www.instagram.com/neel_tambe57/', icon: <InstagramIcon /> },
  ];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center items-start pt-20 overflow-hidden">
      {/* Parallax Background Blobs */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/50 rounded-full filter blur-3xl opacity-30 animate-blob"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/50 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      
      <div className="relative z-10">
        <AnimatedSection className="delay-100">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Neel Tambe
          </h1>
        </AnimatedSection>
        <AnimatedSection className="delay-200">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-2 text-glow">
            Aspiring Software Engineer
          </h2>
        </AnimatedSection>
        <AnimatedSection className="delay-300">
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6">
            Fusing{' '}
            <span className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Code
            </span>{' '}
            with{' '}
            <span className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Creative Marketing
            </span>
          </h3>
        </AnimatedSection>
        <AnimatedSection className="delay-400">
          <p className="max-w-2xl text-lg text-gray-400 mb-8">
            Computer Science undergrad specializing in full-stack development and AI/ML, with experience in building secure, scalable web apps and improving product engagement through data-driven decisions.
          </p>
        </AnimatedSection>
        <AnimatedSection className="delay-500">
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 icon-glow-on-hover">
                {link.icon}
              </a>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection className="delay-600">
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 glow-on-hover">
            View My Work
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;