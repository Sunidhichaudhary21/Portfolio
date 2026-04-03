import { FiCode, FiLayers, FiDatabase } from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-8 h-8 text-[#915eff]" />,
      title: 'Frontend Development',
      description: 'Crafting responsive, intuitive interfaces with React, Vue, HTML5, CSS3, JavaScript, and Tailwind CSS.'
    },
    {
      icon: <FiLayers className="w-8 h-8 text-[#00f6ff]" />,
      title: 'Backend Architecture',
      description: 'Building robust, scalable server-side systems using Node.js, Express, Python, Django, and RESTful APIs.'
    },
    {
      icon: <FiDatabase className="w-8 h-8 text-[#ff00ea]" />,
      title: 'Database Management',
      description: 'Architecting efficient data storage solutions with MongoDB, PostgreSQL, MySQL, and Firebase.'
    }
  ];

  return (
    <section className="py-24 bg-[#100d25]" id="about">
      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-[#915eff] font-semibold text-sm tracking-widest uppercase">
            Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-[#00f6ff] rounded-full opacity-80 shadow-[0_0_15px_#00f6ff]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8 text-[#aaa6c3] leading-relaxed text-lg lg:text-xl font-light" data-aos="fade-right">
            <p>
              I am a dedicated <strong className="text-white font-semibold">Full-Stack Developer</strong> driven by a passion for crafting aesthetically striking and highly functional web applications. Leveraging deep expertise in modern web technologies, I am committed to delivering exceptional digital experiences that address complex real-world challenges with elegance and efficiency.
            </p>
            <p>
              Beyond the code, I maintain a <strong className="text-white font-semibold">relentless pursuit of knowledge</strong>, constantly exploring emerging technologies to stay at the forefront of innovation. I champion the philosophy of writing clean, maintainable code, adhering to industry best practices to guarantee the long-term success and scalability of every project.
            </p>
            <p>
              When I am not immersed in development, I am actively contributing to the open-source community or analyzing the latest trends in web development to refine my craft.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-8 bg-[#151030] rounded-2xl border border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_-15px_rgba(145,94,255,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#915eff]/30 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                  {skill.icon}
                </div>
                <div className="relative z-10 flex gap-6 items-start">
                  <div className="flex-shrink-0 p-4 bg-[#050816] rounded-xl border border-white/5 group-hover:border-[#915eff]/30 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f6ff] transition-colors duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-[#aaa6c3] leading-relaxed text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;
