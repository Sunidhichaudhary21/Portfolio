import React, { useEffect, useRef } from 'react';
import { FiChevronRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import gsap from 'gsap';
import heroImg from '../assets/hero_3d_transparent.png';

const WaveBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 select-none">
        <svg className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] animate-[spin_100s_linear_infinite]" viewBox="0 0 800 800" preserveAspectRatio="none">
            <defs>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#915eff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00f6ff" stopOpacity="0.8" />
                </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
                <path
                    key={i}
                    d={`M 0,${400 + i * 20} Q 200,${200 + i * 15} 400,${400 + i * 20} T 800,${400 + i * 20}`}
                    fill="none"
                    stroke="url(#waveGrad)"
                    strokeWidth="1.5"
                    opacity={1 - i * 0.04}
                />
            ))}
        </svg>
    </div>
);

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(".hero-title",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
                .fromTo(".hero-desc",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    "-=0.6"
                )
                .fromTo(".hero-button",
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
                    "-=0.4"
                )
                .fromTo(".hero-socials a",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
                    "-=0.4"
                )
                .fromTo(".hero-image",
                    { x: 50, opacity: 0, rotationY: -15 },
                    {
                        x: 0, opacity: 1, rotationY: 0, duration: 1, onComplete: () => {
                            gsap.to(".hero-image", {
                                y: -15,
                                rotationY: 15,
                                rotationX: 5,
                                duration: 3,
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut",
                                transformPerspective: 1000
                            });
                        }
                    },
                    "-=1"
                );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050816] relative">
            <WaveBackground />

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12">

                {/* Left Column - Text */}
                <div className="w-full md:w-[50%] flex flex-col items-start mt-10 md:mt-0">
                    <div className="flex flex-row items-start gap-4 mb-8">
                        {/* Vertical line indicator */}
                        <div className="flex flex-col items-center mt-3">
                            <div className="w-4 h-4 rounded-full bg-[#915eff] drop-shadow-[0_0_8px_rgba(145,94,255,0.8)]" />
                            <div className="w-1 h-40 md:h-64 lg:h-80 bg-gradient-to-b from-[#915eff] to-transparent" />
                        </div>

                        <div>
                            <h1 className="hero-title text-[3.2rem] md:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.1] tracking-tight mb-4">
                                Hi, I'm <span className="text-[#915eff]">Sunidhi Chaudhary</span>
                            </h1>

                            <p className="hero-desc text-lg md:text-2xl lg:text-3xl font-medium text-white/90 leading-[1.4] max-w-lg mt-2 mb-8">
                                I develop modern, user <br className="hidden md:block" />
                                interfaces and web applications
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pl-8 md:pl-0">
                        <a href="#projects" aria-label="View Projects">
                            <div className="hero-button relative w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_#915eff55] overflow-hidden">
                                <div className="absolute inset-0 bg-[#915eff] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                <FiChevronRight size={36} strokeWidth={3} className="text-[#050816] group-hover:text-white relative z-10 transition-colors duration-300 ml-1" />
                            </div>
                        </a>

                        {/* Social Links matching the neon UI */}
                        <div className="hero-socials flex gap-4 h-full items-center">
                            {[
                                { Icon: FiGithub, href: "https://github.com/Sunidhichaudhary21" },
                                { Icon: FiLinkedin, href: "https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" },
                                { Icon: FiMail, href: "mailto:csunidhi22@gmail.com" },
                                { Icon: FiTwitter, href: "https://x.com/SunidhiChaudh49034" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:border-[#00f6ff] hover:bg-[#00f6ff]/10 hover:text-[#00f6ff] hover:shadow-[0_0_15px_#00f6ff33] transition-all duration-300 backdrop-blur-sm"
                                >
                                    <item.Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - 3D Image */}
                <div className="w-full md:w-[50%] flex items-center justify-center relative perspective-[1200px]">
                    <div className="hero-image relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl drop-shadow-2xl translate-z-0" style={{ transformStyle: 'preserve-3d' }}>
                        <img
                            src={heroImg}
                            alt="3D Computer Setup"
                            className="w-full h-auto object-contain relative z-10 scale-110 md:scale-125 transform-origin-center"
                        />
                        {/* Subtle neon glow behind image */}
                        <div className="absolute inset-1/4 rounded-full bg-[#915eff] opacity-30 blur-[100px] -z-10 animate-pulse translate-z-[-50px]"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
