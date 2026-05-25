import React, { useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiGithub, FiLinkedin, FiMail, FiTwitter, FiCode, FiLayers, FiCpu } from 'react-icons/fi';
import gsap from 'gsap';
import heroImg from '../assets/hero_3d_transparent.png';

// Technical HUD crosshair accents
const TechAccents = () => (
    <div className="absolute inset-0 pointer-events-none select-none z-10">
        {/* Corner Brackets */}
        <div className="absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 border-white/20 rounded-tl-sm"></div>
        <div className="absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-sm"></div>
        <div className="absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-sm"></div>
        <div className="absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 border-white/20 rounded-br-sm"></div>

        {/* Small sci-fi tech details */}
        <div className="absolute top-24 left-16 text-[9px] font-mono text-white/30 tracking-widest hidden lg:block">
            SYS.LOC: [41.258.96] // SYSTEM: ONLINE
        </div>
        <div className="absolute bottom-24 right-16 text-[9px] font-mono text-white/30 tracking-widest hidden lg:block text-right">
            SEC_CONN_SECURE // ENCR_KEY_SHA256
        </div>
    </div>
);

const Hero = () => {
    const heroRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    // Changing Subtitle Roles
    const phrases = [
        "Front-End Developer",
        "Creative UI/UX Designer",
        "Full-Stack Architect",
        "Creative Tech Innovator"
    ];
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState(phrases[0]);
    const [fadeClass, setFadeClass] = useState('opacity-100 translate-y-0');

    // Handle mouse move for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            // Value between -0.5 and 0.5
            const x = (clientX / innerWidth) - 0.5;
            const y = (clientY / innerHeight) - 0.5;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Rotate phrases
    useEffect(() => {
        const interval = setInterval(() => {
            setFadeClass('opacity-0 -translate-y-2 scale-95 transition-all duration-300');
            
            setTimeout(() => {
                setIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % phrases.length;
                    setDisplayText(phrases[nextIndex]);
                    return nextIndex;
                });
                setFadeClass('opacity-100 translate-y-0 scale-100 transition-all duration-300');
            }, 300);
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    // GSAP Intro Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(".hero-badge",
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
            .fromTo(".hero-title",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(".hero-desc-container",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(".hero-ctas",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.5"
            )
            .fromTo(".hero-socials-grid a",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)" },
                "-=0.4"
            )
            .fromTo(".hero-3d-showcase",
                { scale: 0.85, opacity: 0, rotationY: -20 },
                { scale: 1, opacity: 1, rotationY: 0, duration: 1.2, ease: "power3.out" },
                "-=1"
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    // Handle smooth scrolling
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section 
            ref={heroRef} 
            id="home" 
            className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden bg-[#050816] relative"
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.2px,transparent_1.2px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-0" />

            {/* Glowing Parallax Orbs */}
            <div 
                className="absolute top-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#915eff] rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-screen transition-transform duration-1000 ease-out z-0"
                style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }}
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#00f6ff] rounded-full blur-[140px] opacity-15 pointer-events-none mix-blend-screen transition-transform duration-1000 ease-out z-0"
                style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
            />

            <TechAccents />

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-8">
                
                {/* LEFT COLUMN - TEXT & CTAS */}
                <div 
                    className="w-full lg:w-[52%] flex flex-col items-start mt-4 lg:mt-0 transition-transform duration-700 ease-out"
                    style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` }}
                >
                    {/* Active Status Badge */}
                    <div className="hero-badge flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white/95 mb-6 shadow-md hover:border-[#00f6ff]/40 hover:bg-white/8 transition-all duration-300 group cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f6ff] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f6ff]"></span>
                        </span>
                        <span className="tracking-wide">Available for Full-time Opportunities</span>
                    </div>

                    {/* Main Headline */}
                    <div className="flex flex-row items-start gap-4 md:gap-6 mb-6">
                        {/* Elegant Tech Indicator Line */}
                        <div className="flex flex-col items-center mt-3">
                            <div className="w-4 h-4 rounded-full bg-[#915eff] ring-4 ring-[#915eff]/30 shadow-[0_0_12px_#915eff]" />
                            <div className="w-[3px] h-36 md:h-52 lg:h-64 bg-gradient-to-b from-[#915eff] via-[#915eff]/40 to-transparent" />
                        </div>

                        <div>
                            <h1 className="hero-title text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.2rem] font-black text-white leading-[1.1] tracking-tight">
                                Hi, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-[#d45eff] to-[#00f6ff] drop-shadow-[0_2px_15px_rgba(145,94,255,0.4)]">
                                    Sunidhi Chaudhary
                                </span>
                            </h1>

                            {/* Animated Subtitle Rotator */}
                            <div className="hero-desc-container mt-4 mb-6 min-h-[44px]">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/80">
                                    I am a <span className={`inline-block font-bold text-[#00f6ff] ${fadeClass}`}>{displayText}</span>
                                </p>
                            </div>

                            <p className="hero-desc-container text-sm sm:text-base md:text-lg text-white/60 max-w-lg leading-relaxed mb-8">
                                Designing and engineering next-generation, high-performance web applications. Bringing complex codebases to life with stunning interfaces and flawless user experiences.
                            </p>
                        </div>
                    </div>

                    {/* CTAs Section */}
                    <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pl-8 md:pl-10 w-full sm:w-auto">
                        <button 
                            onClick={() => handleScrollTo('projects')}
                            className="group relative px-8 py-4 bg-transparent rounded-full font-bold text-sm text-white tracking-widest uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/10 hover:border-[#00f6ff]/40 cursor-pointer"
                        >
                            {/* Glowing Gradient Background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#915eff] via-[#00f6ff] to-[#915eff] bg-[length:200%_auto] animate-gradient-shift opacity-85 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                            
                            {/* White shine hover effect */}
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0"></span>
                            
                            <span className="relative z-10 flex items-center gap-1.5">
                                View Portfolio <FiChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        <button 
                            onClick={() => handleScrollTo('contact')}
                            className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase text-white/90 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/30 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                        >
                            Let's Connect
                        </button>
                    </div>

                    {/* Interactive Social Links */}
                    <div className="hero-ctas mt-10 pl-8 md:pl-10 flex flex-col gap-3">
                        <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">Connect with me</div>
                        <div className="hero-socials-grid flex gap-3">
                            {[
                                { Icon: FiGithub, href: "https://github.com/Sunidhichaudhary21", label: "GitHub", hoverColor: "hover:border-[#00f6ff] hover:bg-[#00f6ff]/10 hover:text-[#00f6ff] hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]" },
                                { Icon: FiLinkedin, href: "https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/", label: "LinkedIn", hoverColor: "hover:border-[#915eff] hover:bg-[#915eff]/10 hover:text-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.3)]" },
                                { Icon: FiMail, href: "mailto:csunidhi22@gmail.com", label: "Email", hoverColor: "hover:border-[#00f6ff] hover:bg-[#00f6ff]/10 hover:text-[#00f6ff] hover:shadow-[0_0_15px_rgba(0,246,255,0.3)]" },
                                { Icon: FiTwitter, href: "https://x.com/SunidhiChaudh49034", label: "Twitter", hoverColor: "hover:border-[#915eff] hover:bg-[#915eff]/10 hover:text-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.3)]" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={item.label}
                                    className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 ${item.hoverColor}`}
                                >
                                    <item.Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN - 3D COMPUTER SHOWCASE */}
                <div className="w-full lg:w-[48%] flex items-center justify-center relative mt-8 lg:mt-0">
                    <div 
                        className="hero-3d-showcase relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[550px] aspect-square flex items-center justify-center transition-transform duration-700 ease-out z-10"
                        style={{ 
                            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px) rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)`,
                            perspective: '1000px',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Decorative HUD Scanning Rings */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
                        <div className="absolute inset-4 border border-dashed border-[#00f6ff]/10 rounded-full animate-spin-reverse-slow pointer-events-none"></div>
                        <div className="absolute inset-16 border-2 border-white/5 rounded-full pointer-events-none"></div>

                        {/* Interactive HUD Glowing Angle Marks */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00f6ff]/40"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#915eff]/40"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#915eff]/40"></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00f6ff]/40"></div>

                        {/* Glowing Background Radial */}
                        <div className="absolute w-[60%] h-[60%] bg-[#915eff]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                        {/* Futuristic Holographic Terminal Container */}
                        <div className="relative w-[90%] h-[90%] rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-inner group">
                            
                            {/* Cyber scanning light bar */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f6ff]/15 to-transparent w-full h-[15%] animate-hologram-sweep pointer-events-none z-20 border-b border-[#00f6ff]/40 shadow-[0_0_15px_rgba(0,246,255,0.4)]" />

                            {/* Dotted HUD Screen Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:8px_8px] z-10 pointer-events-none" />

                            <img
                                src={heroImg}
                                alt="Sunidhi Computer Setup"
                                className="w-[85%] h-auto object-contain relative z-10 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                            
                            {/* Live HUD metadata tags */}
                            <div className="absolute bottom-4 left-5 z-20 font-mono text-[9px] text-[#00f6ff] bg-black/60 px-2 py-0.5 rounded border border-[#00f6ff]/30 tracking-wider">
                                SYS.RENDER: OK
                            </div>
                            <div className="absolute bottom-4 right-5 z-20 font-mono text-[9px] text-white/50 tracking-wider">
                                RES.V: 1920x1080
                            </div>
                        </div>

                        {/* DYNAMIC ORBITING GLASS FLOATING CARDS */}
                        {/* Badge 1: React / Frontend Specialist */}
                        <div 
                            className="absolute -top-4 -left-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 backdrop-blur-md shadow-2xl animate-float-1 group/badge cursor-default hover:border-[#00f6ff]/40 transition-all duration-300"
                            style={{ transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px)` }}
                        >
                            <div className="p-1.5 rounded-lg bg-[#00f6ff]/10 border border-[#00f6ff]/20 text-[#00f6ff]">
                                <FiLayers size={18} className="group-hover/badge:rotate-12 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider leading-none">Specialty</span>
                                <span className="text-xs text-white font-bold tracking-wide mt-0.5">React & Frontend</span>
                            </div>
                        </div>

                        {/* Badge 2: API & Databases */}
                        <div 
                            className="absolute top-1/2 -right-8 z-20 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 backdrop-blur-md shadow-2xl animate-float-2 group/badge cursor-default hover:border-[#915eff]/40 transition-all duration-300"
                            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
                        >
                            <div className="p-1.5 rounded-lg bg-[#915eff]/10 border border-[#915eff]/20 text-[#915eff]">
                                <FiCode size={18} className="group-hover/badge:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider leading-none">Architect</span>
                                <span className="text-xs text-white font-bold tracking-wide mt-0.5">API & Backend</span>
                            </div>
                        </div>

                        {/* Badge 3: UI/UX Expert */}
                        <div 
                            className="absolute -bottom-4 left-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 backdrop-blur-md shadow-2xl animate-float-3 group/badge cursor-default hover:border-[#00f6ff]/40 transition-all duration-300"
                            style={{ transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)` }}
                        >
                            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                <FiCpu size={18} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider leading-none">Philosophy</span>
                                <span className="text-xs text-white font-bold tracking-wide mt-0.5">Pixel Perfect UI</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Premium Dynamic Scroll Down Indicator */}
            <div 
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group" 
                onClick={() => handleScrollTo('about')}
            >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/80 transition-colors duration-300 font-bold">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-[#915eff] transition-colors duration-300 shadow-[0_0_10px_rgba(145,94,255,0.1)]">
                    <div className="w-1.5 h-3 bg-[#915eff] rounded-full animate-bounce shadow-[0_0_8px_#915eff]" />
                </div>
            </div>

        </section>
    );
};

export default Hero;
