import { motion } from 'framer-motion';

export default function Skills() {
  const groups = [
    {
      title: "Design & Strategy",
      desc: "Translating ambiguous business requirements into clear, accessible, and intuitive user experiences.",
      items: ["UI/UX Design & User Flows", "Wireframing & Rapid Prototyping", "Responsive Architecture", "Figma"]
    },
    {
      title: "Frontend Engineering",
      desc: "Executing high-fidelity designs with pixel-perfect precision and optimized performance.",
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Backend & Systems",
      desc: "Architecting scalable APIs, secure authentication, and robust database structures.",
      items: ["Node.js & Express.js", "MongoDB (Mongoose)", "RESTful APIs", "Vercel Deployment"]
    }
  ];

  return (
    <section id="capabilities" className="py-32 px-8 md:px-20 lg:px-32 max-w-[1400px] mx-auto w-full">
      <div className="mb-24 flex items-center gap-6">
        <h2 className="font-display text-[4rem] font-bold text-gray-900 tracking-tighter uppercase">Capabilities</h2>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {groups.map((group, idx) => (
          <motion.div 
            key={idx}
            className="flex flex-col"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 tracking-tight mb-4 border-b-2 border-gray-900 pb-4 inline-block w-fit">
              {group.title}
            </h3>
            <p className="text-sm text-gray-500 font-body leading-relaxed mb-8 h-16">
              {group.desc}
            </p>
            <ul className="flex flex-col gap-4">
              {group.items.map((item, sIdx) => (
                <li key={sIdx} className="flex items-center gap-3 text-sm text-gray-900 font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-none"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
