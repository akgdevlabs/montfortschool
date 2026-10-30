import { Calendar } from "lucide-react";

export default function StudentTimetable() {
  const schedule = [
    { time: "09:00 AM - 09:45 AM", subject: "Mathematics", teacher: "Mr. Verma" },
    { time: "10:00 AM - 10:45 AM", subject: "Science", teacher: "Mrs. Sharma" },
    { time: "11:00 AM - 11:45 AM", subject: "English", teacher: "Ms. Dias" },
    { time: "12:00 PM - 12:45 PM", subject: "Social Science", teacher: "Mr. Singh" },
    { time: "02:00 PM - 02:45 PM", subject: "Computer Science", teacher: "Mr. Khan" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-900">
        <h1 className="text-2xl font-playfair font-bold text-blue-900 flex items-center gap-2">
          <Calendar className="text-blue-900" /> My Class Timetable
        </h1>
        <p className="text-gray-500 text-sm mt-1">Class X-A | Monday Schedule</p>
      </header>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm">
              <th className="p-4 border-b font-semibold">Time</th>
              <th className="p-4 border-b font-semibold">Subject</th>
              <th className="p-4 border-b font-semibold">Teacher</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, i) => (
              <tr key={i} className="hover:bg-blue-50 transition-colors">
                <td className="p-4 border-b text-sm text-gray-600">{item.time}</td>
                <td className="p-4 border-b font-bold text-gray-800">{item.subject}</td>
                <td className="p-4 border-b text-sm text-gray-500">{item.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}