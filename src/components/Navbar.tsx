import React, { useState, useEffect } from 'react';
import { cafeConfig } from '../data/cafeConfig';
import { Menu, X, Disc3, ExternalLink, MapPin, Clock } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#241A15] text-[#EADBCA] text-xs py-2 px-4 border-b border-[#382920] transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D9653B] animate-pulse" />
            <span className="font-medium tracking-wide">
              Kattupakkam, Chennai · {cafeConfig.business.hours.schedule}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-[#EADBCA]/80">
            <a
              href={cafeConfig.business.links.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-[#D9653B]" />
              <span>Get Directions</span>
            </a>
            <span>·</span>
            <a
              href={cafeConfig.business.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram @cafe_by_cassette
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EADBCA]/60 py-3'
            : 'bg-[#FAF7F2] border-b border-[#EADBCA]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#D9653B] rounded-md px-1 py-0.5"
            aria-label="Cafe By Cassette - Return to Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#241A15] text-[#FAF7F2] flex items-center justify-center shadow-xs group-hover:bg-[#D9653B] transition-colors duration-200">
              <Disc3 className="w-5 h-5 text-[#E5A93C] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#241A15] group-hover:text-[#D9653B] transition-colors">
                Cafe By Cassette
              </span>
              <span className="text-[10px] tracking-widest text-[#7C2D37] uppercase font-semibold font-mono">
                Retro Cafe · Chennai
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4D392D]"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[#4D392D] hover:text-[#D9653B] transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D9653B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action button */}
          <div className="flex items-center gap-3">
            <a
              href={cafeConfig.business.links.swiggyOrder}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#D9653B] hover:bg-[#C2532A] text-white px-4 py-2 rounded-lg text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-150 active:scale-[0.98] whitespace-nowrap"
            >
              <span>Order Online</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#241A15] hover:bg-[#EADBCA]/50 transition-colors focus-visible:ring-2 focus-visible:ring-[#D9653B]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#241A15]/60 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-[#FAF7F2] shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden border-l border-[#EADBCA] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#EADBCA]">
            <div className="flex items-center gap-2">
              <Disc3 className="w-5 h-5 text-[#D9653B]" />
              <span className="font-serif font-bold text-lg text-[#241A15]">Cafe By Cassette</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-[#4D392D] hover:bg-[#EADBCA]/60"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-[#241A15] hover:text-[#D9653B] py-2 border-b border-[#EADBCA]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t border-[#EADBCA]">
          <div className="text-xs text-[#4D392D] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D9653B]" />
            <span>{cafeConfig.business.hours.schedule}</span>
          </div>

          <a
            href={cafeConfig.business.links.swiggyOrder}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#D9653B] text-white py-3 rounded-lg font-semibold text-center shadow-xs"
          >
            <span>Order on Swiggy</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={cafeConfig.business.links.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#241A15] text-[#FAF7F2] py-3 rounded-lg font-semibold text-center hover:bg-[#382920] transition-colors"
          >
            <span>View on Zomato</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
};
