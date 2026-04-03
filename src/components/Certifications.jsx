import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiAward, FiExternalLink, FiPlus } from 'react-icons/fi';
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
        description: "Comprehensive bootcamp covering MERN stack, REST APIs, and authentication."
    },
    {
        id: 2,
        title: "Problem Solving",
        issuer: "HackerRank",
        date: "Sept 2025",
        image: hack, 
        link: "https://www.hackerrank.com/certificates/iframe/86569f1c4f1d",
        description: "Mastering my problem-solving skills through rigorous challenges."
    },
    {
        id: 3,
        title: "Generative AI",
        issuer: "LinkedIn Learning",
        date: "Sept 2025",
        image: Ai, 
        link: "https://www.linkedin.com/learning/certificates/ed3fae99333d20c95854f77fb0368915afaa3329236a7dd667d4ce108585da3a?trk=share_certificate",
        description: "Exploring the capabilities and applications of generative AI technologies."
    },
    {
    id: 4,
    title: "Frontend Development",
    issuer: "FreeCodeCamp",
    date: "May 2024",
    image: free, 
    link: "https://www.freecodecamp.org/certification/fccef30f3af-5514-49d5-af80-2ddfb59bc92d/responsive-web-design",
    description: "Building responsive and accessible web interfaces using HTML, CSS, and JavaScript."
    },
    {
    id: 5,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Feb 2026",
    image: Hack,
    link: "https://www.hackerrank.com/certificates/iframe/f662fc320706",
    description: "Demonstrated proficiency in Java programming fundamentals and core concepts."
    }

];

const Certifications = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray('.cert-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
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
        <section ref={containerRef} className="py-24 bg-[#050816] relative" id="certifications">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-[10%] left-[-100px] w-96 h-96 bg-[#915eff] rounded-full blur-[120px] opacity-20"></div>
                <div className="absolute bottom-[20%] right-[-100px] w-80 h-80 bg-[#00f6ff] rounded-full blur-[120px] opacity-20"></div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#915eff] font-bold tracking-widest uppercase text-sm mb-3 block glow-text">Validations</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Certifications & Awards
                    </h2>
                    <p className="max-w-xl mx-auto text-[#aaa6c3] text-lg">
                        Recognized achievements reflecting my commitment to continuous learning and excellence.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="cert-card group relative bg-[#151030]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(145,94,255,0.15)] hover:-translate-y-2 hover:border-[#915eff]/40 transition-all duration-300"
                        >
                            {/* Image Banner */}
                            <div className="h-48 overflow-hidden relative border-b border-white/5">
                                <div className="absolute inset-0 bg-[#050816]/70 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-white/10">
                                    {cert.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-[#050816] border border-white/5 shadow-inner rounded-lg text-[#00f6ff]">
                                        <FiAward size={24} />
                                    </div>
                                    <span className="text-sm font-bold text-[#00f6ff] tracking-wide uppercase">{cert.issuer}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#915eff] transition-colors duration-300">
                                    {cert.title}
                                </h3>

                                <p className="text-[#aaa6c3] mb-8 line-clamp-3">
                                    {cert.description}
                                </p>

                                <a
                                    href={cert.link}
                                    className="inline-flex items-center gap-2 text-white font-bold hover:text-[#00f6ff] transition-colors group/link"
                                >
                                    View Credential
                                    <FiExternalLink className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
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
