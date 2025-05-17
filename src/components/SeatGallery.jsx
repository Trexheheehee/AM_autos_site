import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo_AM_only.png';

// Import all 44 seat images
import img1 from '../assets/seat/1.jpg';
import img2 from '../assets/seat/2.jpg';
import img3 from '../assets/seat/3.jpg';
import img4 from '../assets/seat/4.jpg';
import img5 from '../assets/seat/5.jpg';
import img7 from '../assets/seat/7.jpg';
import img8 from '../assets/seat/8.jpg';
import img9 from '../assets/seat/9.jpg';
import img10 from '../assets/seat/10.jpg';
import img11 from '../assets/seat/11.jpg';
import img12 from '../assets/seat/12.jpg';
import img13 from '../assets/seat/13.jpg';
import img14 from '../assets/seat/14.jpg';
import img15 from '../assets/seat/15.jpg';
import img16 from '../assets/seat/16.jpg';
import img17 from '../assets/seat/17.jpg';
import img18 from '../assets/seat/18.jpg';
import img19 from '../assets/seat/19.jpg';
import img20 from '../assets/seat/20.jpg';
import img21 from '../assets/seat/21.jpg';
import img22 from '../assets/seat/22.jpg';
import img23 from '../assets/seat/23.jpg';
import img24 from '../assets/seat/24.jpg';
import img25 from '../assets/seat/25.jpg';
import img26 from '../assets/seat/26.jpg';
import img27 from '../assets/seat/27.jpg';
import img28 from '../assets/seat/28.jpg';
import img29 from '../assets/seat/29.jpg';
import img30 from '../assets/seat/30.jpg';
import img31 from '../assets/seat/31.jpg';
import img32 from '../assets/seat/32.jpg';
import img33 from '../assets/seat/33.jpg';
import img35 from '../assets/seat/35.jpg';
import img36 from '../assets/seat/36.jpg';
import img37 from '../assets/seat/37.jpg';
import img38 from '../assets/seat/38.jpg';
import img39 from '../assets/seat/39.jpg';
import img40 from '../assets/seat/40.jpg';
import img41 from '../assets/seat/41.jpg';
import img42 from '../assets/seat/42.jpg';
import img43 from '../assets/seat/43.jpg';
import img44 from '../assets/seat/44.jpg';

const seatImages = [
  img1, img2, img3, img4, img5,
  img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img35,
  img36, img37, img38, img39, img40,
  img41, img42, img43, img44
];

const SeatGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "AM Autodesigners Seat Collections",
    "description": "Premium seat customization gallery showcasing luxury vehicle modifications by AM Autodesigners",
    "url": "https://amautodesigners.com/seat-gallery",
    "image": seatImages.map((img, index) => ({
      "@type": "ImageObject",
      "contentUrl": img,
      "name": `Seat Design ${index + 1}`,
      "description": `Luxury vehicle seat customization by AM Autodesigners - Design ${index + 1}`
    }))
  };

  return (
    <main>
      <Helmet>
        <title>Seat Collections | AM Autodesigners</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content="Explore our premium seat customization gallery. View our luxury vehicle seat modifications and custom designs." />
        <meta name="keywords" content="seat customization, luxury vehicle seats, custom seat design, vehicle modification, AM Autodesigners" />
        <meta property="og:title" content="Seat Collections | AM Autodesigners" />
        <meta property="og:description" content="Premium seat customization gallery showcasing luxury vehicle modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/seat-gallery" />
        <meta property="og:image" content={seatImages[0]} />
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
              Seat Collections
            </h1>
            <p className="text-lg md:text-xl text-blue-200/80">
              Discover our premium seat customization masterpieces
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          >
            {seatImages.map((image, index) => (
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
                    alt={`Seat Design ${index + 1}`}
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

export default SeatGallery;