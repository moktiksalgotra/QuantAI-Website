import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';
import Header from '../../components/Header';
import backgroundImage from '../../assets/leader.png';
import mahimaImage from '../../assets/Mahima.jpg';
import prashantImage from '../../assets/Prashant.jpg';
import moktikImage from '../../assets/moktik.png';
import harjasImage from '../../assets/harjas.jpg';

const ExploreOpportunitiesPage: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black' : 'bg-white'} lato-regular`}>

      
      {/* Hero Section */}
      <section className="w-full h-screen relative hero-section overflow-hidden">
        {/* Header */}
        <Header />
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-contain bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: '60%',
            backgroundPosition: '95% 95%',
            borderBottomLeftRadius: '2rem', 
            borderBottomRightRadius: '2rem' 
          }}
        />
        

        
        {/* Hero Content - Matching Website Design */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-start justify-start px-12 md:px-20 lg:px-32 z-10 pt-50 font-[Lato,sans-serif]">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-8 md:mb-0">
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight font-[Lato,sans-serif] ${darkMode ? 'text-black' : 'text-gray-900'}`}> 
              <div className="block mb-2">
                <div className="block">Building <span className="px-4 py-2 rounded-2xl bg-[#8B9C9C] text-gray-900 border border-gray-200 inline-block">reliable</span></div>
              </div>
              <div className="block">
                <div className="block">
                  AI for business
                </div>
              </div>
            </h1>
            
            <p className={`text-xl md:text-2xl mt-8 max-w-3xl leading-relaxed ${darkMode ? 'text-gray-800' : 'text-gray-700'}`}>
            QuantAI is shaping the future of AI with systems that are safe, understandable, and aligned.
            </p>

            {/* Join Us Button - Matching Header Design */}
            <motion.button
              className="mt-12 px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border-2 bg-black text-white border-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'mailto:contact@quantai.co.nz'}
            >
              Contact Us
            </motion.button>

          </div>

        </div>

        {/* 90% Width Line at Bottom of Hero */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-px bg-gray-900"></div>
      </section>

      {/* Our Purpose Section - Anthropic Style */}
      <section className={`py-24 relative ${darkMode ? 'bg-white' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Title Only */}
            <div className="lg:col-span-1">
              <h2 className={`text-2xl md:text-4xl font-bold -ml-24 ${darkMode ? 'text-black' : 'text-black'}`}>
                <span className="px-4 py-2 rounded-2xl bg-[#8B9C9C] text-gray-900 border border-gray-200 inline-block">Our Purpose</span>
              </h2>
            </div>

            {/* Right Column - Description and Two Columns */}
            <div className="lg:col-span-2">
              {/* Main Description */}
              <p className={`text-2xl md:text-3xl font-bold leading-relaxed mb-12 text-black`}>
                We believe AI will revolutionize business operations. QuantAI is dedicated to building intelligent systems that drive growth, efficiency, and innovation across industries.
              </p>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>
                    We Build Intelligent Solutions
                  </h3>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-700' : 'text-gray-700'}`}>
                    We develop cutting-edge AI systems that are reliable, scalable, and business-ready. Our solutions help companies automate processes, gain insights from data, and make smarter decisions.
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>
                    Innovation Drives Growth
                  </h3>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-700' : 'text-gray-700'}`}>
                    We treat AI innovation as a strategic advantage, continuously researching new technologies, applying them to real business challenges, and helping our clients stay ahead of the competition.
                  </p>
                </div>
              </div>

              {/* Additional Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {/* Left Column */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>
                    Expert Team
                  </h3>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-700' : 'text-gray-700'}`}>
                    QuantAI brings together data scientists, engineers, business strategists, and domain experts who combine technical expertise with deep industry knowledge to deliver exceptional results.
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-900' : 'text-gray-900'}`}>
                    Partnering for Success
                  </h3>
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-700' : 'text-gray-700'}`}>
                    We believe in the power of collaboration. We work closely with our clients, technology partners, and industry leaders to create AI solutions that drive measurable business outcomes and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 90% Width Line at Bottom of Our Purpose Section */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-px bg-gray-900"></div>
        </div>
      </section>

      {/* The Team Section */}
      <section className={`py-24 ${darkMode ? 'bg-white' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Title Only */}
            <div className="lg:col-span-1">
              <h2 className={`text-2xl md:text-4xl font-bold -ml-24 ${darkMode ? 'text-black' : 'text-black'}`}>
                <span className="px-4 py-2 rounded-2xl bg-[#eaa990] text-gray-900 border border-gray-200 inline-block">The Leaders</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="lg:col-span-2">
              <p className={`text-2xl md:text-3xl font-bold leading-relaxed ${darkMode ? 'text-black' : 'text-black'}`}>
                Our leadership team brings together decades of experience in AI, business strategy, and technology innovation, driving our mission to deliver cutting-edge AI solutions that transform businesses.
              </p>
            </div>
          </div>

          {/* Team Member Cards */}
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
              {/* Mahima Card */}
              <div>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={mahimaImage} 
                      alt="Mahima" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                {/* Mahima Name below card */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mahima Sukheja</h3>
                  <p className="text-gray-600 text-lg">CEO & Founder</p>
                </div>
              </div>

              {/* Prashant Card */}
              <div>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={prashantImage} 
                      alt="Prashant" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                {/* Prashant Name below card */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Prashant Verma</h3>
                  <p className="text-gray-600 text-lg">Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team Section */}
      <section className={`py-24 ${darkMode ? 'bg-white' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column - Title Only */}
            <div className="lg:col-span-1">
              <h2 className={`text-2xl md:text-4xl font-bold -ml-24 ${darkMode ? 'text-black' : 'text-black'}`}>
                <span className="px-4 py-2 rounded-2xl bg-[#609E66] text-gray-900 border border-gray-200 inline-block">The Interns</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="lg:col-span-2">
              <p className={`text-2xl md:text-3xl font-bold leading-relaxed ${darkMode ? 'text-black' : 'text-black'}`}>
                Our talented team of professionals and emerging talent work together to develop innovative AI solutions, bringing fresh perspectives and technical expertise to solve complex business challenges.
              </p>
            </div>
          </div>

          {/* Team Member Cards */}
          <div className="flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
              {/* Moktik Card */}
              <div>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={moktikImage} 
                      alt="Moktik" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                {/* Moktik Name below card */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Moktik</h3>
                  <p className="text-gray-600 text-lg">Project Lead</p>
                </div>
              </div>

              {/* Harjas Card */}
              <div>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={harjasImage} 
                      alt="Harjas" 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                {/* Harjas Name below card */}
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Harjas Partap Singh Romana</h3>
                  <p className="text-gray-600 text-lg">Data Scientist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
};

export default ExploreOpportunitiesPage;
