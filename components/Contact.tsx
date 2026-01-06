import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-900">
      <div className="container mx-auto text-center">
        <a 
          href="#home" 
          onClick={handleScrollToTop}
          className="text-xl font-semibold text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer text-glow-on-hover inline-block"
        >
          Neel Tambe
        </a>
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;