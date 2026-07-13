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
    { threshold: 90, text: 'RENDER NOMINAL // LOADING THEME' }
  ];

  // Progress driver
  useEffect(() => {
    let currentProgress = 0;
    const duration = 1800; // 1.8 seconds loading duration
    const intervalTime = 25; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      const randomAcc = Math.random() * 4.5;
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
          duration: 0.4,
          ease: 'power3.inOut'
        })
        .to(screenRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', // slide swipe exit
          duration: 0.7,
          ease: 'power4.inOut'
        }, '-=0.2');
      }, screenRef);

      return () => ctx.revert();
    }
  }, [progress, onComplete]);

  return (
    <div 
      ref={screenRef} 
      className="fixed inset-0 z-[9999] bg-[#FDF8F3] select-none overflow-hidden flex flex-col items-center justify-center"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <div ref={progressContainerRef} className="flex flex-col items-center max-w-sm px-6 w-full text-center">
        
        {/* Monogram Monolith Container */}
        <div className="relative mb-10 w-44 h-44 flex items-center justify-center select-none">
          {/* Outline Base Layer */}
          <div 
            className="absolute font-sans font-black text-[120px] leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: '1px rgba(11, 51, 49, 0.1)', userSelect: 'none' }}
          >
            SC
          </div>
          
          {/* Liquid Fill Top Layer (Clips based on progress) */}
          <div 
            className="absolute font-sans font-black text-[120px] leading-none tracking-tighter text-[#0B3331] transition-all duration-100 ease-out"
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
          <div className="font-sans font-black text-xs text-[#0B3331]/50 tracking-[0.2em] uppercase">
            [ {String(progress).padStart(3, '0')} / 100 ]
          </div>
          
          {/* Thin Progress bar */}
          <div className="w-full h-[1.5px] bg-[#0B3331]/10 rounded-full relative overflow-hidden">
            <div 
              className="h-full bg-[#0B3331] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status checklist */}
          <div className="w-full flex items-center justify-center text-[8px] font-sans font-bold tracking-[0.25em] text-[#0B3331]/60 uppercase mt-1">
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
