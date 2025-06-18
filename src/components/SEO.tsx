
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  author?: string;
  robots?: string;
  alternateLanguages?: Array<{ hreflang: string; href: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

const SEO = ({
  title = 'Immigration Lawyer South Africa - Ramjanum C Attorneys',
  description = 'Expert Immigration Lawyer in South Africa. Visa applications, permanent residence, work permits & citizenship. Johannesburg-based immigration attorneys with proven results.',
  canonicalUrl = 'https://ramjanumattorneys.com',
  ogImage = 'https://ramjanumattorneys.com/logo.png',
  ogType = 'website',
  keywords = 'immigration lawyer south africa, immigration attorney johannesburg, visa application south africa, work permit south africa, permanent residence south africa, south african immigration law, citizenship application, immigration legal services',
  author = 'Chantal Ramjanum',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternateLanguages,
  breadcrumbs
}: SEOProps) => {
  const siteTitle = title.includes('Ramjanum') ? title : `${title} | Ramjanum C Attorneys`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://ramjanumattorneys.com${ogImage}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language alternates */}
      {alternateLanguages?.map((lang) => (
        <link key={lang.hreflang} rel="alternate" hrefLang={lang.hreflang} href={lang.href} />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content="Ramjanum C Attorneys - Immigration Law Firm Logo" />
      <meta property="og:site_name" content="Ramjanum C Attorneys" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Ramjanum C Attorneys - Immigration Law Firm" />
      <meta name="twitter:creator" content="@RamjanumAttorneys" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="application-name" content="Ramjanum C Attorneys" />
      <meta name="apple-mobile-web-app-title" content="Ramjanum C Attorneys" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Johannesburg" />
      <meta name="geo.position" content="-26.1052;28.0557" />
      <meta name="ICBM" content="-26.1052, 28.0557" />
      
      {/* Breadcrumb Schema */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              "item": crumb.url
            }))
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
