import { CreditCard, Download, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";

export default function ParentFees() {
  const feeDetails = [
    { id: 1, term: "Term 1 (Apr - Sep)", amount: "₹ 25,000", dueDate: "15 Apr 2026", status: "Paid" },
    { id: 2, term: "Term 2 (Oct - Mar)", amount: "₹ 20,000", dueDate: "15 Oct 2026", status: "Paid" },
    { id: 3, term: "Transport Fee (Annual)", amount: "₹ 10,000", dueDate: "01 Nov 2026", status: "Pending" },
    { id: 4, term: "Exam Fee (Half Yearly)", amount: "₹ 5,000", dueDate: "10 Nov 2026", status: "Pending" },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <header className="mb-8 bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#0a1128] flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-playfair font-bold text-[#0a1128] flex items-center gap-2">
            <CreditCard className="text-[#d4af37]" /> Fee Details & Payment
          </h1>
          <p className="text-gray-500 text-sm mt-1">Student: Test Child | Class: X-A | Roll No: 2026-015</p>
        </div>
      </header>

      {/* Fee Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-semibold mb-2">Total Annual Fee</p>
          <p className="text-3xl font-bold text-gray-800">₹ 60,000</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-semibold mb-2">Amount Paid</p>
          <p className="text-3xl font-bold text-green-600">₹ 45,000</p>
        </div>
        <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 opacity-10 rounded-bl-full"></div>
          <p className="text-red-500 text-sm font-semibold mb-2">Pending Amount</p>
          <p className="text-3xl font-bold text-red-600">₹ 15,000</p>
        </div>
      </div>

      {/* Payment Action Box */}
      <div className="bg-[#0a1128] rounded-xl p-8 mb-8 flex flex-col md:flex-row justify-between items-center shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <CreditCard size={150} className="text-white transform translate-x-4 -translate-y-4" />
        </div>
        <div className="mb-6 md:mb-0 relative z-10 text-center md:text-left">
          <h2 className="text-2xl font-playfair font-bold text-white mb-2">Clear Your Dues</h2>
          <p className="text-gray-300 text-sm">Pay securely via UPI, Credit/Debit Card, or Net Banking.</p>
        </div>
        <button className="relative z-10 bg-[#d4af37] text-[#0a1128] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center gap-2">
          <ShieldCheck size={20} /> Pay ₹ 15,000 Now
        </button>
      </div>

      {/* Fee History Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">Fee Breakdown & History</h3>
          <button className="text-[#0a1128] text-sm font-bold flex items-center gap-2 hover:underline">
            <Download size={16} /> Download Statement
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-gray-500 text-sm border-b">
              <th className="p-4 font-semibold">Fee Description</th>
              <th className="p-4 font-semibold">Due Date</th>
              <th className="p-4 font-semibold">Amount</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {feeDetails.map((fee) => (
              <tr key={fee.id} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                <td className="p-4 font-medium text-gray-800">{fee.term}</td>
                <td className="p-4 text-sm text-gray-500">{fee.dueDate}</td>
                <td className="p-4 font-bold text-gray-800">{fee.amount}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 w-max ${
                    fee.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {fee.status === 'Paid' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                    {fee.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  {fee.status === 'Paid' ? (
                    <button className="text-blue-600 text-sm font-semibold hover:underline">Receipt</button>
                  ) : (
                    <button className="bg-red-600 text-white px-4 py-1.5 rounded text-sm font-bold hover:bg-red-700">Pay Now</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}