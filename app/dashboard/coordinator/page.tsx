import Link from "next/link";
import { Megaphone, FileText } from "lucide-react";

export default function CoordinatorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-purple-900 text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-purple-800">
          <span className="text-xl font-playfair font-bold tracking-wide">COORDINATOR PANEL</span>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="#" className="flex items-center gap-3 bg-white text-purple-900 px-4 py-3 rounded-lg font-semibold"><Megaphone size={20} /> Host Notice</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl font-playfair font-bold text-purple-900">Coordinator Notice Board</h1>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Create New Notice</h3>
          <form className="space-y-4">
             <input type="text" placeholder="Notice Title" className="border p-2 rounded w-full" />
             <select className="border p-2 rounded w-full">
                <option>Target Audience: All Students</option>
                <option>Target Audience: Teachers</option>
             </select>
             <textarea rows={4} placeholder="Notice details..." className="border p-2 rounded w-full"></textarea>
             <button type="button" className="bg-purple-700 text-white px-6 py-2 rounded font-bold hover:bg-purple-800">Publish Notice</button>
          </form>
        </div>
      </main>
    </div>
  );
}