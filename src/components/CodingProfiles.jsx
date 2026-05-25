import React from 'react';
import { FiArrowUpRight, FiCode, FiActivity, FiCpu } from 'react-icons/fi';
import { SiCodechef, SiCodeforces, SiHackerrank, SiLeetcode } from 'react-icons/si';

const codingProfiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: 'sunidhichaudhary21',
    scoreLabel: 'Consistency Tracker',
    metric: '250+ Solved',
    subMetric: 'Active DSA Practice',
    url: 'https://leetcode.com/u/sunidhichaudhary11/',
    icon: SiLeetcode,
    accent: 'from-[#f89f1b] to-[#f8c15f]',
    hoverColor: 'hover:border-[#f89f1b]/40',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(248,159,27,0.12)]',
    badgeText: 'CONSISTENCY: HIGH'
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    handle: 'sunidhi-chaudhary',
    scoreLabel: 'Problem Solving Focus',
    metric: 'Problem Solver',
    subMetric: 'Java certified basic',
    url: 'https://www.hackerrank.com/profile/csunidhi22',
    icon: SiHackerrank,
    accent: 'from-[#1ba94c] to-[#39d98a]',
    hoverColor: 'hover:border-[#1ba94c]/40',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(27,169,76,0.12)]',
    badgeText: 'DSA CORE: RATED'
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    handle: 'sunidhi_chaudhary',
    scoreLabel: 'Contest Performance',
    metric: 'Active Practice',
    subMetric: 'Contest participant',
    url: 'https://codeforces.com/profile/SunidhiChaudhary_11',
    icon: SiCodeforces,
    accent: 'from-[#3b5fcc] to-[#6f86ff]',
    hoverColor: 'hover:border-[#3b5fcc]/40',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(59,95,204,0.12)]',
    badgeText: 'CONTEST LEVEL: ACTIVE'
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    handle: 'sunidhi_chaudhary',
    scoreLabel: 'Contest Ready',
    metric: 'Active Coder',
    subMetric: 'Algorithm Contests',
    url: 'https://www.codechef.com/users/sunidhic_11',
    icon: SiCodechef,
    accent: 'from-[#5d4037] to-[#8d6e63]',
    hoverColor: 'hover:border-[#5d4037]/40',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(93,64,55,0.12)]',
    badgeText: 'COMPETENCY: VERIFIED'
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="relative overflow-hidden bg-[#050816] py-24">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 select-none">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#915eff]/5 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ff00ea]/5 blur-[120px]" />
      </div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none z-0" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 md:px-12 xl:px-24 z-10">
        
        {/* Header Title block */}
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#ff00ea]/30 bg-[#ff00ea]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#ff00ea] shadow-[0_0_10px_rgba(255,0,234,0.15)]">
            <FiCode size={12} className="animate-pulse" /> Competitive Coding
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Coding Profiles
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#aaa6c3]">
            Platforms where I practice algorithm structures, solve complex data structure challenges, and maintain contest readiness.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff00ea] to-[#00f6ff] rounded-full opacity-80 mt-6 shadow-[0_0_12px_#ff00ea]" />
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
          {codingProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <article
                key={profile.id}
                className={`group rounded-3xl border border-white/5 bg-[#0e0c24]/50 backdrop-blur-md p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${profile.hoverColor} ${profile.shadowGlow}`}
              >
                
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Floating App Icon */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${profile.accent} text-white shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  
                  {/* Technical Badge Mark */}
                  <span className="font-mono text-[8px] text-white/30 border border-white/5 px-2 py-0.5 rounded">
                    {profile.badgeText}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white transition-colors duration-300">
                  {profile.name}
                </h3>

                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-white/40 font-mono">
                  @{profile.handle}
                </p>

                {/* Technical Progress Stats Box */}
                <div className="my-6 rounded-2xl bg-white/[0.02] border border-white/5 p-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-white font-mono block leading-none">{profile.metric}</span>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest block mt-1.5">{profile.subMetric}</span>
                  </div>
                  <FiActivity className="text-white/20 group-hover:animate-pulse" size={18} />
                </div>

                <p className="text-xs text-white/40 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FiCpu size={12} className="text-white/30" /> {profile.scoreLabel}
                </p>

                {/* Navigation CTA button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#100d25] border border-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black cursor-pointer w-full text-center"
                >
                  View Live Profile
                  <FiArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
