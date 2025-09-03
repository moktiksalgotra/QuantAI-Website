import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="absolute top-0 left-0 right-0 z-30 w-full">
      <div className="font-['Times New Roman',serif] transition-all duration-300 bg-transparent">
        <div className="px-6 lg:px-8 h-16 flex justify-between items-center container mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center ml-2 mt-12">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="QuantAI Logo" 
                className="h-20 w-auto" 
              />
              <span className="ml-3 lato-bold text-5xl text-black">
                QuantAI  
              </span>
            </div>
          </Link>

          {/* Desktop Right side - Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-6 mt-8">
            {/* About Button - Oval shaped with custom background */}
            <Link 
              to="/career/opportunities"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: '#8b9c9c' }}
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md transition-all duration-300 text-black hover:text-gray-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (<X className="h-6 w-6" aria-hidden="true" />) : (<Menu className="h-6 w-6" aria-hidden="true" />)}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="pt-16 pb-6 px-6">
            {/* About Button for Mobile - Oval shaped with custom background */}
            <div className="py-3 border-b border-gray-200">
              <Link 
                to="/career/opportunities" 
                className="block w-full text-center py-3 px-6 text-base font-medium transition-all duration-300 rounded-full hover:shadow-lg"
                style={{ backgroundColor: '#8b9c9c' }}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out forwards; }
      `}</style>
    </div>
  );
}
