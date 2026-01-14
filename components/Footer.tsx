
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter / CTA */}
        <div className="bg-cyan-500 rounded-3xl p-12 -mt-40 mb-20 relative z-30 shadow-2xl flex flex-col items-center text-center">
           <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">24 Hour Availability, Call Today!</h2>
           <button className="bg-white hover:bg-gray-100 text-cyan-600 px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-wide">
             Get a free quote
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center">
                   <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                   </svg>
                </div>
                <div>
                   <h3 className="text-3xl font-black tracking-tighter">PEMATI</h3>
                   <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">Plumbing Services</p>
                </div>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
               Providing expert plumbing solutions with integrity and excellence across New York and New Jersey for over a decade.
             </p>
          </div>

          {/* Yelp Link */}
          <div className="flex flex-col items-center">
             <h4 className="text-xl font-bold mb-6">Visit Our Yelp Page!</h4>
             <a href="#" className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-4 hover:scale-110 transition-transform shadow-lg">
                <img src="https://picsum.photos/id/102/100/100" alt="Yelp" className="w-full grayscale brightness-50" />
             </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Drain Cleaning', 'Installation', 'Emergencies', 'Maintenance Plans'].map((item) => (
                <li key={item} className="flex items-center group">
                  <span className="text-blue-500 mr-2 transform group-hover:translate-x-1 transition-transform">▶</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4">
              {['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Northern NJ'].map((item) => (
                <li key={item} className="flex items-center group">
                   <span className="text-blue-500 mr-2 transform group-hover:translate-x-1 transition-transform">▶</span>
                   <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Pemati Plumbing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
