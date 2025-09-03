import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Brain, LineChart, Users, Cpu, Cloud, Cog } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import corporate from "../assets/corporate.png";


// Service data
const servicesData = [
  {
    title: "AI Agents",
    icon: Brain,
  },
  {
    title: "Data Analytics",
    icon: LineChart,
  },
  {
    title: "Consulting",
    icon: Users,
  },
  {
    title: "Generative AI",
    icon: Cpu,
  },
  {
    title: "Cloud & IT Infrastructure",
    icon: Cloud,
  },
  {
    title: "Automation",
    icon: Cog,
  },
];

// --- Global Recognition and Awards Section (Accenture-style) ---

const recognitionCards = [
  {
    title: "Elevate",
    description: "We elevate industries, teams, and AI capabilities by pushing boundaries and refining excellence.",
    color: "bg-[#D4A37F]",
    textColor: "text-gray-900",
  },
  {
    title: "Innovate",
    description: "We innovate by creating new solutions and pushing the boundaries of what's possible.",
    color: "bg-[#97BEE0]",
    textColor: "text-gray-900",
  },
  {
    title: "Dominate",
    description: "We elevate your business with simple, smart solutions that work.",
    color: "bg-[#b39fe9]",
    textColor: "text-gray-900",
  },
];

// SVG backgrounds for the top section of each card
const recognitionSVGs = [
  // Card 1
  (
    <svg className="absolute left-0 top-0 w-full h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Card 2
  (
    <svg className="absolute left-0 top-0 w-full h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Card 3
  (
    <svg className="absolute left-0 top-0 w-full h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(17, 24, 39, 0.3)" strokeWidth="2" fill="none"/>
    </svg>
  ),
];

// SVG backgrounds for industry cards - consistent pattern for all cards
const industrySVGs = [
  // Financial Services - consistent with Healthcare
  (
    <svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Healthcare - soft curves (reference pattern)
  (
    <svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Smart Manufacturing - consistent with Healthcare
  (
    <svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // Retail & E-commerce - consistent with Healthcare
  (
    <svg className="absolute left-0 top-0 w-1/3 h-1/3 z-0" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 60 Q100 0 200 60 T400 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
      <ellipse cx="320" cy="40" rx="60" ry="30" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="none"/>
    </svg>
  ),
];

// Function to get service items for each industry
const getServiceItems = (industryTitle: string) => {
  switch (industryTitle) {
    case "Healthcare":
      return [
        { 
          title: "Digital Health", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        { 
          title: "Health Operations", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        { 
          title: "Cybersecurity", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        { 
          title: "Patient Care", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )
        }
      ];
    case "Manufacturing":
      return [
        { 
          title: "Predictive Maintenance", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        { 
          title: "Quality Control", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        { 
          title: "Supply Chain", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          )
        },
        { 
          title: "Production Optimization", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )
        }
      ];
    case "Retail":
      return [
        { 
          title: "Retail Managed Services", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        { 
          title: "Data & AI", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        { 
          title: "Transforming Marketing", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          )
        },
        { 
          title: "Customer Insights", 
          icon: (
            <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          )
        }
      ];
    default:
      return [];
  }
};

// Industry data for the cards - Official Google Brand Colors
const industryData = [
  {
    title: "Finance & Consulting",
    description: "Our AI Solutions help financial and consulting firms simplify complex work, make better decisions using their data, and improve each client's experience.",
    
    color: "#beb4fd", // Changed to requested color
    lightColor: "#E3F2FD", 
    textColor: "text-white", // Ensuring good contrast on the new background
    lightTextColor: "text-[#B85C38]",
    isLight: false,
    isFinancial: true, // Custom flag to identify this card
  },
  {
    title: "Healthcare",
    description: "Our AI Solutions help healthcare organizations streamline complex clinical workflows, make more accurate diagnoses using their data, and improve each patient's care journey.",
    
    color: "#eaa990", // Soft Peach
    lightColor: "#eaa990", // Light Peach background
    textColor: "text-white", // Matching card 1 text color
    lightTextColor: "text-[#B85C38]",
    isLight: true
  },
  {
    title: "Manufacturing",
    description: "Our AI Solutions help manufacturing firms automate their supply chains, boost productivity and minimize waste through data-driven insights, and improve operational safety and resilience.",
    
    color: "#8b9c9c", // Black background
    lightColor: "#8b9c9c", // Black background
    textColor: "text-white",
    lightTextColor: "text-white",
    isLight: false
  },
  {
    title: "Retail",
    description: "Our AI Solutions empower retail brands to automate supply chain logistics, leverage customer data to forecast trends and personalize marketing, and deliver a seamless shopping journey online and in-store.",
    color: "#BBA177", // Updated to requested color
    lightColor: "#BBA177", // Updated to requested color
    textColor: "text-white",
    lightTextColor: "text-white",
    isLight: false
  }
];

const LangChainProductsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const progress = Math.max(0, Math.min(1, -sectionTop / (sectionHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[400vh] flex flex-col items-center justify-start py-32"
      style={{ 
        background: "#FFFFFF"
      }}
    >
      {/* Sticky big text */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10">
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2
            className="font-extrabold text-center leading-tight mb-16"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 4rem)',
              color: '#111827',
              lineHeight: 1.05,
              userSelect: "none",
              opacity: 0.95,
              textShadow: "0 2px 24px rgba(0,0,0,0.12)"
            }}
          >
            Empowering Diverse <span className="px-4 py-2 rounded-2xl text-gray-900 inline-block">Industries</span> with Innovative Solutions
          </h2>
        </div>
      </div>
      
      {/* Sticky stacked industry cards */}
      <div className="w-full flex flex-col z-50 relative">
        {industryData.map((card, idx) => {
          // Calculate which card should be currently visible
          const cardProgress = scrollProgress * 4; // 4 cards total
          const currentCardIndex = Math.floor(cardProgress);
          
          // All cards should be sticky to create stacking effect
          // Show all cards progressively, but ensure all cards are visible when scrolled to the end
          const shouldShow = idx <= currentCardIndex || scrollProgress >= 0.6;
          
          return (
            <div
              key={card.title}
              className={`shadow-xl rounded-3xl p-16 ${card.isLight ? card.lightTextColor : card.textColor} relative overflow-hidden transition-all duration-300`}
              style={{
                width: "95vw",
                height: "600px",
                maxWidth: "95vw",
                backgroundColor: card.isLight ? card.lightColor : card.color,
                boxShadow: "none",
                border: card.isLight ? "1px solid rgba(0,0,0,0.06)" : "none",
                marginBottom: "0px",
                marginLeft: "auto",
                marginRight: "auto",
                zIndex: 100 + idx,
                position: "sticky",
                top: "6rem",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                // Hide cards that haven't been reached yet
                opacity: shouldShow ? 1 : 0,
                visibility: shouldShow ? "visible" : "hidden",
                transform: shouldShow ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* SVG background for industry cards */}
              {industrySVGs[idx]}
              {/* Two-column layout for cards with images */}
              {'image' in card && card.image ? (
                <div className="flex h-full">
                  {/* Left side - Text content */}
                  <div className="flex flex-col items-start justify-start w-1/2 pr-8 pt-8">
                    {'icon' in card && (card as any).icon && (
                      <div className="text-7xl mb-8 filter drop-shadow-sm">{(card as any).icon}</div>
                    )}
                    <h3 className={`text-6xl font-bold mb-6 ${card.textColor} tracking-tight whitespace-pre-line`}>
                      {card.title}
                    </h3>
                    <p className={`text-2xl ${card.textColor} opacity-90 leading-relaxed font-medium max-w-md`}>
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Right side - Image */}
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <div 
                      className="w-full h-full rounded-2xl overflow-hidden"
                      style={{
                        boxShadow: "0 8px 32px rgba(0,0,0,0.15)"
                      }}
                    >
                      <img
                        src={(card as any).image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ) : (card as any).isFinancial ? (
                <div className="flex h-full items-center">
                  {/* Center - Text content */}
                  <div className="flex flex-col items-center justify-center w-1/2 text-center" style={{ transform: 'translateY(20px)' }}>
                    {'icon' in card && (card as any).icon && (
                      <div className="text-7xl mb-8 filter drop-shadow-sm">{(card as any).icon}</div>
                    )}
                    <div className="text-sm font-bold tracking-widest mb-2 text-gray-800 opacity-70">
                      STACK {idx + 1}
                    </div>
                    <h3 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="text-2xl text-gray-800 opacity-80 leading-relaxed font-medium max-w-lg">
                      {card.description}
                    </p>
                  </div>
                  {/* Right side - 4 boxes in a container matching card color */}
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="rounded-2xl p-16 shadow-lg w-full max-w-xl mx-auto" style={{ backgroundColor: '#E9E6FE' }}>
                      <div className="space-y-8">
                        {[
                          { 
                            title: "Payments", 
                            icon: (
                              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            )
                          },
                          { 
                            title: "Risk Management", 
                            icon: (
                              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            )
                          },
                          { 
                            title: "Data Analytics", 
                            icon: (
                              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            )
                          },
                          { 
                            title: "Compliance", 
                            icon: (
                              <svg className="w-8 h-8 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )
                          },
                        ].map((item) => (
                          <div key={item.title} className="rounded-2xl p-6 flex items-center relative">
                            {/* Custom border with larger curved gap in middle */}
                            <div className="absolute inset-0 border border-black rounded-2xl" style={{
                              borderImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 35%, transparent 65%, black 65%, black 100%) 1'
                            }}></div>
                            <span className="text-gray-800">{item.icon}</span>
                            <span className="text-gray-800 font-medium text-xl">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Original layout for cards without images - updated with interrupted border */
                <div className="flex h-full items-center">
                  {/* Center - Text content */}
                  <div className="flex flex-col items-center justify-center w-1/2 text-center">
                    {'icon' in card && (card as any).icon && (
                      <div className="text-7xl mb-8 filter drop-shadow-sm">{(card as any).icon}</div>
                    )}
                    <div className="text-sm font-bold tracking-widest mb-2 text-gray-800 opacity-70">
                      STACK {idx + 1}
                    </div>
                    <h3 className="text-6xl font-bold mb-6 text-gray-800 tracking-tight whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="text-2xl text-gray-800 opacity-80 leading-relaxed font-medium max-w-lg">
                      {card.description}
                    </p>
                  </div>
                  {/* Right side - Service boxes with interrupted border for Healthcare */}
                  <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="rounded-2xl p-16 shadow-lg w-full max-w-xl mx-auto" style={{ backgroundColor: card.title === "Healthcare" ? '#FBEEEA' : card.title === "Manufacturing" ? '#F1F3F3' : card.title === "Retail" ? '#F6F3EE' : '#FFB8C9' }}>
                      <div className="space-y-8">
                        {getServiceItems(card.title).map((item) => (
                          <div key={item.title} className="rounded-2xl p-6 flex items-center relative">
                            {/* Custom border with larger curved gap in middle */}
                            <div className="absolute inset-0 border border-black rounded-2xl" style={{
                              borderImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 35%, transparent 65%, black 65%, black 100%) 1'
                            }}></div>
                            <span className="text-gray-800">{item.icon}</span>
                            <span className="text-gray-800 font-medium text-xl">{item.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const GlobalRecognitionZigZag = () => {
  // Zig-zag alignment: left, right, left
  const alignments = [
    "md:self-start md:ml-0 md:mr-auto",
    "md:self-end md:mr-0 md:ml-auto",
    "md:self-start md:ml-0 md:mr-auto"
  ];

  return (
    <section
      className="relative w-full min-h-[140vh] flex flex-col items-center justify-start py-32"
      style={{ background: "#FFFFFF" }}
    >
      {/* Sticky big text */}
      <div className="sticky top-24 flex items-center justify-center w-full" style={{ height: "25vh", zIndex: 0 }}>
        <span
          className="font-extrabold text-center leading-tight"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 4rem)',
            color: '#111827',
            lineHeight: 1.05,
            userSelect: "none",
            opacity: 0.95,
            textShadow: "0 2px 24px rgba(0,0,0,0.12)"
          }}
        >
          Where <span className="px-4 py-2 rounded-2xl text-gray-900 inline-block">Belief</span> Fuels Breakthroughs

        </span>
      </div>
      {/* Cards below the text */}
      <div className="relative z-10 flex flex-col gap-24 items-center w-full max-w-5xl mt-32">
        {recognitionCards.map((card, idx) => (
          <div
            key={card.title}
            className={`relative w-full md:w-[400px] aspect-square shadow-2xl ${card.color} ${card.textColor} flex items-end justify-start overflow-hidden ${alignments[idx % alignments.length]}`}
            style={{
              minHeight: "320px",
              maxWidth: "400px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            }}
          >
            {/* Unique SVG abstract lines background for each card (top section only) */}
            {recognitionSVGs[idx]}
            {/* Card content */}
            <div className="relative z-10 p-8 pb-10 w-full">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-left">
                {card.title}
              </h3>
              <p className="text-lg md:text-xl opacity-90 max-w-xs text-left font-sans hidden md:block">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section 
      className={`w-full font-['Lato',sans-serif] ${
        darkMode ? 'bg-black text-white' : 'bg-white text-gray-800'
      } transition-colors duration-300`}
    >
      {/* Header with style similar to Why Choose Us section */}
      <div 
        className="w-full relative mx-auto overflow-hidden"
        style={{
          background: '#1a1a1a',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          {/* Header content */}
          <div className="relative mb-16 z-10">
            <div className="absolute top-0 left-0">
              <h2 className="text-sm md:text-base font-medium tracking-wider opacity-90 lato-light text-white">OUR SERVICES</h2>
            </div>
            
            <div className="text-center pt-16">
              <h1 className="text-3xl md:text-6xl font-bold leading-tight lato-regular text-white">
                Services we provide for you
              </h1>
            </div>
            
            <div className="mt-8 text-center px-4 md:px-12 lg:px-24">
              <p className="text-lg md:text-xl max-w-4xl text-white/90 mx-auto">
                At QuantAI, we create special AI tools made just for your business. We help you solve unique problems in your industry. Our tools can handle repetitive tasks for you, predict future trends, and help you make smarter choices to improve how your business works.
              </p>
            </div>
          </div>
          
          {/* Services List - Two column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mt-16 relative">
            {/* No background elements */}

            {servicesData.map((service) => (
              <div
                key={service.title}
                className="flex items-center border-b border-white/10 pb-6 group relative"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white flex-grow">
                  {service.title}
                </h2>
                <motion.div 
                  className="relative w-16 h-16 flex items-center justify-center rounded-full overflow-hidden"
                  style={{
                    background: 'rgba(75, 75, 75, 0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(75, 75, 75, 0.2)',
                    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 5px 15px rgba(0, 0, 0, 0.15)'
                  }}
                  whileHover={{
                    boxShadow: '0 8px 25px rgba(75, 75, 75, 0.3)',
                    scale: 1.1,
                    rotate: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full" 
                    style={{
                      background: 'linear-gradient(145deg, rgba(75, 75, 75, 0.3) 0%, rgba(75, 75, 75, 0.05) 100%)',
                      opacity: 0.8
                    }}
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1/2 rounded-t-full" 
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))'
                    }}
                  ></motion.div>
                  <service.icon size={26} className="text-white relative z-10" strokeWidth={1.75} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* LangChain Products Section */}
      <LangChainProductsSection />
      
      {/* Insert Global Recognition and Awards section here (middle of the page) */}
      <GlobalRecognitionZigZag />
      {/* Animated Land Image and Text Section (Accenture-style) */}
      <AnimatedLandSection darkMode={darkMode} />
    </section>
  );
};

export default Services;

// Add this component inside the same file, below Services
const AnimatedLandSection = ({ darkMode }: { darkMode: boolean }) => {
  const ref = useRef(null);
  // Track scroll progress for this section with a fixed end point
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] // Animation completes at end of section height
  });

  // Image scale: 1 (full) to 0.6 (medium) - stops at 0.6 after reaching threshold
  const imgScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  
  // Image x: start at center (0%), then move to left (-25%)
  const imgX = useTransform(scrollYProgress, [0, 0.4], ["0%", "-25%"]);
  
  // Image y: always 0vh (no vertical movement)
  const imgY = useTransform(scrollYProgress, [0, 1], ["0vh", "0vh"]);
  
  // Image border radius: 0 to 2rem - stops at 2rem after reaching threshold
  const imgRadius = useTransform(scrollYProgress, [0, 0.4], ["0rem", "2rem"]);

  // Image width: 100vw to 65vw
  const imgWidth = useTransform(scrollYProgress, [0, 0.4], ["100vw", "65vw"]);

  // Image left position: 0 to 10% (reduced from 25% to account for the negative X transform)
  const imgLeft = useTransform(scrollYProgress, [0, 0.4], ["0%", "10%"]);

  // Text opacity and movement - appear from bottom when image reaches 50-60% size
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.25, 0.4], [100, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[140vh] flex items-start justify-center overflow-visible"
      style={{ background: darkMode ? "#000" : "#fff" }}
    >
      {/* Sticky container for the image animation */}
      <div
        className="sticky-container"
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            left: imgLeft,
            top: 0,
            x: imgX,
            y: imgY,
            scale: imgScale,
            borderRadius: imgRadius,
            width: imgWidth,
            height: "100vh",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
            overflow: "hidden",
            pointerEvents: "none",
          }}
          className="shadow-2xl"
        >
          <img
            src={corporate}
            alt="Corporate"
            className="w-full h-full object-cover select-none pointer-events-none"
            style={{ display: "block" }}
          />
        </motion.div>
        {/* Animated text - appears from bottom when image shrinks */}
        <motion.div
          style={{
            position: "absolute",
            right: "8vw",
            top: "30vh",
            opacity: textOpacity,
            y: textY,
            zIndex: 3,
            maxWidth: "35vw",
            pointerEvents: 'auto',
          }}
          className="text-left flex flex-col items-start"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-left font-[Lato,sans-serif]" style={{ color: darkMode ? "#fff" : "#222", lineHeight: "1.1" }}>
          Join us to<br />lead the change
          </h2>
          <p className="text-lg md:text-xl opacity-90 font-[Lato,sans-serif] text-left mb-6" style={{ color: darkMode ? "#fff" : "#333", lineHeight: "1.5" }}>
          This is your moment. Bring your<br />passion and your vision.
          </p>
          <div className="mt-2">
            <a
              href="mailto:contact@quantai.co.nz"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border-2 bg-black text-white border-black hover:bg-gray-800 hover:shadow-lg hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
      {/* Spacer for scroll effect - fixed height to match the offset */}
      <div style={{ height: "100vh", width: 0 }} />
      {/* Additional spacer to allow scrolling past the animation */}
      <div style={{ height: "40vh", width: 0 }} />
    </section>
  );
};