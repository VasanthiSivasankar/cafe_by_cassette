import React, { useState } from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { MapPin, Clock, Navigation, Instagram, Phone, Mail, Check, Copy, ExternalLink, Calendar } from 'lucide-react';

export const VisitUsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const textToCopy = cafeConfig.business.address.formatted;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          fallbackCopy(textToCopy);
        });
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Graceful fail
    }
  };

  return (
    <section id="visit" className="py-16 md:py-24 bg-[#F4EFE6]/60 border-t border-[#EADBCA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C2D37] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
            <span>Find Our Cafe</span>
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight mb-4 text-balance">
            Visit Us in Kattupakkam
          </h2>
          <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed">
            Come for the slow-dripped espresso and flaky chocolate croissants; stay for the timeless analog audio and relaxing ambiance.
          </p>
        </div>

        {/* Visit Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, & Verified Platforms (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#EADBCA] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#241A15] text-[#FAF7F2] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#D9653B]" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold block mb-1">
                    Verified Location
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#241A15] mb-2">
                    {cafeConfig.business.name}
                  </h3>
                  <p className="text-sm text-[#382920] leading-relaxed mb-4">
                    {cafeConfig.business.address.line1}, {cafeConfig.business.address.landmark},<br />
                    {cafeConfig.business.address.area}, {cafeConfig.business.address.city}, {cafeConfig.business.address.state} - {cafeConfig.business.address.postalCode}, {cafeConfig.business.address.country}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={cafeConfig.business.links.googleMapsDirections}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#D9653B] hover:bg-[#C2532A] text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Google Maps Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 bg-white border border-[#EADBCA] hover:bg-neutral-50 text-[#241A15] px-3.5 py-2 rounded-lg text-xs font-semibold shadow-2xs transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#4D392D]" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#EADBCA] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#EADBCA] text-[#D9653B] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold">
                      Business Hours
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{cafeConfig.business.hours.status}</span>
                    </span>
                  </div>
                  
                  <div className="font-serif text-2xl font-bold text-[#241A15] mb-1">
                    {cafeConfig.business.hours.schedule}
                  </div>
                  <p className="text-xs text-[#4D392D] mb-3">
                    {cafeConfig.business.hours.days}
                  </p>

                  <p className="text-[11px] font-mono text-[#7C2D37]/80 bg-[#F4EFE6] p-2.5 rounded-lg border border-[#EADBCA]/60">
                    Source: {cafeConfig.business.hours.verificationSource}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Notice */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EADBCA] shadow-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold block mb-2">
                Order Support & Contact
              </span>
              <p className="text-xs text-[#4D392D] mb-3 leading-relaxed">
                For order status, live preparation inquiries, or customer support, please use the Swiggy or Zomato in-app help desk.
              </p>
              <div className="text-[11px] font-mono text-[#7C2D37] bg-white p-3 rounded-lg border border-dashed border-[#EADBCA]">
                <span className="font-bold block mb-1">Cafe Owner Note:</span>
                Direct restaurant phone and business inquiries email can be added in{' '}
                <code className="bg-[#EADBCA]/60 px-1 py-0.5 rounded text-[#241A15]">
                  src/data/cafeConfig.ts
                </code>
                .
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Landmark Card & Online Delivery Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Map Landmark Card */}
            <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#EADBCA] shadow-xs">
              {/* Retro Graphic Map Header */}
              <div className="bg-[#241A15] p-5 text-[#FAF7F2] border-b border-[#382920]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-wider text-[#E5A93C] uppercase font-bold">
                    Poonamallee High Road Corridor
                  </span>
                  <span className="text-[10px] font-mono text-[#EADBCA]/60">CHENNAI 600056</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Poojaa Diamond Anandam, Ground Floor
                </h4>
                <p className="text-xs text-[#EADBCA]/80">
                  Easily accessible via Poonamallee High Road near Kattupakkam
                </p>
              </div>

              {/* Landmark Diagram / Directions Assistance */}
              <div className="p-6 bg-white space-y-4">
                <div className="space-y-2 text-xs text-[#4D392D]">
                  <div className="flex items-center gap-2 font-medium text-[#241A15]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9653B]" />
                    <span>Prominent Landmark: Poojaa Diamond Anandam Building</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-[#241A15]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9653B]" />
                    <span>Floor: Unit G2 (Ground Floor)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-[#241A15]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9653B]" />
                    <span>Accessibility: Convenient ground floor entrance</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={cafeConfig.business.links.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#241A15] hover:bg-[#382920] text-white py-3 rounded-xl font-semibold text-xs tracking-wide shadow-xs transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#E5A93C]" />
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Delivery & Social Links Hub */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#EADBCA] shadow-xs space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7C2D37] font-bold block mb-1">
                Official Ordering & Social Links
              </span>

              <a
                href={cafeConfig.business.links.swiggyOrder}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EADBCA] hover:border-[#D9653B] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
                  <span className="text-xs font-semibold text-[#241A15] group-hover:text-[#D9653B]">
                    Swiggy Food Delivery
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#4D392D] group-hover:text-[#D9653B]" />
              </a>

              <a
                href={cafeConfig.business.links.swiggyDineout}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EADBCA] hover:border-[#D9653B] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#241A15]" />
                  <span className="text-xs font-semibold text-[#241A15] group-hover:text-[#D9653B]">
                    Swiggy Dineout Reservations
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#4D392D] group-hover:text-[#D9653B]" />
              </a>

              <a
                href={cafeConfig.business.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EADBCA] hover:border-[#D9653B] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C2D37]" />
                  <span className="text-xs font-semibold text-[#241A15] group-hover:text-[#D9653B]">
                    Zomato Restaurant Page
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#4D392D] group-hover:text-[#D9653B]" />
              </a>

              <a
                href={cafeConfig.business.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EADBCA] hover:border-[#D9653B] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#7C2D37]" />
                  <span className="text-xs font-semibold text-[#241A15] group-hover:text-[#D9653B]">
                    Instagram @cafe_by_cassette
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#4D392D] group-hover:text-[#D9653B]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
