export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-white py-12 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* School Info */}
        <div>
          <h3 className="text-2xl font-playfair font-bold mb-4 text-[#d4af37]">Montfort School</h3>
          <p className="text-gray-400 leading-relaxed">
            Sargawan, Sakalo Post, Ambikapur, <br />
            Sarguja (C.G) - 497001 <br />
            Nurturing young minds with values and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li><a href="/admissions" className="hover:text-[#d4af37] transition-colors">Admissions</a></li>
            <li><a href="/results" className="hover:text-[#d4af37] transition-colors">Exam Results</a></li>
            <li><a href="/fees" className="hover:text-[#d4af37] transition-colors">Fee Payment</a></li>
            <li><a href="/gallery" className="hover:text-[#d4af37] transition-colors">Campus Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <p className="text-gray-400 mb-2">Email: montambikapur@gmail.com</p>
          <p className="text-gray-400">Phone: +91 83599 12388</p>
        </div>
        
      </div>
      <div className="text-center text-gray-500 mt-12 pt-8 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} Montfort School Ambikapur. All rights reserved.
      </div>
    </footer>
  );
}