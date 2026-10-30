"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <ShieldCheck className="text-[#0a1128] w-8 h-8" />
            <span className="text-2xl font-playfair font-bold text-[#0a1128] tracking-wide">
              MONTFORT <span className="text-[#d4af37]">SCHOOL</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-[#0a1128] font-medium transition-colors text-sm uppercase tracking-wider">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-[#0a1128] font-medium transition-colors text-sm uppercase tracking-wider">About</Link>
            <Link href="/admissions" className="text-gray-600 hover:text-[#0a1128] font-medium transition-colors text-sm uppercase tracking-wider">Admissions</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-[#0a1128] font-medium transition-colors text-sm uppercase tracking-wider">Campus</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0a1128] font-medium transition-colors text-sm uppercase tracking-wider">Contact</Link>
            
            <Link href="/login" className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#d4af37] to-[#f3e5ab] p-[2px] shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all">
              <div className="bg-[#0a1128] px-6 py-2.5 rounded-full group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                <Lock size={16} className="text-[#d4af37] group-hover:text-[#0a1128] transition-colors" />
                <span className="text-white group-hover:text-[#0a1128] font-bold text-sm uppercase tracking-wider transition-colors">Portal Login</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0a1128] hover:text-[#d4af37] transition-colors">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">About</Link>
            <Link href="/admissions" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Admissions</Link>
            <Link href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Campus</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md">Contact</Link>
            
            <div className="pt-4 border-t border-gray-100">
              <Link href="/login" onClick={() => setIsOpen(false)} className="w-full bg-[#0a1128] text-white px-6 py-3 rounded-lg font-bold flex justify-center items-center gap-2">
                <Lock size={18} /> Portal Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}