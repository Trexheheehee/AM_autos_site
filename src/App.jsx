import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Navbar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ExteriorGallery from './components/ExteriorGallery';
import SeatGallery from './components/SeatGallery';
import TVGallery from './components/TVGallery';
import RoofGallery from './components/RoofGallery';
import SidepadsGallery from './components/SidepadsGallery';
import DashboardGallery from './components/DashboardGallery';
import Services from './components/Services';

function App() {
  const aboutRef = useRef(null);
  const location = useLocation();
  const lastScrollPosition = useRef(0);
  const scrollRef = useRef(null);  // Add missing scrollRef

  // Keep only the essential scroll restoration effects
  useEffect(() => {
    const handleScrollRestoration = () => {
      const gallerySection = document.getElementById('gallery');
      if (location.pathname === '/' && gallerySection) {
        if (location.state?.from === 'gallery') {
          const scrollPosition = location.state.scrollPosition || gallerySection.offsetTop;
          setTimeout(() => {
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        scrollRef.current = window.pageYOffset;
      }
    };

    handleScrollRestoration();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handleScrollRestoration);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleScrollRestoration);
    };
  }, [location]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollRestoration = () => {
      const gallerySection = document.getElementById('gallery');
      if (location.pathname === '/' && gallerySection) {
        if (location.state?.from === 'gallery' || location.hash === '#gallery') {
          setTimeout(() => {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleScrollRestoration();

    return () => {
      window.removeEventListener('popstate', handleScrollRestoration);
    };
  }, [location]);

  useEffect(() => {
    const handleScrollRestoration = () => {
      if (location.state?.from === 'gallery') {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          const scrollPosition = location.state.scrollPosition || gallerySection.offsetTop;
          setTimeout(() => {
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    const saveScrollPosition = () => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        scrollRef.current = window.pageYOffset;
      }
    };

    handleScrollRestoration();
    window.addEventListener('scroll', saveScrollPosition);
    window.addEventListener('popstate', handleScrollRestoration);

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
      window.removeEventListener('popstate', handleScrollRestoration);
    };
  }, [location]);

  // Add new effect for tracking scroll position
  useEffect(() => {
    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) {
        const galleryPosition = gallerySection.offsetTop;
        const currentScroll = window.pageYOffset;
        
        if (currentScroll >= galleryPosition) {
          lastScrollPosition.current = currentScroll;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add restoration for manual scroll
  useEffect(() => {
    if (location.pathname === '/' && lastScrollPosition.current > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: lastScrollPosition.current,
          behavior: 'smooth'
        });
        lastScrollPosition.current = 0;
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="relative scroll-smooth">
      <Routes>
        {/* Main landing page route */}
        <Route path="/" element={
          <div className="relative overflow-x-hidden">
            <Navbar onAboutClick={scrollToAbout} />
            <div className="h-screen overflow-y-auto snap-y snap-mandatory">
              <div className="snap-start" id="hero">
                <Hero />
              </div>
              <div className="snap-start" id="about">
                <About ref={aboutRef} />
              </div>
              <div className="snap-start" id="services">
                <Services />
              </div>
              <div className="snap-start" id="gallery">
                <Gallery />
              </div>
              <div className="snap-start" id="contact">
                <Contact />
              </div>
              <div className="snap-start" id="footer">
                <Footer />
              </div>
            </div>
          </div>
        } />

        {/* Exterior gallery page route */}
        <Route path="/exterior" element={<ExteriorGallery />} />
        <Route path="/seat" element={<SeatGallery />} />
        <Route path="/tv" element={<TVGallery />} />
        <Route path="/roof" element={<RoofGallery />} />
        <Route path="/sidepads" element={<SidepadsGallery />} />
        <Route path="/dashboard" element={<DashboardGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
