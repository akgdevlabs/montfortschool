export default function TeacherAttendance() {
  return (
    <div>
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-playfair font-bold text-gray-800">Mark Attendance</h1>
      </header>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <p className="text-gray-500">Select Class to mark attendance.</p>
        <select className="mt-4 border p-2 rounded w-full max-w-md">
          <option>Class X-A</option>
          <option>Class IX-B</option>
        </select>
        <button className="mt-4 bg-gray-800 text-white px-6 py-2 rounded font-bold">Start Attendance</button>
      </div>
    </div>
  );
}