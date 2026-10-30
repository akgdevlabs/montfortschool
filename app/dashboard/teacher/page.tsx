import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Camera, Mail, BookOpen, Clock } from "lucide-react";

export default async function TeacherProfile() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const user = session.user as any;

  return (
    <div>
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-800 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-gray-800">Welcome, {user.name}</h1>
          <p className="text-gray-500 text-sm mt-1">Class Teacher: X-A | Subject: Mathematics</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
          <div className="relative mb-4">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-5xl font-bold">
              {user.name.charAt(0)}
            </div>
            <button className="absolute bottom-0 right-0 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
              <Camera size={18} />
            </button>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 text-sm">Teacher ID: EMP-2026-01</p>
          
          <div className="w-full mt-6 space-y-3">
             <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded"><Mail size={16}/> {user.email}</div>
             <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded"><BookOpen size={16}/> 5 Classes Assigned</div>
          </div>
        </div>

        {/* Schedule Card */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Clock size={20}/> Today's Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold text-gray-700">Class X-A (Maths)</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">09:00 AM - 09:45 AM</span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="font-semibold text-gray-700">Class IX-B (Maths)</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">10:00 AM - 10:45 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}