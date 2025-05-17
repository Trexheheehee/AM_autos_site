import { motion } from 'framer-motion';
import { Timer, Users, Trophy, Award, ThumbsUp, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
  const stats = [
    { 
      number: '18+', 
      label: 'Years of Excellence', 
      description: 'Pioneering vehicle customization since 2009, setting industry standards in luxury modifications.',
      icon: <Timer className="w-8 h-8 text-white/90" /> 
    },
    { 
      number: '100k+', 
      label: 'Satisfied Customers', 
      description: 'Trust of over 100,000 clients across India, delivering premium customization solutions.',
      icon: <Users className="w-8 h-8 text-white/90" /> 
    },
    { 
      number: '50+', 
      label: 'Expert Craftsmen', 
      description: 'Skilled team of specialists with extensive experience in luxury vehicle modifications.',
      icon: <Trophy className="w-8 h-8 text-white/90" /> 
    },
    { 
      number: '10+', 
      label: 'Awards Won', 
      description: 'Recognized nationally for excellence in design and customer satisfaction.',
      icon: <Award className="w-8 h-8 text-white/90" /> 
    },
    { 
      number: '99%', 
      label: 'Positive Feedback', 
      description: 'Consistently high ratings and positive reviews from our valued clients.',
      icon: <ThumbsUp className="w-8 h-8 text-white/90" /> 
    },
    { 
      number: '10+', 
      label: 'Global Reach', 
      description: 'Serving clients in over 10 countries, expanding our footprint internationally.',
      icon: <Globe className="w-8 h-8 text-white/90" /> 
    }
  ];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AM Autodesigners",
    "url": "https://amautodesigners.com/about",
    "logo": "https://amautodesigners.com/logo.png",
    "description": "Pioneering vehicle customization since 2009, setting industry standards in luxury modifications.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5/339-4A, Ramakrishna Nagar, Near Sanjeev Nagar, Pannimadai Post",
      "addressLocality": "Coimbatore",
      "postalCode": "641017",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 97903 84400",
      "contactType": "customer service",
      "email": "amautodesigners@gmail.com"
    },
    "sameAs": [
      "https://facebook.com",
      "https://instagram.com",
      "https://youtube.com",
      "https://linkedin.com"
    ]
  };

  return (
    <main>
      <Helmet>
        <title>About Us | AM Autodesigners</title>
        <meta name="description" content="Learn about AM Autodesigners, India's leading luxury vehicle customization company with 18+ years of excellence, 100k+ satisfied customers, and a global reach." />
        <meta name="keywords" content="About AM Autodesigners, vehicle customization, luxury vehicles, automotive, Coimbatore, India, custom vehicles, premium modifications, company profile" />
        <meta property="og:title" content="About Us | AM Autodesigners" />
        <meta property="og:description" content="Pioneering vehicle customization since 2009, setting industry standards in luxury modifications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amautodesigners.com/about" />
        <meta property="og:image" content="https://amautodesigners.com/logo.png" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>
      <section 
        className="min-h-screen bg-gradient-to-br from-[#030B1B] via-[#041533] to-[#020810] text-[#F5F7FE] px-4 py-10 md:py-10 overflow-hidden relative"
        id="about"
        aria-labelledby="about-heading"
      >
        {/* Add white accent shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Add About heading */}
          <motion.h1
            id="about-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[#F5F7FE] via-[#0527EC] to-[#F5F7FE] bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>

          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, borderColor: '#0527EC' }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 via-[#0527EC]/5 to-transparent backdrop-blur-sm rounded-xl p-8 border border-white/20 group hover:shadow-lg hover:shadow-white/10 transition-all relative overflow-hidden"
                aria-label={stat.label}
              >
                {/* Add white shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full transform transition-transform duration-1000" />
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="mb-4 relative"
                >
                  {stat.icon}
                </motion.div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-[#0527EC] to-[#2D91FF] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </h3>
                <p className="text-[#F5F7FE]/90 font-semibold mb-2">{stat.label}</p>
                <p className="text-[#F5F7FE]/70 text-sm leading-relaxed">{stat.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;