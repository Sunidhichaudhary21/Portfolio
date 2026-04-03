import React, { useLayoutEffect, useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Leetcode Metrics',
      description:
        'Comprehensive dashboard for Leetcode users. Tracks problem-solving stats, visualizes progress, and provides personalized insights to boost coding skills.Integrated dynamic data visualization and interactive charts to present user performance trends effectively.Designed with a responsive and user-friendly interface using modern frontend technologies, ensuring seamless experience across devices.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sunidhichaudhary21/Leetcode_metric.git',
      image: null,
      color: '#00f6ff',
    },
    {
      id: 2,
      title: 'Portfolio',
      description:
        'Developed a modern and responsive personal portfolio website using React.js and Tailwind CSS to effectively showcase my projects, technical skills, and professional experience. The application features a clean and intuitive user interface with smooth navigation, optimized performance, and mobile-first design principles.Implemented reusable components, dynamic content rendering, and responsive layouts to ensure compatibility across various devices and screen sizes.',
      tags: ['React', 'GSAP', 'Tailwind', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
      image: null,
      color: '#915eff',
    },
    {
      id: 3,
      title: 'Focusflow',
      description:
        'Built a full-stack productivity platform for students integrating notes, task management, and syllabus organization. Used React Query for server state management and built NLP-based task parsing to extract deadlines from natural language.',
      tags: ['React.js', 'Node.js', 'TypeScript', 'API', 'MongoDB', 'PostgreSQL', 'Express.js', 'React.js', 'Prisma'],
      github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
      image: null,
      color: '#ff00ea',
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-heading',
            start: 'top 86%',
          },
        }
      );

      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.16,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 82%',
          },
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      id="projects"
      className="relative overflow-hidden bg-[#050816] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#915eff] blur-[120px] opacity-20" />
      <div className="pointer-events-none absolute -bottom-36 -right-32 h-80 w-80 rounded-full bg-[#00f6ff] blur-[120px] opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="projects-heading mb-14 md:mb-16">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#00f6ff]/30 bg-[#00f6ff]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#00f6ff] shadow-[0_0_10px_rgba(0,246,255,0.2)]">
            Selected Work
          </span>
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl pt-2">
            Projects Built With
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff]">Performance And Purpose</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#aaa6c3] md:text-lg">
            Every project balances usability, visual polish, and clean implementation. Explore the highlights below.
          </p>
        </div>

        <div className="projects-grid grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group relative overflow-hidden rounded-3xl border border-white/5 bg-[#151030]/60 backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#915eff]/30 hover:shadow-[0_15px_40px_rgba(145,94,255,0.15)]"
            >
              <div
                className="relative flex h-44 items-end overflow-hidden p-6 border-b border-white/5"
                style={{ background: `linear-gradient(145deg, ${project.color}22, ${project.color}05)` }}
              >
                <div className="absolute right-4 top-4 text-6xl font-black text-white/5 select-none">
                  0{index + 1}
                </div>
                <h3 className="relative text-3xl font-black text-white transition-colors duration-300 group-hover:text-[#00f6ff]">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-6 p-6">
                <p className="text-sm leading-relaxed text-[#aaa6c3] line-clamp-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#100d25] border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#915eff] hover:text-white hover:border-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]"
                  >
                    <FiGithub size={16} />
                    View Code
                  </a>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#100d25] text-[#aaa6c3] transition-all duration-300 group-hover:border-[#00f6ff]/50 group-hover:text-[#00f6ff] group-hover:bg-[#00f6ff]/10 group-hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]">
                    <FiExternalLink size={16} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
