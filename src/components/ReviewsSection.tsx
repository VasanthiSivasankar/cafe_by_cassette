import React from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { Star, MessageSquareHeart, ExternalLink, ThumbsUp, MapPin, Instagram, HeartHandshake } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C2D37] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
            <span>Community Feedback</span>
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight mb-4 text-balance">
            Honest Reviews & Guest Love
          </h2>
          <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed">
            We value genuine guest experiences. Rather than displaying fabricated ratings, we invite you to explore real, unfiltered reviews directly on our verified public profiles.
          </p>
        </div>

        {/* Rating Summary & Community Highlights Card */}
        <div className="bg-[#F4EFE6] border border-[#EADBCA] rounded-2xl p-6 sm:p-8 mb-10 shadow-xs max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Aggregate Score & Trust Indicator */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-[#EADBCA] pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-1.5 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-[#E5A93C] fill-current" />
                ))}
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#241A15] mb-1">
                4.5 / 5.0
              </div>
              <p className="text-xs text-[#7C2D37] font-mono mb-2">
                Based on 398+ Verified Reviews on Justdial & Food Apps
              </p>
              <p className="text-xs text-[#4D392D] leading-relaxed">
                Consistently appreciated across Swiggy, Justdial, and food platforms for warm ambiance, rich coffee, and Italian specials.
              </p>
            </div>

            {/* Popular Dishes Highlighted by Real Customers */}
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#241A15] font-bold block">
                Top Guest Favorites on Public Portals:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white border border-[#EADBCA] px-3 py-1.5 rounded-lg text-[#241A15] font-medium shadow-2xs">
                  ★ Lotus Biscoff Cheesecake
                </span>
                <span className="bg-white border border-[#EADBCA] px-3 py-1.5 rounded-lg text-[#241A15] font-medium shadow-2xs">
                  ★ Authentic Italian Tiramisu
                </span>
                <span className="bg-white border border-[#EADBCA] px-3 py-1.5 rounded-lg text-[#241A15] font-medium shadow-2xs">
                  ★ Slow-Baked Chicken Lasagna
                </span>
                <span className="bg-white border border-[#EADBCA] px-3 py-1.5 rounded-lg text-[#241A15] font-medium shadow-2xs">
                  ★ Biscoff Cold Coffee
                </span>
                <span className="bg-white border border-[#EADBCA] px-3 py-1.5 rounded-lg text-[#241A15] font-medium shadow-2xs">
                  ★ Almond Chocolate Croissant
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Real Review Hub Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Google Maps Reviews */}
          <div className="bg-white rounded-2xl p-6 border border-[#EADBCA] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#D9653B] flex items-center justify-center mb-4 border border-[#EADBCA]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#241A15] mb-2">
                Google Maps Reviews
              </h3>
              <p className="text-xs text-[#4D392D] leading-relaxed mb-6">
                Read direct reviews from diners who visited our cafe at Poojaa Diamond Anandam, Poonamallee High Road, Kattupakkam.
              </p>
            </div>

            <a
              href={cafeConfig.business.links.googleMapsSearch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#241A15] hover:bg-[#382920] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-colors"
            >
              <span>Search Reviews on Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Swiggy Dineout & Delivery */}
          <div className="bg-white rounded-2xl p-6 border border-[#EADBCA] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#D9653B] flex items-center justify-center mb-4 border border-[#EADBCA]">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#241A15] mb-2">
                Swiggy & Dineout
              </h3>
              <p className="text-xs text-[#4D392D] leading-relaxed mb-6">
                Browse verified food ratings, guest photographs, and delivery feedback on our official Swiggy store listing.
              </p>
            </div>

            <a
              href={cafeConfig.business.links.swiggyDineout}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#D9653B] hover:bg-[#C2532A] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-colors"
            >
              <span>View Swiggy Dineout</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Zomato & Instagram Community */}
          <div className="bg-white rounded-2xl p-6 border border-[#EADBCA] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#7C2D37] flex items-center justify-center mb-4 border border-[#EADBCA]">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#241A15] mb-2">
                Instagram Community
              </h3>
              <p className="text-xs text-[#4D392D] leading-relaxed mb-6">
                Tag <span className="font-semibold text-[#D9653B]">@cafe_by_cassette</span> in your stories, food reels, and aesthetic snapshots from your visit.
              </p>
            </div>

            <a
              href={cafeConfig.business.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#7C2D37] hover:bg-[#602129] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-colors"
            >
              <span>Visit @cafe_by_cassette</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
