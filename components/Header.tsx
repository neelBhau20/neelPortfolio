import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      // The offset is to account for the fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-all duration-300 text-glow-on-hover transform hover:scale-110">
          NT
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-300 hover:text-emerald-400 transition-all duration-300 font-medium text-glow-on-hover">
              {link.label}
            </a>
          ))}
        </nav>
        <a 
          href="./Neel_Tambe_Resume.pdf" 
          download="Neel_Tambe_Resume.pdf"
          className="px-4 py-2 border border-emerald-400 text-emerald-400 rounded-md hover:bg-emerald-400 hover:text-slate-900 font-semibold transition-all duration-300 glow-on-hover"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;