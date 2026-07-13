import React from 'react';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const Experience = () => {
  const exp = {
    company: 'RYM Grenergy Solutions Pvt. Ltd',
    role: 'Web Developer Intern',
    duration: '02/2026 – Present',
    location: 'Remote',
    accentColor: '#EE9372',
    responsibilities: [
      'Developed responsive web application features using React.js and JavaScript while collaborating with cross-functional teams in an Agile environment.',
      'Built reusable UI components that improved maintainability and reduced repetitive development effort.',
      'Optimized website performance using lazy loading, image optimization, and efficient rendering techniques, reducing page load time by approximately 20%.',
      'Collaborated using Git and GitHub through version control workflows, pull requests, and code reviews.',
      'Debugged frontend issues, resolved UI bugs, and improved application reliability.',
      'Participated in feature planning, testing, deployment, and software delivery throughout the development lifecycle.'
    ],
    skills: ['React.js', 'JavaScript', 'Agile', 'Component Design', 'Web Performance', 'Git & GitHub', 'UI Debugging', 'Software Lifecycle'],
    metricValue: '20%',
    metricLabel: 'Performance Gain',
    metricDesc: 'Reduced overall page load time via lazy loading and optimization'
  };

  return (
    <section id="experience" className="py-24 bg-[#FDF8F3] relative overflow-hidden border-t border-[#0B3331]/10">
      
      {/* Decorative subtle background shape */}
      <div className="absolute top-[20%] right-[-10%] w-80 h-80 bg-[#FBC879]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      <div className="relative mx-auto max-w-screen-xl px-6 md:px-12 xl:px-16 z-10">
        
        {/* Title Header */}
        <div className="mb-16 text-left flex items-center gap-3" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
            Work Experience
          </h2>
          <span className="text-2xl text-[#EE9372] animate-pulse-slow">✦</span>
        </div>

        {/* Experience Showcase Panel */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up">
          <div className="relative overflow-hidden rounded-3xl border border-[#0B3331]/10 bg-white shadow-lg p-6 sm:p-10 flex flex-col">
            
            {/* Top Header Card */}
            <div className="pb-8 border-b border-[#0B3331]/5 text-left">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-[#0B3331]">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg font-sans font-bold flex items-center gap-2 text-[#EE9372]">
                    <FiBriefcase size={16} /> {exp.company}
                  </p>
                  <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#0B3331]/60 bg-[#0B3331]/5 border border-[#0B3331]/5 px-2.5 py-1 rounded-md font-sans font-semibold">
                    <FiMapPin size={12} /> {exp.location}
                  </span>
                </div>
                <div className="inline-flex items-center self-start md:self-auto rounded-full border border-[#0B3331]/10 bg-[#0B3331]/5 px-4 py-2 text-xs sm:text-sm font-sans font-bold text-[#0B3331]/80">
                  <FiCalendar className="mr-2" size={14} /> {exp.duration}
                </div>
              </div>
            </div>

            {/* Contributions + Metric Block */}
            <div className="grid gap-8 pt-8 md:grid-cols-[1.3fr_0.7fr] text-left">
              
              {/* Left Column: List of Contributions */}
              <div>
                <div className="mb-6 inline-flex rounded-full border border-[#EE9372]/30 bg-[#EE9372]/5 px-4 py-1 text-[10px] font-sans font-black uppercase tracking-wider text-[#EE9372]">
                  Key Contributions
                </div>

                <ul className="space-y-4">
                  {exp.responsibilities.map((item, keyIdx) => (
                    <li key={keyIdx} className="flex gap-3 leading-relaxed text-xs sm:text-sm text-[#0B3331]/75 hover:text-[#0B3331] transition-colors duration-200">
                      <FiCheckCircle 
                        className="mt-1 flex-shrink-0 text-[#EE9372]" 
                        size={14} 
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Graphical Metrics Spotlight + Tech Tags */}
              <div className="flex flex-col gap-6">
                
                {/* Metric Spotlight Container */}
                <div className="rounded-2xl border border-[#0B3331]/10 bg-[#0B3331]/5 p-6 flex flex-col items-center justify-center text-center shadow-sm relative overflow-hidden group/metric hover:border-[#EE9372]/30 transition-all duration-300">
                  <div 
                    className="relative w-24 h-24 flex items-center justify-center rounded-full border-4 border-dashed border-[#EE9372]/40 transition-all duration-500 mb-4 group-hover/metric:rotate-45"
                  >
                    <span className="text-3xl font-serif font-black text-[#0B3331] tracking-tighter">
                      {exp.metricValue}
                    </span>
                  </div>
                  <div className="text-xs font-sans font-black uppercase tracking-wider text-[#EE9372] mb-1">
                    {exp.metricLabel}
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#0B3331]/60 leading-relaxed max-w-[190px] mt-0.5 font-semibold">
                    {exp.metricDesc}
                  </p>
                </div>

                {/* Deployed Tech Stack */}
                <div className="rounded-2xl border border-[#0B3331]/10 bg-white p-5 sm:p-6 shadow-sm">
                  <p className="text-xs font-sans font-black uppercase tracking-widest text-[#0B3331]/60 flex items-center gap-2 mb-4">
                    <FiTrendingUp size={12} className="text-[#EE9372]" /> Tech Deployed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[#0B3331]/10 bg-[#0B3331]/5 px-2.5 py-1.5 text-[10px] font-sans font-bold text-[#0B3331]/80 hover:bg-[#EE9372] hover:text-[#FDF8F3] hover:border-[#EE9372] transition-all duration-200 cursor-default"
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