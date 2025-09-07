'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-secondary z-50">
        <div className="relative">
          {/* Outer loading circles */}
          <div className="absolute inset-0 animate-ping">
            <div className="w-24 h-24 border-4 border-accent rounded-full"></div>
          </div>
          <div className="absolute inset-0 animate-ping animation-delay-300">
            <div className="w-24 h-24 border-4 border-secondary/30 rounded-full"></div>
          </div>

          {/* Inner content */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="text-white font-bold text-xl animate-pulse">
              Kerala
            </div>
          </div>

          <div className="mt-8 text-center text-white">
            <div className="animate-bounce">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary/80 to-accent/60 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="block text-gradient bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                Kerala
              </span>
            </h1>
          </div>

          <div className="fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover God's Own Country - where pristine beaches meet lush green landscapes,
              rich culture blends with modern charm, and every moment becomes a memory.
            </p>
          </div>

          <div className="fade-in-up animation-delay-600">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Kerala
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section Line */}
      <div className="section-line"></div>

      {/* About Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h2 className="text-4xl font-bold text-primary mb-6">About Kerala</h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Kerala, often called "God's Own Country," is a magnificent coastal state located
              in the southwest of India. With its breathtaking natural beauty, rich cultural
              heritage, and vibrant traditions, Kerala offers an unparalleled experience to
              visitors from around the world.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From the serene beauty of our unparalleled backwaters and pristine beaches to
              the lush greenery of spice plantations and misty hills, Kerala is a paradise
              that captures the heart of every traveler.
            </p>
          </div>

          <div className="slide-in-right relative">
            <div className="relative h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h3 className="font-semibold text-primary mb-2">Key Highlights</h3>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    <li>• 580km of pristine coastline</li>
                    <li>• UNESCO World Heritage sites</li>
                    <li>• Rich cultural heritage</li>
                    <li>• Ayurvedic wellness centers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Line */}
      <div className="section-line"></div>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 fade-in-up">What Makes Kerala Special</h2>
          <p className="text-xl text-foreground/70 fade-in-up animation-delay-200">
            Experience the unique blend of nature, culture, and hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center scale-in animation-delay-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Natural Beauty</h3>
            <p className="text-foreground/80">
              Pristine beaches, lush green landscapes, misty hills, and serene backwaters
              create a paradise that mesmerizes every visitor.
            </p>
          </div>

          <div className="text-center scale-in animation-delay-600">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded"></div>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Cultural Heritage</h3>
            <p className="text-foreground/80">
              Festivals, traditional art forms, ancient temples, and timeless architecture
              showcase India's rich cultural tapestry.
            </p>
          </div>

          <div className="text-center scale-in animation-delay-900">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-secondary rounded"></div>
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-4">Wellness & Tourism</h3>
            <p className="text-foreground/80">
              World-renowned Ayurvedic treatments, yoga retreats, and eco-friendly
              tourism experiences for holistic well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Section Line */}
      <div className="section-line"></div>

      {/* Footer */}
      <footer className="py-16 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Kerala Tourism</h3>
              <p className="text-white/80 leading-relaxed">
                Discover the wonders of God's Own Country and create unforgettable memories.
              </p>
            </div>

            <div className="fade-in-up animation-delay-200">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Accommodations</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Activities</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Culture</a></li>
              </ul>
            </div>

            <div className="fade-in-up animation-delay-400">
              <h4 className="text-lg font-semibold mb-4">Popular Places</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-accent transition-colors">Alleppey</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Munnar</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Kovalam</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Kochi</a></li>
              </ul>
            </div>

            <div className="fade-in-up animation-delay-600">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-white/80">
                <p>📍 Gods Own Country, Kerala</p>
                <p>📞 +91 12345 67890</p>
                <p>✉️ info@keralatourism.com</p>
                <p>🌐 www.keralatourism.gov.in</p>
              </div>
            </div>
          </div>

          <div className="section-line bg-white/20"></div>

          <div className="text-center pt-8">
            <p className="text-white/60">&copy; 2024 Kerala Tourism. All rights reserved. | Designed with ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
