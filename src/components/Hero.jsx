import { motion } from 'framer-motion';
import arpitaImg from '../assets/Arpita.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-8 md:px-20 lg:px-32 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16 w-full items-start">
        
        {/* Left Side: Bold Editorial Typography */}
        <div className="w-full pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2 h-2 bg-blue-600 rounded-none"></div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-900 font-bold">
                UI/UX Designer & Frontend Engineer
              </span>
            </div>
            
            <h1 className="font-display text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.95] tracking-tighter text-gray-900 mb-8 uppercase">
              I design systems <br/>
              <span className="text-gray-400">that scale products,</span><br/>
              <span className="text-blue-600 italic font-light lowercase tracking-normal">not just screens.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-[500px] leading-[1.6] font-body font-light border-l-2 border-blue-600 pl-6">
              Bridging the gap between design systems and technical execution to deliver high-performance, accessible digital products.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors duration-300"
            >
              <span>View Case Studies</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Editorial Image Crop */}
        <motion.div
          className="relative w-full flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[3/4] overflow-hidden bg-gray-100 group">
            <img 
              src={arpitaImg} 
              alt="Arpita" 
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-0 right-0 w-full h-full border-[12px] border-white/10 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 bg-blue-600 w-32 h-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </motion.div>

      </div>

      {/* Credibility Strip */}
      <motion.div 
        className="mt-32 pt-12 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <div className="text-3xl font-display font-bold text-gray-900 tracking-tighter">10+</div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Tech Certifications</div>
        </div>
        <div>
          <div className="text-3xl font-display font-bold text-gray-900 tracking-tighter">React</div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Core Framework</div>
        </div>
        <div>
          <div className="text-3xl font-display font-bold text-gray-900 tracking-tighter">IIT</div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Hackathon Competitor</div>
        </div>
        <div>
          <div className="text-3xl font-display font-bold text-gray-900 tracking-tighter">UI/UX</div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mt-2">Design Focus</div>
        </div>
      </motion.div>
    </section>
  );
}
