
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://picsum.photos/id/119/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Welcome To</span>
              <div className="h-1 w-12 bg-cyan-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Pemati <span className="text-cyan-400">Plumbing</span> Services
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-50 font-medium leading-relaxed max-w-2xl">
              24 Hour Availability in NY and NJ! Knowledgable fieldworkers who can solve any plumbing issue, day or night!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg transform transition hover:-translate-y-1 active:scale-95">
                Book Emergency Service
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-bold shadow-lg transform transition hover:-translate-y-1 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 w-full max-w-lg">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 border border-white/20">
              <div className="bg-cyan-500 -mx-8 -mt-8 p-6 mb-8 text-center">
                <h3 className="text-2xl font-black text-white uppercase tracking-wider">Book A Service</h3>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter Your Name" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Write Your Message" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all active:scale-[0.98]"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
