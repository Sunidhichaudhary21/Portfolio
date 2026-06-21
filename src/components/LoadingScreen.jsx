import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIATING CORE PROTOCOLS');
  const screenRef = useRef(null);
  const progressContainerRef = useRef(null);

  const statuses = [
    { threshold: 0, text: 'PREPARING JOURNAL LAYOUT' },
    { threshold: 20, text: 'PARSING DESIGN GRID SYSTEMS' },
    { threshold: 45, text: 'INDEXING PROJECT CATALOG' },
    { threshold: 70, text: 'ESTABLISHING INTERFACE CONDUITS' },
    { threshold: 90, text: 'RENDER PIPELINE NOMINAL' }
  ];

  // Progress driver
  useEffect(() => {
    let currentProgress = 0;
    const duration = 2200; // 2.2 seconds loading duration
    const intervalTime = 25; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      const randomAcc = Math.random() * 3.5;
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
  useEffect(() => {
    if (progress === 100) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });

        tl.to(progressContainerRef.current, {
          opacity: 0,
          y: 20,
          filter: 'blur(5px)',
          duration: 0.5,
          ease: 'power3.inOut'
        })
        .to(screenRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // slide swipe exit
          duration: 0.8,
          ease: 'power4.inOut'
        }, '-=0.25');
      }, screenRef);

      return () => ctx.revert();
    }
  }, [progress, onComplete]);

  return (
    <div 
      ref={screenRef} 
      className="fixed inset-0 z-[9999] bg-[#FFFDF9] select-none overflow-hidden flex flex-col items-center justify-center"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div ref={progressContainerRef} className="flex flex-col items-center max-w-sm px-6 w-full text-center">
        
        {/* Monogram Monolith Container */}
        <div className="relative mb-10 w-44 h-44 flex items-center justify-center select-none">
          {/* Outline Base Layer */}
          <div 
            className="absolute font-display font-extrabold text-[120px] leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '1px #E5E2DA', userSelect: 'none' }}
          >
            SC
          </div>
          
          {/* Liquid Fill Top Layer (Clips based on progress) */}
          <div 
            className="absolute font-display font-extrabold text-[120px] leading-none tracking-tighter text-neutral-900 transition-all duration-100 ease-out"
            style={{ 
              clipPath: `polygon(0% ${100 - progress}%, 100% ${100 - progress}%, 100% 100%, 0% 100%)`,
              userSelect: 'none'
            }}
          >
            SC
          </div>
        </div>

        {/* Minimalist Progress Meter */}
        <div className="w-48 flex flex-col items-center gap-4">
          {/* Percentage */}
          <div className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em] uppercase">
            [ {String(progress).padStart(3, '0')} / 100 ]
          </div>
          
          {/* Thin Progress bar */}
          <div className="w-full h-[1px] bg-neutral-200/60 rounded-full relative overflow-hidden">
            <div 
              className="h-full bg-neutral-800 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status checklist */}
          <div className="w-full flex items-center justify-center text-[8px] font-mono tracking-[0.25em] text-neutral-400/90 uppercase mt-1">
            <span className="truncate">
              {statusText}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;
