"use client";
import { useState } from "react";
import { MessageSquare, Send, User, Clock } from "lucide-react";

// DUMMY DATA (Baad mein isko database se connect karenge)
const mockDoubts = [
  {
    id: 1,
    studentName: "Rahul Sharma",
    className: "Class X-A",
    subject: "Mathematics",
    time: "2 hours ago",
    question: "Sir, I didn't understand the derivation of Newton's second law. Can you please explain it in tomorrow's class?",
  },
  {
    id: 2,
    studentName: "Sneha Patel",
    className: "Class IX-B",
    subject: "Science",
    time: "Yesterday",
    question: "Ma'am, is the syllabus for the upcoming test only till Chapter 3? Will there be numericals?",
  },
  {
    id: 3,
    studentName: "Ansh Verma",
    className: "Class X-A",
    subject: "Mathematics",
    time: "2 days ago",
    question: "Sir, I missed the last class. Can you please share the notes for Trigonometry?",
  }
];

export default function TeacherDoubts() {
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});

  const handleReply = (id: number) => {
    if (!replyText[id]) return;
    alert(`Reply sent to student: "${replyText[id]}"`);
    // Yahan hum baad mein API call karenge jo reply database mein save karega
    setReplyText({ ...replyText, [id]: "" }); 
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
        <h1 className="text-2xl font-playfair font-bold text-gray-800">Student Doubts</h1>
        <p className="text-gray-500 text-sm mt-1">Answer queries from your students. Only you and the student can see this.</p>
      </header>

      <div className="space-y-6">
        {mockDoubts.map((doubt) => (
          <div key={doubt.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            
            {/* Student Info Header */}
            <div className="flex justify-between items-start mb-4 border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{doubt.studentName}</p>
                  <p className="text-xs text-gray-500">{doubt.className} • {doubt.subject}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={14} /> {doubt.time}
              </div>
            </div>

            {/* Question */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4 flex gap-3">
              <MessageSquare className="text-gray-400 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 text-sm leading-relaxed">"{doubt.question}"</p>
            </div>

            {/* Reply Section */}
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your reply..." 
                value={replyText[doubt.id] || ""}
                onChange={(e) => setReplyText({ ...replyText, [doubt.id]: e.target.value })}
                className="flex-1 border border-gray-300 p-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                onKeyDown={(e) => { if (e.key === 'Enter') handleReply(doubt.id) }}
              />
              <button 
                onClick={() => handleReply(doubt.id)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2 text-sm"
              >
                <Send size={16} /> Reply
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}