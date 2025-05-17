import { Helmet } from 'react-helmet-async';

const SeoConfig = ({ 
  title, 
  description, 
  keywords,
  ogImage = '/logo512.png',
  ogUrl = 'https://amautodesigners.com',
  schema 
}) => {
  return (
    <Helmet>
      <title>{title} | AM Autodesigners</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={ogUrl} />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoConfig;