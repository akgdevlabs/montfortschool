"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
];

export default function HeroCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Har 5 second mein image badlegi
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        >
          {/* Light Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <span className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm mb-4 block animate-pulse">
            Welcome to Excellence
          </span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#0a1128] mb-6 leading-[1.1]">
            Shaping the Leaders <br /> of Tomorrow.
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
            Montfort School Ambikapur is dedicated to nurturing young minds through academic rigor, moral integrity, and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/admissions" className="bg-[#0a1128] text-white px-8 py-4 font-semibold hover:bg-[#d4af37] hover:text-[#0a1128] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              Apply for Admission <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="border border-[#0a1128] text-[#0a1128] px-8 py-4 font-semibold hover:bg-[#0a1128] hover:text-white transition-all text-center">
              Discover Our Campus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}