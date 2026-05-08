const Experience = () => {
  const responsibilities = [
    'Developed and maintained responsive web applications using React.js, HTML, CSS, and JavaScript.',
    'Built reusable UI components to improve code scalability and maintainability.',
    'Collaborated with designers and backend developers to implement user-friendly features.',
    'Optimized website performance, reducing load time by around 20%.',
    'Fixed bugs and improved UI/UX based on feedback.',
    'Used Git and GitHub for version control and team collaboration.',
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-[#050816] py-24 md:py-28">
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#ff00ea] blur-[120px] opacity-10" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#00f6ff] blur-[120px] opacity-10" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-14 md:mb-16">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#915eff] shadow-[0_0_10px_rgba(145,94,255,0.2)]">
            Professional Growth
          </span>
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl pt-2">
            Experience
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#915eff] to-[#00f6ff]">
              Building Products In Real Teams
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#aaa6c3] md:text-lg">
            A snapshot of the internship work I contributed while shipping responsive interfaces, improving usability, and supporting team delivery.
          </p>
        </div>

        <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#151030]/70 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#915eff]/30 hover:shadow-[0_15px_40px_rgba(145,94,255,0.15)]">
          <div className="border-b border-white/5 bg-linear-to-r from-[#915eff]/15 via-[#050816] to-[#00f6ff]/10 p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-[#00f6ff] transition-colors duration-300">
                  Web Developer Intern
                </h3>
                <p className="mt-2 text-lg font-semibold text-[#915eff]">
                  RYM Grenergy | Remote
                </p>
              </div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                02/2026 - Present
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#00f6ff]/20 bg-[#00f6ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00f6ff]">
                Key Contributions
              </div>

              <ul className="space-y-4 text-[#ddd6fe]">
                {responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-sm md:text-base text-[#aaa6c3]">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#00f6ff] shadow-[0_0_10px_rgba(0,246,255,0.7)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-white/5 bg-[#050816] p-5 md:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff00ea]">
                Focus Areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['React.js', 'Responsive UI', 'Component Design', 'Performance', 'Debugging', 'Git / GitHub'].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;