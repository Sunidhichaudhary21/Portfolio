import React, { useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiGithub, FiLinkedin, FiMail, FiTwitter, FiCode, FiLayers, FiCpu, FiActivity, FiTerminal } from 'react-icons/fi';
import gsap from 'gsap';
import heroImg from '../assets/hero_3d_transparent.png';

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

// Interactive Node Constellation Canvas Background
const ParticleCanvas = ({ mode }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set dimensions
        const handleResize = () => {
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        // Particle configuration based on mode
        let particleColor = 'rgba(145, 94, 255, 0.4)'; // Default Purple
        let lineColor = 'rgba(145, 94, 255, 0.12)';
        if (mode === 'creative') {
            particleColor = 'rgba(0, 246, 255, 0.4)';
            lineColor = 'rgba(0, 246, 255, 0.12)';
        } else if (mode === 'architect') {
            particleColor = 'rgba(255, 183, 0, 0.4)';
            lineColor = 'rgba(255, 183, 0, 0.12)';
        }

        const particles = [];
        const particleCount = 45;
        const maxDist = 120;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                radius: Math.random() * 2 + 1
            });
        }

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

        window.addEventListener('mousemove', handleMouseMove);
        canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update particles
            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();

                // Draw lines between particles
                for (let j = idx + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 0.5 * (1 - dist / maxDist);
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = lineColor.replace('0.12', '0.25');
                        ctx.lineWidth = 0.8 * (1 - dist / 150);
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (canvas.parentElement) {
                canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
            }
            cancelAnimationFrame(animationFrameId);
        };
    }, [mode]);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

// Real-time scrolling compilation/system logs feed
const TerminalFeed = ({ mode }) => {
    const [logs, setLogs] = useState([]);
    const logPool = {
        engineer: [
            "SYS.INIT > Deploying reactive component tree...",
            "COMPILER > Hot reload active. 14 chunks compiled successfully.",
            "PERF > Initializing GSAP timelines and transition nodes.",
            "DB.CONN > Connected to client-state caching layer.",
            "SYS.STATUS > Redesign modules loaded. Latency: 4ms.",
            "VITE > Server listening on local port 5174.",
            "MEM > V8 Heap memory allocated: 42.8 MB.",
            "SYS.CORE > GPU acceleration verified for page transition paths."
        ],
        creative: [
            "AESTHETIC > Rendering interactive canvas layouts...",
            "DESIGN > Typography stylesheet integrated: Google Outfit/Outfit.",
            "UI.GRID > Computed layout grids & flexible structures.",
            "FX > Loading custom matrix decryption and hover effects.",
            "ASSET > Desktop showcase asset cached & prepared.",
            "GSAP > Context generated successfully. Elements bound.",
            "COLORS > Cyan, Emerald, and Amber color palettes loaded."
        ],
        architect: [
            "SCHEMA > Syncing PostgreSQL relational datastores...",
            "API > Express.js server endpoints mounted. Ready.",
            "AUTH > Clerk authentication token validated & active.",
            "SYS.SECURE > SSL handshake verified (SHA256).",
            "ENV > Production config mapped to local node cluster.",
            "DB.QUERY > LeetCode score trackers connected.",
            "ENDPOINT > Caching server middleware optimized."
        ]
    };

    useEffect(() => {
        // Set initial logs
        setLogs(logPool[mode].slice(0, 3));

        const interval = setInterval(() => {
            setLogs(prev => {
                const pool = logPool[mode];
                const nextLog = pool[Math.floor(Math.random() * pool.length)];
                // Keep the list to max 3 logs for visual spacing
                const nextList = [...prev.slice(1), nextLog];
                return nextList;
            });
        }, 2200);

        return () => clearInterval(interval);
    }, [mode]);

    return (
        <div className="font-mono text-[9px] sm:text-[10px] text-white/50 space-y-1 select-none">
            {logs.map((log, i) => {
                let colorClass = "text-white/45";
                if (log.includes("successfully") || log.includes("active") || log.includes("verified") || log.includes("Ready")) {
                    colorClass = "text-emerald-400";
                } else if (log.startsWith("SYS.INIT") || log.startsWith("COMPILER") || log.startsWith("SCHEMA") || log.startsWith("AESTHETIC")) {
                    colorClass = mode === 'engineer' ? 'text-[#915eff]' : mode === 'creative' ? 'text-[#00f6ff]' : 'text-[#ffb700]';
                }
                return (
                    <div key={i} className={`flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap ${colorClass}`}>
                        <span className="opacity-40">&gt;&gt;</span>
                        <span>{log}</span>
                    </div>
                );
            })}
        </div>
    );
};

// Technical HUD crosshair accents
const TechAccents = ({ mode, mousePos, uptime }) => {
    let accentBorder = 'border-white/20';
    if (mode === 'engineer') {
        accentBorder = 'border-[#915eff]/30';
    } else if (mode === 'creative') {
        accentBorder = 'border-[#00f6ff]/30';
    } else if (mode === 'architect') {
        accentBorder = 'border-[#ffb700]/30';
    }

    return (
        <div className="absolute inset-0 pointer-events-none select-none z-10">
            {/* Corner Brackets */}
            <div className={`absolute top-12 left-12 w-8 h-8 border-t-2 border-l-2 ${accentBorder} rounded-tl-sm transition-colors duration-500`}></div>
            <div className={`absolute top-12 right-12 w-8 h-8 border-t-2 border-r-2 ${accentBorder} rounded-tr-sm transition-colors duration-500`}></div>
            <div className={`absolute bottom-12 left-12 w-8 h-8 border-b-2 border-l-2 ${accentBorder} rounded-bl-sm transition-colors duration-500`}></div>
            <div className={`absolute bottom-12 right-12 w-8 h-8 border-b-2 border-r-2 ${accentBorder} rounded-br-sm transition-colors duration-500`}></div>

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
    const [activeMode, setActiveMode] = useState('engineer'); // engineer | creative | architect
    
    // Telemetry simulator states
    const [uptime, setUptime] = useState("00:00.00");
    const [coreLoad, setCoreLoad] = useState(24.2);
    const [latency, setLatency] = useState(12);

    // Phrases categorized by active mode
    const modePhrases = {
        engineer: [
            "Full-Stack Web Architect",
            "Front-End Developer",
            "Performance Expert",
            "Clean Code Enthusiast"
        ],
        creative: [
            "Creative UI/UX Designer",
            "Interactive Web Sculptor",
            "Motion Graphics Builder",
            "Aesthetic Layout Artist"
        ],
        architect: [
            "Database Schema Modeler",
            "RESTful API Designer",
            "Authentication Engineer",
            "Systems Integrator"
        ]
    };
    
    const [index, setIndex] = useState(0);

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

        const statTimer = setInterval(() => {
            setCoreLoad(prev => +(prev + (Math.random() * 4 - 2)).toFixed(1));
            setLatency(Math.floor(Math.random() * 8 + 6));
        }, 2000);

        return () => {
            clearInterval(timer);
            clearInterval(statTimer);
        };
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

    // Reset phrase index and rotate phrases for current activeMode
    useEffect(() => {
        setIndex(0);
    }, [activeMode]);

    useEffect(() => {
        const phrases = modePhrases[activeMode];
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3800);

        return () => clearInterval(interval);
    }, [activeMode]);

    // GSAP Intro Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(".hero-badge",
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 }
            )
            .fromTo(".hero-mode-deck",
                { scale: 0.9, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6 },
                "-=0.6"
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

    // Subsystem configurations
    const modeConfigs = {
        engineer: {
            glowClass: "bg-[#915eff]",
            accentColor: "#915eff",
            shadowColor: "drop-shadow-[0_2px_15px_rgba(145,94,255,0.4)]",
            btnColor: "from-[#915eff] via-[#d45eff] to-[#00f6ff]",
            description: "Designing and engineering next-generation, high-performance web applications. Bringing complex codebases to life with clean developer paths and optimized systems.",
            badgeGlow: "hover:border-[#00f6ff]/40 hover:shadow-[0_0_15px_rgba(0,246,255,0.25)]",
            badge2Glow: "hover:border-[#915eff]/40 hover:shadow-[0_0_15px_rgba(145,94,255,0.25)]",
            badge3Glow: "hover:border-emerald-500/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]",
            badges: [
                { title: "React & Frontend", subtitle: "Specialty", icon: FiLayers, color: "text-[#00f6ff] bg-[#00f6ff]/10 border-[#00f6ff]/20" },
                { title: "Node & Backend API", subtitle: "Architect", icon: FiCode, color: "text-[#915eff] bg-[#915eff]/10 border-[#915eff]/20" },
                { title: "V8 Performance", subtitle: "Optimizer", icon: FiCpu, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" }
            ]
        },
        creative: {
            glowClass: "bg-[#00f6ff]",
            accentColor: "#00f6ff",
            shadowColor: "drop-shadow-[0_2px_15px_rgba(0,246,255,0.4)]",
            btnColor: "from-[#00f6ff] via-[#10b981] to-[#00f6ff]",
            description: "Sculpting immersive user layouts with fluid transition systems and pixel-perfect design grids. Delivering highly aesthetic and interactive design paradigms.",
            badgeGlow: "hover:border-[#00f6ff]/40 hover:shadow-[0_0_15px_rgba(0,246,255,0.25)]",
            badge2Glow: "hover:border-rose-500/40 hover:shadow-[0_0_15px_rgba(244,63,94,0.25)]",
            badge3Glow: "hover:border-[#915eff]/40 hover:shadow-[0_0_15px_rgba(145,94,255,0.25)]",
            badges: [
                { title: "Figma UI/UX Design", subtitle: "Systems", icon: FiLayers, color: "text-[#00f6ff] bg-[#00f6ff]/10 border-[#00f6ff]/20" },
                { title: "GSAP & Animation", subtitle: "Transitions", icon: FiActivity, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
                { title: "Aesthetic Layouts", subtitle: "Philosophy", icon: FiCpu, color: "text-[#915eff] bg-[#915eff]/10 border-[#915eff]/20" }
            ]
        },
        architect: {
            glowClass: "bg-[#ffb700]",
            accentColor: "#ffb700",
            shadowColor: "drop-shadow-[0_2px_15px_rgba(255,183,0,0.4)]",
            btnColor: "from-[#ffb700] via-[#f97316] to-[#ffb700]",
            description: "Structuring stable databases, building secure authentication middleware, and designing durable systems for extreme concurrency and load.",
            badgeGlow: "hover:border-[#ffb700]/40 hover:shadow-[0_0_15px_rgba(255,183,0,0.25)]",
            badge2Glow: "hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]",
            badge3Glow: "hover:border-[#00f6ff]/40 hover:shadow-[0_0_15px_rgba(0,246,255,0.25)]",
            badges: [
                { title: "Postgres & MongoDB", subtitle: "Databases", icon: FiLayers, color: "text-[#ffb700] bg-[#ffb700]/10 border-[#ffb700]/20" },
                { title: "Secure Endpoints", subtitle: "Controller", icon: FiCode, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
                { title: "Clerk Auth Systems", subtitle: "Security", icon: FiCpu, color: "text-[#00f6ff] bg-[#00f6ff]/10 border-[#00f6ff]/20" }
            ]
        }
    };

    const config = modeConfigs[activeMode];
    const currentPhrase = modePhrases[activeMode]?.[index] || modePhrases[activeMode]?.[0] || "";

    return (
        <section 
            ref={heroRef} 
            id="home" 
            className="min-h-screen w-full flex items-center justify-center pt-24 md:pt-28 pb-16 overflow-hidden bg-[#050816] relative"
        >
            {/* Interactive Particle Constellation Canvas */}
            <ParticleCanvas mode={activeMode} />

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
                    backgroundColor: activeMode === 'engineer' ? '#00f6ff' : activeMode === 'creative' ? '#10b981' : '#f97316'
                }}
            />

            {/* Technical HUD Accents */}
            <TechAccents mode={activeMode} mousePos={mousePos} uptime={uptime} />

            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-8">
                
                {/* LEFT COLUMN - TEXT & CTAS */}
                <div 
                    className="w-full lg:w-[52%] flex flex-col items-start mt-4 lg:mt-0 transition-transform duration-700 ease-out"
                    style={{ transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)` }}
                >
                    {/* Active Status Badge */}
                    <div className="hero-badge flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-white/95 mb-5 shadow-md hover:border-[#00f6ff]/40 hover:bg-white/8 transition-all duration-300 group cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="tracking-wide">Available for Full-time Opportunities</span>
                    </div>

                    {/* Subsystem Mode Selection Deck */}
                    <div className="hero-mode-deck flex items-center gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-1 mb-6 backdrop-blur-md self-start">
                        <span className="text-[9px] uppercase tracking-widest text-white/30 pl-3 pr-1 font-mono select-none">CORE:</span>
                        {['engineer', 'creative', 'architect'].map((m) => (
                            <button
                                key={m}
                                onClick={() => setActiveMode(m)}
                                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                                    activeMode === m
                                        ? m === 'engineer'
                                            ? 'bg-[#915eff] text-white shadow-[0_0_15px_rgba(145,94,255,0.4)]'
                                            : m === 'creative'
                                            ? 'bg-[#00f6ff] text-black shadow-[0_0_15px_rgba(0,246,255,0.4)]'
                                            : 'bg-[#ffb700] text-black shadow-[0_0_15px_rgba(255,183,0,0.4)]'
                                        : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
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

                    {/* Interactive HUD telemetry panel */}
                    <div className="hero-ctas mt-8 pl-8 md:pl-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-lg bg-white/[0.01] border border-white/5 rounded-xl p-3.5 backdrop-blur-sm">
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-white/30 font-mono">SYS_STATUS</span>
                            <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5 select-none">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                                </span>
                                RUNNING
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-white/30 font-mono">SYS_LOAD</span>
                            <span className="text-xs font-mono font-bold text-white mt-0.5 select-none">{coreLoad}%</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-white/30 font-mono">LATENCY</span>
                            <span className="text-xs font-mono font-bold text-white mt-0.5 select-none">{latency}ms</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-wider text-white/30 font-mono">SYS_CLOCK</span>
                            <span className="text-xs font-mono font-bold text-white mt-0.5 select-none">{uptime}</span>
                        </div>
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

                {/* RIGHT COLUMN - HOLOGRAPHIC CHOPPER & SHOWCASE */}
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
                        <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-spin-reverse-slow pointer-events-none" 
                             style={{ borderColor: `${config.accentColor}15` }} />
                        <div className="absolute inset-16 border-2 border-white/5 rounded-full pointer-events-none"></div>

                        {/* Interactive HUD Glowing Angle Marks */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: `${config.accentColor}50` }}></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: `${config.accentColor}50` }}></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: `${config.accentColor}50` }}></div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: `${config.accentColor}50` }}></div>

                        {/* Glowing Background Radial */}
                        <div className={`absolute w-[60%] h-[60%] rounded-full blur-[80px] -z-10 animate-pulse transition-all duration-1000 ${config.glowClass}`} style={{ opacity: 0.15 }}></div>

                        {/* Futuristic Holographic Projection Chamber */}
                        <div className="relative w-[90%] h-[90%] rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-between shadow-inner group p-4">
                            
                            {/* Cyber scanning light bar */}
                            <div 
                                className="absolute inset-x-0 w-full h-[12%] animate-hologram-sweep pointer-events-none z-20 border-b transition-all duration-700" 
                                style={{ 
                                    borderColor: `${config.accentColor}40`,
                                    backgroundImage: `linear-gradient(to bottom, transparent, ${config.accentColor}18, transparent)`,
                                    boxShadow: `0 0 15px ${config.accentColor}50`
                                }}
                            />

                            {/* Dotted HUD Screen Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:8px_8px] z-10 pointer-events-none" />

                            {/* Screen setup image wrapper */}
                            <div className="relative flex-grow flex items-center justify-center w-full min-h-[220px]">
                                <img
                                    src={heroImg}
                                    alt="Sunidhi Computer Setup"
                                    className="w-[85%] h-auto max-h-[260px] object-contain relative z-10 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            
                            {/* Live HUD metadata tags & Terminal Feed */}
                            <div className="w-full bg-black/45 border border-white/5 rounded-xl p-3 z-20 backdrop-blur-md relative select-none">
                                <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/5">
                                    <span className="font-mono text-[8px] text-white/40 tracking-widest uppercase flex items-center gap-1">
                                        <FiTerminal className="animate-pulse" /> Live Telemetry Feed
                                    </span>
                                    <span className="font-mono text-[8px] text-white/30">VITE_DEV_SERVER</span>
                                </div>
                                <TerminalFeed mode={activeMode} />
                            </div>
                        </div>

                        {/* DYNAMIC ORBITING GLASS FLOATING CARDS */}
                        {config.badges.map((badge, idx) => {
                            const IconComponent = badge.icon;
                            // Badge positions based on index
                            const positionClass = idx === 0 
                                ? "-top-4 -left-6" 
                                : idx === 1 
                                ? "top-1/2 -right-8" 
                                : "-bottom-4 left-6";
                            const floatClass = idx === 0 ? "animate-float-1" : idx === 1 ? "animate-float-2" : "animate-float-3";
                            const speedFactor = idx === 0 ? 25 : idx === 1 ? -20 : 18;
                            const borderGlowClass = idx === 0 ? config.badgeGlow : idx === 1 ? config.badge2Glow : config.badge3Glow;
                            
                            return (
                                <div 
                                    key={idx}
                                    className={`absolute z-22 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/15 backdrop-blur-md shadow-2xl group/badge cursor-default transition-all duration-500 ${positionClass} ${floatClass} ${borderGlowClass}`}
                                    style={{ transform: `translate(${mousePos.x * speedFactor}px, ${mousePos.y * speedFactor}px)` }}
                                >
                                    <div className={`p-1.5 rounded-lg transition-transform duration-300 group-hover/badge:scale-110 ${badge.color}`}>
                                        <IconComponent size={18} />
                                    </div>
                                    <div className="flex flex-col text-left select-none">
                                        <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider leading-none">{badge.subtitle}</span>
                                        <span className="text-xs text-white font-bold tracking-wide mt-0.5">{badge.title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
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
