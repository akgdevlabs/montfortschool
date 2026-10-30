import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-[#0a1128] py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg">We're here to answer your questions and welcome you to our campus.</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info & Map */}
        <div>
          <h2 className="text-3xl font-playfair font-bold text-[#0a1128] mb-8">Get in Touch</h2>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <MapPin className="text-[#d4af37] w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-1">Our Campus</h4>
                <p className="text-gray-600">Sargawan, Sakalo Post, Ambikapur, Sarguja (C.G) - 497001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Phone className="text-[#d4af37] w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-1">Phone</h4>
                <p className="text-gray-600">+91 83599 12388<br />+91 62626 031272</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Mail className="text-[#d4af37] w-6 h-6 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#0a1128] mb-1">Email</h4>
                <p className="text-gray-600">montambikapur@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4492508689833!2d83.1549153!3d23.1252461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39897f91690b682f%3A0xc3f92f4a8795f881!2sMontfort%20School%20Ambikapur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 h-fit">
          <h2 className="text-2xl font-playfair font-bold text-[#0a1128] mb-6">Send us a Message</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all" placeholder="Write your message here..."></textarea>
            </div>
            <button type="button" className="w-full bg-[#0a1128] text-white py-4 rounded-lg font-bold hover:bg-[#d4af37] hover:text-[#0a1128] transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}