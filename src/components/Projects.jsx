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
      color: '#335c67',
    },
    {
      id: 2,
      title: 'Portfolio',
      description:
        'Developed a modern and responsive personal portfolio website using React.js and Tailwind CSS to effectively showcase my projects, technical skills, and professional experience. The application features a clean and intuitive user interface with smooth navigation, optimized performance, and mobile-first design principles.Implemented reusable components, dynamic content rendering, and responsive layouts to ensure compatibility across various devices and screen sizes.',
      tags: ['React', 'GSAP', 'Tailwind', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/Sunidhichaudhary21/Portfolio.git',
      image: null,
      color: '#e09f3e',
    },
    {
      id: 3,
      title: 'Focusflow',
      description:
        'Built a full-stack productivity platform for students integrating notes, task management, and syllabus organization. Used React Query for server state management and built NLP-based task parsing to extract deadlines from natural language.',
      tags: ['React.js', 'Node.js', 'TypeScript', 'API', 'MongoDB', 'PostgreSQL', 'Express.js', 'React.js', 'Prisma'],
      github: 'https://github.com/Sunidhichaudhary21/FocusFlow.git',
      image: null,
      color: '#9e2a2b',
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
      className="relative overflow-hidden bg-[#fffaf1] py-24 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#335c67]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -right-32 h-80 w-80 rounded-full bg-[#e09f3e]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="projects-heading mb-14 md:mb-16">
          <span className="mb-3 inline-flex items-center rounded-full border border-[#335c67]/20 bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#e09f3e]">
            Selected Work
          </span>
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-[#1d3b42] md:text-6xl">
            Projects Built With
            <span className="block text-[#e09f3e]">Performance And Purpose</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#335c67]/75 md:text-lg">
            Every project balances usability, visual polish, and clean implementation. Explore the highlights below.
          </p>
        </div>

        <div className="projects-grid grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group relative overflow-hidden rounded-3xl border border-[#335c67]/10 bg-white/95 shadow-[0_24px_70px_-40px_rgba(20,34,43,0.7)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_75px_-35px_rgba(20,34,43,0.75)]"
            >
              <div
                className="relative flex h-44 items-end overflow-hidden p-6"
                style={{ background: `linear-gradient(145deg, ${project.color}2B, ${project.color}12)` }}
              >
                <div className="absolute right-4 top-4 text-6xl font-black text-[#1d3b42]/10">
                  0{index + 1}
                </div>
                <h3 className="relative text-3xl font-black text-[#1f4048] transition-colors duration-300 group-hover:text-[#e09f3e]">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-6 p-6">
                <p className="text-sm leading-relaxed text-[#335c67]/80">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="rounded-full border border-[#335c67]/15 bg-[#fffcf5] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#335c67]/80"
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
                    className="inline-flex items-center gap-2 rounded-full bg-[#1f4048] px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#e09f3e]"
                  >
                    <FiGithub size={16} />
                    View Code
                  </a>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#335c67]/15 text-[#335c67]/60 transition-colors duration-300 group-hover:border-[#e09f3e]/50 group-hover:text-[#e09f3e]">
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
