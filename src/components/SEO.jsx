import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords,
  ogImage = 'https://amautodesigners.com/og-image.jpg',
  ogUrl = 'https://amautodesigners.com'
}) => {
  return (
    <Helmet>
      <title>{title} | AM Autodesigners</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};

export default SEO;