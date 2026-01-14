
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import MaintenanceGuide from './components/MaintenanceGuide';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Modernized Why Us Section */}
        <section className="py-24 relative overflow-hidden" id="about-us">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: 'url("https://picsum.photos/id/122/1920/1080")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)'
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Why Us?</span>
                <div className="h-1 w-12 bg-blue-600"></div>
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-8">Pemati Plumbing Services</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                At Pemati Plumbing Services, we combine expert plumbing knowledge with great people. When you have a plumbing issue, you need someone you can trust. Pemati Plumbing Services is your go-to neighborhood plumbing company and we will always give fair pricing and be there when you need it most. We always offer free estimates and second opinions. We have 24 hour availability in NY and NJ; just contact us day or night for all of your plumbing needs.
              </p>
            </div>
          </div>
        </section>

        <MaintenanceGuide />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Integrated AI Chat Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
