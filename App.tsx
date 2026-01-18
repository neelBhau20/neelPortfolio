import React from 'react';
import type { SkillCategory, Project, Experience } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceComponent from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const technicalSkillsData: SkillCategory[] = [
    { 
      title: 'Data & Analytics', 
      skills: [
        { name: 'SQL (Advanced)' }, 
        { name: 'Python (Pandas, NumPy, Matplotlib)' }, 
        { name: 'Excel (Pivot Tables, VLOOKUP)' },
        { name: 'PowerBI' }, 
        { name: 'Statistical Analysis' },
        { name: 'A/B Testing' }, 
        { name: 'Google Analytics' }
      ] 
    },
    { 
      title: 'Marketing Fusion', 
      skills: [
        { name: 'Email Marketing' },
        { name: 'Marketing Automation' },
        { name: 'SEO Strategy' },
        { name: 'Brand Analytics' },
        { name: 'Performance Marketing' },
        { name: 'Content Strategy' }
      ] 
    },
    { title: 'Core Tech', skills: [{ name: 'Python' }, { name: 'JavaScript' }, { name: 'React' }, { name: 'Django' }, { name: 'Java' }, { name: 'C' }, { name: 'DBMS' }] },
    { title: 'Libraries & ML', skills: [{ name: 'Scikit-Learn' }, { name: 'PyTorch' }, { name: 'Hugging Face' }, { name: 'NumPy' }] },
  ];

  const nonTechnicalSkillsData: SkillCategory[] = [
    { title: 'Strategic Tools', skills: [{ name: 'Figma' }, { name: 'Mailchimp' }, { name: 'Web3Forms' }, { name: 'Google Apps Script' }] },
    { title: 'Soft Skills', skills: [{ name: 'Data Storytelling' }, { name: 'Community Leadership' }, { name: 'Agile Mindset' }] },
  ];

  const projectsData: Project[] = [
    {
      title: 'Student Database Management System',
      description: 'A robust Django-based platform for efficient management of student records and analytics. Implemented complex SQL queries for tracking attendance trends and generating performance reports.',
      tags: ['Django', 'Python', 'SQL', 'Data Analytics'],
    },
    {
      title: 'LockerFox - Secure Password Manager',
      description: 'A full-stack, secure web application with zero-knowledge architecture. While a security project, it showcases my ability to manage structured user data securely.',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
      liveUrl: 'https://lockerfox-app.vercel.app',
      githubUrl: 'https://github.com/neelBhau20/LockerFox',
    },
    {
      title: 'Logistics Company B2B Website',
      description: 'Improved client onboarding by 40% through data-driven UI optimizations. Features automated data capture into Google Sheets for lead analysis.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web3Forms', 'Google Sheets API'],
      liveUrl: 'https://sendit.co.in',
    },
  ];

  const experienceData: Experience[] = [
    {
      role: 'Brand Marketing Intern',
      company: 'Groww',
      duration: 'Dec 2025 – Present',
      description: [
        "Developing and conceptualizing novel campaign ideas to enhance company branding.",
        "Executing a large-scale campaign drive which will target various colleges across India."
      ],
      tags: ['Brand Marketing', 'Campaign Strategy', 'Outreach']
    },
    {
      role: 'Perplexity Campus Ambassador',
      company: 'Manipal Institute of Technology',
      duration: 'Aug 2025 – Dec 2025',
      description: [
        "Promoted Perplexity's AI search product on campus through marketing and outreach.",
        "Organized 5+ events, reaching 500+ students, and built a community around AI ethics.",
        "Collaborated with cross-functional student teams, demonstrating teamwork and communication."
      ],
      tags: ['Marketing', 'Community Building', 'AI Ethics', 'Outreach']
    },
    {
      role: 'Marketing Intern',
      company: 'Sigrid Spectrum Consultant Pvt Ltd (Sendit)',
      duration: 'Jun 2025 - Jul 2025',
      description: [
        "Optimized company's LinkedIn presence, boosting engagement by 28% and improving brand visibility.",
        "Improved SEO for the landing page, resulting in better search engine rankings.",
        "Developed a fully functional website.",
        "Monitored website analytics to guide data-driven marketing decisions.",
        "Executed targeted email marketing campaigns to nurture leads."
      ],
      tags: ['SEO', 'LinkedIn Marketing', 'Web Development', 'Analytics', 'Email Marketing']
    },
    {
      role: 'Social Media Manager',
      company: 'Vedantu',
      duration: 'June 2021 - November 2021',
      description: [
        "Managed social media presence for Vedantu Master Teachers, ensuring consistent and engaging content.",
        "Promoted Vedantu's NEET and JEE plans through targeted campaigns.",
        "Responded to audience queries and fostered community engagement."
      ],
      tags: ['Social Media', 'Content Creation', 'Community Engagement', 'Campaign Management']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Header />
      <main className="container mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <About />
        <Skills skillsData={technicalSkillsData} title="Technical Expertise" id="skills" />
        <Skills skillsData={nonTechnicalSkillsData} title="Strategic & Soft Skills" id="non-technical-skills" />
        <ExperienceComponent experienceData={experienceData} />
        <Projects projectsData={projectsData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;