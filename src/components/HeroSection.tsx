import { useContext, useRef } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import Header from './Header';
import heroImage from '../assets/hero.png';

export default function HeroSection() {
  const { darkMode } = useContext(ThemeContext);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="w-full min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'contain',
          backgroundPosition: '95% center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Header */}
      <Header />
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0">
        
        {/* Main Hero Section */}
        <div className="w-full max-w-7xl flex flex-col items-start justify-start">
        
        {/* Hero Content - Left Aligned */}
          <div className="w-full flex flex-col justify-start items-start text-left mt-36 ml-8">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-none mb-8 lato-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
              <span className="underline decoration-4 decoration-black">Revolutionizing</span>
              <br />
              Multiple Industries
              <br />
              Through AI <span className="underline decoration-4 decoration-black">Innovation</span>
              
            </h1>
            
                                    {/* Content Cards */}
            <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-6">
            
            {/* Left Card */}
          <div className={`flex-1 p-5 rounded-3xl ${darkMode ? 'bg-gray-800/80' : 'bg-[#E9EBEE]/80'} border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
            <div className="space-y-3">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
               MEET OUR AI SOLUTIONS
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                AI solutions that make your business smarter and faster.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/services" 
                  className={`inline-flex items-center justify-center px-24 py-3 rounded-lg text-base font-medium transition-all duration-300 border-2 ${
                    darkMode 
                      ? 'bg-black text-white border-black hover:bg-gray-800' 
                      : 'bg-black text-white border-black hover:bg-gray-800'
                  }`}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right Card */}
          <div className={`flex-1 p-5 rounded-3xl ${darkMode ? 'bg-gray-800/80' : 'bg-[#E9EBEE]/80'} border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} backdrop-blur-sm`}>
            <div className="space-y-3">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                BUILD WITH QuantAI
              </h3>
              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Connect with us to power your business with AI.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:contact@quantai.co.nz" 
                  className={`inline-flex items-center justify-center px-24 py-3 rounded-lg text-base font-medium transition-all duration-300 border-2 ${
                    darkMode 
                      ? 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100' 
                      : 'bg-white text-gray-600 border-gray-400 hover:bg-gray-100'
                  }`}
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 