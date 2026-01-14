
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MAINTENANCE_DATA } from '../constants';

const MaintenanceGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MAINTENANCE_DATA[0].category);

  return (
    <section className="py-24 bg-white" id="maintenance-plans">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Pemati Plumbing Services</span>
              <div className="h-[2px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900">Plumbing Maintenance Guide</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Tabs */}
            <div className="md:w-1/3 flex flex-col space-y-3">
              {MAINTENANCE_DATA.map((item) => (
                <button
                  key={item.category}
                  onClick={() => setActiveTab(item.category)}
                  className={`px-8 py-5 text-left font-bold rounded-xl transition-all duration-300 ${
                    activeTab === item.category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-200 translate-x-2'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.category} Maintenance Tips:
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="md:w-2/3">
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 min-h-[350px] transition-all">
                <ul className="space-y-6">
                  {MAINTENANCE_DATA.find(d => d.category === activeTab)?.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-4 animate-fadeIn">
                      <div className="mt-1 text-cyan-500">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-lg text-gray-700 font-medium leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceGuide;
