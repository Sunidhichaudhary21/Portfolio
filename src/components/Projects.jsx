import React, { useRef, useLayoutEffect } from 'react';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Leetcode Metrics',
      description: 'Comprehensive dashboard for Leetcode users. Tracks problem-solving stats, visualizes progress, and provides personalized insights to boost coding skills.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Sunidhichaudhary21/Leetcode_metric.git',
      image: null, // Add your image path here
      color: '#335c67'
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'Personal portfolio website built with React and Tailwind CSS. Showcases projects, skills, and experience with a clean, responsive design.',
      tags: ['React', 'GSAP', 'Tailwind', 'Framer Motion','JavaScript'],
      github: 'https://github.com/Sunidhichaudhary21',
      image: null, // Add your image path here
      color: '#e09f3e'
    },
    {
      id: 3,
      title: 'Bworth',
      description: 'A Sustainable Clothing Marketplace built with React and Node.js. Connects eco-conscious buyers and sellers, offering a platform for sustainable fashion with secure transactions and user-friendly design.',
      tags: ['Node.js', 'React.js', 'TypeScript', 'Api'],
      github: 'https://github.com/Sunidhichaudhary21',
      image: null, // Add your image path here
      color: '#9e2a2b'
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Responsive Animations using matchMedia
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop: Horizontal Scroll
        let sections = gsap.utils.toArray(".project-card-desktop");
        // We have strict number of cards + intro section.
        // Total slides = 1 (Intro) + 3 (Projects) + 1 (View All CTA)

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sliderRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // Adjust duration based on contents
            end: () => "+=" + sliderRef.current.offsetWidth * sections.length
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile: Simple Fade Up
        gsap.utils.toArray(".project-card-mobile").forEach((card) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        });
      });

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} className="bg-[#fffcf5] overflow-hidden relative" id="projects">
      {/* Desktop View - Horizontal Scroll */}
      <div className="hidden md:block">
        <div ref={sliderRef} className="h-screen w-full flex flex-nowrap items-center bg-[#fffcf5]">
          {/* Intro Card */}
          <div className="project-card-desktop min-w-[500px] h-full flex flex-col justify-center px-20 relative z-10 bg-[#fffcf5] border-r border-[#335c67]/10">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-[#e09f3e]/20 text-[#e09f3e] rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                Featured Works
              </div>
              <h2 className="text-6xl font-black text-[#335c67] leading-tight">
                My <br /> Projects
              </h2>
              <p className="text-[#335c67]/70 text-lg max-w-xs leading-relaxed">
                A selection of detailed case studies highlighting my development process.
              </p>
              <div className="pt-8 flex items-center gap-2 text-[#335c67] font-semibold animate-pulse">
                Scroll to explore <FiArrowRight />
              </div>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-desktop min-w-[80vw] lg:min-w-[60vw] h-screen flex items-center justify-center p-12 lg:p-24 relative box-border bg-[#fffcf5]">
              {/* Background Number */}
              <div className="absolute top-10 right-10 text-[12rem] font-bold text-[#335c67]/5 leading-none select-none z-0">
                0{index + 1}
              </div>

              <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 group">
                {/* Left: Content */}
                <div className="space-y-8 order-2 lg:order-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 border border-[#335c67]/20 rounded-full text-xs font-medium text-[#335c67]/70 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-5xl font-bold text-[#335c67] group-hover:text-[#e09f3e] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-xl text-[#335c67]/70 leading-relaxed font-light border-l-4 border-[#e09f3e] pl-6">
                    {project.description}
                  </p>

                  <div className="flex gap-6 pt-4">
                    <a href={project.github} className="flex items-center gap-2 px-6 py-3 bg-[#335c67] text-white rounded-full font-medium hover:bg-[#e09f3e] transition-colors duration-300 shadow-lg shadow-[#335c67]/20">
                      <FiGithub size={20} /> Code
                    </a>
                    
                  </div>
                </div>

                {/* Right: Project Image or Abstract Card */}
                <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#335c67]/20 group-hover:-translate-y-2 transition-transform duration-500 ease-out bg-white p-2 border-2 border-[#fff3b0]">
                  {project.image ? (
                    // Show actual project image
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    // Fallback: Abstract gradient card with circles
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}>
                      {/* Decorative Circles */}
                      <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full opacity-10" style={{ backgroundColor: project.color }}></div>
                      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-10" style={{ backgroundColor: project.color }}></div>

                      <div className="text-center z-10 transform group-hover:scale-110 transition-transform duration-700">
                        <h4 className="text-3xl font-bold text-[#335c67]/80 mb-2">{project.title}</h4>
                        <span className="text-sm font-mono text-[#e09f3e]">Preview</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}         
        </div>
      </div>

      {/* Mobile View - Vertical Stack */}
      <div className="md:hidden py-20 px-6">
        <div className="mb-16 text-center">
          <span className="text-[#e09f3e] text-sm font-bold tracking-widest uppercase mb-2 block">Featured Works</span>
          <h2 className="text-4xl font-bold text-[#335c67]">My Projects</h2>
        </div>

        <div className="space-y-16 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card-mobile group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#335c67]/5 border border-[#335c67]/5 mb-6 relative">
                {project.image ? (
                  // Show actual project image
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  // Fallback: gradient background with title
                  <div className="h-48 flex items-center justify-center" style={{ backgroundColor: `${project.color}10` }}>
                    <h4 className="text-xl font-bold text-[#335c67]/60">{project.title}</h4>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                  <FiExternalLink className="text-[#335c67]" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold text-[#e09f3e] uppercase tracking-wide">#{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-[#335c67]">{project.title}</h3>
                <p className="text-[#335c67]/70 leading-relaxed">{project.description}</p>
                <div className="flex gap-4 pt-2">
                  <a href={project.github} className="text-[#335c67] font-bold border-b-2 border-[#335c67]/20 hover:border-[#e09f3e] transition-colors pb-1">View Code</a>
                  <a href={project.live} className="text-[#335c67] font-bold border-b-2 border-[#335c67]/20 hover:border-[#e09f3e] transition-colors pb-1">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
