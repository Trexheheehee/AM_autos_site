import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo_AM_only.png';
import { HeroHighlight } from './ui/Highlight';

// Import all 41 images
import img1 from '../assets/exterior/1.jpg';
import img2 from '../assets/exterior/2.jpg';
import img3 from '../assets/exterior/3.jpg';
import img4 from '../assets/exterior/4.jpg';
import img5 from '../assets/exterior/5.jpg';
import img6 from '../assets/exterior/6.jpg';
import img7 from '../assets/exterior/7.jpg';
import img8 from '../assets/exterior/8.jpg';
import img9 from '../assets/exterior/9.jpg';
import img10 from '../assets/exterior/10.jpg';
import img11 from '../assets/exterior/11.jpg';
import img12 from '../assets/exterior/12.jpg';
import img13 from '../assets/exterior/13.jpg';
import img14 from '../assets/exterior/14.jpg';
import img15 from '../assets/exterior/15.jpg';
import img16 from '../assets/exterior/16.jpg';
import img17 from '../assets/exterior/17.jpg';
import img18 from '../assets/exterior/18.jpg';
import img19 from '../assets/exterior/19.jpg';
import img20 from '../assets/exterior/20.jpg';
import img21 from '../assets/exterior/21.jpg';
import img22 from '../assets/exterior/22.jpg';
import img23 from '../assets/exterior/23.jpg';
import img24 from '../assets/exterior/24.jpg';
import img25 from '../assets/exterior/25.jpg';
import img26 from '../assets/exterior/26.jpg';
import img27 from '../assets/exterior/27.jpg';
import img28 from '../assets/exterior/28.jpg';
import img29 from '../assets/exterior/29.jpg';
import img30 from '../assets/exterior/30.jpg';
import img31 from '../assets/exterior/31.jpg';
import img32 from '../assets/exterior/32.jpg';
import img33 from '../assets/exterior/33.jpg';
import img34 from '../assets/exterior/34.jpg';
import img35 from '../assets/exterior/35.jpg';
import img36 from '../assets/exterior/36.jpg';
import img37 from '../assets/exterior/37.jpg';
import img38 from '../assets/exterior/38.jpg';
import img39 from '../assets/exterior/39.jpg';
import img40 from '../assets/exterior/40.jpg';
import img41 from '../assets/exterior/41.jpg';

const exteriorImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35,
  img36, img37, img38, img39, img40,
  img41
];

const ExteriorGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Add structured data for image gallery
  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AM Autodesigners Exterior Collections",
    "description": "Premium exterior customization gallery showcasing luxury vehicle modifications by AM Autodesigners",
    "url": "https://amautodesigners.com/exterior-gallery",
    "image": exteriorImages.map((img, index) => ({
      "@type": "ImageObject",
      "contentUrl": img,
      "name": `Exterior Design ${index + 1}`,
      "description": `Luxury vehicle exterior customization by AM Autodesigners - Design ${index + 1}`
    }))
  };

  return (
    <main>
      <Helmet>
        <title>Exterior Collections | AM Autodesigners</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Explore our premium exterior customization gallery. View our luxury vehicle modifications and custom designs." />
        <meta name="keywords" content="exterior customization, luxury vehicle exterior, custom design, vehicle modification, AM Autodesigners" />
        <meta property="og:title" content="Exterior Collections | AM Autodesigners" />
        <meta property="og:description" content="Premium exterior customization gallery showcasing luxury vehicle modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/exterior-gallery" />
        <meta property="og:image" content={exteriorImages[0]} />
        <script type="application/ld+json">{JSON.stringify(galleryJsonLd)}</script>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-[#000B1D] via-[#001F4E] to-[#000B1D] relative overflow-hidden">
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          {/* Header with improved styling */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20 pt-8 md:pt-0"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 mb-6">
              Exterior Collections
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/90 max-w-3xl mx-auto">
              Discover our masterpieces in vehicle exterior customization, where innovation meets elegance
            </p>
          </motion.div>

          {/* Enhanced Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr"
          >
            {exteriorImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer h-[320px] hover:-translate-y-2 transition-transform duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-purple-900/30">
                  <img
                    src={image}
                    alt="Exterior Design"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedImage}
                alt="Selected Design"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          )}
        </div>

        {/* Modal remains the same */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Selected Design"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Selected Design"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ExteriorGallery;