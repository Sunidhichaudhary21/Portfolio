import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING PROTOCOLS...');
  const screenRef = useRef(null);
  const logoRef = useRef(null);
  const progressContainerRef = useRef(null);
  const accentsRef = useRef(null);

  // High-end loading status sequences
  const statuses = [
    { threshold: 0, text: 'INITIATING SYSTEM SECURE HANDSHAKE...' },
    { threshold: 18, text: 'PARSING CREATIVE UI ASSETS...' },
    { threshold: 38, text: 'COMPILING GLOWING ORB GRADIENTS...' },
    { threshold: 58, text: 'SYNAPSE CREATIVE PORTFOLIO ENGINE ONLINE...' },
    { threshold: 78, text: 'ESTABLISHING INTERACTIVE HUD ELEMENTS...' },
    { threshold: 92, text: 'SYSTEM OPERATIONAL // WELCOME' }
  ];

  useEffect(() => {
    let currentProgress = 0;
    const duration = 2200; // 2.2 seconds total loading duration
    const intervalTime = 30; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      // Add subtle organic acceleration/deceleration
      const randomAcc = Math.random() * 2.8;
      currentProgress += increment + randomAcc;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
      }
      
      const rounded = Math.floor(currentProgress);
      setProgress(rounded);

      // Update status text based on current progress
      const matchingStatus = [...statuses]
        .reverse()
        .find(s => rounded >= s.threshold);
      if (matchingStatus) {
        setStatusText(matchingStatus.text);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Exit choreography using GSAP when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });

        tl.to(logoRef.current, {
          scale: 0.92,
          opacity: 0,
          filter: 'blur(15px)',
          duration: 0.5,
          ease: 'power3.inOut'
        })
        .to(progressContainerRef.current, {
          opacity: 0,
          y: -15,
          filter: 'blur(5px)',
          duration: 0.4,
          ease: 'power3.inOut'
        }, '-=0.4')
        .to(accentsRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut'
        }, '-=0.4')
        .to(screenRef.current, {
          yPercent: -100,
          duration: 0.95,
          ease: 'power4.inOut'
        }, '-=0.25');
      }, screenRef);

      return () => ctx.revert();
    }
  }, [progress, onComplete]);

  // Entrance and infinite logo animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate SVG path draw
      gsap.fromTo('.logo-svg-path', 
        { strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out' }
      );
      // Continuous pulse glow
      gsap.fromTo('.logo-glow',
        { opacity: 0.15, scale: 0.9 },
        { opacity: 0.35, scale: 1.15, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );
    }, screenRef);
    return () => ctx.revert();
  }, []);

  // Format progress with leading zeros
  const formatProgress = (num) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };

  return (
    <div ref={screenRef} className="loading-screen-wrapper">
      {/* Dark luxury atmospheric background */}
      <div className="absolute inset-0 bg-[#030014] z-0 overflow-hidden">
        {/* Fine grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-60" />

        {/* Soft floating glow meshes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#915eff]/10 via-[#d45eff]/5 to-[#00f6ff]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-[8s]" />
      </div>

      {/* Cyber/HUD design elements */}
      <div ref={accentsRef} className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-white/10 rounded-tl-sm" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-white/10 rounded-tr-sm" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-white/10 rounded-bl-sm" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-white/10 rounded-br-sm" />
        
        <div className="absolute top-12 left-12 text-[8px] font-mono text-white/20 tracking-widest uppercase">
          SECURE_CONN_ESTABLISHED
        </div>
        <div className="absolute bottom-12 right-12 text-[8px] font-mono text-white/20 tracking-widest uppercase">
          SYS.LOADER // REV_2026
        </div>
      </div>

      {/* Centerpiece Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Animated Custom Logo Emblem */}
        <div ref={logoRef} className="relative w-36 h-36 md:w-40 md:h-40 mb-12 flex items-center justify-center">
          {/* Logo glow */}
          <div className="logo-glow absolute inset-[-15px] rounded-full bg-gradient-to-tr from-[#915eff] to-[#00f6ff] opacity-20 blur-2xl pointer-events-none" />
          
          <svg className="w-full h-full drop-shadow-[0_0_20px_rgba(145,94,255,0.35)]" viewBox="0 0 100 100" fill="none">
            {/* Geometric loading circle track */}
            <circle cx="50" cy="50" r="42" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1.5" />
            <circle 
              cx="50" 
              cy="50" 
              r="42" 
              stroke="url(#emblemGrad)" 
              strokeWidth="1.5" 
              strokeDasharray="264" 
              strokeDashoffset="140" 
              className="opacity-50 animate-[spin-slow_15s_linear_infinite]" 
            />
            
            {/* Tech grid crosshairs */}
            <path d="M 50,4 L 50,10" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M 50,90 L 50,96" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M 4,50 L 10,50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <path d="M 90,50 L 96,50" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            
            {/* Stylized custom monogram "S" representing Sunidhi */}
            <path 
              className="logo-svg-path"
              d="M 58,36 C 58,26 42,26 42,36 C 42,46 58,48 58,58 C 58,68 42,68 42,58" 
              stroke="url(#emblemGrad)" 
              strokeWidth="5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              strokeDasharray="300"
              strokeDashoffset="0"
            />
            
            <defs>
              <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#915eff" />
                <stop offset="50%" stopColor="#d45eff" />
                <stop offset="100%" stopColor="#00f6ff" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Loading Progress Interface */}
        <div ref={progressContainerRef} className="w-64 md:w-72 flex flex-col items-center gap-5">
          
          {/* Progress Percentage Display */}
          <div className="flex items-baseline justify-center font-mono">
            <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter">
              {formatProgress(progress)}
            </span>
            <span className="text-xs font-bold text-[#00f6ff] ml-1 opacity-80">%</span>
          </div>

          {/* Micro Progress Bar */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.01)]">
            <div 
              className="h-full bg-gradient-to-r from-[#915eff] via-[#d45eff] to-[#00f6ff] transition-all duration-70ms ease-out shadow-[0_0_10px_rgba(0,246,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Running Terminal Status */}
          <div className="w-full flex items-center justify-between text-[8px] font-mono tracking-[0.15em] text-white/40 uppercase">
            <span className="text-left text-[#00f6ff]/80 truncate max-w-[80%] transition-all duration-300">
              {statusText}
            </span>
            <span className="text-right whitespace-nowrap animate-pulse font-bold text-white/50">
              ACTIVE
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
