import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight } from './ui/Highlight';
import bgVideo from '../assets/am_video_e.mp4';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Hero = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // <-- Add this line

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>AM Autodesigners</title>
        <meta name="description" content="Premium vehicle customization specialists with 14 years of expertise in luxury vehicle modifications." />
      </Helmet>

      <section id="home" 
        aria-label="AM Autodesigners Hero Section" 
        className="relative min-h-screen"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="AM Autodesigners" />
        <meta itemProp="description" content="Premium vehicle customization specialists with 14 years of expertise in tempo traveller interior and exterior design. Serving over 100,000 satisfied customers across India." />
        <meta itemProp="foundingDate" content="2009" />
        <meta itemProp="areaServed" content="India" />

        {/* Add HeroHighlight background under video */}
        <div className="absolute inset-0 z-0">
          <HeroHighlight containerClassName="!h-full bg-[#030B1B]" />
        </div>

        <div className="absolute inset-0 z-[1]">
          {/* Darker mobile gradient - reduce the /95, /90, /85 values to decrease strength */}
          <div className="absolute inset-0 md:hidden bg-gradient-radial from-[#000B29]/90 via-[#000B29]/30 to-[#000B29]/90" />
          
          <div className="relative h-full flex items-center justify-center -mt-8 md:mt-0">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              title="AM Autodesigners - Luxury Vehicle Customization Showcase"
              className="w-full md:h-full h-[60vh] md:object-cover object-contain md:scale-100"
              poster="../assets/fallback.jpg"
            >
              <source src={bgVideo} type="video/mp4" />
              <track 
                kind="captions" 
                label="Vehicle Customization Showcase"
                src="../assets/captions.vtt"
                srcLang="en"
              />
            </video>
          </div>
          {/* Darker desktop gradient with reduced strength */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-[#000B29]/40 via-[#000B29]/30 to-transparent" />
        </div>

        <div className="relative z-10 h-screen flex flex-col px-4">
          <header className="text-center max-w-6xl mx-auto mt-[15vh] md:mt-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[8vw] md:text-[6vw] font-bold text-white font-deca-serif md:whitespace-nowrap ml-2 md:-ml-2 text-center"
              itemProp="slogan"
            >
              Redefining<br className="md:hidden" /> Luxury on Wheels
            </motion.h1>
          </header>
          <div className="text-center max-w-4xl mx-auto mt-auto mb-[10vh] md:mb-8 space-y-8 md:space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[6vw] md:text-[2.5vw] text-white font-deca-serif md:mb-8 mt-56 md:mt-0"
              itemProp="description"
            >
              Crafting masterpieces in vehicle customization
            </motion.p>

            <motion.div
              role="group"
              aria-label="Vehicle Customization Services"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-4 justify-center md:mb-4"
            >
              <a
                href="#gallery"
                aria-label="View our luxury vehicle customization portfolio"
                className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors inline-block"
              >
                Explore Our Work
              </a>
              <a
                href="#contact"
                aria-label="Request a custom vehicle modification quote"
                className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors inline-block"
              >
                Get a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;