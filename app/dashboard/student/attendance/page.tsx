import { CheckCircle2, XCircle, Clock } from "lucide-react";

export default function StudentAttendance() {
  const attendance = [
    { date: "29 Oct 2026", status: "Present", time: "08:55 AM" },
    { date: "28 Oct 2026", status: "Present", time: "08:50 AM" },
    { date: "27 Oct 2026", status: "Absent", time: "-" },
    { date: "26 Oct 2026", status: "Present", time: "09:00 AM" },
    { date: "25 Oct 2026", status: "Present", time: "08:45 AM" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-gray-800 flex items-center gap-2">
            <CheckCircle2 className="text-green-500" /> My Attendance
          </h1>
          <p className="text-gray-500 text-sm mt-1">Overall Attendance: <span className="text-green-600 font-bold text-lg">92%</span></p>
        </div>
        <div className="text-right">
           <p className="text-sm text-gray-500">Total Working Days</p>
           <p className="font-bold text-gray-800 text-xl">120</p>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 border-b font-semibold">Date</th>
              <th className="p-4 border-b font-semibold">Status</th>
              <th className="p-4 border-b font-semibold">Check-in Time</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-medium text-gray-800">{record.date}</td>
                <td className="p-4 border-b">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${record.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {record.status}
                  </span>
                </td>
                <td className="p-4 border-b text-sm text-gray-500">{record.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}