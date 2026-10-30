export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-96" },
    { url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-64" },
    { url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-80" },
    { url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-64" },
    { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-96" },
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-80" },
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-64" },
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", h: "h-96" },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      
      {/* Minimal Header */}
      <section className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#0a1128] mb-4">Life at Montfort</h1>
        <p className="text-gray-500 text-lg">Capturing moments of joy, learning, and triumph.</p>
      </section>

      {/* Masonry Grid using CSS Columns */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden cursor-pointer rounded-sm">
              <img 
                src={img.url} 
                alt={`Gallery ${index}`} 
                className={`w-full ${img.h} object-cover transition-transform duration-700 group-hover:scale-105`}
              />
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-[#0a1128]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <span className="w-12 h-[1px] bg-[#d4af37] mb-4"></span>
                <p className="text-[#d4af37] font-playfair tracking-widest uppercase text-sm">View Moment</p>
                <span className="w-12 h-[1px] bg-[#d4af37] mt-4"></span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}