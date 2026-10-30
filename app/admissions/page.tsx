import { CheckCircle2, FileText, ArrowRight, Download } from "lucide-react";

export default function Admissions() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Cinematic Header */}
      <section className="relative py-32 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-[#0a1128]/80"></div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-6">Begin Your Journey</h1>
          <p className="text-gray-300 text-xl mb-10 font-light">Admissions for the 2027-2028 academic session are now open. Join a legacy of excellence.</p>
          <div className="flex gap-4 justify-center">
            <a href="#form" className="bg-[#d4af37] text-[#0a1128] px-8 py-4 font-bold hover:bg-white transition-all">Apply Online</a>
            <button className="border border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-[#0a1128] transition-all flex items-center gap-2">
              <Download size={18} /> Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair font-bold text-[#0a1128]">How to Apply</h2>
        </div>
        
        <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between md:before:absolute md:before:top-1/2 md:before:left-0 md:before:w-full md:before:h-[1px] md:before:bg-gray-200 md:before:-z-10">
          {[
            { step: "1", title: "Enquiry", desc: "Fill out the online form below." },
            { step: "2", title: "Campus Visit", desc: "Schedule a tour of our facilities." },
            { step: "3", title: "Interaction", desc: "Brief meeting with the principal." },
            { step: "4", title: "Enrollment", desc: "Submit documents & pay fees." },
          ].map((item, i) => (
            <div key={i} className="mb-10 md:mb-0 relative pl-10 md:pl-0 md:w-1/4 flex flex-col md:items-center text-left md:text-center">
              <div className="absolute left-[-17px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 w-8 h-8 rounded-full bg-[#d4af37] text-[#0a1128] font-bold flex items-center justify-center border-4 border-gray-50 z-10">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form & Documents (Glassmorphism) */}
      <section id="form" className="py-24 bg-[#0a1128]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Documents List */}
          <div className="lg:col-span-2 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-8">Required Documents</h3>
            <ul className="space-y-6">
              {[
                "Birth Certificate (Original & Photocopy)",
                "Transfer Certificate (TC)",
                "Last Class Report Card",
                "Aadhar Card (Student & Parents)",
                "4 Passport Size Photographs",
              ].map((doc, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#d4af37] w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg font-light border-b border-gray-800 pb-2 w-full">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Form */}
          <div className="lg:col-span-3 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-playfair font-bold text-white mb-8">Online Enquiry</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Parent's Name" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37]" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" placeholder="Student's Name" className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#d4af37]" />
                <select className="w-full bg-[#0a1128] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]">
                  <option>Select Class</option>
                  <option>Nursery</option>
                  <option>Class I</option>
                  <option>Class IX</option>
                  <option>Class XI</option>
                </select>
              </div>
              <button type="button" className="w-full bg-[#d4af37] text-[#0a1128] font-bold py-4 rounded-lg hover:bg-white transition-colors mt-4">
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}