import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const TechStack = () => {
  const { darkMode } = useContext(ThemeContext);

  const services = [
    {
      title: "Plan",
      description: "We identify your business needs and create a straightforward project plan. This roadmap outlines how our AI services will achieve your specific goals."
    },
    {
      title: "Develop",
      description: "Our experts build and train a custom AI model tailored to your data and requirements. We handle all the complex technical work to create your solution."
    },
    {
      title: "Execute",
      description: "We integrate the AI solution directly into your current workflow and systems. Our focus is on a smooth deployment so you see immediate benefits."
    },
    {
      title: "Monitor",
      description: "We continuously manage the AI service to ensure it performs optimally. This includes ongoing support and improvements to deliver consistent results."
    }
  ];

  return (
    <section 
      className={`py-16 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'} overflow-hidden`} 
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-sm ${darkMode ? 'bg-black' : 'bg-white'}`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 py-12 relative ${
                darkMode ? 'bg-black border-gray-950' : 'bg-white border-gray-200'
              } flex flex-col h-full border`}
              style={{ minHeight: "320px" }}
            >
              <h3 className={`text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-blue-950'
              }`}>
                {service.title}
              </h3>
              <p className={`${
                darkMode ? 'text-white' : 'text-gray-600'
              } text-md leading-relaxed`}>
                {service.description}
              </p>
              {/* Empty div to maintain the same height/spacing */}
              <div className="mt-auto pt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 