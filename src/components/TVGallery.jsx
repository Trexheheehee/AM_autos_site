import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo_AM_only.png';

// Import all TV images
import img1 from '../assets/tv/1.jpg';
import img2 from '../assets/tv/2.jpg';
import img3 from '../assets/tv/3.jpg';
import img4 from '../assets/tv/4.jpg';
import img5 from '../assets/tv/5.jpg';
import img6 from '../assets/tv/6.jpg';
import img7 from '../assets/tv/7.jpg';
import img8 from '../assets/tv/8.jpg';
import img9 from '../assets/tv/9.jpg';
import img10 from '../assets/tv/10.jpg';


const tvImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10];

const TVGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AM Autodesigners TV Collections",
    "description": "Premium TV installation gallery showcasing luxury vehicle modifications by AM Autodesigners",
    "url": "https://amautodesigners.com/tv-gallery",
    "image": tvImages.map((img, index) => ({
      "@type": "ImageObject",
      "contentUrl": img,
      "name": `TV Installation Design ${index + 1}`,
      "description": `Luxury vehicle TV installation by AM Autodesigners - Design ${index + 1}`
    }))
  };

  return (
    <main>
      <Helmet>
        <title>TV Collections | AM Autodesigners</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Explore our premium TV installation gallery. View our luxury vehicle TV modifications and custom designs." />
        <meta name="keywords" content="TV installation, luxury vehicle entertainment, custom TV design, vehicle modification, AM Autodesigners" />
        <meta property="og:title" content="TV Collections | AM Autodesigners" />
        <meta property="og:description" content="Premium TV installation gallery showcasing luxury vehicle modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/tv-gallery" />
        <meta property="og:image" content={tvImages[0]} />
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
              TV Collections
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80">
              Discover our premium TV customization masterpieces
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          >
            {tvImages.map((image, index) => (
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
                    alt={`TV Installation Design ${index + 1}`}
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
}; // Remove extra brackets and semicolons

export default TVGallery;