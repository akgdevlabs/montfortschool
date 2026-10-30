import Link from "next/link";
import { LayoutDashboard, CreditCard, CalendarCheck, AlertTriangle } from "lucide-react";

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* SIDEBAR (Yeh left side mein dikhega) */}
      <aside className="w-64 bg-[#0a1128] text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-playfair font-bold tracking-wide">PARENT PORTAL</span>
        </div>
        
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="/dashboard/parent" className="flex items-center gap-3 bg-[#d4af37] text-[#0a1128] px-4 py-3 rounded-lg font-semibold shadow-md">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link href="/dashboard/parent/fees" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">
            <CreditCard size={20} /> Fee Payment
          </Link>
          <Link href="/dashboard/parent/attendance" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">
            <CalendarCheck size={20} /> Attendance
          </Link>
          <Link href="/dashboard/parent/remarks" className="flex items-center gap-3 text-gray-300 hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">
            <AlertTriangle size={20} /> Remarks
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT (Jo aapko abhi dikh raha hai) */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}