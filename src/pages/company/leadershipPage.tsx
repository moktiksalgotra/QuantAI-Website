import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import mahima from '../../assets/mahima.jpg';
import prashant from '../../assets/Prashant.jpg';
import moktik from '../../assets/moktik.png';
import harjas from '../../assets/harjas.jpg';
import shreesh from '../../assets/shreesh.jpg';
import krishna from '../../assets/krishna.png';
import aviral from '../../assets/aviral.jpg';

import charu from '../../assets/charu.jpg';
import { Linkedin, ChevronRight } from 'lucide-react';


import Header from '../../components/Header';



export default function LeadershipPage() {
  const { darkMode } = useContext(ThemeContext);

  const leadershipTeam = [
    {
      name: 'Mahima Sukheja',
      role: 'Founder & CEO',
      bio: 'Visionary leader driving innovation and growth in AI and technology consulting.',
      imageSrc: mahima,
      social: {
        linkedin: 'https://www.linkedin.com/in/mahima-sukheja-567a1a44/',
      }
    },
    {
      name: 'Prashant Verma',
      role: 'Director',
      bio: 'Strategic technology expert with deep expertise in digital transformation and enterprise solutions.',
      imageSrc: prashant,
      social: {
        linkedin: '#',
      }
    },
  ];

  const internsTeam = [
    {
      name: 'Moktik',
      role: 'Data Scientist',
      imageSrc: moktik,
      social: {
        linkedin: 'https://www.linkedin.com/in/moktiksalgotra/',
      }
    },
    {
      name: 'Harjas Partap Singh Romana',
      role: 'Data Scientist',
      imageSrc: harjas,
      social: {
        linkedin: 'https://www.linkedin.com/in/harjas04/',
      }
    },
    {
      name: 'Aviral Yadav',
      role: 'Data Scientist',
      imageSrc: aviral,
      social: {
        linkedin: 'https://www.linkedin.com/in/aviral-yadav-908aa1251/',
      }
    },
    {
      name: 'Shreesh Dwivedi',
      role: 'Data Scientist',
      imageSrc: shreesh,
      social: {
        linkedin: 'https://www.linkedin.com/in/shreesh-dwivedi-abb94222a/',
      }
    },
    {
      name: 'Krishna Agrawal',
      role: 'Data Scientist',
      imageSrc: krishna,
      social: {
        linkedin: 'https://www.linkedin.com/in/krishna-agrawal-2b47b326a/',
      }
    },
    {
      name: 'Charu Sharma',
      role: 'Data Scientist',
      imageSrc: charu,
      social: {
        linkedin: 'https://www.linkedin.com/in/charu-sharma3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      }
    },
  ];

  return (
    <div className={`${darkMode ? 'bg-black' : 'bg-white'} transition-colors duration-300 lato-regular min-h-screen`}>
      {/* Hero Section - Matching Main Page Design */}
      <section className="w-full h-screen relative hero-section overflow-hidden">
        {/* Background with gradient overlay based on theme */}
        <div 
          className={`absolute inset-0 z-0 ${
            !darkMode 
              ? ''
              : 'bg-black'
          }`}
          style={!darkMode ? { background: '#dde5ec', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' } : {}}
        />
        
        {/* Header */}
        <Header />
        
        {/* Hero Content - Matching Main Page Layout */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 z-10 pt-24 font-[Lato,sans-serif]">
          <div className="w-full md:w-3/5 flex flex-col items-start justify-center mb-8 md:mb-0">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none font-[Lato,sans-serif] ${darkMode ? 'text-gray-400 ' : 'text-gray-900'}`}> 
              <span className="block overflow-hidden">
                <span className="block transform animate-reveal whitespace-nowrap">MEET THE MINDS</span>
              </span>
              <span className="block overflow-hidden">
                <span className="block transform animate-reveal-delay whitespace-nowrap">
                  BEHIND THE <span className="text-[#E4003A]">MAGIC</span>
                </span>
              </span>
            </h1>
            <div className="mt-8">
              <a href="#team" className={`group flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-900'} text-lg font-[Lato,sans-serif] animate-fade-in`}>
                <span>Meet our leaders</span>
                <span className={`ml-2 inline-flex items-center justify-center w-8 h-8 ${darkMode ? 'bg-gray-700 group-hover:bg-gray-800' : 'bg-gray-500 group-hover:bg-gray-600'} transition-colors`}>
                  <ChevronRight size={20} className={darkMode ? 'text-white' : 'text-gray-900'} />
                </span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 pl-0 md:pl-10">
            <div className="max-w-lg transform translate-y-[-160px]">
              <div className="w-16 h-1 bg-gray-600 mb-6 animate-width"></div>
              <p className={`text-lg md:text-xl leading-relaxed font-[Lato,sans-serif] animate-fade-in-delay ${darkMode ? 'text-white' : 'text-gray-900'}`}> 
              Meet the leaders of QuantAI. Our team uses its business knowledge to build AI that makes a real difference.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-in-out forwards; }
          
          @keyframes reveal {
            0% { 
              opacity: 0;
              transform: translateY(100%);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            0% { 
              opacity: 0;
              transform: translateY(20px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes expandWidth {
            0% { width: 0; }
            100% { width: 4rem; }
          }
          
          .animate-reveal {
            animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
          
          .animate-reveal-delay {
            animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-delay: 0.3s;
            opacity: 0;
            transform: translateY(100%);
          }
          
          .animate-reveal-delay-2 {
            animation: reveal 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-delay: 0.6s;
            opacity: 0;
            transform: translateY(100%);
          }
          
          .animate-fade-in {
            animation: fadeInUp 1s ease-out forwards;
            animation-delay: 0.8s;
            opacity: 0;
          }
          
          .animate-fade-in-delay {
            animation: fadeInUp 1s ease-out forwards;
            animation-delay: 1s;
            opacity: 0;
          }
          
          .animate-width {
            animation: expandWidth 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-delay: 0.6s;
            width: 0;
          }
        `}</style>
      </section>

      {/* Our Leaders Section */}
      <section id="team" className={`${darkMode ? 'bg-black' : 'bg-white'} py-16`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Executive Team
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed font-[Lato,sans-serif] max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The driving force behind QuantAI's vision and execution.
            </p>
          </div>

          {/* Leaders Grid - Accenture Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto">
            {leadershipTeam.map((person) => (
              <div
                key={person.name}
                className="rounded-lg p-12"
              >
                {/* Leader Image */}
                <div className="mb-10">
                  <div className="relative aspect-square w-full max-w-[400px] mx-auto rounded-lg overflow-hidden">
                    <img 
                      className="w-full h-full object-cover object-center" 
                      src={person.imageSrc} 
                      alt={person.name}
                    />
                  </div>
                </div>
                
                {/* Leader Info */}
                <div className="text-center space-y-6">
                  <h3 className={`text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {person.name}
                  </h3>
                  <p className={`text-xl lg:text-2xl font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {person.role}
                  </p>
                  
                  {/* LinkedIn Icon */}
                  {person.social.linkedin && (
                    <div className="pt-4">
                      <a 
                        href={person.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block p-4 rounded-full ${
                          darkMode 
                            ? 'text-gray-400 hover:text-blue-800 hover:bg-gray-800' 
                            : 'text-gray-600 hover:text-blue-800 hover:bg-gray-100'
                        }`}
                      >
                        <Linkedin size={28} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section className={`${darkMode ? 'bg-black' : 'bg-white'} py-16`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div
            className="mb-16 text-center"
          >
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Team Quantive Minds
            </h2>
            <p className={`text-lg md:text-xl leading-relaxed font-[Lato,sans-serif] max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our talented interns contributing to innovation and growth in AI solutions.
            </p>
          </div>

          {/* Interns Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {internsTeam.map((person) => (
              <div
                key={person.name}
                className="rounded-lg p-6"
              >
                {/* Intern Image */}
                <div className="mb-6">
                  <div className="relative aspect-square w-full max-w-[240px] mx-auto rounded-lg overflow-hidden">
                    <img 
                      className="w-full h-full object-cover object-center" 
                      src={person.imageSrc} 
                      alt={person.name}
                    />
                  </div>
                </div>
                
                {/* Intern Info */}
                <div className="text-center space-y-3">
                  <h3 className={`text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {person.name}
                  </h3>
                  <p className={`text-base lg:text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {person.role}
                  </p>
                  
                  {/* LinkedIn Icon */}
                  {person.social.linkedin && (
                    <div className="pt-1">
                      <a 
                        href={person.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block p-2 rounded-full ${
                          darkMode 
                            ? 'text-gray-400 hover:text-blue-800 hover:bg-gray-800' 
                            : 'text-gray-600 hover:text-blue-800 hover:bg-gray-100'
                        }`}
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}