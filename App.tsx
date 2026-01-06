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
    { title: 'Languages', skills: [{ name: 'C' }, { name: 'Java' }, { name: 'SQL (MySQL)' }, { name: 'JavaScript' }, { name: 'HTML/CSS' }, { name: 'TypeScript' }, { name: 'Python' }] },
    { title: 'Frameworks', skills: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Django' }, { name: 'Node.js' }, { name: 'Express.js' }] },
    { title: 'Web & Tools', skills: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'React' }, { name: 'Firebase' }, { name: 'Google Apps Script' }, { name: 'Figma' }, { name: 'Web3Forms' }] },
    { title: 'Analytics & Data', skills: [{ name: 'Marketing Analytics' }, { name: 'A/B Testing' }, { name: 'SQL' }, { name: 'Python (Pandas, NumPy, Matplotlib)' }, { name: 'PowerBI' }] },
    { title: 'Libraries', skills: [{ name: 'Pandas' }, { name: 'NumPy' }, { name: 'Matplotlib' }, { name: 'PyTorch' }, { name: 'Hugging Face Transformers' }, { name: 'TensorFlow' }] },
    { title: 'Core Concepts', skills: [{ name: 'Data Structures & Algorithms' }, { name: 'OOP' }, { name: 'Operating Systems' }, { name: 'DBMS' }, { name: 'System Design (basic)' }] },
  ];

  const nonTechnicalSkillsData: SkillCategory[] = [
    { title: 'Digital Marketing', skills: [{ name: 'SEO' }, { name: 'Email Marketing' }, { name: 'Social Media Strategy' }, { name: 'Google Analytics' }, { name: 'Mailchimp' }, { name: 'Sender.net' }] },
    { title: 'Other', skills: [{ name: 'Content Strategy' }, { name: 'Brand Engagement' }, { name: 'Marketing Automation' }] },
  ];

  const projectsData: Project[] = [
    {
      title: 'Student Database Management System',
      description: 'A robust Django-based platform for efficient management of student records and analytics, featuring CRUD operations, attendance tracking with report downloads, and a multi-user interface.',
      tags: ['Django', 'Python'],
    },
    {
      title: 'LockerFox - Secure Password Manager',
      description: 'A full-stack, secure web application with a zero-knowledge architecture. Features include a local password generator, end-to-end encryption, and secure data sharing functionality.',
      tags: ['Next.js', 'TypeScript', 'React', 'Firebase', 'Vercel', 'Tailwind CSS'],
      liveUrl: 'https://lockerfox-app.vercel.app',
      githubUrl: 'https://github.com/neelBhau20/LockerFox',
    },
    {
      title: 'Logistics Company B2B Website',
      description: 'A responsive website for a logistics company supporting 100+ daily users, improving client onboarding by 40%. Features a dynamic contact form with automated data storage to Google Sheets.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web3Forms', 'Google Apps Script'],
      liveUrl: 'https://sendit.co.in',
    },
  ];

  const experienceData: Experience[] = [
    {
      role: 'Brand Marketing Intern',
      company: 'Groww',
      duration: 'Dec 2025 – Present',
      description: [
        "Developed and conceptualized novel campaign ideas to enhance company branding.",
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
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Skills skillsData={technicalSkillsData} title="Technical Skills" id="skills" />
        <Skills skillsData={nonTechnicalSkillsData} title="Non-Technical Skills" id="non-technical-skills" />
        <ExperienceComponent experienceData={experienceData} />
        <Projects projectsData={projectsData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;