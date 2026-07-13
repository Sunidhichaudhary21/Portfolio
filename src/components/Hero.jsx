import React from 'react';
import userPhoto from '../assets/developer_photo.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center pt-24 md:pt-28 pb-12 overflow-hidden bg-[#FDF8F3] relative"
    >
      {/* Decorative Wavy Blobs (Theme-matching organic shapes) */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-[#EE9372]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-[#0B3331]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[15%] w-48 h-48 bg-[#FBC879]/10 rounded-full blur-2xl pointer-events-none z-0"></div>

      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Big Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left relative z-10" data-aos="fade-right">
            <span className="text-sm sm:text-base font-sans font-black tracking-[0.25em] text-[#0B3331]/60 uppercase mb-4">
              Hello, I'm
            </span>
            
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-black text-[#0B3331] leading-[0.95] tracking-tight mb-4">
              Sunidhi <br />
              Chaudhary
            </h1>
            
            <h2 className="font-handwritten text-4xl sm:text-5xl text-[#EE9372] tracking-wide mb-6">
              Full-Stack Web Developer & Problem Solver
            </h2>
            
            <p className="text-[#0B3331]/75 font-sans text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
              I craft playful, premium, and purposeful digital experiences. I solve complex algorithms and build clean, scalable web applications that feel effortless and run optimally.
            </p>
            
            {/* CTA Pill Buttons */}
            <div className="flex flex-wrap gap-3.5 items-center">
              <button
                onClick={scrollToProjects}
                className="group px-9 py-4 bg-[#0B3331] text-[#FDF8F3] hover:bg-[#072220] rounded-full font-sans font-bold text-base tracking-wider uppercase flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-102 cursor-pointer"
              >
                View Work 
                <span className="text-lg transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </button>
              
              <button
                onClick={scrollToContact}
                className="group px-9 py-4 bg-[#EE9372] text-[#0B3331] hover:bg-[#ED855F] hover:text-[#FDF8F3] rounded-full font-sans font-bold text-base tracking-wider uppercase flex items-center gap-2 shadow-md transition-all duration-300 hover:scale-102 cursor-pointer"
              >
                About Me
                <span className="text-lg transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Stylized Arch Frame & Overlays */}
          <div className="lg:col-span-5 flex justify-center relative w-full pt-8 lg:pt-0" data-aos="fade-left" data-aos-delay="150">
            
            {/* Rotating Circle Badge */}
            <div className="absolute top-[-5%] right-[5%] sm:right-[10%] w-28 h-28 z-30 animate-spin-slow pointer-events-none select-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="badgePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="font-sans font-extrabold text-[9.2px] fill-[#0B3331] uppercase tracking-[1.8px]">
                  <textPath href="#badgePath">
                    • AVAILABLE FOR PROJECTS • OPEN TO WORK
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                👩‍💻
              </div>
            </div>

            {/* Main Yellow Arch Container */}
            <div className="relative w-72 sm:w-80 aspect-[4/5] bg-[#FBC879] arch-frame border-[6px] border-[#0B3331] shadow-2xl flex items-end justify-center">
              {/* Secondary offset backing shape */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#EE9372]/30 to-transparent mix-blend-overlay z-0"></div>
              
              {/* Profile Image (greyscale blend or full color) */}
              <img
                src={userPhoto}
                alt="Sunidhi Chaudhary Portrait"
                className="w-full h-full object-cover object-center z-10 transition-all duration-700 hover:scale-103 grayscale hover:grayscale-0"
              />
            </div>

            {/* Gold Sparkle Decorative Stars */}
            <div className="absolute top-[25%] left-[-4%] text-[#FBC879] text-3xl animate-pulse-slow">✦</div>
            <div className="absolute bottom-[8%] right-[-2%] text-[#EE9372] text-2xl animate-float">✦</div>

            {/* Green Handwritten Sticker Bubble Overlay */}
            <div className="absolute left-[-8%] sm:left-[-15%] bottom-[12%] bg-[#0B3331] text-[#FDF8F3] p-5 rounded-[2rem] rounded-br-none shadow-xl max-w-[210px] z-30 animate-float border border-[#FDF8F3]/10">
              <p className="font-handwritten text-xl text-[#FBC879] leading-snug">
                Turning ideas into delightful applications ♡
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
