"use client";
import { useState } from "react";
import { Search, Phone, Send } from "lucide-react";

// MOCK DATABASE (Real app mein yeh API se aayega)
const MOCK_STUDENTS = [
  { id: 1, name: "Ansh", class: "Class 3", fatherName: "Shreenivas", phone: "+919876543210" },
  { id: 2, name: "Ansh", class: "Class 7", fatherName: "Rajesh", phone: "+919876543211" },
  { id: 3, name: "Ansh", class: "Class 10", fatherName: "Shreenivas", phone: "+919876543212" },
  { id: 4, name: "Rahul", class: "Class 10", fatherName: "Verma", phone: "+919876543213" },
];

export default function IssueRemarks() {
  const [searchName, setSearchName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [studentData, setStudentData] = useState<any>(null);
  const [smsText, setSmsText] = useState("");

  // Jab naam type ho, toh us naam ke saare students dhundo
  const matchedStudents = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchName.toLowerCase()) && searchName.length > 0
  );

  // Jab class select ho, toh data auto-fill karo
  const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cls = e.target.value;
    setSelectedClass(cls);
    if (cls) {
      const student = matchedStudents.find(s => s.class === cls);
      setStudentData(student);
    } else {
      setStudentData(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-playfair font-bold text-gray-800 flex items-center gap-2">
          Issue Student Remark / Complaint
        </h1>
        <p className="text-gray-500 text-sm mt-1">Search a student to send a warning or notify parents via SMS.</p>
      </header>

      <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="e.g. Ansh"
                value={searchName}
                onChange={(e) => { setSearchName(e.target.value); setSelectedClass(""); setStudentData(null); }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none"
              />
            </div>
          </div>

          {/* Class Dropdown (Dynamic based on Name) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
            <select 
              onChange={handleClassSelect}
              disabled={matchedStudents.length === 0}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none bg-gray-50 disabled:opacity-50"
            >
              <option value="">{matchedStudents.length > 0 ? "-- Select matching class --" : "Type name first"}</option>
              {matchedStudents.map(s => (
                <option key={s.id} value={s.class}>{s.class}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Auto-filled Data Section */}
        {studentData && (
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Father's Name:</p>
              <p className="font-bold text-gray-800">{studentData.fatherName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Parent's Contact:</p>
              <p className="font-bold text-gray-800">{studentData.phone}</p>
            </div>
            <a 
              href={`tel:${studentData.phone}`}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors text-sm font-bold"
            >
              <Phone size={16} /> Call Parent
            </a>
          </div>
        )}

        {/* Text area for SMS */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Write SMS Message to Parent</label>
          <textarea 
            rows={4}
            value={smsText}
            onChange={(e) => setSmsText(e.target.value)}
            placeholder="Dear Parent, this is to inform you that..."
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-red-500 outline-none"
          ></textarea>
          <p className="text-xs text-gray-500 mt-2">The message you type here will be sent exactly as it is.</p>
        </div>

        <button 
          disabled={!studentData || !smsText}
          className="w-full bg-red-600 text-white px-4 py-3 rounded font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
        >
          <Send size={18} /> Send SMS to Parent
        </button>
      </div>
    </div>
  );
}