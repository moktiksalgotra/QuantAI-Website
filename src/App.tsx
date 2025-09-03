import './App.css';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './pages/misc/AppRoutes';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleContentLoad = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setContentLoaded(true);
    }, 500);
  };

  // Hide footer on auth page
  const shouldShowFooter = contentLoaded && location.pathname !== '/get-started';

  return (
    <>
              {isLoading ? (
          <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="google-loader">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
      ) : (
        <>
          <AppRoutes onContentLoad={handleContentLoad} />
          {shouldShowFooter && <Footer />}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;