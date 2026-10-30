import { AlertTriangle, ThumbsUp, MessageSquare, User } from "lucide-react";

export default function ParentRemarks() {
  const remarks = [
    {
      id: 1,
      teacher: "Mr. Verma",
      subject: "Mathematics",
      date: "24 Oct 2026",
      type: "warning",
      text: "Your ward has not submitted the homework for the last 3 days. Please look into this matter and ensure it is completed by tomorrow."
    },
    {
      id: 2,
      teacher: "Mrs. Sharma",
      subject: "Science",
      date: "20 Oct 2026",
      type: "positive",
      text: "Excellent performance in the science project. Your working model was very creative and well-researched."
    },
    {
      id: 3,
      teacher: "Ms. Dias",
      subject: "English",
      date: "15 Oct 2026",
      type: "warning",
      text: "Talking during the lecture and disturbing the class. Please maintain discipline."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0a1128]">
        <h1 className="text-2xl font-playfair font-bold text-[#0a1128] flex items-center gap-2">
          <MessageSquare className="text-[#d4af37]" /> Teacher's Remarks & Feedback
        </h1>
        <p className="text-gray-500 text-sm mt-1">Review the feedback and warnings issued by teachers for your child.</p>
      </header>

      {/* Filter Tabs (Visual Only) */}
      <div className="flex gap-2 mb-6">
        <button className="bg-[#0a1128] text-white px-6 py-2 rounded-lg font-bold text-sm">All Remarks</button>
        <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-50">Positive</button>
        <button className="bg-white text-gray-600 border border-gray-200 px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-50">Warnings</button>
      </div>

      {/* Remarks List */}
      <div className="space-y-4">
        {remarks.map((remark) => (
          <div 
            key={remark.id} 
            className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${
              remark.type === 'warning' ? 'border-red-500' : 'border-green-500'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  remark.type === 'warning' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'
                }`}>
                  {remark.type === 'warning' ? <AlertTriangle size={20} /> : <ThumbsUp size={20} />}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{remark.teacher}</p>
                  <p className="text-xs text-gray-500">{remark.subject} Teacher</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                {remark.date}
              </span>
            </div>
            
            <div className={`p-4 rounded-lg text-sm leading-relaxed ${
              remark.type === 'warning' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
            }`}>
              "{remark.text}"
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}