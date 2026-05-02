import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = ['Home', 'About', 'Projects', 'Capabilities'];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-b-2 border-gray-900 py-2 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-20 lg:px-32 flex justify-between items-center">
        
        {/* Brand */}
        <div className="flex items-baseline gap-2">
          <a href="#home" className="font-display font-black text-2xl tracking-tighter text-gray-900 uppercase">
            Arpita.
          </a>
          <span className="hidden lg:block w-1.5 h-1.5 bg-blue-600"></span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link}
                {/* Minimal underline hover */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10">Inquire</span>
          </a>
        </div>

        {/* Mobile Menu Button (Minimal) */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="w-6 h-[2px] bg-gray-900 block"></span>
          <span className="w-4 h-[2px] bg-gray-900 block ml-auto"></span>
        </button>

      </div>
    </motion.nav>
  );
}
