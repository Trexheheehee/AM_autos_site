import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo_AM_only.png';

// Import all sidepads images
import img1 from '../assets/sidepads/1.jpg';
import img2 from '../assets/sidepads/2.jpg';
import img3 from '../assets/sidepads/3.jpg';
import img4 from '../assets/sidepads/4.jpg';
import img5 from '../assets/sidepads/5.jpg';
import img6 from '../assets/sidepads/6.jpg';
import img7 from '../assets/sidepads/7.jpg';
import img8 from '../assets/sidepads/8.jpg';
import img9 from '../assets/sidepads/9.jpg';
import img10 from '../assets/sidepads/10.jpg';
import img11 from '../assets/sidepads/11.jpg';
import img12 from '../assets/sidepads/12.jpg';
import img13 from '../assets/sidepads/13.jpg';
import img14 from '../assets/sidepads/14.jpg';
import img15 from '../assets/sidepads/15.jpg';
import img16 from '../assets/sidepads/16.jpg';
import img17 from '../assets/sidepads/17.jpg';
import img18 from '../assets/sidepads/18.jpg';
import img19 from '../assets/sidepads/19.jpg';
import img20 from '../assets/sidepads/20.jpg';
import img21 from '../assets/sidepads/21.jpg';
import img22 from '../assets/sidepads/22.jpg';
import img23 from '../assets/sidepads/23.jpg';


const sidepadsImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23
];

const SidepadsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBackButton = (e) => {
      if (location.state?.from === 'gallery') {
        e.preventDefault();
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          navigate('/', { 
            replace: true,
            state: { scrollToGallery: true }
          });
          gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, [navigate, location]);

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AM Autodesigners Sidepads Collections",
    "description": "Premium sidepads customization gallery showcasing luxury vehicle modifications by AM Autodesigners",
    "url": "https://amautodesigners.com/sidepads-gallery",
    "image": sidepadsImages.map((img, index) => ({
      "@type": "ImageObject",
      "contentUrl": img,
      "name": `Sidepads Design ${index + 1}`,
      "description": `Luxury vehicle sidepads customization by AM Autodesigners - Design ${index + 1}`
    }))
  };

  return (
    <main>
      <Helmet>
        <title>Sidepads Collections | AM Autodesigners</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Explore our premium sidepads customization gallery. View our luxury vehicle sidepads modifications and custom designs." />
        <meta name="keywords" content="sidepads customization, luxury vehicle sidepads, custom sidepads design, vehicle modification, AM Autodesigners" />
        <meta property="og:title" content="Sidepads Collections | AM Autodesigners" />
        <meta property="og:description" content="Premium sidepads customization gallery showcasing luxury vehicle modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/sidepads-gallery" />
        <meta property="og:image" content={sidepadsImages[0]} />
        <script type="application/ld+json">{JSON.stringify(galleryJsonLd)}</script>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-[#000813] via-[#001538] to-[#000813] relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 mb-4">
              Sidepads Collections
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80">
              Discover our premium sidepads customization masterpieces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          >
            {sidepadsImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative cursor-pointer h-[300px]"
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <img
                    src={image}
                    alt={`Sidepads Design ${index + 1}`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
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
                exit={{ scale: 0.8 }}
                src={selectedImage}
                alt="Selected Design"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}; // Remove extra closing bracket and semicolon

export default SidepadsGallery;