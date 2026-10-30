import Link from "next/link";
import { UserCircle, ClipboardList, FileText, MessageSquare, AlertTriangle } from "lucide-react";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-gray-700">
          <span className="text-xl font-playfair font-bold tracking-wide">TEACHER PANEL</span>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="/dashboard/teacher" className="flex items-center gap-3 text-gray-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors">
            <UserCircle size={20} /> My Profile
          </Link>
          <Link href="/dashboard/teacher/attendance" className="flex items-center gap-3 text-gray-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors">
            <ClipboardList size={20} /> Mark Attendance
          </Link>
          <Link href="/dashboard/teacher/notes" className="flex items-center gap-3 text-gray-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors">
            <FileText size={20} /> Notes/Videos
          </Link>
          <Link href="/dashboard/teacher/doubts" className="flex items-center gap-3 text-gray-300 hover:bg-white/10 px-4 py-3 rounded-lg transition-colors">
            <MessageSquare size={20} /> Student Doubts
          </Link>
          <Link href="/dashboard/teacher/remarks" className="flex items-center gap-3 bg-red-600 text-white px-4 py-3 rounded-lg font-semibold shadow-md">
            <AlertTriangle size={20} /> Issue Remarks
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}