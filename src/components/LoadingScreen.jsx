import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

// S-curve coordinates vector path nodes for monogram particle convergence
const monogramKeyNodes = [
  {x: 26, y: -46}, {x: 20, y: -54}, {x: 0, y: -58}, {x: -20, y: -54}, {x: -26, y: -46},
  {x: -26, y: -30}, {x: -16, y: -18}, {x: 0, y: -6}, {x: 16, y: 6}, {x: 26, y: 18},
  {x: 26, y: 32}, {x: 20, y: 54}, {x: 0, y: 58}, {x: -20, y: 54}, {x: -26, y: 46}
];

const getSPoint = (t) => {
  const segments = monogramKeyNodes.length - 1;
  const index = Math.floor(t * segments);
  const localT = (t * segments) % 1;
  
  const p1 = monogramKeyNodes[Math.min(index, monogramKeyNodes.length - 1)];
  const p2 = monogramKeyNodes[Math.min(index + 1, monogramKeyNodes.length - 1)];
  
  return {
    x: p1.x + (p2.x - p1.x) * localT,
    y: p1.y + (p2.y - p1.y) * localT
  };
};

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIATING PROTOCOLS...');
  const [simMetrics, setSimMetrics] = useState({
    mem: '0x0000',
    depth: 0,
    packets: 0,
    speed: '0 KB/S'
  });

  const screenRef = useRef(null);
  const canvasRef = useRef(null);
  const progressContainerRef = useRef(null);
  const telemetryLeftRef = useRef(null);
  const telemetryRightRef = useRef(null);
  const accentsRef = useRef(null);

  const statuses = [
    { threshold: 0, text: 'INITIATING SYSTEM SECURE HANDSHAKE...' },
    { threshold: 12, text: 'PARSING CREATIVE STACK FRAMEWORKS...' },
    { threshold: 30, text: 'COMPILING RADAR POLAR GRAPH MESHES...' },
    { threshold: 52, text: 'SYNAPSE QUANTUM CONSTELLATION ONLINE...' },
    { threshold: 72, text: 'COALESCING GLOWING EMBL-MONOGRAM...' },
    { threshold: 88, text: 'RESOLVING CORE REBOOT COMPLETED...' },
    { threshold: 96, text: 'OPERATIONAL // INITIALIZING INTERFACE' }
  ];

  // Simulating connection statistics
  useEffect(() => {
    const interval = setInterval(() => {
      setSimMetrics({
        mem: `0x${Math.floor(Math.random() * 65535).toString(16).toUpperCase()}`,
        depth: Math.floor(Math.random() * 400) + 600,
        packets: Math.floor(Math.random() * 120) + 40,
        speed: `${(Math.random() * 500 + 700).toFixed(1)} KB/S`
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  // Loading progress driver
  useEffect(() => {
    let currentProgress = 0;
    const duration = 2400; // 2.4 seconds loading duration
    const intervalTime = 30; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      const randomAcc = Math.random() * 2.8;
      currentProgress += increment + randomAcc;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
      }
      
      const rounded = Math.floor(currentProgress);
      setProgress(rounded);

      const matchingStatus = [...statuses]
        .reverse()
        .find(s => rounded >= s.threshold);
      if (matchingStatus) {
        setStatusText(matchingStatus.text);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Exit Animation Sequence
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsExiting(true);
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });

        tl.to([telemetryLeftRef.current, telemetryRightRef.current], {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(10px)',
          duration: 0.4,
          ease: 'power3.inOut'
        })
        .to(progressContainerRef.current, {
          opacity: 0,
          y: -15,
          filter: 'blur(5px)',
          duration: 0.45,
          ease: 'power3.inOut'
        }, '-=0.35')
        .to(accentsRef.current, {
          opacity: 0,
          duration: 0.35,
          ease: 'power2.inOut'
        }, '-=0.45')
        .to(screenRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // split-wipe vertical slide
          duration: 0.9,
          ease: 'power4.inOut'
        }, '-=0.25');
      }, screenRef);

      return () => ctx.revert();
    }
  }, [progress, onComplete]);

  // Canvas convergence physics simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize 80 particles in random floating coordinate spaces
    const totalParticles = 80;
    const monogramCount = 45;
    const particles = [];

    for (let i = 0; i < totalParticles; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        baseX: Math.random() * window.innerWidth,
        baseY: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2 + 1,
        angle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 30 + 10,
        color: Math.random() > 0.55 ? '#915eff' : '#00f6ff'
      });
    }

    let sweepAngle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      sweepAngle += 0.015;

      // Draw subtle background coordinate ticks
      const gridSize = 64;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          if (x % (gridSize * 2) === 0 && y % (gridSize * 2) === 0) {
            ctx.beginPath();
            ctx.moveTo(x - 2, y); ctx.lineTo(x + 2, y);
            ctx.moveTo(x, y - 2); ctx.lineTo(x, y + 2);
            ctx.stroke();
          }
        }
      }

      // Draw outer target alignment guides
      ctx.strokeStyle = 'rgba(255,255,255,0.015)';
      ctx.lineWidth = 0.7;
      [140, 200, 300].forEach(r => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Update and draw particles
      particles.forEach((p, i) => {
        if (isExiting) {
          // Explode outwards away from center
          const dx = p.x - cx;
          const dy = p.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          p.x += (dx / dist) * 18;
          p.y += (dy / dist) * 18;
          p.size = Math.max(0, p.size - 0.05);
        } else if (i < monogramCount) {
          // Monogram builder particle convergence
          const t = i / monogramCount;
          const target = getSPoint(t);
          
          // Target coordinate on screen
          const tx = cx + target.x;
          const ty = cy + target.y;

          // Interpolation factor proportional to progress (lerps from floating base position to target logo position)
          const factor = Math.min(1, progress / 100);
          
          // Apply drifting float noise before convergence complete
          const floatX = p.baseX + Math.cos(p.angle) * p.orbitRadius;
          const floatY = p.baseY + Math.sin(p.angle) * p.orbitRadius;
          p.angle += 0.02;

          // Lerp position
          const finalTargetX = floatX + (tx - floatX) * factor;
          const finalTargetY = floatY + (ty - floatY) * factor;

          p.x += (finalTargetX - p.x) * 0.1;
          p.y += (finalTargetY - p.y) * 0.1;
        } else {
          // Ambient cosmic background dust floating organically
          p.baseX += p.vx;
          p.baseY += p.vy;

          // Boundary checks
          if (p.baseX < 0 || p.baseX > canvas.width) p.vx *= -1;
          if (p.baseY < 0 || p.baseY > canvas.height) p.vy *= -1;

          p.x = p.baseX;
          p.y = p.baseY;
        }

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.shadowBlur = progress > 50 ? 5 : 0;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw vector connector links outlining the S monogram as it resolves
      if (!isExiting && progress > 35) {
        ctx.beginPath();
        const drawFactor = (progress - 35) / 65; // goes from 0 to 1
        
        ctx.strokeStyle = `rgba(145, 94, 255, ${drawFactor * 0.4})`;
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00f6ff';

        for (let i = 0; i < monogramCount - 1; i++) {
          ctx.lineTo(particles[i].x, particles[i].y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw radar sweeper arm
      if (!isExiting) {
        const sweepRadius = Math.min(canvas.width, canvas.height) * 0.32;
        const sx = cx + Math.cos(sweepAngle) * sweepRadius;
        const sy = cy + Math.sin(sweepAngle) * sweepRadius;

        const sweepGrad = ctx.createLinearGradient(cx, cy, sx, sy);
        sweepGrad.addColorStop(0, 'rgba(145, 94, 255, 0.1)');
        sweepGrad.addColorStop(1, 'rgba(0, 246, 255, 0)');
        
        ctx.strokeStyle = sweepGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [progress, isExiting]);

  const formatProgress = (num) => {
    return num < 10 ? `00${num}` : num < 100 ? `0${num}` : num;
  };

  return (
    <div 
      ref={screenRef} 
      className="fixed inset-0 z-[9999] bg-[#030014] select-none overflow-hidden flex flex-col items-center justify-center"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {/* Interactive Vector Space Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tr from-[#915eff]/10 via-[#d45eff]/5 to-[#00f6ff]/10 rounded-full blur-[130px] pointer-events-none mix-blend-screen opacity-70" />

      {/* Cyber Brackets HUD overlays */}
      <div ref={accentsRef} className="absolute inset-0 pointer-events-none z-10 p-6 md:p-10">
        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/10" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t border-r border-white/10" />
        <div className="absolute bottom-8 left-8 w-6 h-6 border-b border-l border-white/10" />
        <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-white/10" />
        
        {/* Alignment Grid Marks */}
        <div className="absolute left-10 right-10 top-8 h-[1px] bg-white/[0.02]" />
        <div className="absolute left-10 right-10 bottom-8 h-[1px] bg-white/[0.02]" />
        <div className="absolute left-8 top-10 bottom-10 w-[1px] bg-white/[0.02]" />
        <div className="absolute right-8 top-10 bottom-10 w-[1px] bg-white/[0.02]" />

        <div className="absolute top-11 left-12 text-[7px] font-mono text-white/30 tracking-[0.25em] uppercase">
          SECURE_CONN_ESTABLISHED // NEURAL_HANDSHAKE
        </div>
        <div className="absolute bottom-11 right-12 text-[7px] font-mono text-white/30 tracking-[0.25em] uppercase text-right">
          SYS.LOADER // CONSTELLATION_V_3.9
        </div>
      </div>

      {/* Core Center Elements */}
      <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center">
        
        <div className="w-full flex items-center justify-between gap-4 max-w-2xl md:max-w-3xl mb-20">
          
          {/* Left Diagnostic Column */}
          <div ref={telemetryLeftRef} className="hidden md:flex flex-col gap-2.5 font-mono text-[8px] text-white/20 tracking-wider text-left max-w-[140px]">
            <div>SYS_ADDR: 0x{simMetrics.mem}</div>
            <div>STK_DEEP: {simMetrics.depth} UNIT</div>
            <div>PCK_RATE: {simMetrics.packets} RX/S</div>
            <div className="w-12 h-[1px] bg-white/10 mt-1" />
            <div className="text-[#00f6ff]/40">VCORE: 1.21V</div>
          </div>

          {/* Spacer representing central particle monogram node width */}
          <div className="w-40 h-40 flex items-center justify-center mx-auto relative">
            <div className="absolute w-20 h-20 rounded-full border border-dashed border-[#915eff]/10 animate-spin-slow" />
            <div className="absolute w-28 h-28 rounded-full border border-white/[0.02]" />
          </div>

          {/* Right Diagnostic Column */}
          <div ref={telemetryRightRef} className="hidden md:flex flex-col gap-2.5 font-mono text-[8px] text-white/20 tracking-wider text-right max-w-[140px]">
            <div>NET_SPEED: {simMetrics.speed}</div>
            <div>LOCAL_IP: 127.0.0.1</div>
            <div>LOGS: COMPILED</div>
            <div className="w-12 h-[1px] bg-white/10 ml-auto mt-1" />
            <div className="text-[#915eff]/40">CPU_TEMP: 39.4 C</div>
          </div>

        </div>

        {/* Loading Progress Slider bar */}
        <div ref={progressContainerRef} className="w-64 md:w-80 flex flex-col items-center gap-4">
          
          {/* Numeric loader display */}
          <div className="flex items-baseline justify-center font-mono">
            <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter">
              {formatProgress(progress)}
            </span>
            <span className="text-xs font-bold text-[#00f6ff] ml-1 opacity-80">%</span>
          </div>

          {/* Progress bar line */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.01)]">
            <div 
              className="h-full bg-gradient-to-r from-[#915eff] via-[#d45eff] to-[#00f6ff] transition-all duration-70ms ease-out shadow-[0_0_12px_rgba(0,246,255,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom checklist label */}
          <div className="w-full flex items-center justify-between text-[7px] font-mono tracking-[0.2em] text-white/40 uppercase">
            <span className="text-left text-[#00f6ff]/95 truncate max-w-[80%] transition-all duration-300">
              {statusText}
            </span>
            <span className="text-right whitespace-nowrap animate-pulse font-bold text-emerald-400">
              SYS_OK
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
