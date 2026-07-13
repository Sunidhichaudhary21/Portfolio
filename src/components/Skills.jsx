import React from 'react';
import { FiCpu, FiServer, FiDatabase, FiLayers, FiCheckCircle } from 'react-icons/fi';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'UI RENDER SYSTEM',
    icon: <FiCpu className="w-5 h-5 text-[#EE9372]" />,
    bgClass: 'bg-[#FDECE5]', // soft peach
    borderColor: 'border-[#EE9372]/30',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'GSAP Animation', 'Next.js', 'Framer Motion'],
    desc: 'Creating interactive state engines, high-fps view layouts, modular page systems, and fluid motion transitions.'
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    subtitle: 'CORE SERVICE HUB',
    icon: <FiServer className="w-5 h-5 text-[#0B3331]" />,
    bgClass: 'bg-[#EAF3EB]', // soft green
    borderColor: 'border-[#0B3331]/20',
    skills: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'JWT Auth', 'Middleware Configuration'],
    desc: 'Routing request buses, organizing secure middleware handshakes, and compiling asynchronous server setups.'
  },
  {
    id: 'database',
    title: 'Data & Persistence',
    subtitle: 'REGISTRY ENGINE',
    icon: <FiDatabase className="w-5 h-5 text-[#FBC879]" />,
    bgClass: 'bg-[#FDF6E2]', // soft yellow
    borderColor: 'border-[#FBC879]/30',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'Query Optimization', 'Redis Cache', 'SQL Schemas'],
    desc: 'Structuring relational schemas, tuning transactional index lookups, and organizing cached records.'
  },
  {
    id: 'devops',
    title: 'Infrastructure & Tools',
    subtitle: 'DEPLOYMENT PIPELINE',
    icon: <FiLayers className="w-5 h-5 text-[#4A69BB]" />,
    bgClass: 'bg-[#EAF0F6]', // soft blue
    borderColor: 'border-[#4A69BB]/30',
    skills: ['Git / GitHub', 'Linux VPS', 'Nginx Proxy', 'CI/CD Pipelines', 'AWS Cloud', 'SSL / HTTPS'],
    desc: 'Automating build pipelines, managing remote cloud instances, and proxying client networks.'
  }
];

const Skills = () => {
  return (
    <section className="py-24 bg-[#FDF8F3] relative overflow-hidden border-t border-[#0B3331]/10" id="skills">
      
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[-8%] w-80 h-80 bg-[#EE9372]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-8%] w-80 h-80 bg-[#0B3331]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Title Header */}
        <div className="mb-16 text-left flex flex-col items-start" data-aos="fade-right">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#EE9372]/30 bg-[#EE9372]/5 px-4 py-1.5 text-xs font-sans font-black uppercase tracking-wider text-[#EE9372]">
            ✿ Core Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
            Skills & Expertise
          </h2>
          <p className="mt-3 max-w-xl text-[#0B3331]/75 text-sm leading-relaxed">
            My primary technical skills are organized by core specializations, outlining tools and frameworks I deploy to build production-ready applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className={`bg-white rounded-[2rem] border p-6 sm:p-8 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${category.borderColor}`}
              data-aos="fade-up"
            >
              
              <div>
                {/* Header block */}
                <div className="flex items-center justify-between border-b border-[#0B3331]/5 pb-5 text-left mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-black text-[#0B3331]">
                      {category.title}
                    </h3>
                    <p className="text-[9px] font-sans font-black text-[#0B3331]/40 uppercase mt-0.5 tracking-wider">
                      {category.subtitle}
                    </p>
                  </div>
                  
                  {/* Circular Icon frame */}
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-inner ${category.bgClass}`}>
                    {category.icon}
                  </div>
                </div>

                {/* Description paragraph */}
                <p className="text-[#0B3331]/70 font-sans text-xs sm:text-sm leading-relaxed text-left mb-6">
                  {category.desc}
                </p>

                {/* Skills capsules list */}
                <div className="flex flex-wrap gap-2.5 mb-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3.5 py-1.5 rounded-xl bg-[#0B3331]/5 text-[#0B3331] font-sans font-bold text-xs flex items-center gap-1.5 border border-[#0B3331]/5 hover:bg-[#EE9372] hover:text-[#FDF8F3] hover:border-[#EE9372] transition-colors duration-200"
                    >
                      <FiCheckCircle className="text-[#EE9372] group-hover:text-white flex-shrink-0" size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
