import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { MessageSquare, FileText, PlayCircle, Camera } from "lucide-react";

export default async function StudentHome() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const user = session.user as any;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <header className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6">
        <div className="w-24 h-24 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-3xl font-bold relative">
          {user.name.charAt(0)}
          <button className="absolute bottom-0 right-0 bg-blue-900 text-white p-1.5 rounded-full"><Camera size={14}/></button>
        </div>
        <div>
          <h1 className="text-2xl font-playfair font-bold text-blue-900">{user.name}</h1>
          <p className="text-gray-500 text-sm mt-1">Class: X-A | Roll No: 2026-015</p>
          <p className="text-gray-500 text-sm">Email: {user.email}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ask Doubt */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
           <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><MessageSquare className="text-purple-500" /> Ask a Doubt</h3>
           <select className="border p-2 rounded w-full mb-2 text-sm bg-gray-50">
              <option>Select Subject/Teacher</option>
              <option>Mathematics - Mr. Verma</option>
           </select>
           <textarea rows={3} placeholder="Type your doubt here... (Only teacher will see this)" className="border p-2 rounded w-full mb-2 text-sm"></textarea>
           <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-bold hover:bg-purple-700 w-full">Send Doubt</button>
        </div>

        {/* Notes & Videos */}
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
           <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><FileText className="text-yellow-500" /> Study Material</h3>
           <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
                 <div className="flex items-center gap-3">
                   <PlayCircle className="text-red-500" size={20} />
                   <span className="text-sm font-semibold">Maths Chapter 1 Video</span>
                 </div>
                 <button className="text-blue-600 text-xs font-bold hover:underline">Watch</button>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
                 <div className="flex items-center gap-3">
                   <FileText className="text-blue-500" size={20} />
                   <span className="text-sm font-semibold">Trigonometry Notes (PDF)</span>
                 </div>
                 <button className="text-blue-600 text-xs font-bold hover:underline">Download</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}