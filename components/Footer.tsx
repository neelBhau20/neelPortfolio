import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <footer className="py-16 border-t border-slate-800 bg-slate-900 relative z-20">
      <div className="container mx-auto text-center px-4">
        <a 
          href="#home" 
          onClick={handleScrollToTop}
          className="text-3xl font-bold text-emerald-400 hover:text-emerald-300 transition-all duration-300 cursor-pointer text-glow-on-hover inline-block transform hover:scale-110"
        >
          Neel Tambe
        </a>
      </div>
    </footer>
  );
};

export default Footer;