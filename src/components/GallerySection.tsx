import React, { useState, useEffect, useCallback } from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { Maximize2, X, ChevronLeft, ChevronRight, Disc, Camera, Info } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % cafeConfig.gallery.length);
  }, [activeImageIndex]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + cafeConfig.gallery.length) % cafeConfig.gallery.length);
  }, [activeImageIndex]);

  // Handle keyboard arrow keys and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#F4EFE6]/50 border-t border-[#EADBCA]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7C2D37] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
            <span>Visual Mood & Aesthetics</span>
            <span className="w-2 h-2 rounded-full bg-[#D9653B]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241A15] tracking-tight mb-4 text-balance">
            The Retro Aesthetic Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#4D392D] leading-relaxed">
            Immerse yourself in the warm analog tones, magnetic tapes, and cozy acoustic cafe textures that define the Cafe By Cassette experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cafeConfig.gallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#EADBCA] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`Open photo lightbox for ${item.title}`}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-[#241A15]">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    onError={() => handleImageError(item.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#241A15] to-[#382920]">
                    <Disc className="w-10 h-10 text-[#E5A93C] mb-2 animate-spin-slow" />
                    <span className="font-serif font-bold text-sm text-[#FAF7F2]">{item.title}</span>
                    <span className="text-[11px] font-mono text-[#D9653B] mt-1">{item.subtitle}</span>
                  </div>
                )}
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-[#241A15]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-[#FAF7F2] text-[#241A15] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Badge Label */}
                <div className="absolute top-3 left-3 bg-[#241A15]/80 backdrop-blur-xs text-[#EADBCA] text-[10px] font-mono px-2 py-0.5 rounded">
                  {item.subtitle}
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-[#241A15] group-hover:text-[#D9653B] transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4D392D] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#EADBCA]/50 flex items-center justify-between text-[11px] font-mono text-[#7C2D37]">
                  <span>Visual Concept Art</span>
                  <span className="text-[#D9653B] group-hover:underline">Click to Expand</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Centralised Image Notice for Cafe Owner */}
        <div className="mt-10 bg-[#FAF7F2] border border-[#EADBCA] rounded-xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-[#4D392D] max-w-3xl mx-auto shadow-2xs">
          <Camera className="w-5 h-5 text-[#D9653B] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#241A15] block mb-1">
              Owner Note on Cafe Photography:
            </span>
            <p className="leading-relaxed">
              In strict adherence to copyright and authentic representation, the artwork displayed above represents bespoke retro moodboard aesthetics. You can easily insert authentic photographs of Cafe By Cassette’s interior, customer seating, cassette wall, and dishes anytime by replacing the image paths in{' '}
              <code className="bg-[#EADBCA]/60 px-1 py-0.5 rounded font-mono text-[#241A15]">
                src/data/cafeConfig.ts
              </code>
              .
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#241A15]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#EADBCA]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#EADBCA] bg-[#FAF7F2]">
              <div className="flex items-center gap-2">
                <Disc className="w-4 h-4 text-[#D9653B]" />
                <span className="font-serif font-bold text-sm text-[#241A15]">
                  {cafeConfig.gallery[activeImageIndex].title}
                </span>
                <span className="text-xs font-mono text-[#7C2D37] hidden sm:inline">
                  ({activeImageIndex + 1} of {cafeConfig.gallery.length})
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg text-[#241A15] hover:bg-[#EADBCA] transition-colors focus-visible:ring-2 focus-visible:ring-[#D9653B]"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative bg-[#1C1410] flex items-center justify-center max-h-[65vh] overflow-hidden">
              <img
                src={cafeConfig.gallery[activeImageIndex].src}
                alt={cafeConfig.gallery[activeImageIndex].alt}
                className="w-full h-auto max-h-[65vh] object-contain"
              />

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#241A15]/80 text-white hover:bg-[#D9653B] transition-colors shadow-md"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#241A15]/80 text-white hover:bg-[#D9653B] transition-colors shadow-md"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="p-5 bg-[#FAF7F2] border-t border-[#EADBCA] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs sm:text-sm text-[#241A15] font-medium">
                  {cafeConfig.gallery[activeImageIndex].caption}
                </p>
                <span className="text-[11px] font-mono text-[#7C2D37]">
                  Retro aesthetic theme · Cafe By Cassette, Kattupakkam
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="px-4 py-1.5 bg-[#241A15] text-white rounded-lg text-xs font-semibold hover:bg-[#382920] transition-colors self-start sm:self-auto"
              >
                Back to Gallery
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
