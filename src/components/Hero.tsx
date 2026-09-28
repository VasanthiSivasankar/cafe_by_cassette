import React, { useState } from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { ExternalLink, ArrowRight, Play, Pause, Disc3, Volume2, Sparkles, MapPin } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_cassette_cafe_1790609271406.jpg';

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSide, setCurrentSide] = useState<'A' | 'B'>('A');

  const tracks = {
    A: [
      { num: '01', title: 'Espresso Extraction', desc: 'Fresh Dark Roast & Crema' },
      { num: '02', title: 'Biscoff Cold Coffee', desc: 'Caramelized Lotus Crunch' },
      { num: '03', title: 'Tiramisu Ladyfingers', desc: 'Mascarpone & Cocoa Dust' },
    ],
    B: [
      { num: '04', title: 'Garlic Butter Baguette', desc: 'Melted Mozzarella Crisp' },
      { num: '05', title: 'Slow-Baked Veg Lasagna', desc: 'Creamy Béchamel Ragù' },
      { num: '06', title: 'Analog Lounge Reverie', desc: 'Mixtape Memories in Chennai' },
    ],
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle retro dotted paper texture background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#241A15_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Location & Heritage Note (Clean Typography, No Pill Enclosures) */}
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#7C2D37] uppercase font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D9653B]" />
              <span>Kattupakkam · Poonamallee High Road · Chennai</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241A15] leading-[1.12] text-balance">
              Rewind to Good Vibes & Great Coffee.
            </h1>

            <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed max-w-2xl">
              Step inside a retro-inspired haven where analog music nostalgia meets handcrafted espresso, artisanal bakes, and comforting Italian pastas. Unwind, reminisce, and savor the moment in Kattupakkam.
            </p>

            {/* Quick Verified Information Bar */}
            <div className="pt-1 pb-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#4D392D] border-y border-[#EADBCA]/60 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Open Daily: 12:00 PM – 11:00 PM</span>
              </div>
              <span className="text-[#EADBCA]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D9653B]" />
                <span>No. 222 - G2, Poojaa Diamond Anandam</span>
              </div>
              <span className="text-[#EADBCA]" aria-hidden="true">·</span>
              <span className="text-[#7C2D37]">Dine-In & Online Delivery</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#241A15] hover:bg-[#382920] text-[#FAF7F2] px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
              >
                <span>View Verified Menu</span>
                <ArrowRight className="w-4 h-4 text-[#E5A93C]" />
              </a>

              <a
                href={cafeConfig.business.links.swiggyOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D9653B] hover:bg-[#C2532A] text-white px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98]"
              >
                <span>Order on Swiggy</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={cafeConfig.business.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4D392D] hover:text-[#D9653B] px-3 py-3 underline underline-offset-4 transition-colors"
              >
                <span>Zomato Menu</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Delivery Platforms Verified Bar */}
            <div className="pt-2 text-xs text-[#7C2D37]/90 font-medium">
              <span>Ordering available on </span>
              <a
                href={cafeConfig.business.links.swiggyOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-[#D9653B]"
              >
                Swiggy
              </a>
              <span>, </span>
              <a
                href={cafeConfig.business.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-[#D9653B]"
              >
                Zomato
              </a>
              <span>, and </span>
              <a
                href={cafeConfig.business.links.magicpin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline hover:text-[#D9653B]"
              >
                Magicpin
              </a>
            </div>

          </div>

          {/* Right Column: Retro Cassette Tape Card & Photo Composition (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Retro Cassette Player Showcase Container */}
            <div className="w-full bg-[#241A15] text-[#FAF7F2] rounded-2xl p-6 sm:p-7 shadow-xl border border-[#382920] relative overflow-hidden group">
              
              {/* Retro Cassette Header */}
              <div className="flex items-center justify-between border-b border-[#382920] pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D9653B] animate-pulse" />
                  <span className="font-mono text-xs text-[#EADBCA] tracking-wider uppercase">
                    Cassette Deck C-90
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentSide(currentSide === 'A' ? 'B' : 'A')}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#382920] hover:bg-[#4D392D] text-[#E5A93C] font-semibold transition-colors focus-visible:ring-1 focus-visible:ring-[#E5A93C]"
                    title="Flip cassette side"
                  >
                    Flip to Side {currentSide === 'A' ? 'B' : 'A'}
                  </button>
                  <span className="font-mono text-xs font-bold text-[#E5A93C]">
                    Side {currentSide}
                  </span>
                </div>
              </div>

              {/* The Cassette Body Graphic */}
              <div className="bg-[#1C1410] rounded-xl p-4 sm:p-5 border border-[#382920] shadow-inner mb-5 relative">
                
                {/* Cassette Label Header */}
                <div className="bg-[#F4EFE6] text-[#241A15] rounded-md p-3 mb-4 border border-[#EADBCA] relative">
                  <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#EADBCA] pb-1 mb-1 font-bold">
                    <span className="text-[#D9653B]">CAFE BY CASSETTE · MIXTAPE</span>
                    <span className="text-[#7C2D37]">HIGH BIAS / CrO₂</span>
                  </div>
                  <div className="font-serif font-bold text-sm text-[#241A15] tracking-tight">
                    {currentSide === 'A' ? 'Side A: Signature Brews & Delicacies' : 'Side B: Warm Bites & Ambient Grooves'}
                  </div>
                </div>

                {/* Cassette Tape Spools Window */}
                <div className="bg-[#0F0B09] rounded-lg p-3 border border-[#382920] flex items-center justify-around relative">
                  {/* Left Spool */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#382920] bg-[#1C1410] flex items-center justify-center relative ${
                        isPlaying ? 'animate-spin-slow' : ''
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#D9653B]/50 bg-[#0F0B09] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                      </div>
                      {/* Spool Teeth */}
                      <div className="absolute w-1 h-3 bg-[#EADBCA]/40 -top-1" />
                      <div className="absolute w-1 h-3 bg-[#EADBCA]/40 -bottom-1" />
                      <div className="absolute h-1 w-3 bg-[#EADBCA]/40 -left-1" />
                      <div className="absolute h-1 w-3 bg-[#EADBCA]/40 -right-1" />
                    </div>
                    <span className="text-[10px] font-mono text-[#EADBCA]/60 mt-1">FEED</span>
                  </div>

                  {/* Tape Level Window & VU Bars */}
                  <div className="w-24 sm:w-28 flex flex-col items-center justify-center px-2">
                    <div className="h-4 w-full bg-[#1C1410] rounded border border-[#382920] overflow-hidden flex items-center px-1">
                      <div
                        className={`h-2 bg-[#D9653B]/70 rounded transition-all duration-300 ${
                          isPlaying ? 'w-4/5 animate-pulse' : 'w-1/2'
                        }`}
                      />
                    </div>
                    <div className="flex gap-1 mt-2">
                      <div className={`w-1 h-3 rounded-xs ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-[#382920]'}`} />
                      <div className={`w-1 h-3 rounded-xs ${isPlaying ? 'bg-emerald-400 animate-pulse delay-75' : 'bg-[#382920]'}`} />
                      <div className={`w-1 h-3 rounded-xs ${isPlaying ? 'bg-[#E5A93C] animate-pulse delay-150' : 'bg-[#382920]'}`} />
                      <div className={`w-1 h-3 rounded-xs ${isPlaying ? 'bg-[#D9653B] animate-pulse delay-200' : 'bg-[#382920]'}`} />
                    </div>
                    <span className="text-[9px] font-mono text-[#EADBCA]/60 mt-1">
                      {isPlaying ? 'PLAYING' : 'READY'}
                    </span>
                  </div>

                  {/* Right Spool */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#382920] bg-[#1C1410] flex items-center justify-center relative ${
                        isPlaying ? 'animate-spin-slow' : ''
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full border border-[#D9653B]/50 bg-[#0F0B09] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                      </div>
                      <div className="absolute w-1 h-3 bg-[#EADBCA]/40 -top-1" />
                      <div className="absolute w-1 h-3 bg-[#EADBCA]/40 -bottom-1" />
                      <div className="absolute h-1 w-3 bg-[#EADBCA]/40 -left-1" />
                      <div className="absolute h-1 w-3 bg-[#EADBCA]/40 -right-1" />
                    </div>
                    <span className="text-[10px] font-mono text-[#EADBCA]/60 mt-1">TAKEUP</span>
                  </div>
                </div>

                {/* Tracklist Preview */}
                <div className="mt-4 pt-3 border-t border-[#382920] space-y-1.5 text-xs">
                  {tracks[currentSide].map((track) => (
                    <div key={track.num} className="flex items-center justify-between text-[#EADBCA]/80">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[#E5A93C] text-[10px]">{track.num}</span>
                        <span className="font-medium text-white">{track.title}</span>
                      </div>
                      <span className="text-[11px] text-[#EADBCA]/50 hidden sm:inline">{track.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tape Deck Controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-150 ${
                    isPlaying
                      ? 'bg-[#E5A93C] text-[#241A15] shadow-xs'
                      : 'bg-[#D9653B] hover:bg-[#C2532A] text-white'
                  }`}
                  aria-label={isPlaying ? 'Pause retro visual animation' : 'Start retro visual animation'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>PAUSE CASSETTE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>PRESS PLAY</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-[11px] text-[#EADBCA]/70 font-mono">
                  <Volume2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Lo-Fi Retro Aesthetic</span>
                </div>
              </div>

            </div>

            {/* Aesthetic Caption */}
            <p className="mt-3 text-xs text-[#7C2D37] font-mono text-center">
              ♪ Pure nostalgia · Analog music vibes in Kattupakkam
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
