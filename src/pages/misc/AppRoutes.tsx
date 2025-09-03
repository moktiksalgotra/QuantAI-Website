import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import TechStack from '../TechStack';

// Lazy load pages for better performance
const Hero = lazy(() => import('../../components/HeroSection'));
const EnterpriseSection = lazy(() => import('../../components/EnterpriseSection'));
const Services = lazy(() => import('../Services'));
const Domains = lazy(() => import('../Domains'));

//career pages
const Opportunities = lazy(() => import('../career/opportunities'));

interface AppRoutesProps {
  onContentLoad?: () => void;
}

const AppRoutes = ({ onContentLoad }: AppRoutesProps) => {
  useEffect(() => {
    // Reduced delay since we no longer wait for Spline loading animation
    const timer = setTimeout(() => {
      onContentLoad?.();
    }, 1000); // Reduced from 3000ms to 1000ms

    return () => clearTimeout(timer);
  }, [onContentLoad]);

  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#121212] dark:to-[#1a1a1a]">
        <div className="apple-loader"></div>
      </div>
    }>
      <Routes>
        {/* Public Routes */}
        <Route path="/"
        element={<><Hero /><EnterpriseSection /><Domains /><TechStack/><Services/> </>
        } />
        <Route path="/services" element={<><Hero /><Domains /><Services/> </>} />
        
        {/* Career Routes */}
        <Route path="/career">
          <Route path="opportunities" element={<Opportunities />} />
        </Route>

        {/* Redirect all other routes to home */}
        <Route path="*" element={<Hero />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
