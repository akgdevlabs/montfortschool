import { CalendarCheck, CheckCircle2, XCircle, Clock, FileText } from "lucide-react";

export default function ParentAttendance() {
  const attendanceData = [
    { date: "29 Oct 2026", day: "Thursday", status: "Present", checkIn: "08:45 AM", remark: "On Time" },
    { date: "28 Oct 2026", day: "Wednesday", status: "Present", checkIn: "08:50 AM", remark: "-" },
    { date: "27 Oct 2026", day: "Tuesday", status: "Absent", checkIn: "-", remark: "Fever (Informed)" },
    { date: "26 Oct 2026", day: "Monday", status: "Present", checkIn: "08:40 AM", remark: "-" },
    { date: "25 Oct 2026", day: "Sunday", status: "Holiday", checkIn: "-", remark: "Weekly Off" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0a1128] flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-[#0a1128] flex items-center gap-2">
            <CalendarCheck className="text-[#d4af37]" /> Child's Attendance
          </h1>
          <p className="text-gray-500 text-sm mt-1">Student: Test Child | Class: X-A | Roll No: 2026-015</p>
        </div>
        <button className="text-sm font-bold text-[#0a1128] flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">
          <FileText size={16} /> Apply for Leave
        </button>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-semibold mb-2">Overall Attendance</p>
            <p className="text-4xl font-bold text-green-600">92%</p>
            <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1"><CheckCircle2 size={14}/> Good Standing</p>
          </div>
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
            <CalendarCheck className="text-green-500" size={32} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-semibold mb-2">Total Present</p>
            <p className="text-4xl font-bold text-gray-800">112 <span className="text-lg text-gray-400 font-normal">/ 120</span></p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-semibold mb-2">Total Absent</p>
            <p className="text-4xl font-bold text-red-600">08</p>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">Recent Attendance History</h3>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-gray-500 text-sm border-b">
              <th className="p-4 font-semibold">Date & Day</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Check-in Time</th>
              <th className="p-4 font-semibold">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                <td className="p-4">
                  <p className="font-bold text-gray-800">{record.date}</p>
                  <p className="text-xs text-gray-500">{record.day}</p>
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max ${
                    record.status === 'Present' ? 'bg-green-50 text-green-700' : 
                    record.status === 'Absent' ? 'bg-red-50 text-red-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {record.status === 'Present' ? <CheckCircle2 size={14} /> : 
                     record.status === 'Absent' ? <XCircle size={14} /> : <Clock size={14} />}
                    {record.status}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-600">{record.checkIn}</td>
                <td className="p-4 text-sm text-gray-500">{record.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}