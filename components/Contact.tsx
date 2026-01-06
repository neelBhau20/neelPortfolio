import React from 'react';
import { GithubIcon, LinkedinIcon, YoutubeIcon, InstagramIcon, MailIcon, PhoneIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <AnimatedSection>
        <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
      </AnimatedSection>
      <AnimatedSection className="delay-100">
        <p className="max-w-2xl mx-auto mb-8 text-gray-400">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </AnimatedSection>
      <AnimatedSection className="delay-200">
        <a 
          href="/Neel Resume for marketing.pdf" 
          download="/Neel Resume for marketing.pdf"
          className="inline-block px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-all duration-300 glow-on-hover mb-12"
        >
          Download My Resume
        </a>
      </AnimatedSection>
      <AnimatedSection className="delay-300">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
           <a href="mailto:tambeneel2022@gmail.com" className="inline-flex items-center gap-2 text-lg text-emerald-400 hover:text-emerald-300 transition-all duration-300 text-glow-on-hover">
            <MailIcon /> tambeneel2022@gmail.com
          </a>
          <span className="hidden md:block text-slate-600">|</span>
          <a href="tel:+917204015484" className="inline-flex items-center gap-2 text-lg text-emerald-400 hover:text-emerald-300 transition-all duration-300 text-glow-on-hover">
            <PhoneIcon /> +91 7204015484
          </a>
        </div>
      </AnimatedSection>
      <AnimatedSection className="delay-400">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/neelBhau20" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 icon-glow-on-hover"><GithubIcon size={32} /></a>
          <a href="https://linkedin.com/in/neel-tambe-a4549b30b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 icon-glow-on-hover"><LinkedinIcon size={32} /></a>
          <a href="https://youtube.com/c/MarTechwithNeel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 icon-glow-on-hover"><YoutubeIcon size={32} /></a>
          <a href="https://www.instagram.com/neel_tambe57/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 icon-glow-on-hover"><InstagramIcon size={32} /></a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
