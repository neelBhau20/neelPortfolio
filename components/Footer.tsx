import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-6 border-t border-slate-800">
      <div className="container mx-auto text-center">
        <a 
          href="#home" 
          onClick={handleScrollToTop}
          className="font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer text-glow-on-hover"
        >
          Neel Tambe
        </a>
      </div>
    </footer>
  );
};

export default Footer;