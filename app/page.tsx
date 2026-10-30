import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import { ArrowRight, BookOpen, Clock, CreditCard, FileText, Award, Users, Quote, Star, Monitor, Bus, Shield } from "lucide-react";
import TestimonialSlider from "../components/TestimonialSlider";
export default function Home() {
  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      
      {/* 1. DYNAMIC CAROUSEL HERO SECTION */}
      <HeroCarousel />

      {/* 2. QUICK ACCESS (Floating Card) */}
      <section className="relative z-20 -mt-16 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 border border-gray-100">
          <Link href="/login" className="flex flex-col items-center p-4 hover:bg-gray-50 transition-colors group rounded-lg">
            <div className="bg-[#0a1128]/5 text-[#0a1128] p-3 rounded-full mb-3 group-hover:scale-110 transition-transform"><CreditCard size={24} /></div>
            <span className="font-semibold text-gray-800 text-sm text-center">Pay Fees Online</span>
          </Link>
          <Link href="/login" className="flex flex-col items-center p-4 hover:bg-gray-50 transition-colors group rounded-lg">
            <div className="bg-[#0a1128]/5 text-[#0a1128] p-3 rounded-full mb-3 group-hover:scale-110 transition-transform"><FileText size={24} /></div>
            <span className="font-semibold text-gray-800 text-sm text-center">View Results</span>
          </Link>
          <Link href="/login" className="flex flex-col items-center p-4 hover:bg-gray-50 transition-colors group rounded-lg">
            <div className="bg-[#0a1128]/5 text-[#0a1128] p-3 rounded-full mb-3 group-hover:scale-110 transition-transform"><Clock size={24} /></div>
            <span className="font-semibold text-gray-800 text-sm text-center">Student Portal</span>
          </Link>
          <Link href="/admissions" className="flex flex-col items-center p-4 hover:bg-gray-50 transition-colors group rounded-lg">
            <div className="bg-[#0a1128]/5 text-[#0a1128] p-3 rounded-full mb-3 group-hover:scale-110 transition-transform"><BookOpen size={24} /></div>
            <span className="font-semibold text-gray-800 text-sm text-center">Prospectus</span>
          </Link>
        </div>
      </section>

      {/* 3. STATS SECTION */}
      <section className="py-20 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0a1128] mb-2">25+</h3>
            <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Years of Legacy</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0a1128] mb-2">1500+</h3>
            <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Happy Students</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0a1128] mb-2">50+</h3>
            <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Expert Faculty</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0a1128] mb-2">100%</h3>
            <p className="text-gray-500 font-semibold tracking-wide uppercase text-sm">Result Success</p>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAL'S MESSAGE */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#d4af37] translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Principal" 
              className="relative z-10 w-full h-[400px] object-cover object-top"
            />
          </div>
          <div>
            <Quote className="text-[#d4af37] w-12 h-12 mb-6 opacity-50" />
            <h2 className="text-3xl font-playfair font-bold text-[#0a1128] mb-6 leading-tight">
              "Education is not just about books; it's about building character."
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg italic">
              At Montfort School, we believe in the philosophy of St. Louie Marie de Montfort. Our goal is to cultivate correct attitudes towards life. We don't just prepare students for exams; we prepare them for life.
            </p>
            <div>
              <h4 className="font-bold text-[#0a1128] text-xl font-playfair">Rev. Father Thomas</h4>
              <p className="text-gray-500 text-sm">Principal, Montfort School Ambikapur</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm mb-2 block">Our Strengths</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1128] mb-16">Why Choose Montfort?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white text-[#0a1128] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3 font-playfair">Academic Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A rigorous curriculum and experienced faculty dedicated to helping students achieve their highest potential.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white text-[#0a1128] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3 font-playfair">Holistic Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">From sports to performing arts, we ensure every child discovers their hidden talents beyond the classroom.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 bg-white text-[#0a1128] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0a1128] mb-3 font-playfair">Safe Environment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">A secure, disciplined, and value-based campus where your child's safety is our top priority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAMPUS LIFE (Image Grid) */}
      <section className="py-24 bg-[#0a1128]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm mb-2 block">Explore</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white">Life at Montfort</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Classroom" className="w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Library" className="w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sports" className="w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Science Lab" className="w-full h-64 object-cover hover:opacity-80 transition-opacity cursor-pointer" />
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-white transition-colors">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FACILITIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1128]">World-Class Facilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <Monitor className="text-[#d4af37] w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-2">Smart Classrooms</h4>
                <p className="text-gray-600 text-sm">Digital boards and interactive learning to make concepts easy and fun.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <Bus className="text-[#d4af37] w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-2">Safe Transport</h4>
                <p className="text-gray-600 text-sm">GPS-enabled buses with trained drivers and attendants covering the entire city.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <BookOpen className="text-[#d4af37] w-10 h-10 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-2">Rich Library</h4>
                <p className="text-gray-600 text-sm">Thousands of books, journals, and digital resources for curious minds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS (With Dynamic 5000+ Cards Slider) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          {/* Feedback Badge */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex text-[#d4af37] mb-3 gap-1">
              <Star size={28} fill="currentColor" />
              <Star size={28} fill="currentColor" />
              <Star size={28} fill="currentColor" />
              <Star size={28} fill="currentColor" />
              <Star size={28} fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1128]">5000+ Positive Feedbacks</h2>
            <p className="text-gray-500 mt-2 text-lg">Trusted by thousands of parents in Ambikapur</p>
          </div>

          {/* DYNAMIC SLIDER YAHAN HAI */}
          <TestimonialSlider />

        </div>
      </section>

      {/* 9. NEWS & EVENTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#d4af37] font-semibold tracking-widest uppercase text-sm mb-2 block">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0a1128]">Latest News & Events</h2>
            </div>
            <Link href="/news" className="text-[#0a1128] font-semibold border-b-2 border-[#d4af37] pb-1 hidden md:block hover:text-[#d4af37] transition-colors">
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#d4af37] text-sm font-semibold mb-2">Oct 15, 2026</p>
              <h3 className="text-xl font-bold text-[#0a1128] mb-2 font-playfair group-hover:text-[#d4af37] transition-colors">Annual Sports Meet 2026 Announced</h3>
              <p className="text-gray-600 text-sm">Get ready for a display of athletic prowess and team spirit as we prepare for our annual sports day.</p>
            </div>
            
            {/* News Card 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#d4af37] text-sm font-semibold mb-2">Oct 10, 2026</p>
              <h3 className="text-xl font-bold text-[#0a1128] mb-2 font-playfair group-hover:text-[#d4af37] transition-colors">Science Exhibition Highlights</h3>
              <p className="text-gray-600 text-sm">Our young innovators showcased incredible projects, from working models to eco-friendly solutions.</p>
            </div>

            {/* News Card 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-[#d4af37] text-sm font-semibold mb-2">Oct 05, 2026</p>
              <h3 className="text-xl font-bold text-[#0a1128] mb-2 font-playfair group-hover:text-[#d4af37] transition-colors">Parent-Teacher Meeting</h3>
              <p className="text-gray-600 text-sm">An insightful session where parents and teachers collaborated to discuss student progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA BANNER */}
      <section className="bg-[#0a1128] py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">Ready to Join the Montfort Family?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Admissions for the Academic Session 2027-2028 are now open. Secure your child's future today by applying online.</p>
          <Link href="/admissions" className="bg-[#d4af37] text-[#0a1128] px-10 py-4 font-bold text-lg hover:bg-white transition-all duration-300 inline-block shadow-lg">
            Apply Online Now
          </Link>
        </div>
      </section>

    </div>
  );
}