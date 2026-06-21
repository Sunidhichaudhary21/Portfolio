import React from 'react';
import devIllustration from '../assets/developer_illustration.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center pt-16 md:pt-20 pb-8 overflow-hidden bg-[#FFFDF9] relative"
    >
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10 flex flex-col items-center">

        {/* Editorial Title Canvas container */}
        <div className="w-full relative aspect-[16/11.5] sm:aspect-[16/10.5] md:aspect-[16/8.2] lg:aspect-[16/7.2] max-w-6xl mx-auto select-none mt-4 overflow-visible">

          {/* Individual positioned letters for "PORTFOLIO" */}

          {/* 'P' */}
          <span className="hero-portfolio-letter absolute top-[10%] left-[8%] -rotate-[12deg] z-0">
            P
          </span>

          {/* 'O' */}
          <span className="hero-portfolio-letter absolute top-[22%] left-[16%] rotate-[8deg] z-10">
            O
          </span>

          {/* 'R' */}
          <span className="hero-portfolio-letter absolute top-[8%] left-[26%] -rotate-[8deg] z-0">
            R
          </span>

          {/* 'T' */}
          <span className="hero-portfolio-letter absolute top-[0%] left-[37%] rotate-[2deg] z-0">
            T
          </span>

          {/* 'f' */}
          <span className="hero-portfolio-letter absolute top-[2%] left-[51%] -rotate-[10deg] z-0 lowercase">
            f
          </span>

          {/* 'O' */}
          <span className="hero-portfolio-letter absolute top-[13%] left-[59%] rotate-[12deg] z-10">
            O
          </span>

          {/* 'L' */}
          <span className="hero-portfolio-letter absolute top-[23%] left-[69%] -rotate-[4deg] z-0">
            L
          </span>

          {/* 'i' */}
          <span className="hero-portfolio-letter absolute top-[17%] left-[77%] rotate-[1deg] z-0 lowercase">
            i
          </span>

          {/* 'O' */}
          <span className="hero-portfolio-letter absolute top-[25%] left-[84%] rotate-[8deg] z-10">
            O
          </span>

          {/* Developer Illustration overlay in front (z-20) */}
          <div className="absolute w-[38%] sm:w-[34%] md:w-[32%] bottom-[-15%] left-[50%] -translate-x-[50%] z-20 flex justify-center">
            <img
              src={devIllustration}
              alt="Developer Portrait"
              className="w-full h-auto max-h-[90%] object-contain"
            />
          </div>

          {/* Name Caption underneath 'PO' */}
          <div className="absolute top-[47%] left-[10%] sm:left-[11%] z-30 flex flex-col">
            <span className="font-sans font-black text-[#B39274] text-[1.8vw] sm:text-xs md:text-sm tracking-[0.25em] uppercase leading-none">
              SUNIDHI CHAUDHARY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
