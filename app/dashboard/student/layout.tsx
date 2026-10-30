import Link from "next/link";
import { UserCircle, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-blue-50 flex">
      <aside className="w-64 bg-blue-900 text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-playfair font-bold tracking-wide">STUDENT PORTAL</span>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="/dashboard/student" className="flex items-center gap-3 bg-white text-blue-900 px-4 py-3 rounded-lg font-semibold"><UserCircle size={20} /> My Profile</Link>
          <Link href="/dashboard/student/timetable" className="flex items-center gap-3 text-blue-200 hover:bg-white/5 px-4 py-3 rounded-lg"><Calendar size={20} /> Timetable</Link>
          <Link href="/dashboard/student/attendance" className="flex items-center gap-3 text-blue-200 hover:bg-white/5 px-4 py-3 rounded-lg"><CheckCircle size={20} /> My Attendance</Link>
          <Link href="/dashboard/student/remarks" className="flex items-center gap-3 text-blue-200 hover:bg-white/5 px-4 py-3 rounded-lg"><AlertTriangle size={20} /> Teacher Remarks</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}