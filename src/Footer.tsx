import { Linkedin, Instagram } from "lucide-react";

import { useEffect } from "react";

const Footer = () => {
    // Add Lato font
    useEffect(() => {
        const latoFont = document.createElement('link');
        latoFont.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap';
        latoFont.rel = 'stylesheet';
        document.head.appendChild(latoFont);
    }, []);

    return (
        <footer
            className="w-full relative h-screen"
            style={{
                fontFamily: 'Lato, sans-serif',
                transition: 'background 0.3s',
                background: '#1a1a1a',
                color: '#ffffff',
            }}
        >
            <div className="w-full h-full flex flex-col justify-center">
                {/* Main Footer Content with Large Kairos & Gray Text */}
                <div className="container mx-auto px-4">
                    <h1 
                        className="text-white font-bold tracking-tight overflow-hidden"
                        style={{
                            fontSize: 'clamp(3rem, 15vw, 12rem)',
                            lineHeight: '0.9',
                            letterSpacing: '-0.02em',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        QuantAI
                    </h1>
                </div>

                {/* Horizontal Line */}
                <div className="w-full border-t border-white/20 my-12"></div>

                {/* Contact Information */}
                <div className="container mx-auto px-4 mb-8 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                            <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Phone</h4>
                            <p className="text-white text-sm">+64 273641435</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                            <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Email</h4>
                            <p className="text-white text-sm">contact@quantai.co.nz</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                            <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Location</h4>
                            <p className="text-white text-sm">Auckland, New Zealand</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-6">
                        <a href="https://www.linkedin.com/company/quant-ai-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="https://www.instagram.com/quantai.co.nz/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                            <Instagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
