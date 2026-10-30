import { Quote, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm mb-4 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#0a1128] leading-[1.05] mb-8">
            Nurturing Minds,<br />
            <span className="text-gray-400">Shaping Characters.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Montfort School is not just an institution; it is a community where tradition meets modern innovation. For decades, we have been the cornerstone of quality education in Ambikapur.
          </p>
        </div>
      </section>

      {/* Overlapping Images Section */}
      <section className="px-4 max-w-7xl mx-auto pb-24">
        <div className="relative h-[500px] w-full flex items-center justify-center">
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Campus Main" 
            className="absolute left-0 top-0 w-3/4 h-[400px] object-cover shadow-2xl z-10"
          />
          {/* Small Overlapping Image */}
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
            alt="Students" 
            className="absolute right-0 bottom-0 w-1/2 h-[300px] object-cover border-8 border-white shadow-2xl z-20"
          />
          {/* Gold Accent Box */}
          <div className="absolute left-[60%] top-[10%] w-32 h-32 bg-[#d4af37] z-0"></div>
        </div>
      </section>

      {/* Mission & Vision (Dark Premium Section) */}
      <section className="bg-[#0a1128] py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border-l-2 border-[#d4af37] pl-8">
            <Target className="text-[#d4af37] w-10 h-10 mb-6" />
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              To provide a transformative educational experience that empowers students to become intellectually curious, morally upright, and socially responsible global citizens.
            </p>
          </div>
          <div className="border-l-2 border-[#d4af37] pl-8">
            <Eye className="text-[#d4af37] w-10 h-10 mb-6" />
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              To be recognized globally as a center of academic excellence and character formation, where every child is inspired to reach their fullest potential.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message (Minimalist) */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <Quote className="text-[#d4af37] w-20 h-20 mx-auto mb-10 opacity-30" />
        <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#0a1128] leading-tight mb-12">
          "We believe in the philosophy of cultivating correct attitudes. Education here is a journey of self-discovery."
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Principal" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-[#0a1128] text-lg font-playfair">Rev. Father Thomas</h4>
            <p className="text-gray-500 text-sm">Principal</p>
          </div>
        </div>
      </section>

    </div>
  );
}