import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo_AM_only.png';

// Import all 50 roof images
import img1 from '../assets/roof/1.jpg';
import img2 from '../assets/roof/2.jpg';
import img3 from '../assets/roof/3.jpg';
import img4 from '../assets/roof/4.jpg';
import img5 from '../assets/roof/5.jpg';
import img6 from '../assets/roof/6.jpg';
import img7 from '../assets/roof/7.jpg';
import img8 from '../assets/roof/8.jpg';
import img9 from '../assets/roof/9.jpg';
import img10 from '../assets/roof/10.jpg';
import img11 from '../assets/roof/11.jpg';
import img12 from '../assets/roof/12.jpg';
import img13 from '../assets/roof/13.jpg';
import img14 from '../assets/roof/14.jpg';
import img15 from '../assets/roof/15.jpg';
import img16 from '../assets/roof/16.jpg';
import img17 from '../assets/roof/17.jpg';
import img18 from '../assets/roof/18.jpg';
import img19 from '../assets/roof/19.jpg';
import img20 from '../assets/roof/20.jpg';
import img21 from '../assets/roof/21.jpg';
import img22 from '../assets/roof/22.jpg';
import img23 from '../assets/roof/23.jpg';
import img24 from '../assets/roof/24.jpg';
import img25 from '../assets/roof/25.jpg';
import img26 from '../assets/roof/26.jpg';
import img27 from '../assets/roof/27.jpg';
import img28 from '../assets/roof/28.jpg';
import img29 from '../assets/roof/29.jpg';
import img30 from '../assets/roof/30.jpg';
import img31 from '../assets/roof/31.jpg';
import img32 from '../assets/roof/32.jpg';
import img33 from '../assets/roof/33.jpg';
import img34 from '../assets/roof/34.jpg';
import img35 from '../assets/roof/35.jpg';
import img36 from '../assets/roof/36.jpg';
import img37 from '../assets/roof/37.jpg';
import img38 from '../assets/roof/38.jpg';
import img39 from '../assets/roof/39.jpg';
import img40 from '../assets/roof/40.jpg';
import img41 from '../assets/roof/41.jpg';
import img42 from '../assets/roof/42.jpg';
import img43 from '../assets/roof/43.jpg';
import img44 from '../assets/roof/44.jpg';
import img45 from '../assets/roof/45.jpg';
import img46 from '../assets/roof/46.jpg';
import img47 from '../assets/roof/47.jpg';
import img48 from '../assets/roof/48.jpg';
import img49 from '../assets/roof/49.jpg';
import img50 from '../assets/roof/50.jpg';

const roofImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50
];

const RoofGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Structured data for image gallery
  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AM Autodesigners Roof Collections",
    "description": "Premium roof customization gallery showcasing luxury vehicle modifications by AM Autodesigners",
    "url": "https://amautodesigners.com/roof-gallery",
    "image": roofImages.map((img, index) => ({
      "@type": "ImageObject",
      "contentUrl": img,
      "name": `Roof Design ${index + 1}`,
      "description": `Luxury vehicle roof customization by AM Autodesigners - Design ${index + 1}`
    }))
  };

  return (
    <main>
      <Helmet>
        <title>Roof Collections | AM Autodesigners</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Explore our premium roof customization gallery. View our luxury vehicle roof modifications and custom designs." />
        <meta name="keywords" content="roof customization, luxury vehicle roofs, custom roof design, vehicle modification, AM Autodesigners, premium car interiors" />
        <meta property="og:title" content="Roof Collections | AM Autodesigners" />
        <meta property="og:description" content="Premium roof customization gallery showcasing luxury vehicle modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/roof-gallery" />
        <meta property="og:image" content={roofImages[0]} />
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
              Roof Collections
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80">
              Discover our premium roof customization masterpieces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          >
            {roofImages.map((image, index) => (
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
                    alt={`Roof Design ${index + 1}`}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
    </main>
  );
}; // Remove extra closing bracket and semicolon

export default RoofGallery;