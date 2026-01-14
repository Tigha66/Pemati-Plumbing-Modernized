
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl mx-auto">
          {/* Cartoon Character Container */}
          <div className="lg:w-1/2">
             <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                <img 
                  src="https://picsum.photos/id/1/600/600" // Placeholder for the cartoon plumber
                  alt="Professional Plumber" 
                  className="w-full h-auto rounded-3xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>

          {/* Contact Details */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-5xl font-black text-gray-900 mb-12">Get In Touch</h2>
            <div className="space-y-6">
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center p-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-[0.98] group"
              >
                <div className="p-4 bg-white/20 rounded-xl mr-6 group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Phone Number</p>
                  <p className="text-3xl font-black">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center p-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-[0.98] group"
              >
                <div className="p-4 bg-white/20 rounded-xl mr-6 group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-1">Quick Email Now!</p>
                  <p className="text-2xl font-black truncate">{CONTACT_INFO.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start">
               <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 flex flex-col items-center">
                  <span className="text-sm font-bold text-gray-500 mb-3">Review us on</span>
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h4.78c-.19 1.02-.8 1.88-1.67 2.46v2.05h2.71c1.58-1.46 2.5-3.61 2.5-6.19 0-.53-.05-1.04-.13-1.54H12.48z" fill="#4285F4"/>
                      <path d="M12.48 21c2.43 0 4.47-.81 5.96-2.18l-2.71-2.05c-.75.5-1.71.8-2.71.8-2.09 0-3.86-1.41-4.49-3.3H5.66v2.13C7.15 17.29 9.61 21 12.48 21z" fill="#34A853"/>
                      <path d="M7.99 14.27c-.16-.5-.25-1.02-.25-1.57s.09-1.07.25-1.57V9H5.66c-.54 1.1-.84 2.33-.84 3.7s.3 2.6.84 3.7l2.33-1.43z" fill="#FBBC05"/>
                      <path d="M12.48 7.3c1.32 0 2.5.45 3.44 1.35l2.58-2.58C16.94 4.54 14.91 3.7 12.48 3.7c-2.87 0-5.33 3.71-6.82 7.17L7.99 12.3c.63-1.89 2.4-3.3 4.49-3.3z" fill="#EA4335"/>
                    </svg>
                    <span className="text-xl font-bold text-gray-700">Google</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
