
import React from 'react';
import { Phone, Mail, Search, Menu } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
               <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
               </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 tracking-tight">PEMATI</h1>
              <p className="text-[10px] uppercase tracking-widest text-blue-600 font-semibold">Plumbing Services</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Phone size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium uppercase">Phone Number</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors">{CONTACT_INFO.phone}</a>
            </div>
          </div>

          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Mail size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium uppercase">Email</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-bold text-gray-800 hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a>
            </div>
          </div>

          <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
             <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-blue-800 text-sm py-2 pl-4 pr-10 border-none rounded-md focus:ring-2 focus:ring-blue-400 w-40 transition-all focus:w-60"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300" />
             </div>
          </div>

          <div className="hidden md:flex space-x-1">
            {['Home', 'About Us', 'Our Services', 'Maintenance Plans', 'Service Areas'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="px-6 py-4 text-sm font-semibold hover:bg-blue-800 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden p-4">
            <Menu size={24} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
