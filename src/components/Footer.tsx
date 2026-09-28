import React, { useState } from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { Disc3, MapPin, ExternalLink, Instagram, Clock, ArrowUp, Code, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showOwnerModal, setShowOwnerModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241A15] text-[#FAF7F2] pt-16 pb-12 border-t border-[#382920]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#382920]">
          
          {/* Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#D9653B] text-white flex items-center justify-center">
                <Disc3 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Cafe By Cassette
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#E5A93C] uppercase">
                  Retro Music & Artisan Cafe
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EADBCA]/80 leading-relaxed">
              A retro-themed haven in Kattupakkam, Chennai, dedicated to the warmth of vintage audio, analog mixtapes, handcrafted espresso, and comforting Italian cuisine.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={cafeConfig.business.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#382920] hover:bg-[#D9653B] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={cafeConfig.business.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#382920] hover:bg-[#D9653B] text-[#FAF7F2] flex items-center justify-center transition-colors"
                aria-label="Google Maps Directions"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Section Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E5A93C] font-bold block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#EADBCA]/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Side A & Side B</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Verified Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Retro Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Guest Feedback</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">Visit & Hours</a>
              </li>
            </ul>
          </div>

          {/* Ordering Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E5A93C] font-bold block mb-2">
              Order Online
            </span>
            <ul className="space-y-2.5 text-xs text-[#EADBCA]/80">
              <li>
                <a
                  href={cafeConfig.business.links.swiggyOrder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Swiggy Delivery</span>
                  <ExternalLink className="w-3 h-3 text-[#D9653B]" />
                </a>
              </li>
              <li>
                <a
                  href={cafeConfig.business.links.swiggyDineout}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Swiggy Dineout</span>
                  <ExternalLink className="w-3 h-3 text-[#D9653B]" />
                </a>
              </li>
              <li>
                <a
                  href={cafeConfig.business.links.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Zomato Delivery</span>
                  <ExternalLink className="w-3 h-3 text-[#D9653B]" />
                </a>
              </li>
              <li>
                <a
                  href={cafeConfig.business.links.magicpin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Magicpin Menu</span>
                  <ExternalLink className="w-3 h-3 text-[#D9653B]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Hours Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E5A93C] font-bold block mb-2">
              Location & Hours
            </span>
            <div className="space-y-2 text-xs text-[#EADBCA]/80">
              <p className="leading-relaxed">
                {cafeConfig.business.address.line1}, {cafeConfig.business.address.landmark}, {cafeConfig.business.address.area}, Chennai {cafeConfig.business.address.postalCode}
              </p>
              <div className="flex items-center gap-1.5 text-white font-medium pt-1">
                <Clock className="w-3.5 h-3.5 text-[#D9653B]" />
                <span>{cafeConfig.business.hours.schedule}</span>
              </div>
              <p className="text-[11px] text-[#EADBCA]/60 font-mono">
                {cafeConfig.business.hours.days}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={cafeConfig.business.links.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D9653B] hover:text-[#E5A93C] font-semibold underline underline-offset-4"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer: Legal, Copyright & Owner Guide */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EADBCA]/60">
          <div>
            <span>© {new Date().getFullYear()} Cafe By Cassette. All rights reserved.</span>
            <span className="block text-[11px] text-[#EADBCA]/40 mt-0.5">
              Independent website for Cafe By Cassette, Kattupakkam, Chennai. Trademarks & food platform brands belong to their respective owners.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowOwnerModal(true)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#E5A93C] hover:text-white underline underline-offset-2 transition-colors"
            >
              <Code className="w-3 h-3" />
              <span>Owner Data Config Guide</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#382920] hover:bg-[#D9653B] text-white transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Owner Configuration Reference Modal */}
      {showOwnerModal && (
        <div
          className="fixed inset-0 z-50 bg-[#241A15]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowOwnerModal(false)}
        >
          <div
            className="bg-[#FAF7F2] text-[#241A15] max-w-lg w-full rounded-2xl p-6 sm:p-7 border border-[#EADBCA] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif text-xl font-bold mb-2">Cafe Owner Configuration Guide</h3>
            <p className="text-xs text-[#4D392D] mb-4">
              All menu items, pricing, operating hours, addresses, and external delivery URLs are centralized in a single clean TypeScript file:
            </p>

            <div className="bg-[#241A15] text-[#FAF7F2] p-3 rounded-lg font-mono text-xs mb-4">
              src/data/cafeConfig.ts
            </div>

            <ul className="space-y-2 text-xs text-[#382920] mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
                <span><strong>Menu & Prices:</strong> Add or edit dishes, prices, and dietary tags in <code>cafeConfig.menuItems</code>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
                <span><strong>Real Photos:</strong> Put JPG/PNG files in <code>public/</code> or <code>src/assets/</code> and update <code>cafeConfig.gallery</code>.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D9653B] shrink-0 mt-0.5" />
                <span><strong>Direct Phone / Email:</strong> Replace the placeholders in <code>cafeConfig.business.contact</code> once confirmed.</span>
              </li>
            </ul>

            <button
              onClick={() => setShowOwnerModal(false)}
              className="w-full py-2.5 bg-[#241A15] hover:bg-[#382920] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Close Guide
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
