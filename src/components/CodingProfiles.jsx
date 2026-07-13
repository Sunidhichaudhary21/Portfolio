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
    accent: '#EE9372',
    hoverColor: 'hover:border-[#EE9372]/40',
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
    accent: '#0B3331',
    hoverColor: 'hover:border-[#0B3331]/30',
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
    accent: '#4A69BB',
    hoverColor: 'hover:border-[#4A69BB]/40',
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
    accent: '#FBC879',
    hoverColor: 'hover:border-[#FBC879]/50',
    badgeText: 'COMPETENCY: VERIFIED'
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="relative overflow-hidden bg-[#FDF8F3] py-24 border-t border-[#0B3331]/10">
      
      {/* Background doodles */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-[#EE9372]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-[#0B3331]/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative mx-auto w-full max-w-screen-xl px-6 md:px-12 xl:px-16 z-10">
        
        {/* Header Title block */}
        <div className="mb-16 text-left flex flex-col items-start" data-aos="fade-right">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#EE9372]/30 bg-[#EE9372]/5 px-4 py-1.5 text-xs font-sans font-black uppercase tracking-wider text-[#EE9372]">
            <FiCode size={12} className="animate-pulse" /> Competitive coding
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
            Coding Profiles
          </h2>
          <p className="mt-3 max-w-xl text-[#0B3331]/75 text-sm leading-relaxed">
            Platforms where I practice algorithm structures, solve complex data structure challenges, and maintain contest readiness.
          </p>
        </div>

        {/* Coding Profiles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {codingProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <article
                key={profile.id}
                className={`group rounded-3xl border border-[#0B3331]/10 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col text-left ${profile.hoverColor}`}
              >
                
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Frame */}
                  <div 
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                    style={{ backgroundColor: profile.accent }}
                  >
                    <Icon size={22} />
                  </div>
                  
                  {/* Technical Badge Mark */}
                  <span className="font-sans font-bold text-[8px] text-[#0B3331]/40 border border-[#0B3331]/10 px-2 py-0.5 rounded">
                    {profile.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-black text-[#0B3331]">
                  {profile.name}
                </h3>

                <p className="mt-1 text-xs font-sans font-bold text-[#0B3331]/50 tracking-wider">
                  @{profile.handle}
                </p>

                {/* Technical Progress Stats Box */}
                <div className="my-6 rounded-2xl bg-[#0B3331]/5 border border-[#0B3331]/5 p-4 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-sans font-black text-[#0B3331] block leading-none">{profile.metric}</span>
                    <span className="text-[9px] font-sans font-black text-[#0B3331]/50 uppercase tracking-wider block mt-1.5">{profile.subMetric}</span>
                  </div>
                  <FiActivity className="text-[#0B3331]/25 group-hover:animate-pulse" size={18} />
                </div>

                <p className="text-xs text-[#0B3331]/60 font-sans font-bold flex items-center gap-1.5">
                  <FiCpu size={12} className="text-[#EE9372]" /> {profile.scoreLabel}
                </p>

                {/* Navigation CTA button */}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3331] hover:bg-[#EE9372] text-[#FDF8F3] hover:text-[#0B3331] px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer w-full text-center shadow-sm"
                >
                  View Profile
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
