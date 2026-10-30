import Link from "next/link";
import { UserPlus, ClipboardList, CheckCircle, XCircle } from "lucide-react";

export default function ReceptionDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-teal-900 text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-teal-800">
          <span className="text-xl font-playfair font-bold tracking-wide">RECEPTION DESK</span>
        </div>
        <nav className="flex-1 py-6 space-y-2 px-4">
          <Link href="#" className="flex items-center gap-3 bg-white text-teal-900 px-4 py-3 rounded-lg font-semibold"><ClipboardList size={20} /> Absentee List</Link>
          <Link href="#" className="flex items-center gap-3 text-teal-200 hover:bg-white/5 px-4 py-3 rounded-lg"><UserPlus size={20} /> Create New IDs</Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <header className="mb-8 bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
          <h1 className="text-2xl font-playfair font-bold text-teal-900">Reception & Admin Center</h1>
          <p className="font-bold text-gray-600">Anudeep Sir</p>
        </header>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><ClipboardList className="text-teal-600" /> Today's Absentee List (From Teachers)</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-sm">
                <th className="p-3 border-b">Student Name</th>
                <th className="p-3 border-b">Class</th>
                <th className="p-3 border-b">Marked By</th>
                <th className="p-3 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b font-semibold">Rahul Sharma</td>
                <td className="p-3 border-b">X-A</td>
                <td className="p-3 border-b text-sm text-gray-500">Mr. Verma</td>
                <td className="p-3 border-b flex gap-2">
                  <button className="bg-green-100 text-green-700 p-1 rounded hover:bg-green-200"><CheckCircle size={20} /></button>
                  <button className="bg-red-100 text-red-700 p-1 rounded hover:bg-red-200"><XCircle size={20} /></button>
                </td>
              </tr>
            </tbody>
          </table>
          <button className="mt-4 bg-teal-600 text-white px-6 py-2 rounded font-bold hover:bg-teal-700">Finalize Today's Attendance</button>
        </div>
      </main>
    </div>
  );
}