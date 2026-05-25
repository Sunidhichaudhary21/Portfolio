import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const Experience = () => {
  // Single experience block containing only RYM Grenergy
  const exp = {
    company: 'RYM Grenergy',
    role: 'Web Developer Intern',
    duration: '02/2026 - Present',
    location: 'Remote',
    accentColor: '#00f6ff',
    glowShadow: 'shadow-[0_0_25px_rgba(0,246,255,0.12)]',
    responsibilities: [
      'Developed and maintained responsive web applications using React.js, Vite, and JavaScript (ES6+).',
      'Built reusable UI components to improve codebase scalability, performance, and modular design.',
      'Collaborated with designers and backend teams to implement robust, responsive user features.',
      'Implemented authentication schemas using Clerk Auth and integrated Gemini LLM APIs for AI-powered helper modules.',
      'Optimized front-end asset loading, reducing overall page load time by approximately 20%.',
      'Managed source builds and version tracking using Git & GitHub for clean collaborative releases.'
    ],
    skills: ['React.js', 'Vite', 'Component Design', 'Clerk Auth', 'Gemini API', 'PostgreSQL', 'REST APIs', 'Performance', 'Git / GitHub'],
    metricValue: '+20%',
    metricLabel: 'Load Speed Efficiency',
    metricDesc: 'Optimized front-end components and assets loading'
  };

  return (
    <section id="experience" className="relative overflow-hidden bg-[#050816] py-24 md:py-28">
      {/* Background glowing elements */}
      <div className="pointer-events-none absolute -left-28 top-1/4 h-[350px] w-[350px] rounded-full bg-[#ff00ea]/6 blur-[130px] z-0" />
      <div className="pointer-events-none absolute -right-28 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#00f6ff]/8 blur-[130px] z-0" />
      
      {/* Dynamic tech grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none z-0" />

      <div className="relative mx-auto max-w-screen-2xl px-6 md:px-12 xl:px-24 z-10">
        
        {/* Title Header */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#915eff] shadow-[0_0_10px_rgba(145,94,255,0.15)]">
            Professional growth
          </span>
          <h2 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white tracking-tight pt-2">
            Work Experience
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff] drop-shadow-[0_2px_15px_rgba(0,246,255,0.2)]">
              Building Products In Real Teams
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915eff] to-[#00f6ff] rounded-full opacity-80 mt-6 shadow-[0_0_12px_#00f6ff]"></div>
        </div>

        {/* Experience Showcase Panel */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <div className={`relative overflow-hidden rounded-3xl border border-white/5 bg-[#0e0c24]/65 backdrop-blur-md transition-all duration-500 hover:border-white/10 ${exp.glowShadow}`}>
            
            {/* Top Header Card */}
            <div className="border-b border-white/5 bg-gradient-to-r from-white/[0.01] via-transparent to-white/[0.01] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-lg font-bold flex items-center gap-2" style={{ color: exp.accentColor }}>
                    <FiBriefcase size={16} /> {exp.company}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-white/50 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md font-mono">
                    <FiMapPin size={12} /> {exp.location}
                  </span>
                </div>
                <div className="inline-flex items-center self-start sm:self-auto rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/80">
                  <FiCalendar className="mr-2" size={14} /> {exp.duration}
                </div>
              </div>
            </div>

            {/* Contributions + Metric Block */}
            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.3fr_0.7fr]">
              {/* Left Column: List of Contributions */}
              <div>
                <div 
                  className="mb-5 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ 
                    color: exp.accentColor, 
                    borderColor: `${exp.accentColor}30`, 
                    backgroundColor: `${exp.accentColor}08` 
                  }}
                >
                  Key Contributions
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, keyIdx) => (
                    <li key={keyIdx} className="flex gap-3 leading-relaxed text-xs sm:text-sm text-white/70 hover:text-white/95 transition-colors duration-200">
                      <FiCheckCircle 
                        className="mt-1 flex-shrink-0" 
                        size={14} 
                        style={{ color: exp.accentColor }} 
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Graphical Metrics Spotlight + Tech Tags */}
              <div className="flex flex-col gap-6">
                
                {/* Metric Spotlight Container */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden group/metric hover:border-white/10 transition-colors duration-300">
                  {/* Soft visual background pulse */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/metric:opacity-100 transition-opacity duration-500 blur-md pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${exp.accentColor}08 0%, transparent 70%)` }}
                  />
                  
                  <div 
                    className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-dashed transition-all duration-500 mb-4 group-hover/metric:rotate-45"
                    style={{ borderColor: `${exp.accentColor}30` }}
                  >
                    <span className="text-3xl font-black text-white relative z-10 font-mono tracking-tighter">
                      {exp.metricValue}
                    </span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: exp.accentColor }}>
                    {exp.metricLabel}
                  </div>
                  <p className="text-[10px] sm:text-xs text-white/50 leading-relaxed max-w-[170px] mt-0.5">
                    {exp.metricDesc}
                  </p>
                </div>

                {/* Deployed Tech Stack */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 flex items-center gap-2">
                    <FiTrendingUp size={12} /> Tech Deployed
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 text-[10px] font-mono font-bold text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;