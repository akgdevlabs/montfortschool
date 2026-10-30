import Link from "next/link";
import { Shield, Sparkles, TrendingUp, Users } from "lucide-react";

export default function PrincipalDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <aside className="w-64 bg-[#0a1128] text-white hidden md:flex flex-col border-r-4 border-[#d4af37]">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-playfair font-bold tracking-wide text-[#d4af37]">PRINCIPAL'S OFFICE</span>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="#" className="flex items-center gap-3 bg-white/10 text-white px-4 py-3 rounded-lg font-semibold"><Shield size={20} /> Institutional Overview</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-[#0a1128]">Welcome to the Principal's Desk</h1>
          <p className="text-gray-600 mt-2">Guiding the vision and nurturing the future of Montfort School.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#d4af37]">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Total Students</h3>
            <p className="text-4xl font-bold text-[#0a1128]">1,540</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#d4af37]">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Total Faculty</h3>
            <p className="text-4xl font-bold text-[#0a1128]">75</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#d4af37]">
            <h3 className="text-gray-500 text-sm font-semibold mb-2">Overall Attendance</h3>
            <p className="text-4xl font-bold text-green-600">95%</p>
          </div>
        </div>
        
        <div className="mt-8 bg-[#0a1128] text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
           <Sparkles className="absolute right-4 top-4 text-[#d4af37] opacity-20 w-24 h-24" />
           <h3 className="text-2xl font-playfair font-bold text-[#d4af37] mb-4">Message from the Principal</h3>
           <p className="text-gray-300 italic max-w-3xl">"Education is the most powerful weapon which you can use to change the world. At Montfort, we are committed to shaping not just brilliant minds, but compassionate hearts."</p>
        </div>
      </main>
    </div>
  );
}