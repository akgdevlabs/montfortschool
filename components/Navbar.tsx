import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
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
            
            <Link href="/login" className="bg-[#0a1128] text-white px-6 py-2.5 hover:bg-[#d4af37] hover:text-[#0a1128] transition-all font-medium text-sm uppercase tracking-wider">
              Portal Login
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
}