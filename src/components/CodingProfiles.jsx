import React from 'react';
import { FiArrowUpRight, FiCode } from 'react-icons/fi';
import { SiCodechef, SiCodeforces, SiHackerrank, SiLeetcode } from 'react-icons/si';

const codingProfiles = [
  {
    id: 'leetcode',
    name: 'LeetCode',
    handle: 'sunidhichaudhary21',
    scoreLabel: 'Consistency Tracker',
    url: 'https://leetcode.com/u/sunidhichaudhary11/',
    icon: SiLeetcode,
    accent: 'from-[#f89f1b] to-[#f8c15f]',
  },
  {
    id: 'hackerrank',
    name: 'HackerRank',
    handle: 'sunidhi-chaudhary',
    scoreLabel: 'Problem Solving Focus',
    url: 'https://www.hackerrank.com/profile/csunidhi22',
    icon: SiHackerrank,
    accent: 'from-[#1ba94c] to-[#39d98a]',
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    handle: 'sunidhi_chaudhary',
    scoreLabel: 'Contest Performance',
    url: 'https://codeforces.com/profile/SunidhiChaudhary_11',
    icon: SiCodeforces,
    accent: 'from-[#3b5fcc] to-[#6f86ff]',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    handle: 'sunidhi_chaudhary',
    scoreLabel: 'Contest Ready',
    url: 'https://www.codechef.com/users/sunidhic_11',
    icon: SiCodechef,
    accent: 'from-[#5d4037] to-[#8d6e63]',
  },
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="relative overflow-hidden bg-[#100d25] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#915eff] blur-[120px] opacity-20" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#ff00ea] blur-[120px] opacity-10" />
      </div>

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 md:px-12">
        <div className="mb-14 flex flex-col items-start gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff00ea]/30 bg-[#ff00ea]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#ff00ea] shadow-[0_0_10px_rgba(255,0,234,0.2)]">
              <FiCode size={14} />
              Competitive Coding
            </span>
            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Coding Profiles
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#aaa6c3] md:text-lg">
              Platforms where I practice problem solving, strengthen DSA fundamentals, and stay contest-ready.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {codingProfiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <article
                key={profile.id}
                className="group rounded-3xl border border-white/5 bg-[#151030] backdrop-blur-sm p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff00ea]/30 hover:shadow-[0_28px_70px_-25px_rgba(255,0,234,0.2)]"
              >
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br ${profile.accent} text-white shadow-lg`}>
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-black text-white transition-colors duration-300 group-hover:text-[#ff00ea]">
                  {profile.name}
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-white/40">
                  @{profile.handle}
                </p>

                <p className="mt-5 text-sm text-[#aaa6c3]">{profile.scoreLabel}</p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#050816] border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-[#ff00ea] hover:bg-[#ff00ea]/10 hover:text-[#ff00ea] hover:shadow-[0_0_15px_rgba(255,0,234,0.4)]"
                >
                  View Profile
                  <FiArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
