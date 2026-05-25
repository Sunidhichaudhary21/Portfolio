import React, { useState } from 'react';
import { FiTerminal, FiCpu, FiActivity, FiSettings, FiCheckSquare } from 'react-icons/fi';

const About = () => {
  const [activeTab, setActiveTab] = useState('profile.json');

  // Stats for the visual counters grid
  const stats = [
    { value: '1+', label: 'Years Experience', desc: 'Active web development' },
    { value: '5+', label: 'Projects Built', desc: 'From design to deployment' },
    { value: '15+', label: 'Core Tech Stack', desc: 'Modern tools & frameworks' },
    { value: '4', label: 'Coding Platforms', desc: 'Active solver' }
  ];

  return (
    <section className="py-20 bg-[#0a071d] relative overflow-hidden" id="about">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#915eff]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#00f6ff]/8 pointer-events-none rounded-full blur-[120px] z-0" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0" />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">

        {/* Title Block */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] font-bold text-xs tracking-widest uppercase">
            <FiActivity size={12} className="animate-pulse" /> Profile Matrix
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#915eff] to-[#00f6ff] rounded-full opacity-80 shadow-[0_0_12px_#00f6ff]"></div>
        </div>

        {/* 2-Column Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE - INTERACTIVE DYNAMIC MULTI-TAB TERMINAL */}
          <div className="lg:col-span-7 w-full" data-aos="fade-right">

            {/* Glassmorphic Multi-Tab Terminal Mockup */}
            <div className="w-full rounded-2xl bg-[#090b14]/90 border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden relative group hover:border-white/10 transition-colors duration-300">
              
              {/* Window Header / Tab bar */}
              <div className="bg-white/[0.03] px-4 pt-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1.5 mr-4 pb-3">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                {/* Explorer File Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-grow pb-3">
                  
                  {/* profile.json button */}
                  <button 
                    onClick={() => setActiveTab('profile.json')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono font-bold cursor-pointer transition-all duration-300 ${
                      activeTab === 'profile.json'
                        ? 'bg-[#101424] border-white/10 text-white shadow-sm'
                        : 'bg-transparent border-transparent text-white/40 hover:text-white/70'
                    }`}
                  >
                    <FiTerminal className="text-[#00f6ff]" size={11} />
                    <span>profile.json</span>
                  </button>

                  {/* philosophy.log button */}
                  <button 
                    onClick={() => setActiveTab('philosophy.log')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono font-bold cursor-pointer transition-all duration-300 ${
                      activeTab === 'philosophy.log'
                        ? 'bg-[#101424] border-white/10 text-white shadow-sm'
                        : 'bg-transparent border-transparent text-white/40 hover:text-white/70'
                    }`}
                  >
                    <FiSettings className="text-[#915eff]" size={11} />
                    <span>philosophy.log</span>
                  </button>

                  {/* system.md button */}
                  <button 
                    onClick={() => setActiveTab('system.md')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono font-bold cursor-pointer transition-all duration-300 ${
                      activeTab === 'system.md'
                        ? 'bg-[#101424] border-white/10 text-white shadow-sm'
                        : 'bg-transparent border-transparent text-white/40 hover:text-white/70'
                    }`}
                  >
                    <FiCpu className="text-[#ff00ea]" size={11} />
                    <span>system.md</span>
                  </button>

                </div>

                <div className="text-[10px] font-mono text-white/20 hidden sm:block pb-3 pl-2">
                  UTF-8
                </div>
              </div>

              {/* Code window area with dynamic content rendering */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px]">
                
                {activeTab === 'profile.json' && (
                  <div className="text-white">
                    <div className="text-white/40 mb-3">// High-performance React, Node, and Django architectures</div>
                    <span className="text-[#ff00ea]">{`{`}</span>
                    <div className="pl-6">
                      <span className="text-[#00f6ff]">"name"</span>: <span className="text-[#27c93f]">"Sunidhi Chaudhary"</span>,
                      <br />
                      <span className="text-[#00f6ff]">"role"</span>: <span className="text-[#27c93f]">"Full-Stack Web Developer"</span>,
                      <br />
                      <span className="text-[#00f6ff]">"location"</span>: <span className="text-[#27c93f]">"Vadodara, Gujarat, India"</span>,
                      <br />
                      <span className="text-[#00f6ff]">"focus"</span>: <span className="text-[#27c93f]">"Optimizing components & scaling database endpoints"</span>,
                      <br />
                      <span className="text-[#00f6ff]">"philosophies"</span>: <span className="text-[#ff00ea]">{`[`}</span>
                      <div className="pl-6">
                        <span className="text-[#27c93f]">"Writing clean, modular code specifications"</span>,
                        <br />
                        <span className="text-[#27c93f]">"Interactive and high-fidelity user experiences"</span>,
                        <br />
                        <span className="text-[#27c93f]">"Rigorous DSA practice & algorithm contests"</span>
                      </div>
                      <span className="text-[#ff00ea]">{`]`}</span>
                    </div>
                    <span className="text-[#ff00ea]">{`}`}</span>
                  </div>
                )}

                {activeTab === 'philosophy.log' && (
                  <div className="text-white/70 space-y-2.5">
                    <div className="text-white/40 mb-3">// Active system diagnostics logs</div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[09:00:00]</span>
                      <span className="text-white/50">SYS.INIT &gt; Starting local developer pipeline...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[09:00:02]</span>
                      <span className="text-[#27c93f]">SUCCESS &gt; Clerk Auth, PostgreSQL, & Nginx proxy: OK</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[11:30:00]</span>
                      <span className="text-white/50">METRIC &gt; Optimizing React component trees...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[11:30:45]</span>
                      <span className="text-[#00f6ff]">PERF &gt; Reduced client load speed by 20% success</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[15:00:00]</span>
                      <span className="text-white/50">CONTEST &gt; Syncing LeetCode consistency tracker logs...</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#915eff] font-bold">[15:00:05]</span>
                      <span className="text-[#ff00ea]">STATUS &gt; All systems nominal. Deploying clean builds.</span>
                    </div>
                  </div>
                )}

                {activeTab === 'system.md' && (
                  <div className="text-white/80 space-y-3 font-sans">
                    <div className="font-mono text-white/40 mb-3">// Dev workstation documentation spec</div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FiCheckSquare className="text-[#ff00ea]" size={14} /> Developer Stack
                    </h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-white/60">
                      <li><strong>Front-End Architecture</strong>: React.js, Vite compilation, Tailwind CSS styling system.</li>
                      <li><strong>Back-End Systems</strong>: Node.js, Express.js server middleware, Python Django models.</li>
                      <li><strong>Relational / Document DBs</strong>: MongoDB document indexes, PostgreSQL database schemas.</li>
                      <li><strong>API Integrations</strong>: Gemini LLM prompt-engineering APIs, Clerk security authentication.</li>
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT SIDE - BIOGRAPHY & KEY stats GRID */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full" data-aos="fade-left">

            {/* Written Bio */}
            <div className="space-y-6 text-white/70 leading-relaxed text-sm sm:text-base">
              <p>
                I am a dedicated <strong className="text-white font-black text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff]">Full-Stack Developer</strong> driven by a passion for crafting aesthetically striking and highly functional web applications.
              </p>
              <p>
                Leveraging deep expertise in modern web technologies, I am committed to delivering exceptional digital experiences that address complex real-world challenges with elegance and efficiency.
              </p>
              <p className="text-xs sm:text-sm text-white/50 font-light">
                I champion the philosophy of writing clean, maintainable code, adhering to industry best practices to guarantee the long-term success and scalability of every project.
              </p>
            </div>

            {/* Core Stats Motherboard 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 shadow-md flex flex-col items-start gap-1 hover:border-[#915eff]/30 hover:bg-white/[0.03] transition-all duration-300 group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff] group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white tracking-wide">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/50 leading-normal mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
