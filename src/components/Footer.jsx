export default function Footer() {
  const links = ['Home', 'About', 'Projects', 'Capabilities'];

  return (
    <footer className="bg-gray-900 text-white pt-32 pb-12 px-8 md:px-20 lg:px-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Statement */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl lg:text-4xl font-bold font-display uppercase tracking-tighter mb-6 leading-tight">
              Building systems.<br/>
              <span className="text-blue-600">Driving metrics.</span>
            </h3>
            <p className="text-gray-400 font-body text-sm max-w-sm leading-relaxed border-l-2 border-gray-700 pl-4">
              Available for strategic consulting and senior product design opportunities. Let's solve complex business problems together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-600 font-bold block mb-8">Navigation</span>
            <ul className="flex flex-col gap-5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-none opacity-0 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-600 font-bold block mb-8">Connect</span>
            <ul className="flex flex-col gap-5">
              <li>
                <a href="https://www.linkedin.com/in/arpita-motwani/" target="_blank" rel="noreferrer" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-blue-500 transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </li>
              <li className="pt-4 mt-4 border-t border-gray-800">
                <a href="mailto:motwaniarpita@gmail.com" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-blue-500 transition-colors">
                  motwaniarpita@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
            © {new Date().getFullYear()} Arpita Motwani.
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold flex gap-4">
            <span>Systems</span>
            <span className="text-gray-700">/</span>
            <span>Engineering</span>
            <span className="text-gray-700">/</span>
            <span>Design</span>
          </div>
        </div>
      </div>

      {/* Massive Background Typography */}
      <div className="absolute bottom-[-10%] left-0 w-full flex justify-center pointer-events-none select-none z-0">
        <h1 className="text-[20vw] leading-none font-black font-display tracking-tighter text-white opacity-[0.02]">
          ARPITA.
        </h1>
      </div>
    </footer>
  );
}
