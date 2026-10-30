import { FileText, PlayCircle, Upload } from "lucide-react";

export default function TeacherNotes() {
  return (
    <div>
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-gray-800">Notes & Video Lectures</h1>
          <p className="text-gray-500 text-sm mt-1">Upload study material for your students.</p>
        </div>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-700">
          <Upload size={18} /> Upload New
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><PlayCircle className="text-red-500"/> Uploaded Videos</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
              <div>
                <p className="font-semibold text-sm">Maths Chapter 1 - Real Numbers</p>
                <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
              </div>
              <button className="text-red-500 font-bold text-sm hover:underline">View</button>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
              <div>
                <p className="font-semibold text-sm">Maths Chapter 2 - Polynomials</p>
                <p className="text-xs text-gray-500">Uploaded 1 week ago</p>
              </div>
              <button className="text-red-500 font-bold text-sm hover:underline">View</button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><FileText className="text-blue-500"/> Uploaded Notes (PDF)</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded border">
              <div>
                <p className="font-semibold text-sm">Trigonometry Formula Sheet</p>
                <p className="text-xs text-gray-500">2.4 MB</p>
              </div>
              <button className="text-blue-500 font-bold text-sm hover:underline">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}