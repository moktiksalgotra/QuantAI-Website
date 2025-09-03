import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function EnterpriseSection() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className={`w-full py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      darkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-[Lato,sans-serif] ${
            darkMode ? 'text-white' : 'text-gray-600'
          }`}>
            <span className="block mb-2">
              <span className={`px-4 py-2 rounded-2xl ${
                darkMode 
                  ? 'bg-[#8b9c9c] text-gray-900 border border-gray-700' 
                  : 'bg-[#8b9c9c] text-gray-900 border border-gray-200'
              } inline-block`}>
                QuantAI
              </span>{' '}
              transforms businesses
            </span>
            <span className="block mb-2">with custom AI solutions, from</span>
            <span className="block">
              innovative startups to{' '}
              <span className="relative">
                <span className={`px-4 py-2 rounded-2xl ${
                  darkMode 
                    ? 'bg-[#8b9c9c] text-gray-900 border border-gray-700' 
                    : 'bg-[#8b9c9c] text-gray-900 border border-gray-200'
                } inline-block`}>
                  global enterprises
                </span>
              </span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
} 