"use client";
import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Yahan humne 6 alag-alag feedbacks ka data dala hai (Aap isme 50+ bhi daal sakte hain)
const reviews = [
  { id: 1, name: "Mrs. Sharma", class: "Parent of Class VIII", text: "Montfort School has been a blessing for my child. The teachers are incredibly supportive, and the focus on moral values alongside academics is exactly what we wanted." },
  { id: 2, name: "Mr. Verma", class: "Parent of Class V", text: "The infrastructure and facilities are top-notch. My son loves the sports activities and the science labs. We feel secure knowing he is in good hands." },
  { id: 3, name: "Mrs. Gupta", class: "Parent of Class X", text: "The board results have been consistently excellent. The school management is very transparent and keeps parents updated with regular PTMs." },
  { id: 4, name: "Mr. Singh", class: "Parent of Class III", text: "Best school in Ambikapur! The focus on holistic development is visible. My daughter has become much more confident and outgoing." },
  { id: 5, name: "Dr. Tiwari", class: "Parent of Class XII", text: "The career guidance and counselling sessions provided by the school are exceptional. It really helped my child choose the right path." },
  { id: 6, name: "Mrs. Das", class: "Parent of Class I", text: "The teachers are so caring. As a parent, sending my child to Montfort gives me peace of mind. The campus is very safe and disciplined." },
];

export default function TestimonialSlider() {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex + 2 < reviews.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Wapas shuru se
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(reviews.length - 2);
    }
  };

  return (
    <div className="w-full relative px-4">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-6 z-10">
        <button onClick={prevSlide} className="bg-white p-3 rounded-full shadow-lg hover:bg-[#d4af37] hover:text-white transition-colors border border-gray-100">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-6 z-10">
        <button onClick={nextSlide} className="bg-white p-3 rounded-full shadow-lg hover:bg-[#d4af37] hover:text-white transition-colors border border-gray-100">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto overflow-hidden">
        {reviews.slice(startIndex, startIndex + 2).map((review) => (
          <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left relative animate-fade-in">
            <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
            <div className="flex text-[#d4af37] mb-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic min-h-[80px]">"{review.text}"</p>
            <div>
              <h4 className="font-bold text-[#0a1128]">{review.name}</h4>
              <p className="text-gray-500 text-sm">{review.class} Student</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
