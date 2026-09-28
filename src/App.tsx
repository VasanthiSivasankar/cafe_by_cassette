/**
 * Cafe By Cassette - Retro Themed Cafe Website
 * Location: Kattupakkam, Poonamallee High Road, Chennai
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241A15] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <MenuSection />
        <GallerySection />
        <ReviewsSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
