import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-20 lg:px-32 max-w-[1400px] mx-auto w-full border-t border-gray-200 mt-20">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
        }}
      >
        {/* Left: Direct Text Hook */}
        <div>
          <h2 className="font-display text-[4rem] lg:text-[5.5rem] font-bold text-gray-900 leading-[0.95] tracking-tighter uppercase mb-8">
            Let's build <br/>
            something <br/>
            <span className="text-blue-600">that matters.</span>
          </h2>
          <p className="text-xl text-gray-600 font-body leading-relaxed max-w-md border-l-2 border-blue-600 pl-6 mb-12">
            I am currently open to new opportunities, freelance projects, and strategic consulting. If you have a problem that needs solving, reach out.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-1">Direct Email</div>
              <a href="mailto:motwaniarpita@gmail.com" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                motwaniarpita@gmail.com
              </a>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-1">Location</div>
              <p className="text-xl font-bold text-gray-900">Gujarat, India (Remote)</p>
            </div>
          </div>
        </div>

        {/* Right: Brutalist Form */}
        <form className="flex flex-col gap-8 pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-900 font-bold">01. Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
              className="bg-transparent border-b-2 border-gray-300 py-4 text-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors rounded-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-900 font-bold">02. Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="jane@example.com"
              className="bg-transparent border-b-2 border-gray-300 py-4 text-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors rounded-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-900 font-bold">03. The Objective</label>
            <textarea
              id="message"
              rows={4}
              placeholder="What are we building?"
              className="bg-transparent border-b-2 border-gray-300 py-4 text-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-blue-600 transition-colors resize-none rounded-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group mt-8 bg-gray-900 text-white px-8 py-6 text-sm font-bold tracking-widest uppercase hover:bg-blue-600 transition-colors duration-300 text-left flex justify-between items-center"
          >
            <span>Send Inquiry</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

      </motion.div>
    </section>
  );
}
