import { motion } from 'framer-motion';
import firstProjectImage from '../assets/project-1.png';
import secondProjectImage from '../assets/second.png';

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Campus Sphere",
      role: "Full-Stack Web Developer",
      image: firstProjectImage,
      problem: "Campus communication and event management were fragmented, causing poor student engagement and disorganized event discovery.",
      constraints: "Required mobile-first accessibility and secure student profile management under a rapid deployment schedule.",
      solution: "Engineered a centralized, responsive web application using React. Built dynamic UI components for event browsing and integrated secure user authentication via Node.js/Express.",
      impact: "Delivered a highly available, scalable platform deployed on Vercel with sub-second load times, centralizing campus interaction.",
      link: "https://campus-sphere-frontend-seven.vercel.app/login"
    },
    {
      id: "02",
      title: "Trend Life House",
      role: "UI/UX Designer",
      image: secondProjectImage,
      problem: "An online fashion e-commerce platform suffered from high user friction during product discovery, leading to drop-offs before checkout.",
      constraints: "Needed to maintain existing backend infrastructure while completely revamping the frontend interface across all device viewports.",
      solution: "Executed a comprehensive UI/UX overhaul. Redesigned critical user flows, navigation, and layouts to establish a clear visual hierarchy and intuitive shopping experience.",
      impact: "Bridged design and engineering through precise frontend integration, significantly reducing friction in product discovery.",
      link: "https://trendlifehouse.com/"
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 md:px-20 lg:px-32 max-w-[1400px] mx-auto w-full">
      <div className="mb-24 flex items-center gap-6">
        <h2 className="font-display text-[4rem] font-bold text-gray-900 tracking-tighter uppercase">Case Studies</h2>
        <div className="flex-1 h-[1px] bg-gray-200"></div>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {/* Editorial Image Header */}
            <div className="relative w-full aspect-[21/9] bg-gray-100 overflow-hidden mb-12">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 text-xs font-bold tracking-widest uppercase">
                Project {project.id}
              </div>
            </div>

            {/* Narrative Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
              
              {/* Title & Role */}
              <div>
                <h3 className="font-display text-4xl font-bold text-gray-900 tracking-tighter mb-4 leading-tight">
                  {project.title}
                </h3>
                <div className="text-xs tracking-[0.2em] uppercase text-blue-600 font-bold mb-8">
                  {project.role}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 border-b-2 border-gray-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-blue-600 hover:border-blue-600 transition-colors">
                  Read Full Case Study
                </a>
              </div>

              {/* Deep Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-3 border-b border-gray-200 pb-2">The Problem</h4>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-3 border-b border-gray-200 pb-2">Constraints</h4>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">{project.constraints}</p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold mb-3 border-b border-gray-200 pb-2">Solution</h4>
                  <p className="text-gray-600 font-body leading-relaxed text-sm">{project.solution}</p>
                </div>
                <div className="bg-blue-50/50 p-6 border-l-2 border-blue-600">
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-blue-600 font-bold mb-3">Measurable Impact</h4>
                  <p className="text-gray-900 font-body font-medium leading-relaxed text-sm">{project.impact}</p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
