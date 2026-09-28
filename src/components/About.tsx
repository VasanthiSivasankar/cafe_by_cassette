import React from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { Coffee, Music, Sparkles, CheckCircle2, Info } from 'lucide-react';
import vintageAudio from '@/src/assets/images/vintage_stereo_ambiance_1790609306994.jpg';
import cassetteMacro from '@/src/assets/images/vintage_cassette_macro_1790609283486.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#F4EFE6]/60 border-t border-[#EADBCA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C2D37] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
            <span>Side A & Side B</span>
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight mb-4 text-balance">
            {cafeConfig.about.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed">
            {cafeConfig.about.intro}
          </p>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EADBCA] bg-[#241A15]">
              <img
                src={vintageAudio}
                alt="Vintage audio stereo equipment and cassette collection in retro cafe"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/90 via-[#241A15]/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FAF7F2]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#E5A93C] font-semibold block mb-1">
                  Analog Nostalgia · Kattupakkam
                </span>
                <p className="font-serif text-lg font-bold text-white">
                  A sanctuary for vinyl lovers, cassette listeners & coffee seekers.
                </p>
              </div>
            </div>

            {/* Inset Secondary Visual Detail */}
            <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EADBCA] flex items-center gap-4 shadow-xs">
              <img
                src={cassetteMacro}
                alt="Close-up of magnetic cassette tape"
                className="w-20 h-16 object-cover rounded-lg border border-[#EADBCA]"
                loading="lazy"
              />
              <div className="text-xs">
                <span className="font-mono text-[#D9653B] font-semibold block mb-0.5">THE CASSETTE SPIRIT</span>
                <p className="text-[#4D392D] leading-snug">
                  Every playlist and brew is curated with the intentionality of a vintage mixtape.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Side A Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EADBCA] shadow-xs relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#241A15] text-[#FAF7F2] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#E5A93C]" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold">
                    TRACK 01
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241A15]">
                    {cafeConfig.about.sideA.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4D392D] mb-5 leading-relaxed">
                {cafeConfig.about.sideA.description}
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#382920]">
                {cafeConfig.about.sideA.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side B Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#EADBCA] shadow-xs relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#D9653B] text-[#FAF7F2] flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold">
                    TRACK 02
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#241A15]">
                    {cafeConfig.about.sideB.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#4D392D] mb-5 leading-relaxed">
                {cafeConfig.about.sideB.description}
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-[#382920]">
                {cafeConfig.about.sideB.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transparent Owner Notice (Ensuring No Fake History is Claimed) */}
            <div className="bg-[#FAF7F2]/60 border border-dashed border-[#EADBCA] rounded-xl p-4 flex items-start gap-3 text-xs text-[#7C2D37]">
              <Info className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Note for Cafe Owner:</span>
                <span>
                  The above narrative honors the public retro music and cafe theme. Your authentic brand founding story or founder words can be directly refined in{' '}
                  <code className="bg-[#EADBCA]/60 px-1 py-0.5 rounded font-mono text-[#241A15]">
                    src/data/cafeConfig.ts
                  </code>
                  .
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
