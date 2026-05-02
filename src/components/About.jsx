import { motion } from 'framer-motion';

export default function About() {
  const principles = [
    {
      num: "01",
      title: "Systems Over Screens",
      desc: "I don't just push pixels. I architect scalable design systems that unify products and accelerate engineering delivery."
    },
    {
      num: "02",
      title: "Business Meets User",
      desc: "Beautiful UI is useless if it doesn't move metrics. I align user needs with strict business objectives to guarantee ROI."
    },
    {
      num: "03",
      title: "Code Informs Design",
      desc: "Knowing how a component renders in the DOM fundamentally changes how it should be designed. I bridge the gap."
    }
  ];

  return (
    <section id="about" className="py-32 px-8 md:px-20 lg:px-32 max-w-[1400px] mx-auto w-full bg-gray-50">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.1 } }
        }}
      >
        {/* Left: Opinionated Statement */}
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <h2 className="font-display text-[3rem] lg:text-[4rem] font-bold text-gray-900 leading-[1.0] tracking-tighter uppercase mb-10">
            Design is <br/>
            how it works.
          </h2>
          <div className="space-y-6 text-gray-600 font-body leading-[1.8] max-w-lg text-lg">
            <p>
              The industry treats design as a decorative layer applied at the end of the process. I believe design is the strategic foundation of the product itself.
            </p>
            <p>
              As a hybrid designer and engineer, I eliminate the friction between concept and execution. I build robust digital architectures where every interaction is purposeful, performant, and directly tied to a measurable outcome. No fluff. Just results.
            </p>
          </div>
        </motion.div>

        {/* Right: Core Principles */}
        <div className="flex flex-col gap-10 border-l border-gray-200 pl-8 lg:pl-16">
          {principles.map((principle, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            >
              <div className="text-xs font-bold text-blue-600 tracking-[0.2em] mb-2">{principle.num}</div>
              <h3 className="font-display text-2xl font-bold text-gray-900 tracking-tight mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed text-sm max-w-sm">
                {principle.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
