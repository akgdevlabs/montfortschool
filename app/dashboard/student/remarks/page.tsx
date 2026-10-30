import { AlertTriangle, ThumbsUp } from "lucide-react";

export default function StudentRemarks() {
  const remarks = [
    { 
      teacher: "Mr. Verma", 
      subject: "Mathematics", 
      date: "24 Oct 2026", 
      type: "warning",
      text: "Homework for the last 3 days has not been submitted. Please complete it by tomorrow." 
    },
    { 
      teacher: "Mrs. Sharma", 
      subject: "Science", 
      date: "20 Oct 2026", 
      type: "positive",
      text: "Excellent performance in the science project. Your working model was very creative." 
    },
    { 
      teacher: "Ms. Dias", 
      subject: "English", 
      date: "15 Oct 2026", 
      type: "warning",
      text: "Talking during the lecture. Please maintain discipline in class." 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
        <h1 className="text-2xl font-playfair font-bold text-gray-800 flex items-center gap-2">
          <AlertTriangle className="text-yellow-500" /> Teacher's Remarks
        </h1>
        <p className="text-gray-500 text-sm mt-1">Feedback and warnings issued by your teachers.</p>
      </header>

      <div className="space-y-4">
        {remarks.map((remark, i) => (
          <div key={i} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${remark.type === 'warning' ? 'border-red-500' : 'border-green-500'}`}>
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${remark.type === 'warning' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                  {remark.type === 'warning' ? <AlertTriangle size={20} /> : <ThumbsUp size={20} />}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{remark.teacher}</p>
                  <p className="text-xs text-gray-500">{remark.subject}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{remark.date}</span>
            </div>
            <p className={`text-sm ${remark.type === 'warning' ? 'text-red-700 bg-red-50' : 'text-green-700 bg-green-50'} p-3 rounded-lg`}>
              "{remark.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}