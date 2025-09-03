import { Routes, Route } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Services from './Services';


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/services" element={<Services />} />
      
    </Routes>
  );
} 