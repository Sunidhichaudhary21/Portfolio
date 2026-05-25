import React, { useRef } from 'react';
import { FiAward, FiExternalLink, FiCalendar, FiShield } from 'react-icons/fi';
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
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: "power3.out"
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-[#050816] relative overflow-hidden" id="certifications">
            {/* Background glowing ambient elements */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40 select-none z-0">
                <div className="absolute top-[20%] left-[-100px] w-96 h-96 bg-[#915eff]/10 rounded-full blur-[130px]" />
                <div className="absolute bottom-[20%] right-[-100px] w-80 h-80 bg-[#00f6ff]/10 rounded-full blur-[130px]" />
            </div>

            {/* Subtle tech dot matrix */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff005_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0 opacity-40" />

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
                
                {/* Title block */}
                <div className="text-center mb-16 sm:mb-20">
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#915eff]/30 bg-[#915eff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#915eff] shadow-[0_0_10px_rgba(145,94,255,0.15)]">
                    <FiShield size={12} className="animate-pulse" /> Validations
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4">
                    Certifications & Awards
                  </h2>
                  <p className="max-w-xl mx-auto text-[#aaa6c3] text-sm sm:text-base leading-relaxed">
                    Recognized industry accomplishments reflecting my ongoing dedication to technical knowledge, continuous skill growth, and programming excellence.
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#915eff] to-[#00f6ff] rounded-full opacity-80 mt-6 mx-auto shadow-[0_0_12px_#00f6ff]" />
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="cert-card group relative bg-[#0e0c24]/50 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(145,94,255,0.12)] hover:-translate-y-2 hover:border-[#915eff]/40 transition-all duration-300"
                        >
                            {/* Holographic Image Viewport Mockup */}
                            <div className="h-52 overflow-hidden relative border-b border-white/5 flex items-center justify-center bg-black/40">
                                {/* Sci-fi Scanning HUD */}
                                <div className="absolute inset-0 bg-[#050816]/75 group-hover:bg-[#050816]/20 transition-colors duration-500 z-10" />
                                
                                {/* Moving Scanner Line */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f6ff]/10 to-transparent w-full h-[10%] animate-hologram-sweep pointer-events-none z-20 opacity-0 group-hover:opacity-100 border-b border-[#00f6ff]/30 transition-opacity duration-300" />
                                
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-[90%] h-[85%] object-contain rounded-lg relative z-0 transform group-hover:scale-105 transition-transform duration-500"
                                />
                                
                                {/* Floating Top Badges */}
                                <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-[#00f6ff] bg-black/60 px-2 py-0.5 rounded border border-[#00f6ff]/20 tracking-wider">
                                    SYS.VAL: ACTIVE
                                </div>
                                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-white/10 flex items-center gap-1.5">
                                    <FiCalendar size={11} className="text-white/60" /> {cert.date}
                                </div>
                            </div>

                            {/* Card Content details */}
                            <div className="p-6 flex flex-col min-h-[260px]">
                                {/* Issuer block */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-[#00f6ff] group-hover:bg-[#00f6ff]/10 group-hover:border-[#00f6ff]/30 transition-all duration-300">
                                        <FiAward size={18} />
                                    </div>
                                    <span className="text-xs font-bold text-[#00f6ff] tracking-widest uppercase font-mono">{cert.issuer}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                                    {cert.title}
                                </h3>

                                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                                    {cert.description}
                                </p>

                                {/* Action launch */}
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#00f6ff] transition-colors group/link"
                                >
                                    View Verification Registry
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
