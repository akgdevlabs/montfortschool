import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Users, Phone, AlertTriangle } from "lucide-react";

export default async function ParentDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const user = session.user as any;

  const teachers = [
    { name: "Mr. Verma", subject: "Mathematics", phone: "+919876543210" },
    { name: "Mrs. Sharma", subject: "Science", phone: "+919876543211" },
  ];

  return (
    <div>
      <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm">
        <h1 className="text-2xl font-playfair font-bold text-[#0a1128]">Welcome, {user.name}</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
           <h3 className="text-gray-500 text-sm font-semibold mb-2">Child's Attendance</h3>
           <p className="text-3xl font-bold text-green-600">92%</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
           <h3 className="text-gray-500 text-sm font-semibold mb-2">Pending Fees</h3>
           <p className="text-3xl font-bold text-red-600">₹ 15,000</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-xl font-playfair font-bold text-[#0a1128] mb-4 flex items-center gap-2">
          <Users className="text-[#d4af37]"/> Know Your Child's Teachers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teachers.map((t, i) => (
            <div key={i} className="border border-gray-100 p-4 rounded-lg flex justify-between items-center bg-gray-50">
              <div>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.subject}</p>
              </div>
              <a href={`tel:${t.phone}`} className="bg-[#0a1128] text-white p-2 rounded-full hover:bg-[#d4af37] transition-colors">
                <Phone size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
        <h3 className="text-xl font-playfair font-bold text-[#0a1128] mb-4 flex items-center gap-2">
          <AlertTriangle className="text-red-500"/> Recent Remarks by Teachers
        </h3>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <p className="text-sm font-bold text-gray-800 mb-1">Mathematics - Mr. Verma</p>
            <p className="text-gray-700 text-sm">"Your ward has not submitted the homework for the last 3 days. Please look into this matter."</p>
            <p className="text-xs text-gray-500 mt-2">Date: 24 Oct 2026</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <p className="text-sm font-bold text-gray-800 mb-1">Science - Mrs. Sharma</p>
            <p className="text-gray-700 text-sm">"Good improvement in the recent test. Keep it up!"</p>
            <p className="text-xs text-gray-500 mt-2">Date: 20 Oct 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}