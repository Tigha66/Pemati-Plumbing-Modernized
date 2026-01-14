
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex flex-col items-center">
             <div className="flex space-x-1 mb-6">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                 </div>
               ))}
             </div>
             <div className="flex items-center space-x-2 mb-2">
                <div className="h-[2px] w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Reviews</span>
                <div className="h-[2px] w-12 bg-blue-600"></div>
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900">What Our Clients Have To Say</h2>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review) => (
               <div key={review.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative group">
                 <div className="flex items-center space-x-4 mb-6">
                    <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full ring-4 ring-blue-50" />
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-xs text-gray-400 uppercase font-medium">{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>
                      </div>
                    </div>
                 </div>
                 <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-gray-600 leading-relaxed italic">"{review.text}"</p>
               </div>
             ))}
          </div>
          
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors hidden lg:flex">
             <ChevronLeft size={24} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors hidden lg:flex">
             <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
           <div className="flex items-center space-x-4 bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-black text-xs">P</div>
              <div>
                <p className="font-bold text-gray-900">Pemati Plumbing Servi...</p>
                <div className="flex items-center text-yellow-400 space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  <span className="text-xs font-bold text-gray-900 ml-2">46 Thumbtack reviews</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
