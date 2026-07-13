import React, { useRef } from 'react';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import fullStackImg from '../assets/gfg.jpg';
import hack from '../assets/hack.jpg';
import Ai from '../assets/Ai.png';
import free from '../assets/fcc.jpeg';
import Hack from '../assets/Java.png';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Geeksforgeeks",
        date: "Dec 2025",
        image: fullStackImg, 
        link: "https://www.geeksforgeeks.org/certificate/426a387eb3681e8177e1b6bbdcacbb41",
        description: "Comprehensive boot camp covering intermediate and advanced MERN stack architectures, server setups, APIs, and robust auth models."
    },
    {
        id: 2,
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        date: "Sept 2025",
        image: hack, 
        link: "https://www.hackerrank.com/certificates/iframe/86569f1c4f1d",
        description: "Validated proficiency in algorithms, basic data structures, search algorithms, and general problem-solving capabilities."
    },
    {
        id: 3,
        title: "Generative AI Foundations",
        issuer: "LinkedIn Learning",
        date: "Sept 2025",
        image: Ai, 
        link: "https://www.linkedin.com/learning/certificates/ed3fae99333d20c95854f77fb0368915afaa3329236a7dd667d4ce108585da3a?trk=share_certificate",
        description: "Explored prompt-engineering pipelines, transformer networks, LLM implementations, and generative AI tech principles."
    },
    {
        id: 4,
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "May 2024",
        image: free, 
        link: "https://www.freecodecamp.org/certification/fccef30f3af-5514-49d5-af80-2ddfb59bc92d/responsive-web-design",
        description: "Engineered responsive and accessible user interfaces utilizing mobile-first CSS grids, modern flex structures, and semantic markup."
    },
    {
        id: 5,
        title: "Java (Basic) Developer",
        issuer: "HackerRank",
        date: "Feb 2026",
        image: Hack,
        link: "https://www.hackerrank.com/certificates/iframe/f662fc320706",
        description: "Demonstrated key mastery of object-oriented Java programming concepts, thread models, inheritance, and core compilation setups."
    }
];

const Certifications = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray('.cert-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 88%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.08,
                ease: "power3.out"
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-[#FDF8F3] relative overflow-hidden" id="certifications">
            <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
                
                {/* Title block */}
                <div className="text-left mb-16 max-w-2xl" data-aos="fade-right">
                  <span className="font-sans font-black text-xs tracking-[0.2em] text-[#EE9372] uppercase mb-3 inline-block">
                    Validations & Achievements
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
                    Certifications
                  </h2>
                  <p className="text-[#0B3331]/75 text-sm mt-3 leading-relaxed">
                    Industry credentials reflecting my ongoing dedication to technical knowledge, continuous skill growth, and programming excellence.
                  </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="cert-card group bg-white rounded-3xl overflow-hidden border border-[#0B3331]/10 shadow-md hover:shadow-xl hover:border-[#EE9372] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Viewport */}
                            <div className="h-44 overflow-hidden relative border-b border-[#0B3331]/5 flex items-center justify-center bg-[#FDF8F3]/40 p-4">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-contain rounded-xl transform group-hover:scale-102 transition-transform duration-500"
                                />
                                
                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-sans font-bold text-[#0B3331]/70 border border-[#0B3331]/10 flex items-center gap-1">
                                    <FiCalendar size={10} className="text-[#0B3331]/40" /> {cert.date}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow text-left">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="p-1.5 bg-[#0B3331]/5 rounded-lg text-[#EE9372] border border-[#0B3331]/10">
                                        <FiAward size={14} />
                                    </div>
                                    <span className="text-[10px] font-sans font-black text-[#0B3331]/50 tracking-wider uppercase">{cert.issuer}</span>
                                </div>

                                <h3 className="text-base font-serif font-black text-[#0B3331] mb-2 leading-snug">
                                    {cert.title}
                                </h3>

                                <p className="text-[#0B3331]/70 font-sans text-xs leading-relaxed mb-6 line-clamp-3">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-sans font-bold text-[#EE9372] hover:text-[#0B3331] transition-colors group/link"
                                >
                                    Verify Certificate
                                    <FiExternalLink size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
