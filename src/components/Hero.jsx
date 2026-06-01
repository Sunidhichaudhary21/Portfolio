import React, { useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import gsap from 'gsap';

// Decrypted text animation component
const DecryptedText = ({ text, className, triggerHover }) => {
    const [display, setDisplay] = useState(text);
    const [scrambleTrigger, setScrambleTrigger] = useState(0);

    useEffect(() => {
        let iterations = 0;
        const targetText = text;
        if (!targetText) return;

        const interval = setInterval(() => {
            setDisplay(() => {
                return targetText.split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iterations) {
                            return targetText[index];
                        }
                        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+={}[];:<>?/";
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");
            });
            if (iterations >= targetText.length) {
                clearInterval(interval);
            }
            iterations += 1;
        }, 20);

        return () => clearInterval(interval);
    }, [text, scrambleTrigger]);

    return (
        <span 
            className={`${className} cursor-default`}
            onMouseEnter={() => {
                if (triggerHover) {
                    setScrambleTrigger(prev => prev + 1);
                }
            }}
        >
            {display}
        </span>
    );
};

// Quantum Orbit Constellation - Physics-Based Interactive Skill Sandbox
const QuantumOrbitCanvas = ({ mousePos }) => {
    const canvasRef = useRef(null);

    // Dynamic tech stack nodes
    const nodesRef = useRef([
        { name: "React.js", category: "frontend", orbit: 95, speed: 0.005, angle: 0, size: 6.5 },
        { name: "Node.js", category: "backend", orbit: 135, speed: -0.004, angle: 1.5, size: 7 },
        { name: "PostgreSQL", category: "database", orbit: 175, speed: 0.003, angle: 3.1, size: 8 },
        { name: "Tailwind CSS", category: "frontend", orbit: 110, speed: -0.006, angle: 4.5, size: 5 },
        { name: "Figma UI/UX", category: "design", orbit: 155, speed: 0.0035, angle: 0.8, size: 6 },
        { name: "Python / Django", category: "backend", orbit: 200, speed: -0.0025, angle: 2.2, size: 7 }
    ]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        let mouse = { x: null, y: null };
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            // Draw concentric orbital rings
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
            ctx.lineWidth = 1;
            [95, 110, 135, 155, 175, 200].forEach(r => {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.stroke();
            });

            // Core Quantum Reactor Styles (Purple/indigo theme matching site style)
            const coreColor = 'rgba(145, 94, 255, 0.2)'; 
            const coreStroke = 'rgba(145, 94, 255, 0.5)';

            // Draw center glow
            const grad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 40);
            grad.addColorStop(0, 'rgba(145, 94, 255, 0.85)');
            grad.addColorStop(0.5, coreColor);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, 40, 0, Math.PI * 2);
            ctx.fill();

            // Core center point
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(cx, cy, 3, 0, Math.PI * 2);
            ctx.fill();

            // Core spinning ring
            ctx.strokeStyle = coreStroke;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(cx, cy, 28, 0, Math.PI * 0.75);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, 28, Math.PI, Math.PI * 1.75);
            ctx.stroke();

            let currentHover = null;

            // Draw and update tech nodes
            nodesRef.current.forEach(node => {
                // Keep moving along its orbit
                node.angle += node.speed;

                // Position calculation
                let nx = cx + Math.cos(node.angle) * node.orbit;
                let ny = cy + Math.sin(node.angle) * node.orbit;

                // Hover check & Parallax offset
                nx += mousePos.x * 20;
                ny += mousePos.y * 20;

                // Mouse interaction physics (Magnet Gravitational Pull)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - nx;
                    const dy = mouse.y - ny;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 90) {
                        const force = (90 - dist) / 90;
                        nx += dx * force * 0.35;
                        ny += dy * force * 0.35;
                    }

                    if (dist < 20) {
                        currentHover = node;
                    }
                }

                const isHovered = currentHover?.name === node.name;
                let glowBlur = isHovered ? 15 : 8;
                let strokeColor = 'rgba(255,255,255,0.3)';
                let fillColor = 'rgba(255,255,255,0.06)';

                // Distinct signature colors for categories matching the site's skills layout
                if (node.category === 'frontend') {
                    strokeColor = '#00f6ff';
                    fillColor = 'rgba(0, 246, 255, 0.25)';
                } else if (node.category === 'backend') {
                    strokeColor = '#915eff';
                    fillColor = 'rgba(145, 94, 255, 0.25)';
                } else if (node.category === 'database') {
                    strokeColor = '#ff00ea';
                    fillColor = 'rgba(255, 0, 234, 0.25)';
                } else if (node.category === 'design') {
                    strokeColor = '#a855f7';
                    fillColor = 'rgba(168, 85, 247, 0.25)';
                }

                if (isHovered) {
                    fillColor = '#ffffff';
                    strokeColor = '#ffffff';
                }

                // Apply node glow shadows
                if (glowBlur > 0) {
                    ctx.shadowBlur = glowBlur;
                    ctx.shadowColor = strokeColor;
                }

                // Node sphere
                ctx.fillStyle = fillColor;
                ctx.beginPath();
                ctx.arc(nx, ny, node.size + (isHovered ? 2.5 : 0), 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = strokeColor;
                ctx.lineWidth = isHovered ? 2 : 1;
                ctx.beginPath();
                ctx.arc(nx, ny, node.size + (isHovered ? 2.5 : 0), 0, Math.PI * 2);
                ctx.stroke();

                ctx.shadowBlur = 0; // reset shadow for labels and vectors

                // Vector lines back to Reactor core
                ctx.strokeStyle = isHovered 
                    ? 'rgba(255,255,255,0.3)' 
                    : strokeColor.replace('rgb', 'rgba').replace(')', ', 0.08)');
                ctx.lineWidth = isHovered ? 1.5 : 0.7;
                ctx.beginPath();
                ctx.moveTo(nx, ny);
                ctx.lineTo(cx, cy);
                ctx.stroke();

                // Draw constellation links between close neighbor nodes
                nodesRef.current.forEach(otherNode => {
                    if (otherNode.name !== node.name) {
                        let ox = cx + Math.cos(otherNode.angle) * otherNode.orbit + mousePos.x * 20;
                        let oy = cy + Math.sin(otherNode.angle) * otherNode.orbit + mousePos.y * 20;
                        
                        const dx = nx - ox;
                        const dy = ny - oy;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 110) {
                            ctx.strokeStyle = (isHovered || otherNode.name === currentHover?.name)
                                ? 'rgba(255,255,255,0.12)'
                                : 'rgba(255,255,255,0.015)';
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(nx, ny);
                            ctx.lineTo(ox, oy);
                            ctx.stroke();
                        }
                    }
                });

                // Display names
                ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.65)';
                ctx.font = isHovered ? 'bold 9px monospace' : '8px monospace';
                ctx.fillText(node.name, nx + 12, ny + 3);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mousePos]);

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
            {/* Hologram Constellation Platform */}
            <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] rounded-full border border-white/5 bg-white/[0.01] backdrop-blur-[2px] flex items-center justify-center overflow-hidden shadow-2xl group">
                <canvas ref={canvasRef} className="absolute inset-0 z-10 cursor-pointer" />
                
                {/* HUD rings */}
                <div className="absolute inset-2 border border-dashed border-white/5 rounded-full animate-spin-slow pointer-events-none z-0" />
                <div className="absolute inset-8 border border-white/[0.015] rounded-full pointer-events-none z-0" />
                <div className="absolute inset-16 border border-dashed border-white/5 rounded-full animate-spin-reverse-slow pointer-events-none z-0" />

                {/* Grid markings */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/[0.015] pointer-events-none z-0" />
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.015] pointer-events-none z-0" />
            </div>
        </div>
    );
};

// Technical HUD crosshair accents
const TechAccents = ({ mousePos, uptime }) => {
    const accentBorder = 'border-[#915eff]/30';

    return (
        <div className="absolute inset-0 pointer-events-none select-none z-10">
            {/* Corner Brackets */}
            <div className={`absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 ${accentBorder} rounded-tl-sm`}></div>
            <div className={`absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 ${accentBorder} rounded-tr-sm`}></div>
            <div className={`absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 ${accentBorder} rounded-bl-sm`}></div>
            <div className={`absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 ${accentBorder} rounded-br-sm`}></div>

            {/* Coordinates tracking */}
            <div className="absolute top-24 left-16 text-[9px] font-mono text-white/30 tracking-widest hidden lg:block">
                SYS.LOC: [X:{(mousePos.x * 100).toFixed(2)}, Y:{(mousePos.y * 100).toFixed(2)}] // CORE: ACTIVE
            </div>
            <div className="absolute bottom-24 right-16 text-[9px] font-mono text-white/30 tracking-widest hidden lg:block text-right">
                SYS.UPTIME: {uptime} // SEC_CONN_SECURE
            </div>
        </div>
    );
};

const Hero = () => {
    const heroRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [uptime, setUptime] = useState("00:00.00");
    const [index, setIndex] = useState(0);

    const phrases = [
        "Full-Stack Web Architect",
        "Creative UI/UX Designer",
        "Systems Integrator",
        "Performance Expert"
    ];

    // Dynamic HUD Telemetry timer
    useEffect(() => {
        const startTime = Date.now();
        const timer = setInterval(() => {
            const diff = Date.now() - startTime;
            const min = String(Math.floor(diff / 60000)).padStart(2, '0');
            const sec = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
            const ms = String(Math.floor((diff % 1000) / 10)).padStart(2, '0');
            setUptime(`${min}:${sec}.${ms}`);
        }, 45);

        return () => clearInterval(timer);
    }, []);

    // Handle mouse move for parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth) - 0.5;
            const y = (clientY / innerHeight) - 0.5;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3800);

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
                "-=0.5"
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
                { scale: 0.85, opacity: 0, rotationY: -10 },
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

    const config = {
        glowClass: "bg-[#915eff]",
        accentColor: "#915eff",
        shadowColor: "drop-shadow-[0_2px_15px_rgba(145,94,255,0.4)]",
        btnColor: "from-[#915eff] via-[#d45eff] to-[#00f6ff]",
        description: "Designing and engineering next-generation, high-performance web applications. Sculpting interactive layouts, secure architectures, and scalable full-stack database systems."
    };

    const currentPhrase = phrases[index];

    return (
        <section 
            ref={heroRef} 
            id="home" 
            className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden bg-[#050816] relative"
        >
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1.2px,transparent_1.2px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none z-0" />

            {/* Glowing Parallax Ambient Blur Orbs */}
            <div 
                className={`absolute top-1/4 left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none mix-blend-screen transition-all duration-1000 ease-out z-0 ${config.glowClass}`}
                style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }}
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none mix-blend-screen transition-all duration-1000 ease-out z-0"
                style={{ 
                    transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)`,
                    backgroundColor: '#00f6ff'
                }}
            />

            {/* Technical HUD Accents */}
            <TechAccents mousePos={mousePos} uptime={uptime} />

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-8">
                
                {/* LEFT COLUMN - TEXT & CTAS */}
                <div 
                    className="w-full lg:w-[52%] flex flex-col items-start mt-4 lg:mt-0 transition-transform duration-700 ease-out"
                    style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` }}
                >
                    {/* Active Status Badge */}
                    <div className="hero-badge flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white/95 mb-5 shadow-md hover:border-white/20 hover:bg-white/8 transition-all duration-300 group cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="tracking-wide">Available for Full-time Opportunities</span>
                    </div>

                    {/* Main Headline Section */}
                    <div className="flex flex-row items-start gap-4 md:gap-6 mb-4 w-full">
                        {/* Elegant Tech Indicator Line */}
                        <div className="flex flex-col items-center mt-3">
                            <div 
                                className={`w-4 h-4 rounded-full ${config.glowClass} ring-4 transition-all duration-500`}
                                style={{ 
                                    boxShadow: `0 0 16px ${config.accentColor}`,
                                    borderColor: `${config.accentColor}30`
                                }} 
                            />
                            <div 
                                className="w-[3px] h-36 md:h-52 lg:h-64 transition-all duration-500" 
                                style={{ 
                                    backgroundImage: `linear-gradient(to bottom, ${config.accentColor}, ${config.accentColor}30, transparent)` 
                                }} 
                            />
                        </div>

                        <div className="flex-grow">
                            <h1 className="hero-title text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.2rem] font-black text-white leading-[1.1] tracking-tight">
                                Hi, I'm <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${config.btnColor} ${config.shadowColor} transition-all duration-700`}>
                                    Sunidhi Chaudhary
                                </span>
                            </h1>

                            {/* Animated Subtitle Rotator with Glitch Scramble */}
                            <div className="hero-desc-container mt-4 mb-5 min-h-[44px]">
                                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/80">
                                    I am a <DecryptedText text={currentPhrase} className="inline-block font-bold text-white font-mono" triggerHover={true} />
                                </p>
                            </div>

                            <p className="hero-desc-container text-sm sm:text-base md:text-lg text-white/60 max-w-lg leading-relaxed mb-6 transition-all duration-500">
                                {config.description}
                            </p>
                        </div>
                    </div>

                    {/* CTAs Section */}
                    <div className="hero-ctas flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pl-8 md:pl-10 w-full sm:w-auto">
                        <button 
                            onClick={() => handleScrollTo('projects')}
                            className="group relative px-8 py-4 bg-transparent rounded-full font-bold text-sm text-white tracking-widest uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/10 hover:border-white/30 cursor-pointer"
                        >
                            {/* Glowing Gradient Background */}
                            <span className={`absolute inset-0 bg-gradient-to-r ${config.btnColor} bg-[length:200%_auto] animate-gradient-shift opacity-85 group-hover:opacity-100 transition-all duration-750 z-0`}></span>
                            
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
                    <div className="hero-ctas mt-8 pl-8 md:pl-10 flex flex-col gap-3">
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

                {/* RIGHT COLUMN - INTERACTIVE QUANTUM CONSTELLATION */}
                <div className="w-full lg:w-[48%] flex items-center justify-center relative mt-8 lg:mt-0 hero-3d-showcase">
                    <QuantumOrbitCanvas mousePos={mousePos} />
                </div>

            </div>

            {/* Premium Dynamic Scroll Down Indicator */}
            <div 
                className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group" 
                onClick={() => handleScrollTo('about')}
            >
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 group-hover:text-white/80 transition-colors duration-300 font-bold">Scroll Down</span>
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-white/40 transition-colors duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    <div 
                        className="w-1.5 h-3 rounded-full animate-bounce shadow-md transition-colors duration-500" 
                        style={{ 
                            backgroundColor: config.accentColor,
                            boxShadow: `0 0 8px ${config.accentColor}`
                        }} 
                    />
                </div>
            </div>

        </section>
    );
};

export default Hero;
